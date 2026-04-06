# FortiGate Config Auditor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Python CLI tool that audits FortiGate firewall configs against policy templates and baselines, producing diff reports, YAML findings, and remediation patches.

**Architecture:** A two-layer pipeline — Layer 1 is deterministic Python (parse → match → diff → report), Layer 2 is a Claude Code skill that wraps Layer 1 and dispatches parallel AI agents per config section for smart review. All inputs and outputs are plain text files (`.conf`, `.yaml`, `.md`, `.json`).

**Tech Stack:** Python 3.14, PyYAML 6.x, packaging 25.x, pytest 9.x, fnmatch (stdlib), argparse (stdlib), json (stdlib)

---

## Design Additions (2026-04-05)

Three concepts added after initial plan — tasks affected are marked **[UPDATED]** or **[NEW]**:

### A. Parameter name wildcards
`fnmatch` glob patterns apply to **parameter names** as well as entry names. `trusthost*` matches `trusthost1`…`trusthost10`. The rule:
```conf
config system admin
    edit "*"
        set trusthost* !0.0.0.0 0.0.0.0
    next
end
```
…checks every `trusthostN` param on every entry. A new `_resolve_params(pattern, param_names)` function mirrors `_resolve_entries`.

### B. Chapters — multi-section analysis units
A **chapter** is the unit of analysis: a named group of related config sections + their rules. Each chapter lives in its own folder under `templates/`:

```
templates/
└── admin-users/
    ├── chapter.yaml    ← title, description, list of sections to extract
    └── rules.conf      ← rules for this chapter only
```

`chapter.yaml`:
```yaml
id: admin-users
title: Administrative User Access
description: Audit of admin accounts and access profiles
sections:
  - system admin
  - system accprofile
```

Output is now chapter-per-folder (not section-per-folder):
```
reports/{run}/{device}/
└── admin-users/
    ├── config-extract.conf   ← raw extracted sections (system admin + system accprofile)
    ├── config-extract.json   ← parsed JSON of those sections
    ├── findings.yaml
    ├── findings.md
    └── patch.conf
```

### C. JSON section extract
`config-extract.json` holds the parsed config sections for the chapter in a flat, query-friendly structure. Enables cross-device / cross-entry comparison tables.

```json
{
  "device": "FGT-SENATI-PIRAMIDE-ENTEL-ADM",
  "fortios_version": "7.4.11",
  "chapter": "admin-users",
  "sections": {
    "system admin": {
      "suprateam": {
        "accprofile": "super_admin",
        "trusthost1": "0.0.0.0 0.0.0.0"
      }
    },
    "system accprofile": {
      "super_admin": {
        "secfabgrp": "read-write"
      }
    }
  }
}
```

---

## File Map

| File | Responsibility |
|------|---------------|
| `src/models.py` | Dataclasses: `ConfigMeta`, `ParsedConfig`, `RuleMeta`, `Rule`, `Chapter`, `Finding`, `DriftChange` **[UPDATED]** |
| `src/parser.py` | Parse `.conf` and `.conf.yaml` → `ParsedConfig` |
| `src/template.py` | Load chapters (folder with `chapter.yaml` + `rules.conf`) → `list[Chapter]` **[UPDATED]** |
| `src/matcher.py` | Match rules against parsed config → `list[Finding]`; param wildcards **[UPDATED]** |
| `src/extractor.py` | Extract chapter sections from `ParsedConfig`; write `.conf` snippet + `.json` **[NEW]** |
| `src/differ.py` | Diff two `ParsedConfig`s → `list[DriftChange]` |
| `src/reporter.py` | Write per-chapter output: `findings.yaml`, `patch.conf`, `findings.md`, summaries **[UPDATED]** |
| `audit.py` | CLI entry point (argparse) **[UPDATED]** |
| `inventory.yaml` | Fleet registry: device hostnames → config paths + groups |
| `templates/admin-users/chapter.yaml` | Chapter definition: sections to extract **[NEW format]** |
| `templates/admin-users/rules.conf` | Rules for admin-users chapter **[NEW format]** |
| `tests/conftest.py` | Shared pytest fixtures **[UPDATED]** |
| `tests/test_parser.py` | Parser unit tests |
| `tests/test_template.py` | Template/chapter loader unit tests **[UPDATED]** |
| `tests/test_matcher.py` | Matcher unit tests including param wildcards **[UPDATED]** |
| `tests/test_extractor.py` | Extractor unit tests **[NEW]** |
| `tests/test_differ.py` | Differ unit tests |
| `tests/test_reporter.py` | Reporter unit tests **[UPDATED]** |
| `tests/test_audit_e2e.py` | End-to-end integration test **[UPDATED]** |

---

## Task 1: Project Setup

**Files:**
- Create: `src/__init__.py`
- Create: `requirements.txt`
- Create: `tests/__init__.py`
- Create: `tests/conftest.py`

- [ ] **Step 1: Create `src/__init__.py`**

```python
# src/__init__.py
```

- [ ] **Step 2: Create `tests/__init__.py`**

```python
# tests/__init__.py
```

- [ ] **Step 3: Create `requirements.txt`**

```
pyyaml>=6.0
packaging>=25.0
pytest>=9.0
```

- [ ] **Step 4: Create `tests/conftest.py` with shared fixtures**

```python
# tests/conftest.py
import pytest

SAMPLE_CONF = """\
#config-version=FG6H1F-7.4.11-FW-build2878-260126:opmode=0:vdom=0:user=test
#conf_file_ver=123
#buildno=2878
#global_vdom=1
config system global
    set hostname "FGT-TEST"
    set admintimeout 60
end
config system admin
    edit "admin1"
        set accprofile "super_admin"
        set trusthost1 0.0.0.0 0.0.0.0
        set two-factor disable
        config gui-dashboard
            edit 1
                set name "Status"
            next
        end
    next
    edit "admin2"
        set accprofile "prof_admin"
        set trusthost1 192.168.1.0 255.255.255.0
        set two-factor fortitoken
    next
end
config system password-policy
    set status enable
    set min-length 8
end
"""

SAMPLE_YAML = """\
#config-version=FG6H1F-7.4.11-FW-build2878-260126:opmode=0:vdom=0:user=test
#conf_file_ver=123
#buildno=2878
#global_vdom=1
system_global:
    hostname: "FGT-TEST"
    admintimeout: 60

system_admin:
    - admin1:
        accprofile: "super_admin"
        trusthost1: "0.0.0.0 0.0.0.0"
        two-factor: disable

    - admin2:
        accprofile: "prof_admin"
        trusthost1: "192.168.1.0 255.255.255.0"
        two-factor: fortitoken

system_password-policy:
    status: enable
    min-length: 8
"""

SAMPLE_TEMPLATE = """\
---
id: SYS-ADMIN-001
title: Admin management access not restricted
description: Trusthost 0.0.0.0/0 allows admin CLI from any IP.
rationale: Exposes management plane to brute-force attacks.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags: [access-control, authentication]
applies-to: [internet-facing]
excludes: [air-gapped]
fortios-versions: [">=7.0"]
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
  score: 9.8
  severity: critical
remediation: Restrict trusthost1 to management subnet before applying.
exceptions: OK if device is behind a jump host.
source: internal-policy
---
config system admin
    edit "*"
        set trusthost1 !0.0.0.0 0.0.0.0
    next
end

---
id: SYS-ADMIN-002
title: Two-factor authentication disabled
description: Admin accounts must use two-factor auth.
rationale: Single-factor auth is insufficient for firewall management.
references: []
tags: [authentication]
applies-to: [internet-facing]
excludes: []
fortios-versions: [">=7.0"]
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N
  score: 9.1
  severity: critical
remediation: Enable two-factor with FortiToken or email.
exceptions: ""
source: internal-policy
---
config system admin
    edit "*"
        set two-factor !disable
    next
end
"""

SAMPLE_TEMPLATE_REQUIRED = """\
---
id: SYS-ADMIN-003
title: Admin must use specific accprofile
description: suprateam must have super_admin accprofile.
rationale: Role enforcement.
references: []
tags: [access-control]
applies-to: []
excludes: []
fortios-versions: []
cvss:
  vector: AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H
  score: 7.2
  severity: high
remediation: ""
exceptions: ""
source: internal-policy
---
config system admin
    edit "suprateam"
        set accprofile super_admin
    next
end
"""


@pytest.fixture
def sample_conf_text():
    return SAMPLE_CONF

@pytest.fixture
def sample_yaml_text():
    return SAMPLE_YAML

@pytest.fixture
def sample_template_text():
    return SAMPLE_TEMPLATE
```

- [ ] **Step 5: Verify test infrastructure works**

```bash
cd /home/dragon/confia && python -m pytest tests/ -v --collect-only 2>&1 | head -20
```

Expected: no errors, 0 tests collected (no test files yet).

- [ ] **Step 6: Commit**

```bash
cd /home/dragon/confia && git add src/__init__.py tests/__init__.py tests/conftest.py requirements.txt && git commit -m "feat: project setup — src layout, test fixtures, requirements"
```

---

## Task 2: Data Models

**Files:**
- Create: `src/models.py`

- [ ] **Step 1: Write the failing test**

```python
# tests/test_models.py
from src.models import ConfigMeta, ParsedConfig, RuleMeta, Rule, Finding, DriftChange, FLAT_KEY

def test_flat_key_constant():
    assert FLAT_KEY == "__flat__"

def test_config_meta():
    m = ConfigMeta(version="7.4.11", build="2878", hostname="FGT-TEST")
    assert m.version == "7.4.11"

def test_finding_defaults():
    f = Finding(
        rule_id="SYS-001", rule_title="Test", section="system admin",
        entry="admin1", parameter="trusthost1",
        expected="!0.0.0.0 0.0.0.0", actual="0.0.0.0 0.0.0.0",
        severity="critical", cvss_score=9.8, cvss_vector="AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    )
    assert f.ai_summary == ""
    assert f.ai_confidence is None
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /home/dragon/confia && python -m pytest tests/test_models.py -v
```

Expected: `ImportError: No module named 'src.models'`

- [ ] **Step 3: Create `src/models.py`** [UPDATED — adds `Chapter`]

```python
# src/models.py
from dataclasses import dataclass, field
from typing import Optional

FLAT_KEY = "__flat__"


@dataclass
class ConfigMeta:
    version: str   # "7.4.11"
    build: str     # "2878"
    hostname: str  # "FGT-TEST"


@dataclass
class ParsedConfig:
    meta: ConfigMeta
    # {section_key: {entry_name: {param: value}}}
    # Flat sections (no edit/next entries) use entry_name = FLAT_KEY
    sections: dict


@dataclass
class RuleMeta:
    id: str
    title: str
    description: str = ""
    rationale: str = ""
    references: list = field(default_factory=list)
    tags: list = field(default_factory=list)
    applies_to: list = field(default_factory=list)
    excludes: list = field(default_factory=list)
    fortios_versions: list = field(default_factory=list)
    cvss_vector: str = ""
    cvss_score: float = 0.0
    severity: str = "info"
    remediation: str = ""
    exceptions: str = ""
    source: str = ""


@dataclass
class Rule:
    meta: RuleMeta
    section: str   # "system admin"
    entries: dict  # {entry_pattern: {param_pattern: expected_value}}
    # entry_pattern may use fnmatch globs: "*", "admin_*", "!suprateam"
    # param_pattern may use fnmatch globs: "trusthost*", "ip6-trusthost[1-9]"
    # expected_value may use negation prefix: "!0.0.0.0 0.0.0.0"


@dataclass
class Chapter:
    id: str           # "admin-users" — matches folder name
    title: str
    description: str
    sections: list    # ["system admin", "system accprofile"]
    rules: list       # list[Rule] loaded from rules.conf


@dataclass
class Finding:
    rule_id: str
    rule_title: str
    chapter_id: str   # which chapter produced this finding
    section: str
    entry: str
    parameter: str    # resolved actual parameter name (e.g. "trusthost3")
    param_pattern: str  # the pattern from the rule (e.g. "trusthost*")
    expected: str
    actual: str
    severity: str
    cvss_score: float
    cvss_vector: str
    ai_summary: str = ""
    ai_confidence: Optional[float] = None


@dataclass
class DriftChange:
    section: str
    entry: str
    parameter: str
    baseline_value: Optional[str]  # None = parameter was added
    current_value: Optional[str]   # None = parameter was removed
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd /home/dragon/confia && python -m pytest tests/test_models.py -v
```

Expected: `3 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/models.py tests/test_models.py && git commit -m "feat: data models — ConfigMeta, ParsedConfig, Rule, Finding, DriftChange"
```

---

## Task 3: FortiOS `.conf` Parser — Header and Helpers

**Files:**
- Create: `src/parser.py`
- Create: `tests/test_parser.py`

- [ ] **Step 1: Write the failing tests for header parsing and set/edit helpers**

```python
# tests/test_parser.py
import pytest
from src.parser import (
    _parse_header, _extract_edit_name, _parse_set, _normalize_section_key
)

def test_parse_header_version():
    lines = [
        "#config-version=FG6H1F-7.4.11-FW-build2878-260126:opmode=0:vdom=0:user=test",
        "#conf_file_ver=123",
        "#buildno=2878",
        "config system global",
    ]
    meta = _parse_header(lines)
    assert meta.version == "7.4.11"
    assert meta.build == "2878"

def test_parse_header_no_header():
    meta = _parse_header(["config system global"])
    assert meta.version == ""
    assert meta.hostname == ""

def test_extract_edit_name_quoted():
    assert _extract_edit_name('edit "suprateam"') == "suprateam"

def test_extract_edit_name_unquoted():
    assert _extract_edit_name("edit 1") == "1"

def test_parse_set_simple():
    key, val = _parse_set("set hostname FGT-TEST")
    assert key == "hostname"
    assert val == "FGT-TEST"

def test_parse_set_quoted_value():
    key, val = _parse_set('set hostname "FGT-TEST"')
    assert key == "hostname"
    assert val == "FGT-TEST"

def test_parse_set_multi_word_value():
    key, val = _parse_set("set trusthost1 0.0.0.0 0.0.0.0")
    assert key == "trusthost1"
    assert val == "0.0.0.0 0.0.0.0"

def test_normalize_section_key_quoted():
    assert _normalize_section_key('system replacemsg http "url-block"') == "system replacemsg http url-block"

def test_normalize_section_key_plain():
    assert _normalize_section_key("system admin") == "system admin"
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/parser.py` with header/helper functions**

