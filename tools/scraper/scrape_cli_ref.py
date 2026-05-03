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
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"


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

        if out.exists() and out.stat().st_size > 200:
            print(f"  [{version}] SKIP {section}/{slug}")
            continue

        print(f"  [{version}] {section}/{slug}")

        for attempt in range(MAX_RETRIES):
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=30_000)
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
                    time.sleep(delay)
                else:
                    print(f"    Retry {attempt + 1}/{MAX_RETRIES}...")
                    time.sleep(delay * 2)


def main() -> None:
    parser = argparse.ArgumentParser(description="Scrape Fortinet CLI reference docs.")
    parser.add_argument("--version", help="Scrape only this version (e.g. 8.0.0)")
    parser.add_argument("--section", help="Scrape only this section (e.g. alertemail)")
    parser.add_argument("--delay", type=float, default=1.5, help="Seconds between requests (default 1.5)")
    args = parser.parse_args()

    versions = load_versions(args.version)
    if not versions:
        print("No versions matched. Check versions.yaml or --version argument.")
        return

    print(f"Scraping {len(versions)} version(s): {', '.join(versions)}")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        try:
            context = browser.new_context(user_agent=UA)
            pg = context.new_page()
            for version in versions:
                scrape_version(pg, version, args.section, args.delay)
        finally:
            browser.close()

    print("\nDone.")


if __name__ == "__main__":
    main()
