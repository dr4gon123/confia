# FortiGate CLI Reference Scraper — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Playwright-based scraper that fetches all FortiOS CLI configuration command pages from docs.fortinet.com and saves them as structured Markdown files with Pandoc Grid Tables.

**Architecture:** Three Python modules in `tools/scraper/`: `discover.py` crawls the TOC nav to enumerate command URLs per version, `extract.py` renders each page with Playwright and converts the HTML parameter table to Pandoc Grid Table markdown via pypandoc, and `scrape_cli_ref.py` orchestrates both with rate limiting, retry, and skip-if-exists resumability.

**Tech Stack:** Python 3.11+, Playwright (headless Chromium), pypandoc + Pandoc (system install), PyYAML, pytest

---

## File Map

| File | Responsibility |
|---|---|
| `tools/scraper/requirements.txt` | Scraper-specific dependencies |
| `tools/scraper/versions.yaml` | Manually maintained version list |
| `tools/scraper/discover.py` | TOC crawl → list of (section, slug, url) |
| `tools/scraper/extract.py` | Page render → markdown content (pure utils + Playwright) |
| `tools/scraper/scrape_cli_ref.py` | CLI entry point + main orchestration loop |
| `tools/scraper/tests/test_utils.py` | Unit tests for pure functions in extract.py |

---

## Task 1: Scaffold — dependencies, versions, folder structure

**Files:**
- Create: `tools/scraper/requirements.txt`
- Create: `tools/scraper/versions.yaml`
- Create: `tools/scraper/tests/__init__.py`

- [ ] **Step 1: Create `tools/scraper/requirements.txt`**

```
playwright>=1.40
pypandoc>=1.13
pyyaml>=6.0
pytest>=8.0
```

- [ ] **Step 2: Create `tools/scraper/versions.yaml`**

```yaml
# Manually maintained list of FortiOS versions to scrape.
# Add new patch releases as Fortinet publishes them.
"7.4":
  - 7.4.0
  - 7.4.1
  - 7.4.2
  - 7.4.3
  - 7.4.4
  - 7.4.5
  - 7.4.6
  - 7.4.7
"7.6":
  - 7.6.0
  - 7.6.1
  - 7.6.2
"8.0":
  - 8.0.0
```

- [ ] **Step 3: Create empty `tools/scraper/tests/__init__.py`**

```python
```

- [ ] **Step 4: Install dependencies**

```bash
cd tools/scraper
pip install -r requirements.txt
playwright install chromium
```

Expected: Chromium downloads and installs without error.

- [ ] **Step 5: Verify Pandoc is installed on the system**

```bash
pandoc --version
```

Expected: Pandoc version printed. If missing: `sudo dnf install pandoc` (Fedora) or `sudo apt install pandoc` (Debian/Ubuntu).

- [ ] **Step 6: Commit**

```bash
git add tools/scraper/requirements.txt tools/scraper/versions.yaml tools/scraper/tests/__init__.py
git commit -m "chore: scaffold cli-reference scraper tool"
```

---

## Task 2: Pure utility functions + tests

**Files:**
- Create: `tools/scraper/extract.py`
- Create: `tools/scraper/tests/test_utils.py`

- [ ] **Step 1: Write failing tests for pure utility functions**

Create `tools/scraper/tests/test_utils.py`:

```python
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from extract import slug_to_filename, output_path, build_markdown, table_to_pandoc


def test_slug_to_filename_replaces_hyphens():
    assert slug_to_filename("config-alertemail-setting") == "config_alertemail_setting.md"


def test_slug_to_filename_single_word():
    assert slug_to_filename("config-system") == "config_system.md"


def test_output_path_structure(tmp_path):
    p = output_path(tmp_path, "8.0.0", "alertemail", "config-alertemail-setting")
    assert p == tmp_path / "config" / "8.0" / "8.0.0" / "alertemail" / "config_alertemail_setting.md"


def test_output_path_major_derived_from_version(tmp_path):
    p = output_path(tmp_path, "7.4.3", "system", "config-system-global")
    assert p == tmp_path / "config" / "7.4" / "7.4.3" / "system" / "config_system_global.md"


def test_build_markdown_with_table():
    md = build_markdown("config alertemail setting", "Configure alert email.", "TABLE_CONTENT")
    assert "# config alertemail setting" in md
    assert "Configure alert email." in md
    assert "## Syntax" in md
    assert "config alertemail setting" in md
    assert "## Parameters" in md
    assert "TABLE_CONTENT" in md


def test_build_markdown_without_table():
    md = build_markdown("config alertemail setting", "Configure alert email.", None)
    assert "_No parameter table found._" in md


def test_table_to_pandoc_produces_grid_table():
    html = """
    <table>
      <thead><tr><th>Parameter</th><th>Type</th></tr></thead>
      <tbody><tr><td>severity</td><td>option</td></tr></tbody>
    </table>
    """
    result = table_to_pandoc(html)
    # Pandoc grid tables use +---+ borders
    assert "+" in result
    assert "Parameter" in result
    assert "severity" in result
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd tools/scraper
python -m pytest tests/test_utils.py -v
```