```python
# src/parser.py
import re
import yaml
from pathlib import Path
from .models import ParsedConfig, ConfigMeta, FLAT_KEY


def _parse_header(lines: list) -> ConfigMeta:
    """Extract firmware version, build, and hostname from header comments."""
    version = ""
    build = ""
    for line in lines:
        if not line.startswith("#"):
            break
        m = re.search(r'#config-version=\S+-(\d+\.\d+\.\d+)-FW-build(\d+)', line)
        if m:
            version = m.group(1)
            build = m.group(2)
    return ConfigMeta(version=version, build=build, hostname="")


def _normalize_section_key(raw: str) -> str:
    """Strip outer quotes from each part of a section key.

    'system replacemsg http "url-block"' -> 'system replacemsg http url-block'
    """
    parts = raw.strip().split()
    cleaned = []
    for p in parts:
        if len(p) >= 2 and p[0] in ('"', "'") and p[-1] == p[0]:
            cleaned.append(p[1:-1])
        else:
            cleaned.append(p)
    return " ".join(cleaned)


def _extract_edit_name(line: str) -> str:
    """Extract entry name from 'edit "name"' or 'edit 1'."""
    rest = line[5:].strip()  # strip 'edit '
    if len(rest) >= 2 and rest[0] == '"' and rest[-1] == '"':
        return rest[1:-1]
    return rest


def _parse_set(line: str) -> tuple:
    """Parse 'set key value...' into (key, value_string).

    Strips outer quotes from value if the entire value is quoted.
    Multi-word values (e.g. '0.0.0.0 0.0.0.0') are returned as-is.
    """
    rest = line[4:]  # strip 'set '
    parts = rest.split(None, 1)
    if len(parts) == 1:
        return parts[0], ""
    key, value = parts[0], parts[1].strip()
    if len(value) >= 2 and value[0] == '"' and value[-1] == '"':
        value = value[1:-1]
    return key, value
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py -v
```

Expected: `8 passed`

---

## Task 4: FortiOS `.conf` Parser — Section and Entry Parsing

**Files:**
- Modify: `src/parser.py`
- Modify: `tests/test_parser.py`

- [ ] **Step 1: Add tests for section and full config parsing**

Append to `tests/test_parser.py`:

```python
from tests.conftest import SAMPLE_CONF
from src.parser import parse_conf_text
from src.models import FLAT_KEY
import tempfile, pathlib

def test_parse_flat_section(sample_conf_text):
    config = parse_conf_text(sample_conf_text)
    assert "system global" in config.sections
    flat = config.sections["system global"]
    assert FLAT_KEY in flat
    assert flat[FLAT_KEY]["hostname"] == "FGT-TEST"
    assert flat[FLAT_KEY]["admintimeout"] == "60"

def test_parse_entry_section(sample_conf_text):
    config = parse_conf_text(sample_conf_text)
    assert "system admin" in config.sections
    section = config.sections["system admin"]
    assert "admin1" in section
    assert section["admin1"]["accprofile"] == "super_admin"
    assert section["admin1"]["trusthost1"] == "0.0.0.0 0.0.0.0"

def test_parse_nested_config_ignored(sample_conf_text):
    """Nested config blocks (gui-dashboard) inside entries are skipped."""
    config = parse_conf_text(sample_conf_text)
    admin1 = config.sections["system admin"]["admin1"]
    assert "gui-dashboard" not in admin1

def test_parse_multiple_entries(sample_conf_text):
    config = parse_conf_text(sample_conf_text)
    section = config.sections["system admin"]
    assert "admin1" in section
    assert "admin2" in section

def test_parse_flat_no_entries(sample_conf_text):
    config = parse_conf_text(sample_conf_text)
    assert "system password-policy" in config.sections
    pp = config.sections["system password-policy"]
    assert FLAT_KEY in pp
    assert pp[FLAT_KEY]["status"] == "enable"

def test_parse_conf_file(tmp_path, sample_conf_text):
    f = tmp_path / "test.conf"
    f.write_text(sample_conf_text)
    config = parse_conf(f)
    assert config.meta.version == "7.4.11"
    assert config.meta.build == "2878"
    assert "system admin" in config.sections

def test_meta_hostname_from_global(sample_conf_text):
    config = parse_conf_text(sample_conf_text)
    assert config.meta.hostname == "FGT-TEST"
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py::test_parse_flat_section -v
```

Expected: `ImportError` or `AttributeError` (parse_conf_text not defined yet)

- [ ] **Step 3: Add section/entry parsing to `src/parser.py`**

Append to `src/parser.py` (after the existing helper functions):

```python
def _skip_block(it) -> None:
    """Consume lines until the matching 'end', handling nested 'config' blocks."""
    depth = 1
    for line in it:
        stripped = line.strip()
        if stripped.startswith("config "):
            depth += 1
        elif stripped == "end":
            depth -= 1
            if depth == 0:
                return


def _parse_entry_body(it) -> dict:
    """Consume 'edit...next' block, return {param: value}."""
    params = {}
    for line in it:
        stripped = line.strip()
        if stripped == "next":
            return params
        if stripped.startswith("set "):
            key, val = _parse_set(stripped)
            params[key] = val
        elif stripped.startswith("config "):
            _skip_block(it)
        # unset, append — skip
    return params


def _parse_section_body(it) -> dict:
    """Consume 'config...end' block.

    Returns {entry_name: {param: val}} for sections with edit/next entries.
    Returns {FLAT_KEY: {param: val}} for flat sections.
    """
    entries = {}
    flat_params = {}
    has_entries = False

    for line in it:
        stripped = line.strip()
        if stripped == "end":
            if has_entries:
                return entries
            return {FLAT_KEY: flat_params}
        if stripped.startswith("edit "):
            has_entries = True
            name = _extract_edit_name(stripped)
            entries[name] = _parse_entry_body(it)
        elif stripped.startswith("set "):
            key, val = _parse_set(stripped)
            flat_params[key] = val
        elif stripped.startswith("config "):
            _skip_block(it)

    # Fallback: no 'end' found
    if has_entries:
        return entries
    return {FLAT_KEY: flat_params}


def _parse_lines(lines_iter, sections: dict) -> None:
    """Top-level line scanner: find 'config X' blocks and parse them."""
    for line in lines_iter:
        stripped = line.strip()
        if stripped.startswith("config "):
            key = _normalize_section_key(stripped[7:])
            data = _parse_section_body(lines_iter)
            if key in sections:
                # Merge duplicate sections (e.g. multiple 'config system replacemsg' blocks)
                sections[key].update(data)
            else:
                sections[key] = data


def parse_conf_text(text: str) -> ParsedConfig:
    """Parse FortiOS .conf text into ParsedConfig."""
    lines = text.splitlines()
    meta = _parse_header(lines)
    sections = {}
    _parse_lines(iter(lines), sections)
    # Extract hostname from system global if present
    sg = sections.get("system global", {}).get(FLAT_KEY, {})
    if sg.get("hostname"):
        meta.hostname = sg["hostname"]
    return ParsedConfig(meta=meta, sections=sections)


def parse_conf(path) -> ParsedConfig:
    """Parse FortiOS .conf file from disk."""
    text = Path(path).read_text(encoding="utf-8", errors="replace")
    return parse_conf_text(text)
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py -v
```

Expected: `15 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/parser.py tests/test_parser.py tests/test_models.py && git commit -m "feat: FortiOS .conf parser — flat sections, entry sections, nested block skipping"
```

---

## Task 5: FortiOS `.conf.yaml` Parser

**Files:**
- Modify: `src/parser.py`
- Modify: `tests/test_parser.py`

- [ ] **Step 1: Add tests for YAML parsing**

Append to `tests/test_parser.py`:

```python
from src.parser import parse_yaml_text

def test_yaml_flat_section(sample_yaml_text):
    config = parse_yaml_text(sample_yaml_text)
    assert "system global" in config.sections
    flat = config.sections["system global"]
    assert FLAT_KEY in flat
    assert flat[FLAT_KEY]["hostname"] == "FGT-TEST"
    assert flat[FLAT_KEY]["admintimeout"] == "60"

def test_yaml_entry_section(sample_yaml_text):
    config = parse_yaml_text(sample_yaml_text)
    assert "system admin" in config.sections
    section = config.sections["system admin"]
    assert "admin1" in section
    assert section["admin1"]["accprofile"] == "super_admin"
    assert section["admin1"]["trusthost1"] == "0.0.0.0 0.0.0.0"

def test_yaml_entry_section_multi(sample_yaml_text):
    config = parse_yaml_text(sample_yaml_text)
    section = config.sections["system admin"]
    assert "admin2" in section
    assert section["admin2"]["two-factor"] == "fortitoken"

def test_yaml_hyphen_in_section_key(sample_yaml_text):
    """system_password-policy in YAML -> 'system password-policy' section key."""
    config = parse_yaml_text(sample_yaml_text)
    assert "system password-policy" in config.sections

def test_yaml_nested_values_skipped(sample_yaml_text):
    """Nested dicts/lists (gui-dashboard) inside entries are skipped."""
    config = parse_yaml_text(sample_yaml_text)
    admin1 = config.sections["system admin"]["admin1"]
    assert "gui-dashboard" not in admin1

def test_yaml_meta_version(sample_yaml_text):
    config = parse_yaml_text(sample_yaml_text)
    assert config.meta.version == "7.4.11"
    assert config.meta.build == "2878"

def test_yaml_produces_same_structure_as_conf(sample_conf_text, sample_yaml_text):
    """Both parsers must produce the same section/entry/param structure."""
    conf_config = parse_conf_text(sample_conf_text)
    yaml_config = parse_yaml_text(sample_yaml_text)
    # Compare system admin section
    assert conf_config.sections["system admin"]["admin1"]["accprofile"] == \
           yaml_config.sections["system admin"]["admin1"]["accprofile"]
    assert conf_config.sections["system admin"]["admin1"]["trusthost1"] == \
           yaml_config.sections["system admin"]["admin1"]["trusthost1"]
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py::test_yaml_flat_section -v
```

Expected: `ImportError` (parse_yaml_text not defined)

- [ ] **Step 3: Add `parse_yaml_text` and `parse_yaml` to `src/parser.py`**

Append to `src/parser.py`:

```python
def _yaml_section_key(yaml_key: str) -> str:
    """Convert YAML section key to FortiOS section key.

    YAML uses underscores where .conf uses spaces:
    'system_admin' -> 'system admin'
    'system_password-policy' -> 'system password-policy'
    'system_replacemsg_http_url-block' -> 'system replacemsg http url-block'
    """
    return yaml_key.replace("_", " ")


def _yaml_entry_params(entry_data) -> dict:
    """Flatten a YAML entry dict, skipping nested dicts/lists (subsections)."""
    if not isinstance(entry_data, dict):
        return {}
    result = {}
    for k, v in entry_data.items():
        if isinstance(v, (dict, list)):
            continue  # skip nested subsections like gui-dashboard
        result[str(k)] = str(v)
    return result


def parse_yaml_text(text: str) -> ParsedConfig:
    """Parse FortiOS .conf.yaml text into ParsedConfig."""
    lines = text.splitlines()
    meta = _parse_header(lines)

    # Strip comment lines (PyYAML chokes on them)
    yaml_lines = [ln for ln in lines if not ln.startswith("#")]
    raw = yaml.safe_load("\n".join(yaml_lines)) or {}

    sections = {}
    for yaml_key, yaml_val in raw.items():
        section_key = _yaml_section_key(str(yaml_key))

        if isinstance(yaml_val, list):
            # Entry-based: [{entry_name: {params}}, ...]
            entries = {}
            for item in yaml_val:
                if not isinstance(item, dict):
                    continue
                for entry_name, entry_data in item.items():
                    entries[str(entry_name)] = _yaml_entry_params(entry_data)
            sections[section_key] = entries

        elif isinstance(yaml_val, dict):
            # Flat section
            sections[section_key] = {FLAT_KEY: _yaml_entry_params(yaml_val)}

    # Extract hostname from system global
    sg = sections.get("system global", {}).get(FLAT_KEY, {})
    if sg.get("hostname"):
        meta.hostname = sg["hostname"]

    return ParsedConfig(meta=meta, sections=sections)


def parse_yaml(path) -> ParsedConfig:
    """Parse FortiOS .conf.yaml file from disk."""
    text = Path(path).read_text(encoding="utf-8", errors="replace")
    return parse_yaml_text(text)
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_parser.py -v
```

Expected: `23 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/parser.py tests/test_parser.py && git commit -m "feat: FortiOS .conf.yaml parser — mirrors .conf structure for same downstream interface"
```

---

## Task 6: Template File Parser

**Files:**
- Create: `src/template.py`
- Create: `tests/test_template.py`

- [ ] **Step 1: Write failing tests**

```python
# tests/test_template.py
import pytest
from tests.conftest import SAMPLE_TEMPLATE, SAMPLE_TEMPLATE_REQUIRED
from src.template import parse_template_text
from src.models import FLAT_KEY


def test_parse_two_rules(sample_template_text):
    rules = parse_template_text(sample_template_text)
    assert len(rules) == 2


def test_rule_meta_fields(sample_template_text):
    rules = parse_template_text(sample_template_text)
    r = rules[0]
    assert r.meta.id == "SYS-ADMIN-001"
    assert r.meta.title == "Admin management access not restricted"
    assert r.meta.severity == "critical"
    assert r.meta.cvss_score == 9.8
    assert r.meta.cvss_vector == "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
    assert "access-control" in r.meta.tags
    assert "internet-facing" in r.meta.applies_to
    assert "air-gapped" in r.meta.excludes
    assert r.meta.fortios_versions == [">=7.0"]


def test_rule_section(sample_template_text):
    rules = parse_template_text(sample_template_text)
    assert rules[0].section == "system admin"
    assert rules[1].section == "system admin"


def test_rule_entries_wildcard(sample_template_text):
    rules = parse_template_text(sample_template_text)
    r = rules[0]
    assert "*" in r.entries
    assert r.entries["*"]["trusthost1"] == "!0.0.0.0 0.0.0.0"


def test_rule_entries_second_rule(sample_template_text):
    rules = parse_template_text(sample_template_text)
    r = rules[1]
    assert "*" in r.entries
    assert r.entries["*"]["two-factor"] == "!disable"


def test_rule_required_value():
    rules = parse_template_text(SAMPLE_TEMPLATE_REQUIRED)
    r = rules[0]
    assert r.entries["suprateam"]["accprofile"] == "super_admin"


def test_rule_empty_applies_to():
    rules = parse_template_text(SAMPLE_TEMPLATE_REQUIRED)
    r = rules[0]
    assert r.meta.applies_to == []


def test_rule_references(sample_template_text):
    rules = parse_template_text(sample_template_text)
    assert len(rules[0].meta.references) == 1
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_template.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/template.py`**

