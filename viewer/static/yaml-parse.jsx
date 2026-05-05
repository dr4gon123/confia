// Minimal YAML parser sufficient for the config/edit/set shape we expect.
// Handles: nested mappings via indentation, scalars (strings, numbers, bools, null),
// block sequences (- item), inline flow seqs/maps ([..], {..}), and # comments.
// Not a full YAML 1.2 implementation — but covers ~all real-world config files.

(function () {
  function stripComment(line) {
    // crude: only strip # not inside quotes
    let inS = false, inD = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === "'" && !inD) inS = !inS;
      else if (c === '"' && !inS) inD = !inD;
      else if (c === '#' && !inS && !inD) return line.slice(0, i);
    }
    return line;
  }

  function parseScalar(s) {
    if (s === undefined || s === null) return null;
    s = s.trim();
    if (s === '' || s === '~' || s === 'null' || s === 'Null' || s === 'NULL') return null;
    if (s === 'true' || s === 'True' || s === 'TRUE') return true;
    if (s === 'false' || s === 'False' || s === 'FALSE') return false;
    if (/^-?\d+$/.test(s)) return parseInt(s, 10);
    if (/^-?\d*\.\d+$/.test(s)) return parseFloat(s);
    if (/^-?\d+\.?\d*e[+-]?\d+$/i.test(s)) return parseFloat(s);
    // quoted strings
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
      return s.slice(1, -1);
    }
    // flow sequence
    if (s.startsWith('[') && s.endsWith(']')) {
      const inner = s.slice(1, -1).trim();
      if (!inner) return [];
      return splitFlow(inner).map(parseScalar);
    }
    // flow mapping
    if (s.startsWith('{') && s.endsWith('}')) {
      const inner = s.slice(1, -1).trim();
      if (!inner) return {};
      const obj = {};
      for (const part of splitFlow(inner)) {
        const ci = part.indexOf(':');
        if (ci === -1) continue;
        obj[parseScalar(part.slice(0, ci))] = parseScalar(part.slice(ci + 1));
      }
      return obj;
    }
    return s;
  }

  function splitFlow(s) {
    const out = [];
    let depth = 0, inS = false, inD = false, start = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '"' && !inS) inD = !inD;
      else if (c === "'" && !inD) inS = !inS;
      else if (!inS && !inD) {
        if (c === '[' || c === '{') depth++;
        else if (c === ']' || c === '}') depth--;
        else if (c === ',' && depth === 0) {
          out.push(s.slice(start, i).trim());
          start = i + 1;
        }
      }
    }
    out.push(s.slice(start).trim());
    return out;
  }

  function indent(line) {
    let n = 0;
    while (n < line.length && line[n] === ' ') n++;
    return n;
  }

  function parseYAML(text) {
    // Normalize tabs (replace each leading tab with 2 spaces)
    text = text.replace(/\t/g, '  ');
    const rawLines = text.split(/\r?\n/);
    const lines = [];
    for (const r of rawLines) {
      const noComment = stripComment(r);
      if (noComment.trim() === '') continue;
      lines.push(noComment.replace(/\s+$/, ''));
    }

    let i = 0;

    function parseBlock(curIndent) {
      // Detect whether the next non-blank line at curIndent is a sequence or mapping
      if (i >= lines.length) return null;
      const line = lines[i];
      const ind = indent(line);
      if (ind < curIndent) return null;
      const content = line.slice(ind);
      if (content.startsWith('- ') || content === '-') {
        return parseSeq(curIndent);
      }
      return parseMap(curIndent);
    }

    function parseMap(curIndent) {
      const obj = {};
      while (i < lines.length) {
        const line = lines[i];
        const ind = indent(line);
        if (ind < curIndent) break;
        if (ind > curIndent) {
          // shouldn't happen at top of map; skip defensively
          i++;
          continue;
        }
        const content = line.slice(ind);
        if (content.startsWith('- ')) break; // belongs to a sequence above
        const colon = findKeyColon(content);
        if (colon === -1) { i++; continue; }
        const key = unquoteKey(content.slice(0, colon).trim());
        const rest = content.slice(colon + 1).trim();
        i++;
        if (rest === '') {
          // value is on subsequent indented lines
          if (i < lines.length && indent(lines[i]) > curIndent) {
            obj[key] = parseBlock(indent(lines[i]));
          } else {
            obj[key] = null;
          }
        } else if (rest === '|' || rest === '>') {
          // block scalar — collect indented lines verbatim
          const buf = [];
          const blockInd = i < lines.length ? indent(lines[i]) : curIndent + 2;
          while (i < lines.length && indent(lines[i]) >= blockInd) {
            buf.push(lines[i].slice(blockInd));
            i++;
          }
          obj[key] = rest === '|' ? buf.join('\n') : buf.join(' ');
        } else {
          obj[key] = parseScalar(rest);
        }
      }
      return obj;
    }

    function parseSeq(curIndent) {
      const arr = [];
      while (i < lines.length) {
        const line = lines[i];
        const ind = indent(line);
        if (ind < curIndent) break;
        if (ind > curIndent) { i++; continue; }
        const content = line.slice(ind);
        if (!(content.startsWith('- ') || content === '-')) break;
        const after = content === '-' ? '' : content.slice(2);
        if (after === '') {
          i++;
          if (i < lines.length && indent(lines[i]) > curIndent) {
            arr.push(parseBlock(indent(lines[i])));
          } else {
            arr.push(null);
          }
        } else if (findKeyColon(after) !== -1) {
          // inline mapping start: "- key: value"
          // Treat this line as the first key of a sub-map at indent curIndent+2
          const subInd = curIndent + 2;
          // Rewrite line in-place to align as map at subInd
          lines[i] = ' '.repeat(subInd) + after;
          arr.push(parseMap(subInd));
        } else {
          arr.push(parseScalar(after));
          i++;
        }
      }
      return arr;
    }

    function findKeyColon(s) {
      let inS = false, inD = false;
      for (let k = 0; k < s.length; k++) {
        const c = s[k];
        if (c === "'" && !inD) inS = !inS;
        else if (c === '"' && !inS) inD = !inD;
        else if (c === ':' && !inS && !inD) {
          if (k === s.length - 1 || s[k + 1] === ' ') return k;
        }
      }
      return -1;
    }

    function unquoteKey(s) {
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        return s.slice(1, -1);
      }
      return s;
    }

    if (lines.length === 0) return {};
    return parseBlock(indent(lines[0])) || {};
  }

  function stringifyYAML(value, indent = 0) {
    const pad = '  '.repeat(indent);
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'boolean') return value ? 'true' : 'false';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') {
      if (/[:#\-?&*!|>'"%@`\n]/.test(value) || value === '' || /^\s|\s$/.test(value)) {
        return JSON.stringify(value);
      }
      return value;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]';
      return value.map(v => {
        if (v && typeof v === 'object' && !Array.isArray(v)) {
          const inner = stringifyYAML(v, indent + 1);
          return `${pad}- ${inner.replace(/^\s+/, '')}`;
        }
        return `${pad}- ${stringifyYAML(v, indent + 1)}`;
      }).join('\n');
    }
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      if (keys.length === 0) return '{}';
      return keys.map(k => {
        const v = value[k];
        if (v && typeof v === 'object' && (Array.isArray(v) ? v.length : Object.keys(v).length)) {
          return `${pad}${k}:\n${stringifyYAML(v, indent + 1)}`;
        }
        return `${pad}${k}: ${stringifyYAML(v, indent + 1)}`;
      }).join('\n');
    }
    return String(value);
  }

  window.parseYAML = parseYAML;
  window.stringifyYAML = stringifyYAML;
})();