Expected: `ModuleNotFoundError: No module named 'extract'` — confirms tests are wired correctly.

- [ ] **Step 3: Implement `tools/scraper/extract.py`**

```python
from pathlib import Path

import pypandoc
from playwright.sync_api import Page


def slug_to_filename(slug: str) -> str:
    return slug.replace("-", "_") + ".md"


def output_path(repo_root: Path, version: str, section: str, slug: str) -> Path:
    major = ".".join(version.split(".")[:2])
    return repo_root / "config" / major / version / section / slug_to_filename(slug)


def table_to_pandoc(table_html: str) -> str:
    return pypandoc.convert_text(table_html, "markdown", format="html")


def build_markdown(command_name: str, description: str, pandoc_table: str | None) -> str:
    parts = [
        f"# {command_name}",
        "",
        description,
        "",
        "## Syntax",
        "",
        "```",
        command_name,
        "    set <parameter> <value>",
        "end",
        "```",
        "",
        "## Parameters",
        "",
        pandoc_table if pandoc_table else "_No parameter table found._",
    ]
    return "\n".join(parts) + "\n"


def extract_page(page: Page) -> tuple[str, str, str | None]:
    """
    Extract (command_name, description, table_html | None) from a rendered page.

    Waits for the <h1> to appear before reading content, so it is safe to call
    immediately after page.goto().
    """
    page.wait_for_selector("h1", timeout=15_000)

    h1 = page.query_selector("h1")
    command_name = h1.inner_text().strip() if h1 else ""

    # First <p> that follows the h1 in document order
    description = page.eval_on_selector_all(
        "h1 ~ p",
        "els => els.length > 0 ? els[0].innerText.trim() : ''",
    )

    # First <table> in the page body (the parameter table)
    table_el = page.query_selector("table")
    table_html = table_el.outer_html() if table_el else None

    return command_name, description, table_html
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd tools/scraper
python -m pytest tests/test_utils.py -v
```

Expected:
```
PASSED tests/test_utils.py::test_slug_to_filename_replaces_hyphens
PASSED tests/test_utils.py::test_slug_to_filename_single_word
PASSED tests/test_utils.py::test_output_path_structure
PASSED tests/test_utils.py::test_output_path_major_derived_from_version
PASSED tests/test_utils.py::test_build_markdown_with_table
PASSED tests/test_utils.py::test_build_markdown_without_table
PASSED tests/test_utils.py::test_table_to_pandoc_produces_grid_table
7 passed
```

- [ ] **Step 5: Commit**

```bash
git add tools/scraper/extract.py tools/scraper/tests/test_utils.py
git commit -m "feat: add scraper utility functions with tests"
```

---

## Task 3: TOC discovery module

**Files:**
- Create: `tools/scraper/discover.py`

- [ ] **Step 1: Create `tools/scraper/discover.py`**

```python
from playwright.sync_api import Page

BASE_URL = "https://docs.fortinet.com/document/fortigate"

# Slugs that signal the end of the CLI configuration commands section in the TOC.
_SECTION_TERMINATORS = {"cli-diagnose-commands", "cli-execute-commands"}


def discover_commands(page: Page, version: str) -> list[tuple[str, str, str]]:
    """
    Return list of (section, slug, url) for all config commands in a version.

    Navigates to the CLI reference root (which redirects to the TOC page),
    reads the left-nav in document order, and collects links under
    'CLI configuration commands' whose slugs start with 'config-'.
    The section is the most recent non-config- slug seen before each command.
    """
    toc_url = f"{BASE_URL}/{version}/cli-reference/"
    page.goto(toc_url, wait_until="networkidle", timeout=60_000)

    # Extract all nav links in document order as {href, text} dicts.
    links: list[dict] = page.eval_on_selector_all(
        "nav a[href*='/cli-reference/']",
        "els => els.map(el => ({href: el.href, text: el.textContent.trim()}))",
    )

    in_config_section = False
    current_section: str | None = None
    results: list[tuple[str, str, str]] = []

    for link in links:
        href: str = link["href"]
        slug = href.rstrip("/").split("/")[-1]

        if slug == "cli-configuration-commands":
            in_config_section = True
            continue

        if not in_config_section:
            continue

        if slug in _SECTION_TERMINATORS:
            break

        if slug.startswith("config-"):
            if current_section is not None:
                results.append((current_section, slug, href))
        else:
            # Section header e.g. "alertemail", "antivirus"
            current_section = slug

    return results