```python
# src/template.py
"""Parse audit policy template files.

A template file contains one or more rule blocks. Each block is:
    ---
    (YAML frontmatter: id, title, cvss, applies-to, etc.)
    ---
    config section-name
        edit "entry-pattern"
            set param expected-value
        next
    end

Multiple blocks in the same file are separated by blank lines between them.
"""
import yaml
from .models import Rule, RuleMeta, FLAT_KEY
from .parser import _normalize_section_key, _extract_edit_name, _parse_set


def _build_rule_meta(fm: dict) -> RuleMeta:
    cvss = fm.get("cvss") or {}
    return RuleMeta(
        id=str(fm.get("id", "")),
        title=str(fm.get("title", "")),
        description=str(fm.get("description", "")),
        rationale=str(fm.get("rationale", "")),
        references=list(fm.get("references") or []),
        tags=list(fm.get("tags") or []),
        applies_to=list(fm.get("applies-to") or []),
        excludes=list(fm.get("excludes") or []),
        fortios_versions=list(fm.get("fortios-versions") or []),
        cvss_vector=str(cvss.get("vector", "")),
        cvss_score=float(cvss.get("score", 0.0)),
        severity=str(cvss.get("severity", "info")),
        remediation=str(fm.get("remediation", "")),
        exceptions=str(fm.get("exceptions", "")),
        source=str(fm.get("source", "")),
    )


def _parse_rule_body(body: str) -> tuple:
    """Parse the FortiOS config block of a rule.

    Returns (section_key, entries_dict) where:
        section_key = "system admin"
        entries_dict = {"*": {"trusthost1": "!0.0.0.0 0.0.0.0"}}
    """
    section_key = ""
    entries = {}
    current_entry = None
    current_params = {}

    for line in body.splitlines():
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith("config "):
            section_key = _normalize_section_key(stripped[7:])
        elif stripped.startswith("edit "):
            current_entry = _extract_edit_name(stripped)
            current_params = {}
        elif stripped == "next":
            if current_entry is not None:
                entries[current_entry] = current_params
                current_entry = None
                current_params = {}
        elif stripped.startswith("set "):
            key, val = _parse_set(stripped)
            if current_entry is not None:
                current_params[key] = val
            # If no edit block, treat as flat
        elif stripped == "end":
            if current_entry is None and not entries:
                # Flat section rule (no edit blocks) — handled below
                pass

    # Handle flat section rules (no edit/next — params apply to __flat__)
    if not entries and section_key:
        flat_params = {}
        in_config = False
        for line in body.splitlines():
            stripped = line.strip()
            if stripped.startswith("config "):
                in_config = True
            elif stripped.startswith("set ") and in_config:
                key, val = _parse_set(stripped)
                flat_params[key] = val
        if flat_params:
            entries[FLAT_KEY] = flat_params

    return section_key, entries


def parse_template_text(text: str) -> list:
    """Parse a template file into a list of Rule objects."""
    rules = []
    lines = text.splitlines()
    i = 0

    while i < len(lines):
        # Find start of frontmatter
        if lines[i].strip() == "---":
            # Collect frontmatter
            fm_lines = []
            i += 1
            while i < len(lines) and lines[i].strip() != "---":
                fm_lines.append(lines[i])
                i += 1
            i += 1  # skip closing ---

            # Collect body until next --- or EOF
            body_lines = []
            while i < len(lines) and lines[i].strip() != "---":
                body_lines.append(lines[i])
                i += 1
            # Do NOT increment i here — the next --- starts the next frontmatter

            # Parse
            fm = yaml.safe_load("\n".join(fm_lines)) or {}
            body = "\n".join(body_lines)
            meta = _build_rule_meta(fm)
            section_key, entries = _parse_rule_body(body)
            if meta.id and section_key:
                rules.append(Rule(meta=meta, section=section_key, entries=entries))
        else:
            i += 1

    return rules


def load_templates(templates_path) -> list:
    """Load all .conf template files from a directory or single file path."""
    from pathlib import Path
    p = Path(templates_path)
    files = [p] if p.is_file() else sorted(p.glob("*.conf"))
    rules = []
    for f in files:
        rules.extend(parse_template_text(f.read_text(encoding="utf-8")))
    return rules
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_template.py -v
```

Expected: `9 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/template.py tests/test_template.py && git commit -m "feat: template parser — YAML frontmatter + FortiOS body, multi-rule files"
```

---

## Task 7: Matcher — Glob Resolution and Value Comparison

**Files:**
- Create: `src/matcher.py`
- Create: `tests/test_matcher.py`

- [ ] **Step 1: Write failing tests**

```python
# tests/test_matcher.py
import pytest
from src.matcher import _resolve_entries, _is_violation, _filter_rules
from src.template import parse_template_text
from src.parser import parse_conf_text
from src.models import FLAT_KEY
from tests.conftest import SAMPLE_CONF, SAMPLE_TEMPLATE


def test_resolve_wildcard():
    names = ["admin1", "admin2", "suprateam"]
    assert set(_resolve_entries("*", names)) == {"admin1", "admin2", "suprateam"}


def test_resolve_glob_prefix():
    names = ["admin1", "admin2", "suprateam"]
    assert _resolve_entries("admin*", names) == ["admin1", "admin2"]


def test_resolve_exact():
    names = ["admin1", "admin2", "suprateam"]
    assert _resolve_entries("suprateam", names) == ["suprateam"]


def test_resolve_negation():
    names = ["admin1", "admin2", "suprateam"]
    result = _resolve_entries("!suprateam", names)
    assert "suprateam" not in result
    assert "admin1" in result
    assert "admin2" in result


def test_resolve_flat_key():
    names = [FLAT_KEY]
    assert _resolve_entries(FLAT_KEY, names) == [FLAT_KEY]


def test_resolve_no_match():
    names = ["admin1", "admin2"]
    assert _resolve_entries("vpn*", names) == []


def test_is_violation_negation_match():
    """Value equals the forbidden value -> violation."""
    assert _is_violation("!0.0.0.0 0.0.0.0", "0.0.0.0 0.0.0.0") is True


def test_is_violation_negation_no_match():
    """Value does not equal the forbidden value -> no violation."""
    assert _is_violation("!0.0.0.0 0.0.0.0", "192.168.1.0 255.255.255.0") is False


def test_is_violation_required_match():
    """Value matches the required value -> no violation."""
    assert _is_violation("super_admin", "super_admin") is False


def test_is_violation_required_no_match():
    """Value does not match required value -> violation."""
    assert _is_violation("super_admin", "prof_admin") is True


def test_is_violation_missing_param():
    """Parameter absent from config (None) and required -> violation."""
    assert _is_violation("enable", None) is True


def test_is_violation_missing_param_negation():
    """Parameter absent (None) and forbidden value is something else -> no violation."""
    assert _is_violation("!disable", None) is False


def test_filter_rules_applies_to():
    rules = parse_template_text(SAMPLE_TEMPLATE)
    filtered = _filter_rules(rules, ["internet-facing"], "7.4.11")
    assert len(filtered) == 2


def test_filter_rules_excludes_skips():
    rules = parse_template_text(SAMPLE_TEMPLATE)
    filtered = _filter_rules(rules, ["air-gapped"], "7.4.11")
    assert len(filtered) == 0


def test_filter_rules_applies_to_mismatch():
    rules = parse_template_text(SAMPLE_TEMPLATE)
    filtered = _filter_rules(rules, ["campus"], "7.4.11")
    assert len(filtered) == 0


def test_filter_rules_version_match():
    rules = parse_template_text(SAMPLE_TEMPLATE)
    filtered = _filter_rules(rules, ["internet-facing"], "7.0.0")
    assert len(filtered) == 2


def test_filter_rules_version_mismatch():
    rules = parse_template_text(SAMPLE_TEMPLATE)
    filtered = _filter_rules(rules, ["internet-facing"], "6.4.0")
    assert len(filtered) == 0
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/matcher.py`**

```python
# src/matcher.py
import fnmatch
from packaging.version import Version
from packaging.specifiers import SpecifierSet
from .models import Finding, FLAT_KEY


def _resolve_entries(pattern: str, entry_names: list) -> list:
    """Resolve an entry pattern against a list of actual entry names.

    Patterns:
      "*"        -> all entries (excluding FLAT_KEY)
      "admin_*"  -> glob match
      "!name"    -> all entries except those matching 'name'
      FLAT_KEY   -> only FLAT_KEY (for flat sections)
    """
    if pattern == FLAT_KEY:
        return [FLAT_KEY] if FLAT_KEY in entry_names else []

    # Only match non-flat entries
    real_names = [n for n in entry_names if n != FLAT_KEY]

    if pattern.startswith("!"):
        neg_pattern = pattern[1:]
        excluded = {n for n in real_names if fnmatch.fnmatch(n, neg_pattern)}
        return [n for n in real_names if n not in excluded]

    return [n for n in real_names if fnmatch.fnmatch(n, pattern)]


def _is_violation(expected: str, actual) -> bool:
    """Return True if actual value violates the expected constraint.

    expected "!X"  -> violation if actual == X
    expected "X"   -> violation if actual != X
    actual None    -> parameter missing from config
    """
    if expected.startswith("!"):
        forbidden = expected[1:]
        return actual == forbidden
    # Required value
    return actual != expected


def _version_matches(version: str, constraints: list) -> bool:
    """Return True if version satisfies all constraints (e.g. ['>=7.0'])."""
    if not constraints:
        return True
    try:
        v = Version(version)
        spec = SpecifierSet(",".join(str(c) for c in constraints))
        return v in spec
    except Exception:
        return True  # parse failure -> don't filter


def _filter_rules(rules: list, device_groups: list, fortios_version: str) -> list:
    """Return only the rules applicable to this device."""
    result = []
    for rule in rules:
        # applies-to: device must have at least one of these groups
        if rule.meta.applies_to:
            if not any(g in device_groups for g in rule.meta.applies_to):
                continue
        # excludes: skip if device has any of these groups
        if rule.meta.excludes:
            if any(g in device_groups for g in rule.meta.excludes):
                continue
        # fortios-versions: version constraint
        if not _version_matches(fortios_version, rule.meta.fortios_versions):
            continue
        result.append(rule)
    return result
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py -v
```

Expected: `16 passed`

---

## Task 8: Matcher — Full `match_rules` Function

**Files:**
- Modify: `src/matcher.py`
- Modify: `tests/test_matcher.py`

- [ ] **Step 1: Add integration tests for full match_rules**

Append to `tests/test_matcher.py`:

```python
from src.matcher import match_rules


def test_match_rules_finds_violation():
    """admin1 has trusthost1=0.0.0.0 -> should be flagged by SYS-ADMIN-001."""
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["internet-facing"])
    rule_ids = [f.rule_id for f in findings]
    assert "SYS-ADMIN-001" in rule_ids


def test_match_rules_no_violation_for_compliant_entry():
    """admin2 has trusthost1=192.168.1.0 and two-factor=fortitoken -> no finding for admin2."""
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["internet-facing"])
    # admin2 should not appear in SYS-ADMIN-001 findings
    admin2_001 = [f for f in findings if f.rule_id == "SYS-ADMIN-001" and f.entry == "admin2"]
    assert admin2_001 == []


def test_match_rules_two_factor_finding():
    """admin1 has two-factor=disable -> should be flagged by SYS-ADMIN-002."""
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["internet-facing"])
    two_factor = [f for f in findings if f.rule_id == "SYS-ADMIN-002" and f.entry == "admin1"]
    assert len(two_factor) == 1
    assert two_factor[0].actual == "disable"
    assert two_factor[0].expected == "!disable"


def test_match_rules_skipped_for_air_gapped():
    """Air-gapped device: all rules in SAMPLE_TEMPLATE have excludes=[air-gapped] -> no findings."""
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["air-gapped"])
    assert findings == []


def test_match_rules_finding_fields():
    """Finding has correct severity and cvss_score."""
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["internet-facing"])
    f = next(f for f in findings if f.rule_id == "SYS-ADMIN-001")
    assert f.severity == "critical"
    assert f.cvss_score == 9.8
    assert f.section == "system admin"
    assert f.parameter == "trusthost1"


def test_match_rules_unknown_section():
    """Rule targeting a section not present in config -> no findings, no crash."""
    from tests.conftest import SAMPLE_TEMPLATE_REQUIRED
    rules = parse_template_text(SAMPLE_TEMPLATE_REQUIRED)
    # Use a config with no 'suprateam' entry
    config = parse_conf_text(SAMPLE_CONF)
    findings = match_rules(config, rules, [])
    # suprateam not in config -> no finding
    assert findings == []
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py::test_match_rules_finds_violation -v
```

Expected: `ImportError` (match_rules not defined yet)

- [ ] **Step 3: Add `match_rules` to `src/matcher.py`**

Append to `src/matcher.py`:

