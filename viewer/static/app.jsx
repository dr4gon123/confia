/* YAML Viewer — IDE-aesthetic, table-format
   Top-left: config picker
   Columns:  edit_* objects
   Rows:     set_* keys (union across all edit objects)
   Cells:    value at config[edit][set]
*/

const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* ---------- helpers ---------- */

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

function unionKeys(...objs) {
  const seen = new Set();
  const order = [];
  for (const o of objs) {
    if (!isObj(o)) continue;
    for (const k of Object.keys(o)) {
      if (!seen.has(k)) { seen.add(k); order.push(k); }
    }
  }
  return order;
}

function valueKind(v) {
  if (v === null || v === undefined) return 'null';
  if (Array.isArray(v)) return 'array';
  if (typeof v === 'object') return 'object';
  return typeof v; // string, number, boolean
}

/* ---------- IP / mask helpers ---------- */

const IPV4 = /^(?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;

function isIpMaskString(s) {
  if (typeof s !== 'string') return false;
  const parts = s.trim().split(/\s+/);
  if (parts.length !== 2) return false;
  return IPV4.test(parts[0]) && IPV4.test(parts[1]);
}

function maskToCidr(mask) {
  const octets = mask.split('.').map(Number);
  let bits = 0;
  let seenZero = false;
  for (const o of octets) {
    for (let i = 7; i >= 0; i--) {
      const b = (o >> i) & 1;
      if (b === 1) {
        if (seenZero) return null; // non-contiguous mask
        bits++;
      } else {
        seenZero = true;
      }
    }
  }
  return bits;
}

function toCidr(ipMask) {
  const [ip, mask] = ipMask.trim().split(/\s+/);
  const bits = maskToCidr(mask);
  if (bits === null) return ipMask;
  return `${ip}/${bits}`;
}

function compactPreview(v, max = 80) {
  if (v === undefined || v === null) return '';
  const k = valueKind(v);
  if (k === 'string') return v;
  if (k === 'number' || k === 'boolean') return String(v);
  if (k === 'array') {
    if (v.length === 0) return '[]';
    const inner = v.map(x => compactPreview(x, 24)).join(', ');
    const s = `[${inner}]`;
    return s.length > max ? s.slice(0, max - 1) + '…' : s;
  }
  if (k === 'object') {
    const keys = Object.keys(v);
    if (keys.length === 0) return '{}';
    const inner = keys.slice(0, 3).map(k2 => `${k2}: ${compactPreview(v[k2], 16)}`).join(', ');
    const more = keys.length > 3 ? `, +${keys.length - 3}` : '';
    const s = `{${inner}${more}}`;
    return s.length > max ? s.slice(0, max - 1) + '…' : s;
  }
  return String(v);
}

/* ---------- nesting helpers ---------- */

/* For arrays of objects, find a meaningful label key. */
const LABEL_KEY_PRIORITY = ['name', 'id', 'key', 'type', 'label'];
function arrayItemLabel(item, idx) {
  if (!isObj(item)) return `[${idx}]`;
  // single-key object: that key is the natural label (e.g. - mgmt: {...})
  const keys = Object.keys(item);
  if (keys.length === 1) return keys[0];
  for (const k of LABEL_KEY_PRIORITY) {
    if (item[k] !== undefined && (typeof item[k] === 'string' || typeof item[k] === 'number')) {
      return String(item[k]);
    }
  }
  return `[${idx}]`;
}

/* Total leaf count and max depth for a subtree. */
function subtreeStats(v, depth = 0) {
  const k = valueKind(v);
  if (k !== 'object' && k !== 'array') return { leaves: 1, depth };
  let leaves = 0;
  let maxD = depth;
  const entries = k === 'array' ? v : Object.values(v);
  if (entries.length === 0) return { leaves: 0, depth };
  for (const child of entries) {
    const s = subtreeStats(child, depth + 1);
    leaves += s.leaves;
    if (s.depth > maxD) maxD = s.depth;
  }
  return { leaves, depth: maxD };
}

/* Decide if a subtree is small enough to render inline. */
function isSmallSubtree(v) {
  if (valueKind(v) !== 'object' && valueKind(v) !== 'array') return true;
  const { leaves, depth } = subtreeStats(v);
  return leaves <= 6 && depth <= 2;
}

/* Resolve a path of segments {kind: 'key'|'index', value} against root. */
function resolvePath(root, segments) {
  let cur = root;
  for (const seg of segments) {
    if (cur == null) return undefined;
    if (seg.kind === 'index') cur = cur?.[seg.value];
    else cur = cur?.[seg.value];
  }
  return cur;
}

/* Format a path segment for display. */
function segLabel(seg) {
  if (seg.kind === 'index') return seg.label || `[${seg.value}]`;
  return seg.value;
}

/* ---------- value renderer ---------- */

function InlineTree({ value, ipFormat, depth = 0 }) {
  const k = valueKind(value);
  if (k === 'null') return <span className="tok-null">null</span>;
  if (k === 'boolean') return <span className={value ? 'tok-true' : 'tok-false'}>{String(value)}</span>;
  if (k === 'number') return <span className="tok-num">{String(value)}</span>;
  if (k === 'string') {
    if (isIpMaskString(value)) {
      const display = ipFormat === 'cidr' ? toCidr(value) : value;
      return <span className="tok-ip">{display}</span>;
    }
    return <span className="tok-str">{value}</span>;
  }
  if (k === 'array') {
    if (value.length === 0) return <span className="tok-meta">[]</span>;
    return (
      <ul className="tree-list" style={{ marginLeft: depth ? 8 : 0 }}>
        {value.map((item, i) => (
          <li key={i} className="tree-item">
            <span className="tree-key tok-num">{arrayItemLabel(item, i)}</span>
            <span className="tree-colon">:</span>
            <InlineTree value={item} ipFormat={ipFormat} depth={depth + 1} />
          </li>
        ))}
      </ul>
    );
  }
  if (k === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return <span className="tok-meta">{'{}'}</span>;
    return (
      <ul className="tree-list" style={{ marginLeft: depth ? 8 : 0 }}>
        {keys.map(kk => (
          <li key={kk} className="tree-item">
            <span className="tree-key">{kk}</span>
            <span className="tree-colon">:</span>
            <InlineTree value={value[kk]} ipFormat={ipFormat} depth={depth + 1} />
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

function ValueCell({ value, wrap, ipFormat, onDrill }) {
  const kind = valueKind(value);
  if (value === undefined) return <span className="cell-empty"></span>;
  if (kind === 'null') return <span className="tok-null">null</span>;
  if (kind === 'boolean') return <span className={value ? 'tok-true' : 'tok-false'}>{String(value)}</span>;
  if (kind === 'number') return <span className="tok-num">{String(value)}</span>;
  if (kind === 'string') {
    if (isIpMaskString(value)) {
      const display = ipFormat === 'cidr' ? toCidr(value) : value;
      return (
        <span className="tok-ip" title={ipFormat === 'cidr' ? value : toCidr(value)}>
          {display}
        </span>
      );
    }
    return <span className={`tok-str ${wrap ? 'wrap' : 'truncate'}`}>{value}</span>;
  }
  // array of scalars: render as comma-joined chips
  if (kind === 'array' && value.every(x => valueKind(x) !== 'object' && valueKind(x) !== 'array')) {
    if (value.length === 0) return <span className="tok-meta">[]</span>;
    return (
      <span className="chip-list">
        {value.map((x, i) => (
          <span key={i} className="scalar-chip">{String(x)}</span>
        ))}
      </span>
    );
  }
  // small subtree: inline tree
  if (isSmallSubtree(value)) {
    return <InlineTree value={value} ipFormat={ipFormat} />;
  }
  // big: drill chip
  const meta = kind === 'array'
    ? `${value.length} items`
    : `${Object.keys(value).length} keys`;
  return (
    <button
      className="drill-chip"
      onClick={(e) => { e.stopPropagation(); onDrill && onDrill(); }}
      title="Drill into this subtree"
    >
      <span className="caret">▸</span>
      <span className="tok-meta">{compactPreview(value, 60)}</span>
      <span className="chip-meta">{meta}</span>
    </button>
  );
}

/* ---------- detail panel ---------- */

function DetailPanel({ open, onClose, info }) {
  if (!open || !info) return null;
  const yaml = window.stringifyYAML(info.value, 0);
  return (
    <div className="detail-overlay" onClick={onClose}>
      <aside className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <header className="detail-head">
          <div className="detail-path">
            <span className="seg seg-config">{info.config}</span>
            <span className="sep">›</span>
            <span className="seg seg-edit">{info.edit}</span>
            <span className="sep">›</span>
            <span className="seg seg-set">{info.set}</span>
          </div>
          <div className="detail-actions">
            <button className="btn-ghost" onClick={() => navigator.clipboard?.writeText(yaml)}>Copy</button>
            <button className="btn-ghost" onClick={onClose}>✕</button>
          </div>
        </header>
        <div className="detail-meta">
          <span className="kind-pill" data-kind={valueKind(info.value)}>{valueKind(info.value)}</span>
        </div>
        <pre className="detail-pre">{yaml || '(empty)'}</pre>
      </aside>
    </div>
  );
}

/* ---------- main viewer ---------- */

function YamlViewer() {
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState('sample.yaml');
  const [parseError, setParseError] = useState(null);
  const [activeConfig, setActiveConfig] = useState(null);
  const [path, setPath] = useState([]); // segments below the active config
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ col: null, dir: 1 }); // dir 1 asc, -1 desc
  const [expanded, setExpanded] = useState(() => new Set()); // "edit:set" keys
  const [detail, setDetail] = useState(null);
  const [tweaks, setTweaks] = useState(/*EDITMODE-BEGIN*/{
    "theme": "dark",
    "wrap": false,
    "showRowNumbers": true,
    "stripeRows": true,
    "ipFormat": "raw",
    "transposed": false,
    "freezeFirstCol": true,
    "freezeHeaderRow": true
  }/*EDITMODE-END*/);
  const [toast, setToast] = useState(null);
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const [configFilter, setConfigFilter] = useState('');
  const [hidden, setHidden] = useState({ cols: new Set(), rows: new Set() });

  /* initial sample load */
  useEffect(() => {
    fetch('sample.yaml').then(r => r.text()).then(text => {
      try {
        const parsed = window.parseYAML(text);
        setData(parsed);
        const first = Object.keys(parsed)[0];
        setActiveConfig(first || null);
      } catch (e) {
        setParseError(String(e));
      }
    }).catch(e => setParseError(String(e)));
  }, []);

  /* tweaks panel wiring */
  useEffect(() => {
    const onMsg = (e) => {
      const m = e.data;
      if (!m || typeof m !== 'object') return;
      if (m.type === '__activate_edit_mode') setTweaksOpen(true);
      else if (m.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  function setTweak(k, v) {
    setTweaks(prev => {
      const next = typeof k === 'object' ? { ...prev, ...k } : { ...prev, [k]: v };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
      return next;
    });
  }

  /* derived */
  const configs = useMemo(() => (data && isObj(data)) ? Object.keys(data) : [], [data]);
  const activeRoot = activeConfig && data ? data[activeConfig] : null;
  const activeBlock = useMemo(
    () => path.length === 0 ? activeRoot : resolvePath(activeRoot, path),
    [activeRoot, path]
  );

  /* Normalize the active block into a { colKey -> { rowKey -> value } } map.
     Handles two shapes:
       (A) list-of-single-key-maps:  [ {ha: {...}}, {mgmt: {...}} ]
       (B) map-of-maps:              { ha: {...}, mgmt: {...} }
     For arrays of multi-key objects, label by name/id/key/type or [i].
     Each column also remembers the source path segment for drill-down. */
  const columnsMap = useMemo(() => {
    const out = {};         // key -> {rowKey: value}
    const sourceSeg = {};   // key -> path segment (for drilling)
    const order = [];
    const push = (key, val, seg) => {
      let k = key;
      let n = 2;
      while (k in out) k = `${key}#${n++}`;
      out[k] = isObj(val) ? val : { value: val };
      sourceSeg[k] = { ...seg, label: k };
      order.push(k);
    };
    if (Array.isArray(activeBlock)) {
      activeBlock.forEach((item, idx) => {
        if (isObj(item)) {
          const keys = Object.keys(item);
          if (keys.length === 1) {
            push(keys[0], item[keys[0]], { kind: 'index', value: idx, sub: keys[0] });
          } else {
            const lbl = arrayItemLabel(item, idx);
            push(lbl, item, { kind: 'index', value: idx });
          }
        } else {
          push(`[${idx}]`, item, { kind: 'index', value: idx });
        }
      });
    } else if (isObj(activeBlock)) {
      for (const k of Object.keys(activeBlock)) {
        const v = activeBlock[k];
        if (isObj(v) || Array.isArray(v)) push(k, v, { kind: 'key', value: k });
        else push(k, v, { kind: 'key', value: k });
      }
    }
    return { map: out, order, sourceSeg };
  }, [activeBlock]);

  const editKeys = columnsMap.order;
  const setKeys = useMemo(
    () => unionKeys(...editKeys.map(ek => columnsMap.map[ek])),
    [columnsMap, editKeys]
  );

  /* axis swap: when transposed, columns are set keys and rows are edit keys.
     getCell(col, row) returns the value regardless of orientation. */
  const transposed = !!tweaks.transposed;
  const colKeys = transposed ? setKeys : editKeys;
  const baseRowKeys = transposed ? editKeys : setKeys;
  const getCell = (col, row) => transposed
    ? columnsMap.map[row]?.[col]
    : columnsMap.map[col]?.[row];
  const colAxisLabel = transposed ? 'set' : 'edit';
  const rowAxisLabel = transposed ? 'edit' : 'set';
  const toEditSet = (col, row) => transposed ? [row, col] : [col, row];

  /* hidden management — apply after baseRowKeys/colKeys derive */
  const visibleColKeys = useMemo(() => colKeys.filter(k => !hidden.cols.has(k)), [colKeys, hidden.cols]);
  const visibleBaseRowKeys = useMemo(() => baseRowKeys.filter(k => !hidden.rows.has(k)), [baseRowKeys, hidden.rows]);

  const hideCol = (k) => setHidden(h => ({ ...h, cols: new Set([...h.cols, k]) }));
  const hideRow = (k) => setHidden(h => ({ ...h, rows: new Set([...h.rows, k]) }));
  const unhideCol = (k) => setHidden(h => { const n = new Set(h.cols); n.delete(k); return { ...h, cols: n }; });
  const unhideRow = (k) => setHidden(h => { const n = new Set(h.rows); n.delete(k); return { ...h, rows: n }; });
  const unhideAll = () => setHidden({ cols: new Set(), rows: new Set() });

  /* filter rows by search */
  const filteredRowKeys = useMemo(() => {
    if (!search.trim()) return visibleBaseRowKeys;
    const q = search.toLowerCase();
    return visibleBaseRowKeys.filter(rk => {
      if (rk.toLowerCase().includes(q)) return true;
      for (const ck of visibleColKeys) {
        const v = getCell(ck, rk);
        if (v === undefined) continue;
        const s = typeof v === 'string' ? v : JSON.stringify(v);
        if (s.toLowerCase().includes(q)) return true;
      }
      return false;
    });
  }, [search, visibleBaseRowKeys, visibleColKeys, columnsMap, transposed]);

  /* sort rows by a chosen column */
  const sortedRowKeys = useMemo(() => {
    if (!sort.col) return filteredRowKeys;
    const col = sort.col;
    const dir = sort.dir;
    const score = (rk) => {
      if (col === '__row__') return rk;
      const v = getCell(col, rk);
      if (v === undefined || v === null) return null;
      if (typeof v === 'number' || typeof v === 'boolean') return v;
      if (typeof v === 'string') return v.toLowerCase();
      return JSON.stringify(v).toLowerCase();
    };
    return [...filteredRowKeys].sort((a, b) => {
      const sa = score(a), sb = score(b);
      if (sa === sb) return 0;
      if (sa === null) return 1;
      if (sb === null) return -1;
      return sa < sb ? -1 * dir : 1 * dir;
    });
  }, [filteredRowKeys, sort, columnsMap, transposed]);

  /* handlers */
  const onSort = (col) => {
    setSort(prev => prev.col === col
      ? { col, dir: -prev.dir }
      : { col, dir: 1 });
  };

  const toggleExpand = (col, row) => {
    const id = `${col}:::${row}`;
    setExpanded(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  /* drill into a cell whose value is an object/array.
     ck/rk are the visible column/row keys at the current level.
     We push 1–2 path segments depending on orientation:
       transposed=false:  block[ck][rk]   — if rk maps to a key inside columnsMap.map[ck]
       transposed=true:   block[rk][ck]
     But we want a path against activeBlock, not against `columnsMap.map`.
     Use sourceSeg for the column source, then add the row key. */
  const drillIntoCell = (ck, rk) => {
    const v = getCell(ck, rk);
    if (!(isObj(v) || Array.isArray(v))) return false;
    // Build the path segment(s).
    let seg1, seg2;
    if (!transposed) {
      seg1 = columnsMap.sourceSeg[ck];
      seg2 = { kind: 'key', value: rk };
    } else {
      // transposed: row holds the column from columnsMap, ck is a set key
      seg1 = columnsMap.sourceSeg[rk];
      seg2 = { kind: 'key', value: ck };
    }
    if (!seg1) return false;
    // If seg1 used a 1-key array item, it has .sub which is the inner key already used.
    // Build full segments: index → sub key → the rk we drilled into.
    const newSegs = [];
    if (seg1.kind === 'index') {
      newSegs.push({ kind: 'index', value: seg1.value, label: seg1.label });
      if (seg1.sub) newSegs.push({ kind: 'key', value: seg1.sub });
    } else {
      newSegs.push({ kind: 'key', value: seg1.value });
    }
    newSegs.push(seg2);
    setPath(prev => [...prev, ...newSegs]);
    setSearch(''); setSort({ col: null, dir: 1 }); setHidden({ cols: new Set(), rows: new Set() }); setExpanded(new Set());
    return true;
  };

  const goToPathLength = (len) => {
    setPath(prev => prev.slice(0, len));
    setSearch(''); setSort({ col: null, dir: 1 }); setHidden({ cols: new Set(), rows: new Set() }); setExpanded(new Set());
  };

  const openCell = (col, row) => {
    const value = getCell(col, row);
    const [ek, sk] = toEditSet(col, row);
    setDetail({
      config: activeConfig,
      path: [...path, { kind: 'key', value: ek }, { kind: 'key', value: sk }],
      edit: ek,
      set: sk,
      value,
    });
  };

  const copyCell = async (col, row) => {
    const value = getCell(col, row);
    if (value === undefined) return;
    const out = typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
      ? String(value)
      : window.stringifyYAML(value, 0);
    try {
      await navigator.clipboard.writeText(out);
      const [, sk] = toEditSet(col, row);
      flash(`Copied ${sk}`);
    } catch {}
  };

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1400);
  };

  const onFileUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = window.parseYAML(String(reader.result));
        setData(parsed);
        setFileName(f.name);
        const first = Object.keys(parsed)[0];
        setActiveConfig(first || null);
        setSearch(''); setSort({ col: null, dir: 1 }); setExpanded(new Set());
        setParseError(null);
      } catch (err) {
        setParseError(String(err));
      }
    };
    reader.readAsText(f);
  };

  /* keyboard: esc closes detail, then config menu, then goes up a level */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (detail) { setDetail(null); return; }
      if (showConfigMenu) { setShowConfigMenu(false); return; }
      if (path.length > 0) { goToPathLength(path.length - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [detail, showConfigMenu, path.length]);

  /* ---------- render ---------- */

  const themeClass = tweaks.theme === 'light' ? 'theme-light' : 'theme-dark';

  return (
    <div className={`yv-root ${themeClass}`}>
      <header className="yv-header">
        <div className="yv-brand">
          <div className="logo-mark">{`{ }`}</div>
          <div className="brand-text">
            <div className="brand-title">YAML Viewer</div>
            <div className="brand-file" title={fileName}>{fileName}</div>
          </div>
        </div>

        <div className="yv-toolbar">
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search rows or values…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
          </div>

          <label className="upload-btn" title="Load .yaml file">
            <input type="file" accept=".yaml,.yml,.txt" onChange={onFileUpload} hidden />
            Open file
          </label>

          <button
            className="theme-toggle"
            onClick={() => setTweak('theme', tweaks.theme === 'light' ? 'dark' : 'light')}
            title="Toggle theme"
          >
            {tweaks.theme === 'light' ? '◐' : '◑'}
          </button>

          <button
            className={`flip-btn ${tweaks.transposed ? 'is-active' : ''}`}
            onClick={() => { setTweak('transposed', !tweaks.transposed); setSort({ col: null, dir: 1 }); }}
            title={tweaks.transposed ? 'Restore: columns = items, rows = fields' : 'Flip: columns = fields, rows = items'}
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2 4h6v2H4v2H2V4zm12 8H8v-2h4V8h2v4z" fill="currentColor"/>
              <path d="M3.5 9.5L1 12l2.5 2.5M12.5 6.5L15 4l-2.5-2.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="flip-label">Flip</span>
          </button>
        </div>
      </header>

      {parseError && (
        <div className="yv-error">Parse error: {parseError}</div>
      )}

      <div className="yv-stage">
        {/* config picker corner */}
        <div className="config-picker-wrap">
          <button
            className="config-picker"
            onClick={() => { setShowConfigMenu(s => !s); setConfigFilter(''); }}
          >
            <span className="cp-label">CONFIG</span>
            <span className="cp-value">{activeConfig || '—'}</span>
            <span className="cp-caret">▾</span>
          </button>
          {showConfigMenu && (
            <div className="config-menu">
              <div className="config-menu-search">
                <span className="search-icon">⎄</span>
                <input
                  autoFocus
                  type="text"
                  placeholder="Filter configs…"
                  value={configFilter}
                  onChange={(e) => setConfigFilter(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Escape') { setShowConfigMenu(false); setConfigFilter(''); } }}
                />
              </div>
              <div className="config-menu-list">
                {configs
                  .filter(c => !configFilter || c.toLowerCase().includes(configFilter.toLowerCase()))
                  .map(c => (
                    <button
                      key={c}
                      className={`config-menu-item ${c === activeConfig ? 'active' : ''}`}
                  onClick={() => { setActiveConfig(c); setShowConfigMenu(false); setConfigFilter(''); setExpanded(new Set()); setSort({col:null,dir:1}); setHidden({ cols: new Set(), rows: new Set() }); setPath([]); }}
                    >
                      <span className="dot" />
                      <span className="name">{c}</span>
                      {isObj(data?.[c]) ? (
                        <span className="meta">{Object.keys(data[c]).length} edits</span>
                      ) : Array.isArray(data?.[c]) ? (
                        <span className="meta">{data[c].length} items</span>
                      ) : null}
                    </button>
                  ))}
                {configs.filter(c => !configFilter || c.toLowerCase().includes(configFilter.toLowerCase())).length === 0 && (
                  <div className="config-menu-empty">No matches</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* breadcrumbs (visible whenever we're below the config root) */}
        {activeConfig && (
          <div className="breadcrumbs">
            <button
              className={`crumb ${path.length === 0 ? 'is-current' : ''}`}
              onClick={() => goToPathLength(0)}
              title="Back to top of config"
            >
              <span className="crumb-icon">⌂</span>
              <span>{activeConfig}</span>
            </button>
            {path.map((seg, i) => (
              <React.Fragment key={i}>
                <span className="crumb-sep">›</span>
                <button
                  className={`crumb ${i === path.length - 1 ? 'is-current' : ''}`}
                  onClick={() => goToPathLength(i + 1)}
                >
                  {seg.kind === 'index' ? <span className="crumb-idx">[{seg.value}]</span> : null}
                  <span>{segLabel(seg)}</span>
                </button>
              </React.Fragment>
            ))}
            {path.length > 0 && (
              <button className="crumb-up" onClick={() => goToPathLength(path.length - 1)} title="Go up one level (Esc)">
                ← Up
              </button>
            )}
          </div>
        )}

        {/* table */}
        {!activeBlock || colKeys.length === 0 ? (
          <div className="yv-empty">
            <div className="empty-mark">∅</div>
            <div>No editable sections in this config.</div>
          </div>
        ) : (
          <div className="table-scroll">
            {(hidden.cols.size > 0 || hidden.rows.size > 0) && (
              <div className="hidden-bar">
                <span className="hb-label">Hidden:</span>
                {[...hidden.cols].map(k => (
                  <button key={`c:${k}`} className="hidden-chip" onClick={() => unhideCol(k)} title="Show column">
                    <span className="chip-axis">col</span>
                    <span className="chip-name">{k}</span>
                    <span className="chip-x">+</span>
                  </button>
                ))}
                {[...hidden.rows].map(k => (
                  <button key={`r:${k}`} className="hidden-chip" onClick={() => unhideRow(k)} title="Show row">
                    <span className="chip-axis">row</span>
                    <span className="chip-name">{k}</span>
                    <span className="chip-x">+</span>
                  </button>
                ))}
                <button className="hidden-clear" onClick={unhideAll}>Show all</button>
              </div>
            )}
            <table className={`yv-table ${tweaks.freezeFirstCol ? 'freeze-col' : ''} ${tweaks.freezeHeaderRow ? 'freeze-row' : ''}`}>
              <thead>
                <tr>
                  <th
                    className={`th-row-key ${tweaks.freezeFirstCol ? 'sticky-col' : ''} ${tweaks.freezeHeaderRow ? 'sticky-row' : ''} ${sort.col === '__row__' ? 'sorted' : ''}`}
                    onClick={() => onSort('__row__')}
                  >
                    <div className="th-inner">
                      <span className="th-label">{rowAxisLabel}</span>
                      <SortIndicator active={sort.col === '__row__'} dir={sort.dir} />
                    </div>
                  </th>
                  {visibleColKeys.map(ck => (
                    <th
                      key={ck}
                      className={`th-edit ${tweaks.freezeHeaderRow ? 'sticky-row' : ''} ${sort.col === ck ? 'sorted' : ''}`}
                      onClick={() => onSort(ck)}
                    >
                      <div className="th-inner">
                        <span className="th-edit-label">{ck}</span>
                        <button
                          className="th-hide"
                          onClick={(e) => { e.stopPropagation(); hideCol(ck); }}
                          title={`Hide column "${ck}"`}
                        >✕</button>
                        <SortIndicator active={sort.col === ck} dir={sort.dir} />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedRowKeys.map((rk, rowIdx) => (
                  <tr key={rk} className={tweaks.stripeRows && rowIdx % 2 ? 'stripe' : ''}>
                    <th className={`td-row-key ${tweaks.freezeFirstCol ? 'sticky-col' : ''}`}>
                      <div className="row-key-inner">
                        {tweaks.showRowNumbers && (
                          <span className="row-num">{String(rowIdx + 1).padStart(3, '0')}</span>
                        )}
                        <span className="row-key">{rk}</span>
                        <button
                          className="row-hide"
                          onClick={(e) => { e.stopPropagation(); hideRow(rk); }}
                          title={`Hide row "${rk}"`}
                        >✕</button>
                      </div>
                    </th>
                    {visibleColKeys.map(ck => {
                      const v = getCell(ck, rk);
                      const drillable = isObj(v) || Array.isArray(v);
                      return (
                        <td
                          key={ck}
                          className={`yv-cell ${v === undefined ? 'is-empty' : ''} ${drillable ? 'drillable' : ''}`}
                          onClick={() => {
                            if (v === undefined) return;
                            if (drillable && !isSmallSubtree(v)) drillIntoCell(ck, rk);
                            else openCell(ck, rk);
                          }}
                          onDoubleClick={(e) => { e.stopPropagation(); copyCell(ck, rk); }}
                          title={v === undefined ? '' : (drillable && !isSmallSubtree(v) ? 'Click → drill in · Dbl → copy' : 'Click → details · Dbl → copy')}
                        >
                          <ValueCell
                            value={v}
                            wrap={tweaks.wrap}
                            ipFormat={tweaks.ipFormat}
                            onDrill={() => drillIntoCell(ck, rk)}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* status bar */}
      <footer className="yv-statusbar">
        <span className="sb-cell">{configs.length} configs</span>
        <span className="sb-sep">·</span>
        <span className="sb-cell">{visibleColKeys.length}/{colKeys.length} {colAxisLabel}s</span>
        <span className="sb-sep">·</span>
        <span className="sb-cell">{sortedRowKeys.length}/{baseRowKeys.length} {rowAxisLabel}s</span>
        {search && <><span className="sb-sep">·</span><span className="sb-cell">filter: "{search}"</span></>}
        <span className="sb-spacer" />
        <span className="sb-cell sb-hint">click cell → details · dbl-click → copy</span>
      </footer>

      <DetailPanel open={!!detail} onClose={() => setDetail(null)} info={detail} />

      {/* Tweaks panel */}
      {tweaksOpen && window.TweaksPanel && (
        <window.TweaksPanel
          title="Tweaks"
          onClose={() => {
            setTweaksOpen(false);
            window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
          }}
        >
          <window.TweakSection title="Display">
            <window.TweakRadio
              label="Theme"
              value={tweaks.theme}
              options={[
                { value: 'dark', label: 'Dark' },
                { value: 'light', label: 'Light' },
              ]}
              onChange={(v) => setTweak('theme', v)}
            />
            <window.TweakToggle
              label="Wrap long values"
              value={tweaks.wrap}
              onChange={(v) => setTweak('wrap', v)}
            />
            <window.TweakToggle
              label="Show row numbers"
              value={tweaks.showRowNumbers}
              onChange={(v) => setTweak('showRowNumbers', v)}
            />
            <window.TweakRadio
              label="IP / mask format"
              value={tweaks.ipFormat}
              options={[
                { value: 'raw', label: 'Raw' },
                { value: 'cidr', label: 'CIDR' },
              ]}
              onChange={(v) => setTweak('ipFormat', v)}
            />
            <window.TweakToggle
              label="Stripe rows"
              value={tweaks.stripeRows}
              onChange={(v) => setTweak('stripeRows', v)}
            />
          </window.TweakSection>
          <window.TweakSection title="Freeze">
            <window.TweakToggle
              label="Freeze first column"
              value={tweaks.freezeFirstCol}
              onChange={(v) => setTweak('freezeFirstCol', v)}
            />
            <window.TweakToggle
              label="Freeze header row"
              value={tweaks.freezeHeaderRow}
              onChange={(v) => setTweak('freezeHeaderRow', v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}

      {toast && <div className="yv-toast">{toast}</div>}
    </div>
  );
}

function SortIndicator({ active, dir }) {
  if (!active) return <span className="sort-ind dim">↕</span>;
  return <span className="sort-ind">{dir === 1 ? '↑' : '↓'}</span>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<YamlViewer />);