```

- [ ] **Step 2: Manually verify discovery against the live site**

Run this one-off check script from `tools/scraper/`:

```python
# run as: python -c "exec(open('_check_discover.py').read())"
# _check_discover.py (do not commit)
from playwright.sync_api import sync_playwright
from discover import discover_commands

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    results = discover_commands(page, "8.0.0")
    browser.close()

print(f"Found {len(results)} commands")
for section, slug, url in results[:5]:
    print(f"  [{section}] {slug}")
```

```bash
cd tools/scraper
python -c "
from playwright.sync_api import sync_playwright
from discover import discover_commands

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    results = discover_commands(page, '8.0.0')
    browser.close()

print(f'Found {len(results)} commands')
for section, slug, url in results[:5]:
    print(f'  [{section}] {slug}')
"
```

Expected output (approximately):
```
Found 847 commands
  [alertemail] config-alertemail-setting
  [antivirus] config-antivirus-exempt-list
  [antivirus] config-antivirus-profile
  [antivirus] config-antivirus-quarantine
  [application] config-application-categories
```

If `Found 0 commands`, the nav selector `nav a[href*='/cli-reference/']` needs adjustment. Open a headed browser to inspect: change `p.chromium.launch()` to `p.chromium.launch(headless=False)` and inspect the nav HTML.

- [ ] **Step 3: Commit**

```bash
git add tools/scraper/discover.py
git commit -m "feat: add TOC discovery module for cli-reference scraper"
```

---

## Task 4: Integration-verify page extraction

**Files:** None — `extract_page` was written as part of Task 2.

- [ ] **Step 1: Manually verify extraction against the live site**

```bash
cd tools/scraper
python -c "
from playwright.sync_api import sync_playwright
from extract import extract_page, table_to_pandoc, build_markdown

url = 'https://docs.fortinet.com/document/fortigate/8.0.0/cli-reference/239356323/config-alertemail-setting'

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(url, wait_until='networkidle')
    name, desc, table_html = extract_page(page)
    browser.close()

print('Command:', name)
print('Description:', desc[:80])
print('Table found:', table_html is not None)
if table_html:
    pandoc = table_to_pandoc(table_html)
    print('Pandoc table (first 300 chars):')
    print(pandoc[:300])
"
```

Expected:
```
Command: config alertemail setting
Description: Configure alert email settings.
Table found: True
Pandoc table (first 300 chars):
+---------------------+----...
```

If `description` is empty, the `h1 ~ p` selector may not work on this site — try `page.eval_on_selector_all("main p, article p", ...)` as a fallback.

If the table is not found, inspect the page HTML: change to headed browser (`headless=False`), navigate to the URL, right-click the table → Inspect to find the correct selector.

- [ ] **Step 2: Run unit tests to confirm nothing broken**

```bash
cd tools/scraper
python -m pytest tests/test_utils.py -v
```

Expected: 7 passed.


---

## Task 5: Orchestration script + end-to-end test

**Files:**
- Create: `tools/scraper/scrape_cli_ref.py`

- [ ] **Step 1: Create `tools/scraper/scrape_cli_ref.py`**

```python
#!/usr/bin/env python3
"""
Scrape Fortinet CLI configuration command reference pages and save as markdown.

Usage:
    python scrape_cli_ref.py                        # all versions
    python scrape_cli_ref.py --version 8.0.0        # one version
    python scrape_cli_ref.py --version 8.0.0 --section alertemail  # one section
    python scrape_cli_ref.py --delay 2.0            # custom delay (seconds)
"""
import argparse
import time
from pathlib import Path

import yaml
from playwright.sync_api import sync_playwright, Page

from discover import discover_commands
from extract import extract_page, table_to_pandoc, output_path, build_markdown

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
VERSIONS_FILE = Path(__file__).resolve().parent / "versions.yaml"
MAX_RETRIES = 3


def load_versions(filter_version: str | None = None) -> list[str]:
    data = yaml.safe_load(VERSIONS_FILE.read_text())
    versions: list[str] = []
    for patch_list in data.values():
        versions.extend(str(v) for v in patch_list)
    if filter_version:
        versions = [v for v in versions if v == filter_version]
    return versions