```python
def match_rules(config, rules: list, device_groups: list) -> list:
    """Run all applicable rules against the parsed config.

    Returns a list of Finding objects for every violated rule.
    """
    findings = []
    applicable = _filter_rules(rules, device_groups, config.meta.version)

    for rule in applicable:
        section_data = config.sections.get(rule.section)
        if section_data is None:
            continue

        entry_names = list(section_data.keys())

        for entry_pattern, expected_params in rule.entries.items():
            matching = _resolve_entries(entry_pattern, entry_names)

            for entry_name in matching:
                actual_params = section_data.get(entry_name, {})

                for param, expected_val in expected_params.items():
                    actual_val = actual_params.get(param)

                    if _is_violation(expected_val, actual_val):
                        findings.append(Finding(
                            rule_id=rule.meta.id,
                            rule_title=rule.meta.title,
                            section=rule.section,
                            entry=entry_name,
                            parameter=param,
                            expected=expected_val,
                            actual=actual_val if actual_val is not None else "",
                            severity=rule.meta.severity,
                            cvss_score=rule.meta.cvss_score,
                            cvss_vector=rule.meta.cvss_vector,
                        ))

    return findings
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py -v
```

Expected: `24 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/matcher.py tests/test_matcher.py && git commit -m "feat: matcher — glob resolution, value comparison, applies-to filtering, match_rules"
```

---

## Task 9: Differ — Baseline Comparison

**Files:**
- Create: `src/differ.py`
- Create: `tests/test_differ.py`

- [ ] **Step 1: Write failing tests**

```python
# tests/test_differ.py
from src.differ import diff_configs
from src.parser import parse_conf_text
from src.models import FLAT_KEY

BASELINE_CONF = """\
#config-version=FG6H1F-7.4.11-FW-build2878-260126:opmode=0:vdom=0:user=test
#buildno=2878
config system global
    set hostname "FGT-TEST"
    set admintimeout 30
end
config system admin
    edit "admin1"
        set accprofile "super_admin"
        set trusthost1 192.168.1.0 255.255.255.0
    next
end
"""

CURRENT_CONF = """\
#config-version=FG6H1F-7.4.11-FW-build2878-260126:opmode=0:vdom=0:user=test
#buildno=2878
config system global
    set hostname "FGT-TEST"
    set admintimeout 60
end
config system admin
    edit "admin1"
        set accprofile "super_admin"
        set trusthost1 0.0.0.0 0.0.0.0
    next
    edit "admin2"
        set accprofile "prof_admin"
    next
end
"""


def test_diff_detects_changed_param():
    baseline = parse_conf_text(BASELINE_CONF)
    current = parse_conf_text(CURRENT_CONF)
    changes = diff_configs(current, baseline)
    changed = [c for c in changes if c.parameter == "admintimeout"]
    assert len(changed) == 1
    assert changed[0].baseline_value == "30"
    assert changed[0].current_value == "60"


def test_diff_detects_changed_entry_param():
    baseline = parse_conf_text(BASELINE_CONF)
    current = parse_conf_text(CURRENT_CONF)
    changes = diff_configs(current, baseline)
    trusthost = [c for c in changes if c.parameter == "trusthost1" and c.entry == "admin1"]
    assert len(trusthost) == 1
    assert trusthost[0].baseline_value == "192.168.1.0 255.255.255.0"
    assert trusthost[0].current_value == "0.0.0.0 0.0.0.0"


def test_diff_detects_added_entry():
    baseline = parse_conf_text(BASELINE_CONF)
    current = parse_conf_text(CURRENT_CONF)
    changes = diff_configs(current, baseline)
    added = [c for c in changes if c.entry == "admin2"]
    assert len(added) > 0
    assert all(c.baseline_value is None for c in added)


def test_diff_detects_removed_entry():
    baseline = parse_conf_text(CURRENT_CONF)
    current = parse_conf_text(BASELINE_CONF)
    changes = diff_configs(current, baseline)
    removed = [c for c in changes if c.entry == "admin2"]
    assert len(removed) > 0
    assert all(c.current_value is None for c in removed)


def test_diff_no_changes_identical():
    baseline = parse_conf_text(BASELINE_CONF)
    current = parse_conf_text(BASELINE_CONF)
    changes = diff_configs(current, baseline)
    assert changes == []


def test_diff_change_fields():
    baseline = parse_conf_text(BASELINE_CONF)
    current = parse_conf_text(CURRENT_CONF)
    changes = diff_configs(current, baseline)
    c = next(c for c in changes if c.parameter == "admintimeout")
    assert c.section == "system global"
    assert c.entry == FLAT_KEY
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_differ.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/differ.py`**

```python
# src/differ.py
from .models import DriftChange


def diff_configs(current, baseline) -> list:
    """Compare current ParsedConfig against baseline, return list of DriftChange.

    DriftChange.baseline_value is None for added params.
    DriftChange.current_value is None for removed params.
    """
    changes = []
    all_sections = set(current.sections) | set(baseline.sections)

    for section in sorted(all_sections):
        curr_section = current.sections.get(section, {})
        base_section = baseline.sections.get(section, {})
        all_entries = set(curr_section) | set(base_section)

        for entry in sorted(all_entries):
            curr_params = curr_section.get(entry, {})
            base_params = base_section.get(entry, {})
            all_params = set(curr_params) | set(base_params)

            for param in sorted(all_params):
                curr_val = curr_params.get(param)
                base_val = base_params.get(param)
                if curr_val != base_val:
                    changes.append(DriftChange(
                        section=section,
                        entry=entry,
                        parameter=param,
                        baseline_value=base_val,
                        current_value=curr_val,
                    ))

    return changes
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_differ.py -v
```

Expected: `6 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/differ.py tests/test_differ.py && git commit -m "feat: differ — detect added, removed, changed params between current and baseline config"
```

---

## Task 10: Reporter — `findings.yaml` and `patch.conf`

**Files:**
- Create: `src/reporter.py`
- Create: `tests/test_reporter.py`

- [ ] **Step 1: Write failing tests**

```python
# tests/test_reporter.py
import yaml
import pytest
from pathlib import Path
from src.reporter import write_section_report
from src.matcher import match_rules
from src.parser import parse_conf_text
from src.template import parse_template_text
from tests.conftest import SAMPLE_CONF, SAMPLE_TEMPLATE


@pytest.fixture
def findings():
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    return match_rules(config, rules, ["internet-facing"])


@pytest.fixture
def section_report_dir(tmp_path, findings):
    out = tmp_path / "system-admin"
    write_section_report(
        findings=findings,
        section="system admin",
        device_hostname="FGT-TEST",
        out_dir=out,
    )
    return out


def test_findings_yaml_created(section_report_dir):
    assert (section_report_dir / "findings.yaml").exists()


def test_findings_yaml_structure(section_report_dir):
    data = yaml.safe_load((section_report_dir / "findings.yaml").read_text())
    assert isinstance(data, list)
    assert len(data) > 0
    f = data[0]
    assert "rule_id" in f
    assert "section" in f
    assert "entry" in f
    assert "parameter" in f
    assert "expected" in f
    assert "actual" in f
    assert "severity" in f
    assert "cvss_score" in f


def test_findings_yaml_ai_fields(section_report_dir):
    data = yaml.safe_load((section_report_dir / "findings.yaml").read_text())
    f = data[0]
    assert "ai_summary" in f
    assert "ai_confidence" in f


def test_patch_conf_created(section_report_dir):
    assert (section_report_dir / "patch.conf").exists()


def test_patch_conf_contains_header(section_report_dir):
    patch = (section_report_dir / "patch.conf").read_text()
    assert "# Patch generated" in patch
    assert "FGT-TEST" in patch
    assert "WARNING" in patch


def test_patch_conf_only_for_required_values(section_report_dir, findings):
    """Patch only includes entries for rules with required (non-negated) values."""
    patch = (section_report_dir / "patch.conf").read_text()
    # SYS-ADMIN-001 and SYS-ADMIN-002 use !value (negated) -> comment placeholder
    # No concrete fix value -> patch contains comment
    assert "# TODO" in patch or "config system admin" not in patch or "# No automatic" in patch


def test_write_section_report_empty_findings(tmp_path):
    """Empty findings list -> findings.yaml is empty list, patch.conf has header only."""
    out = tmp_path / "system-global"
    write_section_report(findings=[], section="system global", device_hostname="FGT-TEST", out_dir=out)
    data = yaml.safe_load((out / "findings.yaml").read_text())
    assert data == [] or data is None
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/reporter.py`**

```python
# src/reporter.py
"""Write audit output files.

Output structure per device run:
    reports/{run}/{hostname}/
        summary.md
        summary.yaml
        full.patch.conf
        {section-slug}/
            findings.yaml
            findings.md
            patch.conf
"""
import yaml
from datetime import date
from pathlib import Path


def _section_slug(section: str) -> str:
    """'system admin' -> 'system-admin'"""
    return section.replace(" ", "-")


def _finding_to_dict(f) -> dict:
    return {
        "rule_id": f.rule_id,
        "rule_title": f.rule_title,
        "section": f.section,
        "entry": f.entry,
        "parameter": f.parameter,
        "expected": f.expected,
        "actual": f.actual,
        "severity": f.severity,
        "cvss_score": f.cvss_score,
        "cvss_vector": f.cvss_vector,
        "ai_summary": f.ai_summary,
        "ai_confidence": f.ai_confidence,
    }


def write_section_report(findings: list, section: str, device_hostname: str, out_dir) -> None:
    """Write findings.yaml and patch.conf for one section."""
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    section_findings = [f for f in findings if f.section == section]

    # findings.yaml
    findings_data = [_finding_to_dict(f) for f in section_findings]
    (out_dir / "findings.yaml").write_text(
        yaml.dump(findings_data, default_flow_style=False, allow_unicode=True),
        encoding="utf-8",
    )

    # patch.conf
    _write_patch(section_findings, section, device_hostname, out_dir / "patch.conf")


def _write_patch(findings: list, section: str, device_hostname: str, out_path: Path) -> None:
    """Generate a remediation patch .conf file.

    For required-value rules (no '!' prefix): emit the concrete set command.
    For negated rules ('!' prefix): emit a TODO comment.
    """
    today = date.today().isoformat()
    rule_ids = sorted({f.rule_id for f in findings})
    lines = [
        f"# Patch generated: {today}",
        f"# Device: {device_hostname}",
        f"# Section: {section}",
        f"# Rules: {', '.join(rule_ids) if rule_ids else 'none'}",
        "# WARNING: Review before applying. Back up config first.",
        "",
    ]

    if not findings:
        out_path.write_text("\n".join(lines), encoding="utf-8")
        return

    # Group by entry
    from collections import defaultdict
    by_entry = defaultdict(list)
    for f in findings:
        by_entry[f.entry].append(f)

    from .models import FLAT_KEY
    has_patch_lines = False
    config_lines = [f"config {section}"]

    for entry, entry_findings in sorted(by_entry.items()):
        entry_lines = []
        for f in entry_findings:
            if f.expected.startswith("!"):
                entry_lines.append(
                    f"    # TODO: {f.parameter} must not be {f.expected[1:]!r} "
                    f"(currently {f.actual!r}) — set to an appropriate value"
                )
            else:
                entry_lines.append(f"    set {f.parameter} {f.expected}")
                has_patch_lines = True

        if entry == FLAT_KEY:
            config_lines.extend(entry_lines)
        else:
            config_lines.append(f'    edit "{entry}"')
            config_lines.extend(f"    {l}" for l in entry_lines)
            config_lines.append("    next")

    config_lines.append("end")

    if has_patch_lines:
        lines.extend(config_lines)
    else:
        lines.append("# No automatic remediation available — all findings require manual review.")
        lines.append("# See TODO comments below for guidance.")
        lines.extend(config_lines)

    out_path.write_text("\n".join(lines), encoding="utf-8")
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py -v
```

Expected: `8 passed`

---

## Task 11: Reporter — `findings.md` and Summary Files

**Files:**
- Modify: `src/reporter.py`
- Modify: `tests/test_reporter.py`

- [ ] **Step 1: Add tests for markdown and summary output**

Append to `tests/test_reporter.py`:

```python
from src.reporter import write_findings_md, write_device_summary, write_fleet_summary
from src.differ import diff_configs


def test_findings_md_created(section_report_dir):
    write_findings_md(
        findings=pytest.approx,  # placeholder
        section="system admin",
        out_dir=section_report_dir,
    )


def test_findings_md_structure(tmp_path, findings):
    out = tmp_path / "system-admin"
    out.mkdir()
    write_findings_md(findings=findings, section="system admin", out_dir=out)
    md = (out / "findings.md").read_text()
    assert "SYS-ADMIN-001" in md
    assert "critical" in md.lower() or "CRITICAL" in md
    assert "trusthost1" in md


def test_findings_md_shows_expected_and_actual(tmp_path, findings):
    out = tmp_path / "system-admin"
    out.mkdir()
    write_findings_md(findings=findings, section="system admin", out_dir=out)
    md = (out / "findings.md").read_text()
    assert "Expected" in md or "expected" in md
    assert "Actual" in md or "actual" in md


def test_device_summary(tmp_path, findings):
    device_dir = tmp_path / "FGT-TEST"
    device_dir.mkdir()
    write_device_summary(
        all_findings=findings,
        device_hostname="FGT-TEST",
        fortios_version="7.4.11",
        device_dir=device_dir,
        run_date="2026-04-02",
    )
    assert (device_dir / "summary.md").exists()
    assert (device_dir / "summary.yaml").exists()
    md = (device_dir / "summary.md").read_text()
    assert "FGT-TEST" in md
    assert "7.4.11" in md


def test_device_summary_yaml_structure(tmp_path, findings):
    device_dir = tmp_path / "FGT-TEST"
    device_dir.mkdir()
    write_device_summary(
        all_findings=findings,
        device_hostname="FGT-TEST",
        fortios_version="7.4.11",
        device_dir=device_dir,
        run_date="2026-04-02",
    )
    data = yaml.safe_load((device_dir / "summary.yaml").read_text())
    assert data["device"] == "FGT-TEST"
    assert data["fortios_version"] == "7.4.11"
    assert "findings_by_severity" in data
    assert "total_findings" in data


def test_fleet_summary(tmp_path, findings):
    fleet_dir = tmp_path / "fleet"
    fleet_dir.mkdir()
    device_summaries = [
        {
            "device": "FGT-TEST",
            "fortios_version": "7.4.11",
            "findings": [_finding_to_dict(f) for f in findings],
        }
    ]
    write_fleet_summary(device_summaries=device_summaries, fleet_dir=fleet_dir, run_date="2026-04-02")
    assert (fleet_dir / "fleet-summary.md").exists()
    assert (fleet_dir / "fleet-summary.yaml").exists()


# helper needed in test scope
from src.reporter import _finding_to_dict
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py::test_findings_md_structure -v
```

Expected: `ImportError` (write_findings_md not defined)

- [ ] **Step 3: Add markdown and summary writers to `src/reporter.py`**

Append to `src/reporter.py`:

```python
_SEVERITY_ORDER = {"critical": 0, "high": 1, "medium": 2, "low": 3, "info": 4}


def write_findings_md(findings: list, section: str, out_dir) -> None:
    """Write a human-readable findings.md for one section."""
    out_dir = Path(out_dir)
    section_findings = sorted(
        [f for f in findings if f.section == section],
        key=lambda f: (_SEVERITY_ORDER.get(f.severity, 99), -f.cvss_score),
    )

    lines = [f"# Findings: {section}", ""]

    if not section_findings:
        lines.append("No findings.")
        (out_dir / "findings.md").write_text("\n".join(lines), encoding="utf-8")
        return

    for f in section_findings:
        sev = f.severity.upper()
        lines += [
            f"## [{sev}] {f.rule_id} — {f.rule_title}",
            f"CVSS: {f.cvss_score} ({f.cvss_vector})",
            f"Section: `{f.section}` | Entry: `{f.entry}`",
            "",
            f"**Expected:** `{f.parameter}` {f.expected}",
            f"**Actual:**   `{f.parameter}` = `{f.actual}`",
            "",
        ]
        if f.ai_summary:
            lines += [f"> {f.ai_summary}", ""]
        lines.append("---")
        lines.append("")

    (out_dir / "findings.md").write_text("\n".join(lines), encoding="utf-8")


def write_device_summary(
    all_findings: list,
    device_hostname: str,
    fortios_version: str,
    device_dir,
    run_date: str,
) -> None:
    """Write summary.md and summary.yaml for a device across all sections."""
    device_dir = Path(device_dir)

    by_severity = {}
    for f in all_findings:
        by_severity.setdefault(f.severity, []).append(_finding_to_dict(f))

    total = len(all_findings)
    sorted_findings = sorted(
        all_findings,
        key=lambda f: (_SEVERITY_ORDER.get(f.severity, 99), -f.cvss_score),
    )

    # summary.yaml
    summary_data = {
        "device": device_hostname,
        "fortios_version": fortios_version,
        "run_date": run_date,
        "total_findings": total,
        "findings_by_severity": {k: len(v) for k, v in by_severity.items()},
        "findings": [_finding_to_dict(f) for f in sorted_findings],
    }
    (device_dir / "summary.yaml").write_text(
        yaml.dump(summary_data, default_flow_style=False, allow_unicode=True),
        encoding="utf-8",
    )

    # summary.md
    lines = [
        f"# Audit Summary: {device_hostname}",
        f"Date: {run_date} | FortiOS: {fortios_version} | Total findings: {total}",
        "",
        "## Findings by Severity",
        "",
        "| Severity | Count |",
        "|----------|-------|",
    ]
    for sev in ["critical", "high", "medium", "low", "info"]:
        count = by_severity.get(sev, [])
        if count:
            lines.append(f"| {sev.capitalize()} | {len(count)} |")
    lines += ["", "## All Findings", ""]

    for f in sorted_findings:
        lines.append(
            f"- **[{f.severity.upper()}]** `{f.rule_id}` {f.rule_title} "
            f"— `{f.section}` / `{f.entry}` / `{f.parameter}`"
        )

    (device_dir / "summary.md").write_text("\n".join(lines), encoding="utf-8")


def write_fleet_summary(device_summaries: list, fleet_dir, run_date: str) -> None:
    """Write fleet-summary.md and fleet-summary.yaml across all devices."""
    fleet_dir = Path(fleet_dir)
    total_devices = len(device_summaries)
    total_findings = sum(len(d["findings"]) for d in device_summaries)

    # fleet-summary.yaml
    fleet_data = {
        "run_date": run_date,
        "total_devices": total_devices,
        "total_findings": total_findings,
        "devices": [
            {
                "device": d["device"],
                "fortios_version": d["fortios_version"],
                "total_findings": len(d["findings"]),
                "critical": sum(1 for f in d["findings"] if f["severity"] == "critical"),
                "high": sum(1 for f in d["findings"] if f["severity"] == "high"),
            }
            for d in device_summaries
        ],
    }
    (fleet_dir / "fleet-summary.yaml").write_text(
        yaml.dump(fleet_data, default_flow_style=False, allow_unicode=True),
        encoding="utf-8",
    )

    # fleet-summary.md
    lines = [
        "# Fleet Audit Summary",
        f"Date: {run_date} | Devices: {total_devices} | Total findings: {total_findings}",
        "",
        "| Device | FortiOS | Findings | Critical | High |",
        "|--------|---------|----------|----------|------|",
    ]
    for d in sorted(device_summaries, key=lambda x: x["device"]):
        crit = sum(1 for f in d["findings"] if f["severity"] == "critical")
        high = sum(1 for f in d["findings"] if f["severity"] == "high")
        lines.append(
            f"| {d['device']} | {d['fortios_version']} | {len(d['findings'])} | {crit} | {high} |"
        )

    (fleet_dir / "fleet-summary.md").write_text("\n".join(lines), encoding="utf-8")
```

- [ ] **Step 4: Run all reporter tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py -v
```

Expected: `~15 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/reporter.py tests/test_reporter.py && git commit -m "feat: reporter — findings.yaml, patch.conf, findings.md, device summary, fleet summary"
```

---

## Task 12: CLI — `audit.py`

**Files:**
- Create: `audit.py`

- [ ] **Step 1: Create `audit.py`**

```python
#!/usr/bin/env python3
# audit.py
"""FortiGate Config Auditor — CLI entry point.

Usage:
    python audit.py --inventory inventory.yaml --templates templates/
    python audit.py --inventory inventory.yaml --templates templates/ --run-name pre-maintenance
    python audit.py --inventory inventory.yaml --baseline baselines/2026-03-01/
    python audit.py --inventory inventory.yaml --templates templates/ --device FGT-SENATI
    python audit.py --inventory inventory.yaml --templates templates/ --tags internet-facing
    python audit.py --inventory inventory.yaml --templates templates/ --no-ai
"""
import argparse
import sys
import yaml
from datetime import date
from pathlib import Path

# Ensure src/ is on the path when run from project root
sys.path.insert(0, str(Path(__file__).parent))

from src.parser import parse_conf, parse_yaml
from src.template import load_templates
from src.matcher import match_rules
from src.differ import diff_configs
from src.reporter import (
    write_section_report,
    write_findings_md,
    write_device_summary,
    write_fleet_summary,
    _section_slug,
)


def load_inventory(path: Path) -> dict:
    return yaml.safe_load(path.read_text(encoding="utf-8")) or {}


def parse_device_config(config_path: Path):
    if config_path.suffix == ".yaml":
        return parse_yaml(config_path)
    return parse_conf(config_path)


def audit_device(device_name: str, device_cfg: dict, rules: list, baseline_dir, run_dir: Path, run_date: str):
    """Run audit for a single device. Returns list of all findings."""
    config_path = Path(device_cfg["config"])
    groups = device_cfg.get("groups", [])

    if not config_path.exists():
        print(f"  [WARN] Config not found: {config_path}", file=sys.stderr)
        return []

    config = parse_device_config(config_path)
    device_dir = run_dir / device_name
    device_dir.mkdir(parents=True, exist_ok=True)

    all_findings = []

    # Template compliance check
    if rules:
        all_findings = match_rules(config, rules, groups)

    # Drift detection
    drift_changes = []
    if baseline_dir:
        baseline_device_dir = Path(baseline_dir) / device_name
        if baseline_device_dir.exists():
            # Load baseline summary yaml to find config path
            baseline_summary = baseline_device_dir / "summary.yaml"
            if baseline_summary.exists():
                # Drift: compare sections from findings — simplified version
                # Full drift report written separately
                print(f"  [INFO] Drift detection against baseline: {baseline_device_dir}")

    # Write per-section reports
    sections = {f.section for f in all_findings}
    for section in sorted(sections):
        section_dir = device_dir / _section_slug(section)
        write_section_report(
            findings=all_findings,
            section=section,
            device_hostname=device_name,
            out_dir=section_dir,
        )
        write_findings_md(
            findings=all_findings,
            section=section,
            out_dir=section_dir,
        )

    # Write device summary
    write_device_summary(
        all_findings=all_findings,
        device_hostname=device_name,
        fortios_version=config.meta.version,
        device_dir=device_dir,
        run_date=run_date,
    )

    return all_findings, config.meta.version