def scrape_version(
    page: Page,
    version: str,
    filter_section: str | None,
    delay: float,
) -> None:
    print(f"\n=== Discovering {version} ===")
    commands = discover_commands(page, version)

    if filter_section:
        commands = [(s, sl, u) for s, sl, u in commands if s == filter_section]

    print(f"  {len(commands)} commands to process")

    for section, slug, url in commands:
        out = output_path(REPO_ROOT, version, section, slug)

        if out.exists():
            print(f"  [{version}] SKIP {section}/{slug}")
            continue

        print(f"  [{version}] {section}/{slug}")

        for attempt in range(MAX_RETRIES):
            try:
                page.goto(url, wait_until="networkidle", timeout=30_000)
                name, desc, table_html = extract_page(page)
                pandoc_table = table_to_pandoc(table_html) if table_html else None
                content = build_markdown(name, desc, pandoc_table)
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_text(content, encoding="utf-8")
                time.sleep(delay)
                break
            except Exception as exc:  # noqa: BLE001
                if attempt == MAX_RETRIES - 1:
                    print(f"    ERROR after {MAX_RETRIES} attempts: {exc} — skipping")
                else:
                    print(f"    Retry {attempt + 1}/{MAX_RETRIES - 1}...")
                    time.sleep(delay * 2)


def main() -> None:
    parser = argparse.ArgumentParser(description="Scrape Fortinet CLI reference docs.")
    parser.add_argument("--version", help="Scrape only this version (e.g. 8.0.0)")
    parser.add_argument("--section", help="Scrape only this section (e.g. alertemail)")
    parser.add_argument("--delay", type=float, default=1.5, help="Seconds between requests (default 1.5)")
    args = parser.parse_args()

    versions = load_versions(args.version)
    if not versions:
        print(f"No versions matched. Check versions.yaml or --version argument.")
        return

    print(f"Scraping {len(versions)} version(s): {', '.join(versions)}")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        pg = browser.new_page()
        for version in versions:
            scrape_version(pg, version, args.section, args.delay)
        browser.close()

    print("\nDone.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: End-to-end test — scrape one section of one version**

```bash
cd /home/dragon/confia
python tools/scraper/scrape_cli_ref.py --version 8.0.0 --section alertemail
```

Expected output:
```
Scraping 1 version(s): 8.0.0

=== Discovering 8.0.0 ===
  1 commands to process
  [8.0.0] alertemail/config-alertemail-setting
Done.
```

- [ ] **Step 3: Verify the output file exists and has correct content**

```bash
cat config/8.0/8.0.0/alertemail/config_alertemail_setting.md
```

Expected: File begins with `# config alertemail setting`, contains a description paragraph, a `## Syntax` block, and a `## Parameters` section with a `+---+` grid table.

- [ ] **Step 4: Verify Pandoc renders the table correctly**

```bash
pandoc config/8.0/8.0.0/alertemail/config_alertemail_setting.md -o /tmp/test_alertemail.html
xdg-open /tmp/test_alertemail.html
```

Expected: HTML page opens in browser with a properly rendered nested table (parameter rows with option sub-tables).

- [ ] **Step 5: Test resumability — re-run should skip existing files**

```bash
python tools/scraper/scrape_cli_ref.py --version 8.0.0 --section alertemail
```

Expected output contains `SKIP alertemail/config-alertemail-setting` — file is not re-fetched.

- [ ] **Step 6: Test a full version (one major)**

```bash
python tools/scraper/scrape_cli_ref.py --version 7.4.0
```

Expected: Hundreds of files written to `config/7.4/7.4.0/*/config_*.md` with progress lines printed for each.

- [ ] **Step 7: Run unit tests to confirm nothing broken**

```bash
cd tools/scraper
python -m pytest tests/test_utils.py -v
```

Expected: 7 passed.

- [ ] **Step 8: Commit**

```bash
git add tools/scraper/scrape_cli_ref.py
git commit -m "feat: add scraper orchestration script with retry and resumability"
```

---

## Verification Checklist

After all tasks complete:

- [ ] `config/8.0/8.0.0/alertemail/config_alertemail_setting.md` exists
- [ ] File has `# config alertemail setting` heading
- [ ] File has description paragraph
- [ ] File has `## Syntax` block with `config alertemail setting / set <parameter> <value> / end`
- [ ] File has `## Parameters` section with Pandoc Grid Table (`+---+` borders)
- [ ] `pandoc config/8.0/8.0.0/alertemail/config_alertemail_setting.md -o /tmp/test.html` renders the table correctly in a browser
- [ ] Re-running the scraper for an already-scraped section prints `SKIP` and writes no files
- [ ] `tools/scraper/tests/test_utils.py` — 7 tests pass

---

## Notes for Implementer

**If the nav selector finds 0 commands:**
The selector `nav a[href*='/cli-reference/']` may need adjustment. Launch headed Chromium (`headless=False`) and inspect the left sidebar DOM to find the correct selector for the nav links.

**If `h1 ~ p` returns empty description:**
Replace with:
```python
description = page.eval_on_selector_all(
    "main p, article p, .content p",
    "els => els.length > 0 ? els[0].innerText.trim() : ''",
)
```

**If `pypandoc` raises `OSError: no pandoc was found`:**
Pandoc must be installed as a system binary. `pypandoc` wraps the Pandoc CLI — it does not bundle it. Install with `sudo dnf install pandoc`.