def main():
    parser = argparse.ArgumentParser(description="FortiGate Config Auditor")
    parser.add_argument("--inventory", required=True, help="Path to inventory.yaml")
    parser.add_argument("--templates", help="Path to templates dir or single .conf template file")
    parser.add_argument("--baseline", help="Path to baseline reports dir for drift detection")
    parser.add_argument("--run-name", help="Name for this audit run (default: datestamp)")
    parser.add_argument("--device", help="Audit only this device hostname")
    parser.add_argument("--tags", nargs="+", help="Only audit devices with these group tags")
    parser.add_argument("--no-ai", action="store_true", help="Skip AI review pass")
    args = parser.parse_args()

    inventory = load_inventory(Path(args.inventory))
    devices = inventory.get("devices", {})

    # Filter by device name
    if args.device:
        devices = {k: v for k, v in devices.items() if args.device in k}
        if not devices:
            print(f"[ERROR] No device matching '{args.device}' found in inventory.", file=sys.stderr)
            sys.exit(1)

    # Filter by tags
    if args.tags:
        devices = {
            k: v for k, v in devices.items()
            if any(tag in v.get("groups", []) for tag in args.tags)
        }

    # Load templates
    rules = []
    if args.templates:
        rules = load_templates(args.templates)
        print(f"[INFO] Loaded {len(rules)} rules from {args.templates}")

    # Set up run directory
    run_date = date.today().isoformat()
    run_name = args.run_name or run_date
    run_dir = Path("reports") / run_name
    run_dir.mkdir(parents=True, exist_ok=True)

    print(f"[INFO] Auditing {len(devices)} device(s) -> reports/{run_name}/")

    device_summaries = []
    for device_name, device_cfg in sorted(devices.items()):
        print(f"[INFO] {device_name}...")
        result = audit_device(
            device_name=device_name,
            device_cfg=device_cfg,
            rules=rules,
            baseline_dir=args.baseline,
            run_dir=run_dir,
            run_date=run_date,
        )
        if result:
            all_findings, version = result
            device_summaries.append({
                "device": device_name,
                "fortios_version": version,
                "findings": [
                    {
                        "rule_id": f.rule_id,
                        "severity": f.severity,
                        "section": f.section,
                        "entry": f.entry,
                        "parameter": f.parameter,
                        "expected": f.expected,
                        "actual": f.actual,
                        "cvss_score": f.cvss_score,
                        "cvss_vector": f.cvss_vector,
                        "ai_summary": f.ai_summary,
                    }
                    for f in all_findings
                ],
            })
            total = len(all_findings)
            critical = sum(1 for f in all_findings if f.severity == "critical")
            print(f"  -> {total} findings ({critical} critical)")

    # Fleet summary
    write_fleet_summary(device_summaries=device_summaries, fleet_dir=run_dir, run_date=run_date)
    print(f"[DONE] Fleet summary: reports/{run_name}/fleet-summary.md")

    if not args.no_ai:
        print("[INFO] AI review pass skipped in CLI mode — invoke via Claude skill for AI analysis.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Verify CLI help works**

```bash
cd /home/dragon/confia && python audit.py --help
```

Expected: prints usage with all arguments listed.

- [ ] **Step 3: Commit**

```bash
cd /home/dragon/confia && git add audit.py && git commit -m "feat: audit.py CLI — fleet mode, template matching, device filtering, report generation"
```

---

## Task 13: Inventory and First Template

**Files:**
- Create: `inventory.yaml`
- Create: `templates/system-admin.conf`

- [ ] **Step 1: Create `inventory.yaml`**

```yaml
# inventory.yaml
# Fleet registry — lists all devices and their group memberships.
# groups are used to filter which audit rules apply (applies-to / excludes in templates).

devices:
  FGT-SENATI-PIRAMIDE-ENTEL-ADM:
    config: FGT-SENATI-PIRAMIDE-ENTEL-ADM_7-4_2878_202604021759.conf
    groups:
      - internet-facing
      - production
      - campus
```

- [ ] **Step 2: Create `templates/system-admin.conf`**

```conf
---
id: SYS-ADMIN-001
title: Admin management access unrestricted (trusthost 0.0.0.0/0)
description: >
  Admin accounts with trusthost1 set to 0.0.0.0/0 allow CLI access
  from any IP address on any network interface.
rationale: >
  Unrestricted trusthosts expose the FortiGate management plane to
  brute-force and credential stuffing attacks from the internet.
  Restricting to a management subnet is a baseline hardening requirement.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
  - https://www.cisecurity.org/benchmark/fortigate
tags:
  - access-control
  - authentication
  - management-plane
applies-to:
  - internet-facing
excludes:
  - air-gapped
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
  score: 9.8
  severity: critical
remediation: >
  Set trusthost1 through trusthost10 to your management subnet(s).
  Coordinate with network team before applying — this will prevent
  admin access from non-whitelisted IPs.
exceptions: >
  Acceptable if the device management interface is behind a dedicated
  jump host or VPN with its own access controls.
source: internal-policy
---
config system admin
    edit "*"
        set trusthost1 !0.0.0.0 0.0.0.0
    next
end

---
id: SYS-ADMIN-002
title: Two-factor authentication disabled on admin account
description: >
  Admin accounts without two-factor authentication rely solely on
  username/password credentials for access.
rationale: >
  Single-factor authentication is insufficient for firewall management.
  Compromised credentials would grant full administrative access.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags:
  - authentication
  - mfa
applies-to:
  - internet-facing
excludes:
  - air-gapped
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N
  score: 9.1
  severity: critical
remediation: >
  Enable two-factor authentication using FortiToken (hardware or mobile)
  or email OTP. Requires FortiToken licenses for hardware tokens.
exceptions: ""
source: internal-policy
---
config system admin
    edit "*"
        set two-factor !disable
    next
end

---
id: SYS-ADMIN-003
title: Admin account force-password-change disabled
description: New admin accounts should be required to change their initial password.
rationale: >
  Default or shared initial passwords pose a credential compromise risk
  if not changed promptly after account creation.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags:
  - authentication
  - password-policy
applies-to: []
excludes: []
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N
  score: 8.1
  severity: high
remediation: >
  Set force-password-change to enable for all non-service accounts.
exceptions: Acceptable for service/API accounts with managed credentials.
source: internal-policy
---
config system admin
    edit "*"
        set force-password-change enable
    next
end
```

- [ ] **Step 3: Verify template loads correctly**

```bash
cd /home/dragon/confia && python -c "
from src.template import load_templates
rules = load_templates('templates/')
print(f'Loaded {len(rules)} rules')
for r in rules:
    print(f'  {r.meta.id}: {r.section} / {list(r.entries.keys())} -> {r.meta.severity}')
"
```

Expected output:
```
Loaded 3 rules
  SYS-ADMIN-001: system admin / ['*'] -> critical
  SYS-ADMIN-002: system admin / ['*'] -> critical
  SYS-ADMIN-003: system admin / ['*'] -> high
```

- [ ] **Step 4: Commit**

```bash
cd /home/dragon/confia && git add inventory.yaml templates/system-admin.conf && git commit -m "feat: inventory.yaml + templates/system-admin.conf — first 3 audit rules"
```

---

## Task 14: End-to-End Integration Test

**Files:**
- Create: `tests/test_audit_e2e.py`

- [ ] **Step 1: Write end-to-end test**

```python
# tests/test_audit_e2e.py
"""Integration test using the real device config file."""
import subprocess
import sys
import yaml
from pathlib import Path
import pytest


REAL_CONF = Path("FGT-SENATI-PIRAMIDE-ENTEL-ADM_7-4_2878_202604021759.conf")
REAL_YAML = Path("FGT-SENATI-PIRAMIDE-ENTEL-ADM_7-4_2878_202604021759.conf.yaml")


@pytest.mark.skipif(not REAL_CONF.exists(), reason="Real config file not present")
def test_parse_real_conf():
    from src.parser import parse_conf
    config = parse_conf(REAL_CONF)
    assert config.meta.version == "7.4.11"
    assert config.meta.hostname == "FGT-SENATI-PIRAMIDE-ENTEL-ADM"
    assert "system admin" in config.sections
    assert "system global" in config.sections


@pytest.mark.skipif(not REAL_YAML.exists(), reason="Real YAML file not present")
def test_parse_real_yaml():
    from src.parser import parse_yaml
    config = parse_yaml(REAL_YAML)
    assert config.meta.version == "7.4.11"
    assert "system admin" in config.sections
    assert "system global" in config.sections


@pytest.mark.skipif(not REAL_CONF.exists(), reason="Real config file not present")
def test_real_conf_and_yaml_same_admin_section():
    from src.parser import parse_conf, parse_yaml
    conf_config = parse_conf(REAL_CONF)
    yaml_config = parse_yaml(REAL_YAML)
    conf_admin = conf_config.sections.get("system admin", {})
    yaml_admin = yaml_config.sections.get("system admin", {})
    assert set(conf_admin.keys()) == set(yaml_admin.keys()), \
        f"Entry names differ: conf={set(conf_admin.keys())} yaml={set(yaml_admin.keys())}"


@pytest.mark.skipif(not REAL_CONF.exists(), reason="Real config file not present")
def test_template_match_real_config(tmp_path):
    from src.parser import parse_conf
    from src.template import load_templates
    from src.matcher import match_rules

    config = parse_conf(REAL_CONF)
    rules = load_templates("templates/")
    findings = match_rules(config, rules, ["internet-facing", "production", "campus"])

    assert len(findings) > 0, "Expected at least one finding on real config"
    severities = {f.severity for f in findings}
    assert "critical" in severities or "high" in severities


@pytest.mark.skipif(not REAL_CONF.exists(), reason="Real config file not present")
def test_cli_run(tmp_path):
    result = subprocess.run(
        [sys.executable, "audit.py",
         "--inventory", "inventory.yaml",
         "--templates", "templates/",
         "--run-name", "test-e2e",
         "--no-ai"],
        capture_output=True, text=True, cwd=str(Path.cwd())
    )
    assert result.returncode == 0, f"CLI failed:\n{result.stderr}"
    assert "DONE" in result.stdout

    run_dir = Path("reports/test-e2e")
    assert run_dir.exists()
    assert (run_dir / "fleet-summary.md").exists()
    assert (run_dir / "fleet-summary.yaml").exists()

    device_dir = run_dir / "FGT-SENATI-PIRAMIDE-ENTEL-ADM"
    assert device_dir.exists()
    assert (device_dir / "summary.md").exists()
    assert (device_dir / "summary.yaml").exists()


@pytest.mark.skipif(not REAL_CONF.exists(), reason="Real config file not present")
def test_cli_output_structure(tmp_path):
    """After CLI run, verify section subdirs exist and findings.yaml is valid."""
    run_dir = Path("reports/test-e2e")
    if not run_dir.exists():
        pytest.skip("Run test_cli_run first")

    device_dir = run_dir / "FGT-SENATI-PIRAMIDE-ENTEL-ADM"
    section_dirs = [d for d in device_dir.iterdir() if d.is_dir()]
    assert len(section_dirs) > 0, "Expected at least one section subdirectory"

    for section_dir in section_dirs:
        findings_yaml = section_dir / "findings.yaml"
        assert findings_yaml.exists(), f"Missing findings.yaml in {section_dir}"
        data = yaml.safe_load(findings_yaml.read_text())
        assert isinstance(data, list)
        if data:
            assert "rule_id" in data[0]
            assert "severity" in data[0]
```

- [ ] **Step 2: Run integration tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_audit_e2e.py -v
```

Expected: all non-skipped tests pass.

- [ ] **Step 3: Run full test suite to confirm nothing broken**

```bash
cd /home/dragon/confia && python -m pytest tests/ -v --tb=short 2>&1 | tail -20
```

Expected: all tests pass (or skip for missing real file).

- [ ] **Step 4: Commit**

```bash
cd /home/dragon/confia && git add tests/test_audit_e2e.py && git commit -m "test: end-to-end integration test against real FortiGate config"
```

---

## Task 15: Claude Code Skill

**Files:**
- Create: `~/.claude/plugins/audit-fortigate/skills/audit-fortigate.md`

The skill wraps the Python CLI and adds AI review agents per section.

- [ ] **Step 1: Create the skill directory**

```bash
mkdir -p ~/.claude/plugins/audit-fortigate/skills
```

- [ ] **Step 2: Create the skill file**

```markdown
---
name: audit-fortigate
description: >
  Audit Fortinet FortiGate configuration files against policy templates and baselines.
  Runs deterministic Python analysis then dispatches parallel AI agents per config section.
  Use when asked to audit, check, or review a FortiGate config file.
trigger: "audit fortigate|/audit-fortigate|audit firewall config|audit .conf file"
---

# FortiGate Config Auditor Skill

Use this skill to audit FortiGate `.conf` or `.conf.yaml` files against policy templates.

## Steps

1. **Run deterministic audit** (Layer 1):

```bash
cd /home/dragon/confia && python audit.py --inventory inventory.yaml --templates templates/ --no-ai
```

Read the output to identify which devices had findings and which section directories were created.

2. **Dispatch parallel AI review agents** (Layer 2):

For each section directory that has findings, dispatch a parallel agent using `superpowers:dispatching-parallel-agents`.

Each agent receives this prompt:
> "You are reviewing a FortiGate config audit finding.
> Read `reports/{run}/{device}/{section}/findings.yaml` for the structured findings.
> Read the raw config section if needed (search in `{device_config_path}` for `config {section}...end`).
> Device firmware: FortiOS {version}.
>
> For each finding:
> 1. Write a 2-3 sentence natural-language explanation of the security risk
> 2. Check if any other parameters in this section look suspicious (not caught by templates)
> 3. Assign ai_confidence (0.0-1.0) — 1.0 = certain finding, 0.5 = possible false positive
>
> Update `findings.yaml` with `ai_summary` and `ai_confidence` for each finding.
> Write `findings.md` with the full human-readable report for this section."

3. **Aggregate**: After all agents complete, run:

```bash
cd /home/dragon/confia && python -c "
from src.reporter import write_fleet_summary, write_device_summary
# Re-read findings.yaml files and regenerate summaries
# (implement aggregator logic here)
"
```

Or ask the user if they want you to read and summarize findings directly in the conversation.

## Conversational Capabilities

- "Audit this device" → run audit against the device's config in inventory
- "Explain the critical findings" → read findings.yaml and summarize in plain English
- "Compare to last week's report" → diff two run directories
- "Generate a template for system-global" → read docs + config, propose template rules
- "Save current config as baseline" → copy current reports/ structure to baselines/
- "What changed since baseline?" → run with --baseline flag

## File Locations

- Inventory: `/home/dragon/confia/inventory.yaml`
- Templates: `/home/dragon/confia/templates/`
- Reports: `/home/dragon/confia/reports/{run-name}/`
- Baselines: `/home/dragon/confia/baselines/`
```

- [ ] **Step 3: Verify skill is discoverable**

```bash
ls ~/.claude/plugins/audit-fortigate/skills/
```

Expected: `audit-fortigate.md`

- [ ] **Step 4: Final commit**

```bash
cd /home/dragon/confia && git add . && git commit -m "feat: Claude Code skill for AI-assisted audit review"
```

---

## Task 16: [UPDATED] Parameter Wildcards in Matcher

**Files:**
- Modify: `src/matcher.py`
- Modify: `tests/test_matcher.py`

Adds `_resolve_params()` so parameter name patterns (`trusthost*`) are expanded against actual parameter names before value comparison. Also updates `match_rules` to pass `chapter_id` and `param_pattern` into `Finding`.

- [ ] **Step 1: Add param wildcard tests**

Append to `tests/test_matcher.py`:

```python
from src.matcher import _resolve_params

def test_resolve_params_wildcard():
    params = ["trusthost1", "trusthost2", "trusthost10", "accprofile"]
    assert set(_resolve_params("trusthost*", params)) == {"trusthost1", "trusthost2", "trusthost10"}

def test_resolve_params_exact():
    params = ["trusthost1", "trusthost2", "accprofile"]
    assert _resolve_params("accprofile", params) == ["accprofile"]

def test_resolve_params_range():
    params = ["trusthost1", "trusthost2", "trusthost9", "trusthost10"]
    # [1-9] is a single-character character class — matches 1..9 only
    assert set(_resolve_params("trusthost[1-9]", params)) == {"trusthost1", "trusthost2", "trusthost9"}

def test_resolve_params_no_match():
    params = ["accprofile", "vdom"]
    assert _resolve_params("trusthost*", params) == []

def test_match_rules_param_wildcard():
    """Rule with trusthost* catches trusthost1 violation."""
    from tests.conftest import SAMPLE_CONF
    from src.parser import parse_conf_text

    TRUSTHOST_TEMPLATE = '''\
---
id: SYS-ADMIN-TH
title: All trusthosts unrestricted
description: test
rationale: test
references: []
tags: []
applies-to: []
excludes: []
fortios-versions: []
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
  score: 9.8
  severity: critical
remediation: ""
exceptions: ""
source: test
---
config system admin
    edit "*"
        set trusthost* !0.0.0.0 0.0.0.0
    next
end
'''
    from src.template import parse_template_text
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(TRUSTHOST_TEMPLATE)
    findings = match_rules(config, rules, [])
    # admin1 has trusthost1=0.0.0.0 -> should find violation
    th_findings = [f for f in findings if f.rule_id == "SYS-ADMIN-TH"]
    assert len(th_findings) >= 1
    assert all(f.param_pattern == "trusthost*" for f in th_findings)
    assert all(f.parameter.startswith("trusthost") for f in th_findings)

def test_finding_has_param_pattern():
    """Finding.param_pattern stores the original pattern, .parameter stores the resolved name."""
    from tests.conftest import SAMPLE_CONF
    from src.parser import parse_conf_text
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    findings = match_rules(config, rules, ["internet-facing"])
    f = next(f for f in findings if f.rule_id == "SYS-ADMIN-001")
    assert f.param_pattern == "trusthost1"   # exact pattern from rule
    assert f.parameter == "trusthost1"        # resolved param name
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py::test_resolve_params_wildcard tests/test_matcher.py::test_match_rules_param_wildcard -v
```

Expected: `ImportError` or `AttributeError`

- [ ] **Step 3: Add `_resolve_params` to `src/matcher.py` and update `match_rules`**

Add after `_resolve_entries` in `src/matcher.py`:

```python
def _resolve_params(pattern: str, param_names: list) -> list:
    """Resolve a parameter name pattern against actual parameter names.

    Supports fnmatch globs: "trusthost*", "ip6-trusthost[1-9]", "accprofile".
    No negation support for param patterns (negation is in the value, not the name).
    """
    return [p for p in param_names if fnmatch.fnmatch(p, pattern)]
```

Replace the inner loop of `match_rules` (the `for param, expected_val` section):

```python
def match_rules(config, rules: list, device_groups: list, chapter_id: str = "") -> list:
    """Run all applicable rules against the parsed config."""
    findings = []
    applicable = _filter_rules(rules, device_groups, config.meta.version)

    for rule in applicable:
        section_data = config.sections.get(rule.section)
        if section_data is None:
            continue

        entry_names = list(section_data.keys())

        for entry_pattern, expected_params in rule.entries.items():
            matching_entries = _resolve_entries(entry_pattern, entry_names)

            for entry_name in matching_entries:
                actual_params = section_data.get(entry_name, {})
                actual_param_names = list(actual_params.keys())

                for param_pattern, expected_val in expected_params.items():
                    # Resolve param pattern -> actual param names
                    matching_params = _resolve_params(param_pattern, actual_param_names)

                    # If pattern is exact and param doesn't exist yet, still check it
                    # (e.g. rule requires param to be set to a specific value)
                    if not matching_params and not any(c in param_pattern for c in "*?[]"):
                        matching_params = [param_pattern]

                    for actual_param in matching_params:
                        actual_val = actual_params.get(actual_param)
                        if _is_violation(expected_val, actual_val):
                            findings.append(Finding(
                                rule_id=rule.meta.id,
                                rule_title=rule.meta.title,
                                chapter_id=chapter_id,
                                section=rule.section,
                                entry=entry_name,
                                parameter=actual_param,
                                param_pattern=param_pattern,
                                expected=expected_val,
                                actual=actual_val if actual_val is not None else "",
                                severity=rule.meta.severity,
                                cvss_score=rule.meta.cvss_score,
                                cvss_vector=rule.meta.cvss_vector,
                            ))

    return findings
```

- [ ] **Step 4: Run matcher tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_matcher.py -v
```

Expected: all pass (existing tests need `chapter_id` and `param_pattern` fields — update fixtures if needed).

- [ ] **Step 5: Fix any broken tests from new Finding fields**

The `Finding` dataclass now has `chapter_id` and `param_pattern`. Update any test that constructs a `Finding` directly to include these fields:

```python
Finding(
    rule_id="SYS-001", rule_title="Test", chapter_id="", section="system admin",
    entry="admin1", parameter="trusthost1", param_pattern="trusthost1",
    expected="!0.0.0.0 0.0.0.0", actual="0.0.0.0 0.0.0.0",
    severity="critical", cvss_score=9.8, cvss_vector="AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
)
```

- [ ] **Step 6: Run full test suite**

```bash
cd /home/dragon/confia && python -m pytest tests/ -v --tb=short
```

Expected: all pass.

- [ ] **Step 7: Commit**

```bash
cd /home/dragon/confia && git add src/matcher.py src/models.py tests/test_matcher.py && git commit -m "feat: parameter name wildcards — fnmatch patterns on param names, param_pattern in Finding"
```

---

## Task 17: [UPDATED] Chapter Loader

**Files:**
- Modify: `src/template.py`
- Modify: `tests/test_template.py`

Replaces the flat `load_templates(path)` function with `load_chapters(templates_dir)` that reads chapter folders (`chapter.yaml` + `rules.conf`).

- [ ] **Step 1: Add tests for chapter loading**

Append to `tests/test_template.py`:

```python
from src.template import load_chapter_dir, load_chapters
from src.models import Chapter
import pathlib, tempfile, yaml as _yaml

CHAPTER_YAML = """\
id: admin-users
title: Administrative User Access
description: Audit of admin accounts and access profiles
sections:
  - system admin
  - system accprofile
"""


def test_load_chapter_dir(tmp_path):
    chapter_dir = tmp_path / "admin-users"
    chapter_dir.mkdir()
    (chapter_dir / "chapter.yaml").write_text(CHAPTER_YAML)
    (chapter_dir / "rules.conf").write_text(SAMPLE_TEMPLATE)

    chapter = load_chapter_dir(chapter_dir)
    assert isinstance(chapter, Chapter)
    assert chapter.id == "admin-users"
    assert chapter.title == "Administrative User Access"
    assert "system admin" in chapter.sections
    assert "system accprofile" in chapter.sections
    assert len(chapter.rules) == 2


def test_load_chapter_dir_no_rules(tmp_path):
    """Chapter with no rules.conf -> empty rules list, no crash."""
    chapter_dir = tmp_path / "empty-chapter"
    chapter_dir.mkdir()
    (chapter_dir / "chapter.yaml").write_text(CHAPTER_YAML)
    chapter = load_chapter_dir(chapter_dir)
    assert chapter.rules == []


def test_load_chapters_from_dir(tmp_path):
    for name in ["admin-users", "vpn-config"]:
        d = tmp_path / name
        d.mkdir()
        (d / "chapter.yaml").write_text(f"id: {name}\ntitle: {name}\ndescription: ''\nsections:\n  - system global\n")
    chapters = load_chapters(tmp_path)
    assert len(chapters) == 2
    chapter_ids = [c.id for c in chapters]
    assert "admin-users" in chapter_ids
    assert "vpn-config" in chapter_ids


def test_load_chapters_skips_non_chapter_dirs(tmp_path):
    """Directories without chapter.yaml are silently skipped."""
    d = tmp_path / "not-a-chapter"
    d.mkdir()
    (d / "rules.conf").write_text(SAMPLE_TEMPLATE)
    chapters = load_chapters(tmp_path)
    assert chapters == []
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_template.py::test_load_chapter_dir -v
```

Expected: `ImportError`

- [ ] **Step 3: Add chapter loading functions to `src/template.py`**

Append to `src/template.py`:

```python
def load_chapter_dir(chapter_dir) -> object:
    """Load a single chapter from a directory containing chapter.yaml and optionally rules.conf."""
    from pathlib import Path
    from .models import Chapter
    chapter_dir = Path(chapter_dir)
    meta = yaml.safe_load((chapter_dir / "chapter.yaml").read_text(encoding="utf-8"))
    rules_file = chapter_dir / "rules.conf"
    rules = parse_template_text(rules_file.read_text(encoding="utf-8")) if rules_file.exists() else []
    return Chapter(
        id=str(meta.get("id", chapter_dir.name)),
        title=str(meta.get("title", "")),
        description=str(meta.get("description", "")),
        sections=[str(s) for s in (meta.get("sections") or [])],
        rules=rules,
    )


def load_chapters(templates_dir) -> list:
    """Load all chapters from a templates directory.

    Each subdirectory containing a chapter.yaml is treated as a chapter.
    Directories without chapter.yaml are silently skipped.
    """
    from pathlib import Path
    templates_dir = Path(templates_dir)
    chapters = []
    for d in sorted(templates_dir.iterdir()):
        if d.is_dir() and (d / "chapter.yaml").exists():
            chapters.append(load_chapter_dir(d))
    return chapters
```

- [ ] **Step 4: Run template tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_template.py -v
```

Expected: all pass.

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/template.py tests/test_template.py && git commit -m "feat: chapter loader — chapter.yaml + rules.conf per chapter folder"
```

---

## Task 18: [NEW] Config Extractor

**Files:**
- Create: `src/extractor.py`
- Create: `tests/test_extractor.py`

Extracts the relevant sections for a chapter from a `ParsedConfig`, then writes a `.conf` snippet and a `.json` file for cross-device comparison.

- [ ] **Step 1: Write failing tests**

```python
# tests/test_extractor.py
import json
import pytest
from pathlib import Path
from src.extractor import extract_sections, write_conf_extract, write_json_extract
from src.parser import parse_conf_text
from src.models import FLAT_KEY
from tests.conftest import SAMPLE_CONF


@pytest.fixture
def config():
    return parse_conf_text(SAMPLE_CONF)


def test_extract_sections_returns_subset(config):
    extracted = extract_sections(config, ["system admin"])
    assert "system admin" in extracted
    assert "system global" not in extracted
    assert "system password-policy" not in extracted


def test_extract_sections_multiple(config):
    extracted = extract_sections(config, ["system admin", "system global"])
    assert "system admin" in extracted
    assert "system global" in extracted


def test_extract_sections_missing_section(config):
    """Requesting a section not in config returns empty dict for that key — no crash."""
    extracted = extract_sections(config, ["system admin", "system vpn"])
    assert "system admin" in extracted
    assert "system vpn" not in extracted


def test_write_conf_extract(tmp_path, config):
    extracted = extract_sections(config, ["system admin"])
    out = tmp_path / "config-extract.conf"
    write_conf_extract(extracted, out)
    text = out.read_text()
    assert "config system admin" in text
    assert "edit" in text
    assert "set accprofile" in text
    assert "end" in text


def test_write_conf_extract_flat_section(tmp_path, config):
    extracted = extract_sections(config, ["system global"])
    out = tmp_path / "config-extract.conf"
    write_conf_extract(extracted, out)
    text = out.read_text()
    assert "config system global" in text
    assert "set hostname" in text
    assert "end" in text


def test_write_json_extract(tmp_path, config):
    extracted = extract_sections(config, ["system admin"])
    out = tmp_path / "config-extract.json"
    write_json_extract(
        extracted=extracted,
        device="FGT-TEST",
        fortios_version="7.4.11",
        chapter_id="admin-users",
        out_path=out,
    )
    data = json.loads(out.read_text())
    assert data["device"] == "FGT-TEST"
    assert data["fortios_version"] == "7.4.11"
    assert data["chapter"] == "admin-users"
    assert "system admin" in data["sections"]
    assert "admin1" in data["sections"]["system admin"]
    assert data["sections"]["system admin"]["admin1"]["accprofile"] == "super_admin"


def test_write_json_extract_flat_section(tmp_path, config):
    extracted = extract_sections(config, ["system global"])
    out = tmp_path / "config-extract.json"
    write_json_extract(
        extracted=extracted,
        device="FGT-TEST",
        fortios_version="7.4.11",
        chapter_id="system-global",
        out_path=out,
    )
    data = json.loads(out.read_text())
    # Flat sections are unwrapped from FLAT_KEY
    assert "hostname" in data["sections"]["system global"]
    assert data["sections"]["system global"]["hostname"] == "FGT-TEST"


def test_json_extract_is_valid_json(tmp_path, config):
    extracted = extract_sections(config, ["system admin", "system global"])
    out = tmp_path / "config-extract.json"
    write_json_extract(extracted=extracted, device="FGT-TEST",
                       fortios_version="7.4.11", chapter_id="test", out_path=out)
    # Must not raise
    json.loads(out.read_text())
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_extractor.py -v
```

Expected: `ImportError`

- [ ] **Step 3: Create `src/extractor.py`**

```python
# src/extractor.py
"""Extract relevant config sections for a chapter and serialize to .conf and .json."""
import json
from pathlib import Path
from .models import FLAT_KEY


def extract_sections(config, section_keys: list) -> dict:
    """Return only the specified sections from a ParsedConfig.

    Missing sections are silently omitted (no KeyError).
    """
    return {k: config.sections[k] for k in section_keys if k in config.sections}


def write_conf_extract(extracted: dict, out_path) -> None:
    """Write extracted sections as a human-readable FortiOS .conf snippet."""
    out_path = Path(out_path)
    lines = []

    for section_key, section_data in sorted(extracted.items()):
        lines.append(f"config {section_key}")

        if FLAT_KEY in section_data:
            # Flat section — no edit/next
            for param, val in sorted(section_data[FLAT_KEY].items()):
                lines.append(f"    set {param} {val}")
        else:
            # Entry-based section
            for entry_name, params in sorted(section_data.items()):
                lines.append(f'    edit "{entry_name}"')
                for param, val in sorted(params.items()):
                    lines.append(f"        set {param} {val}")
                lines.append("    next")

        lines.append("end")
        lines.append("")

    out_path.write_text("\n".join(lines), encoding="utf-8")


def write_json_extract(
    extracted: dict,
    device: str,
    fortios_version: str,
    chapter_id: str,
    out_path,
) -> None:
    """Write extracted sections as structured JSON for cross-device comparison."""
    out_path = Path(out_path)

    # Unwrap FLAT_KEY so flat sections are directly {param: val} not {__flat__: {param: val}}
    sections_out = {}
    for section_key, section_data in extracted.items():
        if FLAT_KEY in section_data:
            sections_out[section_key] = dict(section_data[FLAT_KEY])
        else:
            sections_out[section_key] = {
                entry: dict(params) for entry, params in section_data.items()
            }

    data = {
        "device": device,
        "fortios_version": fortios_version,
        "chapter": chapter_id,
        "sections": sections_out,
    }
    out_path.write_text(
        json.dumps(data, indent=2, ensure_ascii=False, sort_keys=True),
        encoding="utf-8",
    )
```

- [ ] **Step 4: Run extractor tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_extractor.py -v
```

Expected: `8 passed`

- [ ] **Step 5: Commit**

```bash
cd /home/dragon/confia && git add src/extractor.py tests/test_extractor.py && git commit -m "feat: config extractor — extract chapter sections, write .conf snippet and .json"
```

---

## Task 19: [UPDATED] Reporter and CLI — Chapter-Based Output

**Files:**
- Modify: `src/reporter.py`
- Modify: `audit.py`
- Modify: `tests/test_reporter.py`

The reporter now writes one folder per chapter (not per section). Each chapter folder gets `config-extract.conf`, `config-extract.json`, plus the existing `findings.yaml`, `findings.md`, `patch.conf`.

- [ ] **Step 1: Add updated reporter tests**

Append to `tests/test_reporter.py`:

```python
from src.reporter import write_chapter_report
from src.extractor import extract_sections
from src.template import parse_template_text
from tests.conftest import SAMPLE_CONF, SAMPLE_TEMPLATE
from src.models import Chapter


@pytest.fixture
def chapter_findings():
    config = parse_conf_text(SAMPLE_CONF)
    rules = parse_template_text(SAMPLE_TEMPLATE)
    from src.matcher import match_rules
    return match_rules(config, rules, ["internet-facing"], chapter_id="admin-users")


@pytest.fixture
def chapter(chapter_findings):
    return Chapter(
        id="admin-users",
        title="Administrative User Access",
        description="",
        sections=["system admin"],
        rules=[],
    )


def test_write_chapter_report_creates_files(tmp_path, chapter, chapter_findings):
    config = parse_conf_text(SAMPLE_CONF)
    chapter_dir = tmp_path / "admin-users"
    write_chapter_report(
        chapter=chapter,
        findings=chapter_findings,
        config=config,
        device_hostname="FGT-TEST",
        fortios_version="7.4.11",
        out_dir=chapter_dir,
    )
    assert (chapter_dir / "config-extract.conf").exists()
    assert (chapter_dir / "config-extract.json").exists()
    assert (chapter_dir / "findings.yaml").exists()
    assert (chapter_dir / "findings.md").exists()
    assert (chapter_dir / "patch.conf").exists()


def test_write_chapter_report_conf_extract(tmp_path, chapter, chapter_findings):
    config = parse_conf_text(SAMPLE_CONF)
    chapter_dir = tmp_path / "admin-users"
    write_chapter_report(
        chapter=chapter,
        findings=chapter_findings,
        config=config,
        device_hostname="FGT-TEST",
        fortios_version="7.4.11",
        out_dir=chapter_dir,
    )
    text = (chapter_dir / "config-extract.conf").read_text()
    assert "config system admin" in text
    assert "admin1" in text


def test_write_chapter_report_json_extract(tmp_path, chapter, chapter_findings):
    import json as _json
    config = parse_conf_text(SAMPLE_CONF)
    chapter_dir = tmp_path / "admin-users"
    write_chapter_report(
        chapter=chapter,
        findings=chapter_findings,
        config=config,
        device_hostname="FGT-TEST",
        fortios_version="7.4.11",
        out_dir=chapter_dir,
    )
    data = _json.loads((chapter_dir / "config-extract.json").read_text())
    assert data["chapter"] == "admin-users"
    assert "system admin" in data["sections"]
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py::test_write_chapter_report_creates_files -v
```

Expected: `ImportError`

- [ ] **Step 3: Add `write_chapter_report` to `src/reporter.py`**

Append to `src/reporter.py`:

```python
def write_chapter_report(
    chapter,
    findings: list,
    config,
    device_hostname: str,
    fortios_version: str,
    out_dir,
) -> None:
    """Write all outputs for one chapter: extract + findings + patch."""
    from .extractor import extract_sections, write_conf_extract, write_json_extract
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Config extract
    extracted = extract_sections(config, chapter.sections)
    write_conf_extract(extracted, out_dir / "config-extract.conf")
    write_json_extract(
        extracted=extracted,
        device=device_hostname,
        fortios_version=fortios_version,
        chapter_id=chapter.id,
        out_path=out_dir / "config-extract.json",
    )

    # Findings — filter to this chapter's sections
    chapter_findings = [f for f in findings if f.section in chapter.sections]

    # Write per-section files aggregated into the chapter folder
    # (findings.yaml contains all findings for all sections in this chapter)
    findings_data = [_finding_to_dict(f) for f in chapter_findings]
    (out_dir / "findings.yaml").write_text(
        yaml.dump(findings_data, default_flow_style=False, allow_unicode=True),
        encoding="utf-8",
    )

    # findings.md — write all sections together
    lines = [f"# Findings: {chapter.title} ({chapter.id})", ""]
    if not chapter_findings:
        lines.append("No findings.")
    else:
        sorted_findings = sorted(
            chapter_findings,
            key=lambda f: (_SEVERITY_ORDER.get(f.severity, 99), -f.cvss_score),
        )
        for f in sorted_findings:
            sev = f.severity.upper()
            lines += [
                f"## [{sev}] {f.rule_id} — {f.rule_title}",
                f"CVSS: {f.cvss_score} ({f.cvss_vector})",
                f"Section: `{f.section}` | Entry: `{f.entry}` | Param: `{f.parameter}`",
                f"Pattern: `{f.param_pattern}`" if f.param_pattern != f.parameter else "",
                "",
                f"**Expected:** `{f.parameter}` {f.expected}",
                f"**Actual:**   `{f.parameter}` = `{f.actual}`",
                "",
            ]
            if f.ai_summary:
                lines += [f"> {f.ai_summary}", ""]
            lines += ["---", ""]
    (out_dir / "findings.md").write_text("\n".join(lines), encoding="utf-8")

    # patch.conf — all sections in chapter
    for section in chapter.sections:
        section_findings = [f for f in chapter_findings if f.section == section]
        if section_findings:
            _write_patch(section_findings, section, device_hostname, out_dir / "patch.conf")
            break  # simplified: write patch for first section with findings
    else:
        _write_patch([], chapter.sections[0] if chapter.sections else "unknown",
                     device_hostname, out_dir / "patch.conf")
```

- [ ] **Step 4: Update `audit.py` to use chapters**

Replace the `audit_device` function body in `audit.py`:

```python
def audit_device(device_name: str, device_cfg: dict, chapters: list, baseline_dir, run_dir: Path, run_date: str):
    """Run audit for a single device. Returns (all_findings, fortios_version)."""
    from src.matcher import match_rules
    from src.reporter import write_chapter_report, write_device_summary
    from src.template import load_chapters

    config_path = Path(device_cfg["config"])
    groups = device_cfg.get("groups", [])

    if not config_path.exists():
        print(f"  [WARN] Config not found: {config_path}", file=sys.stderr)
        return None

    config = parse_device_config(config_path)
    device_dir = run_dir / device_name
    device_dir.mkdir(parents=True, exist_ok=True)

    all_findings = []

    for chapter in chapters:
        chapter_findings = match_rules(
            config, chapter.rules, groups, chapter_id=chapter.id
        )
        all_findings.extend(chapter_findings)

        chapter_dir = device_dir / chapter.id
        write_chapter_report(
            chapter=chapter,
            findings=chapter_findings,
            config=config,
            device_hostname=device_name,
            fortios_version=config.meta.version,
            out_dir=chapter_dir,
        )

    write_device_summary(
        all_findings=all_findings,
        device_hostname=device_name,
        fortios_version=config.meta.version,
        device_dir=device_dir,
        run_date=run_date,
    )

    return all_findings, config.meta.version
```

Also update `main()` to load chapters instead of flat templates:

```python
# Replace the "Load templates" block:
chapters = []
if args.templates:
    from src.template import load_chapters as _load_chapters
    chapters = _load_chapters(args.templates)
    total_rules = sum(len(c.rules) for c in chapters)
    print(f"[INFO] Loaded {len(chapters)} chapters, {total_rules} rules from {args.templates}")
```

And update the `audit_device` call in `main()`:

```python
result = audit_device(
    device_name=device_name,
    device_cfg=device_cfg,
    chapters=chapters,
    baseline_dir=args.baseline,
    run_dir=run_dir,
    run_date=run_date,
)
```

- [ ] **Step 5: Run reporter tests**

```bash
cd /home/dragon/confia && python -m pytest tests/test_reporter.py -v
```

Expected: all pass.

- [ ] **Step 6: Commit**

```bash
cd /home/dragon/confia && git add src/reporter.py audit.py tests/test_reporter.py && git commit -m "feat: chapter-based output — config-extract.conf, config-extract.json, findings per chapter"
```

---

## Task 20: [UPDATED] Templates Folder — Chapter Structure

**Files:**
- Create: `templates/admin-users/chapter.yaml`
- Create: `templates/admin-users/rules.conf`
- Delete: `templates/system-admin.conf` (replaced by chapter structure)

- [ ] **Step 1: Create chapter folder**

```bash
mkdir -p /home/dragon/confia/templates/admin-users
```

- [ ] **Step 2: Create `templates/admin-users/chapter.yaml`**

```yaml
id: admin-users
title: Administrative User Access
description: >
  Audit of admin user accounts (config system admin) and associated access
  profiles (config system accprofile). Both sections are required to fully
  evaluate who has admin access and what they can do.
sections:
  - system admin
  - system accprofile
```

- [ ] **Step 3: Move rules to `templates/admin-users/rules.conf`**

Create `templates/admin-users/rules.conf` with the content from the old `templates/system-admin.conf` (Tasks 13), plus add this rule for accprofile:

```conf
---
id: SYS-ADMIN-001
title: Admin management access unrestricted (trusthost 0.0.0.0/0)
description: >
  Admin accounts with any trusthost set to 0.0.0.0/0 allow CLI access
  from any IP address.
rationale: >
  Unrestricted trusthosts expose the FortiGate management plane to brute-force
  attacks from the internet.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags:
  - access-control
  - management-plane
applies-to:
  - internet-facing
excludes:
  - air-gapped
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
  score: 9.8
  severity: critical
remediation: >
  Set trusthost1-10 to your management subnet. Coordinate with network team
  before applying — this blocks admin from non-whitelisted IPs.
exceptions: >
  Acceptable if management interface is behind a jump host with its own controls.
source: internal-policy
---
config system admin
    edit "*"
        set trusthost* !0.0.0.0 0.0.0.0
    next
end

---
id: SYS-ADMIN-002
title: Two-factor authentication disabled on admin account
description: Admin accounts must use two-factor authentication.
rationale: Single-factor auth is insufficient for firewall management.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags:
  - authentication
  - mfa
applies-to:
  - internet-facing
excludes:
  - air-gapped
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N
  score: 9.1
  severity: critical
remediation: Enable two-factor with FortiToken or email OTP.
exceptions: ""
source: internal-policy
---
config system admin
    edit "*"
        set two-factor !disable
    next
end

---
id: SYS-ADMIN-003
title: Admin account force-password-change disabled
description: New admin accounts should require password change on first login.
rationale: Initial or shared passwords pose credential compromise risk.
references:
  - https://docs.fortinet.com/document/fortigate/7.4.11/cli-reference/390485493/config-system-admin
tags:
  - authentication
  - password-policy
applies-to: []
excludes: []
fortios-versions:
  - ">=7.0"
cvss:
  vector: AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N
  score: 8.1
  severity: high
remediation: Set force-password-change to enable for all non-service accounts.
exceptions: Acceptable for service/API accounts with managed credentials.
source: internal-policy
---
config system admin
    edit "*"
        set force-password-change enable
    next
end
```

- [ ] **Step 4: Verify chapter loads correctly**

```bash
cd /home/dragon/confia && python -c "
from src.template import load_chapters
chapters = load_chapters('templates/')
for c in chapters:
    print(f'Chapter: {c.id} | sections: {c.sections} | rules: {len(c.rules)}')
    for r in c.rules:
        print(f'  {r.meta.id}: {r.section} / {list(r.entries.keys())} -> {r.meta.severity}')
"
```

Expected:
```
Chapter: admin-users | sections: ['system admin', 'system accprofile'] | rules: 3
  SYS-ADMIN-001: system admin / ['*'] -> critical
  SYS-ADMIN-002: system admin / ['*'] -> critical
  SYS-ADMIN-003: system admin / ['*'] -> high
```

- [ ] **Step 5: Delete old flat template file**

```bash
rm /home/dragon/confia/templates/system-admin.conf
```

- [ ] **Step 6: Run full CLI end-to-end**

```bash
cd /home/dragon/confia && python audit.py --inventory inventory.yaml --templates templates/ --run-name verify-chapters --no-ai
```

Then verify output:

```bash
ls reports/verify-chapters/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/
# Expected: config-extract.conf  config-extract.json  findings.yaml  findings.md  patch.conf

cat reports/verify-chapters/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/config-extract.conf
# Expected: shows system admin + system accprofile sections

python -c "
import json
d = json.load(open('reports/verify-chapters/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/config-extract.json'))
print('device:', d['device'])
print('chapter:', d['chapter'])
print('sections:', list(d['sections'].keys()))
"
```

- [ ] **Step 7: Commit**

```bash
cd /home/dragon/confia && git add templates/ && git rm templates/system-admin.conf 2>/dev/null; git commit -m "feat: chapter folder structure — admin-users chapter with system admin + system accprofile"
```

---

## Verification Checklist

After completing all tasks, verify the full pipeline end-to-end:

```bash
# 1. All unit tests pass
cd /home/dragon/confia && python -m pytest tests/ -v

# 2. Chapters load correctly
python -c "
from src.template import load_chapters
chapters = load_chapters('templates/')
print(f'{len(chapters)} chapter(s), {sum(len(c.rules) for c in chapters)} total rules')
for c in chapters:
    print(f'  {c.id}: sections={c.sections}, rules={len(c.rules)}')
"

# 3. Real config parses correctly
python -c "
from src.parser import parse_conf
c = parse_conf('FGT-SENATI-PIRAMIDE-ENTEL-ADM_7-4_2878_202604021759.conf')
print('version:', c.meta.version)
print('hostname:', c.meta.hostname)
print('sections:', len(c.sections))
"

# 4. Param wildcard works
python -c "
from src.matcher import _resolve_params
params = ['trusthost1','trusthost2','trusthost10','accprofile','vdom']
print('trusthost*:', _resolve_params('trusthost*', params))   # trusthost1,2,10
print('trusthost[1-9]:', _resolve_params('trusthost[1-9]', params))  # trusthost1,2
"

# 5. Entry glob + entry negation works
python -c "
from src.matcher import _resolve_entries
names = ['suprateam', 'admin_ops', 'admin_read']
print('admin_*:', _resolve_entries('admin_*', names))      # ['admin_ops','admin_read']
print('!suprateam:', _resolve_entries('!suprateam', names)) # ['admin_ops','admin_read']
print('*:', _resolve_entries('*', names))                   # all 3
"

# 6. CLI runs and produces reports
python audit.py --inventory inventory.yaml --templates templates/ --run-name verify --no-ai

# 7. Check chapter folder structure
ls reports/verify/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/
# Expected: config-extract.conf  config-extract.json  findings.yaml  findings.md  patch.conf

# 8. Check config-extract.conf contains both sections
grep "^config" reports/verify/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/config-extract.conf
# Expected: config system admin + config system accprofile

# 9. Check config-extract.json is valid and has expected structure
python -c "
import json
d = json.load(open('reports/verify/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/config-extract.json'))
print('device:', d['device'])
print('chapter:', d['chapter'])
print('sections:', list(d['sections'].keys()))
admins = list(d['sections'].get('system admin', {}).keys())
print('admin entries:', admins)
"

# 10. Check trusthost* finding appears in findings.yaml
python -c "
import yaml
findings = yaml.safe_load(open('reports/verify/FGT-SENATI-PIRAMIDE-ENTEL-ADM/admin-users/findings.yaml').read())
print(f'{len(findings)} finding(s)')
for f in findings:
    print(f'  [{f[\"severity\"].upper()}] {f[\"rule_id\"]} — {f[\"entry\"]} / {f[\"parameter\"]}')
"
```
