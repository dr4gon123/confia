#!/usr/bin/env python3
"""
Scrape Fortinet CLI configuration command reference pages and save as markdown.

Usage:
    python scrape_cli_ref.py                                        # all versions
    python scrape_cli_ref.py --version 8.0.0                        # one version
    python scrape_cli_ref.py --version 8.0.0 --section alertemail   # one section
    python scrape_cli_ref.py --force                                # rescape everything
    python scrape_cli_ref.py --retries 5 --timeout 60000            # more patient
    python scrape_cli_ref.py --quiet                                # minimal output
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
CONFIG_FILE = Path(__file__).resolve().parent / "scraper.yaml"
DEFAULT_UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

DEFAULT_CONFIG = {
    "force": False,
    "retries": 3,
    "delay": 1.5,
    "timeout": 30000,
    "wait_until": "domcontentloaded",
    "min_size": 200,
    "output_dir": "config",
    "user_agent": DEFAULT_UA,
    "headed": False,
    "quiet": False,
}


def load_config() -> dict:
    cfg = dict(DEFAULT_CONFIG)
    if CONFIG_FILE.exists():
        file_cfg = yaml.safe_load(CONFIG_FILE.read_text())
        if file_cfg:
            cfg.update(file_cfg)
    return cfg


def merge_args(cfg: dict, args) -> dict:
    if args.force is not None:
        cfg["force"] = args.force
    if args.retries is not None:
        cfg["retries"] = args.retries
    if args.delay is not None:
        cfg["delay"] = args.delay
    if args.timeout is not None:
        cfg["timeout"] = args.timeout
    if args.wait_until is not None:
        cfg["wait_until"] = args.wait_until
    if args.min_size is not None:
        cfg["min_size"] = args.min_size
    if args.headed is not None:
        cfg["headed"] = args.headed
    if args.quiet is not None:
        cfg["quiet"] = args.quiet
    return cfg


def log(message: str, quiet: bool) -> None:
    if not quiet:
        print(message)


def load_versions(filter_version: str | None = None) -> list[str]:
    data = yaml.safe_load(VERSIONS_FILE.read_text())
    versions: list[str] = []
    for patch_list in data.values():
        versions.extend(str(v) for v in patch_list)
    if filter_version:
        versions = [v for v in versions if v == filter_version]
    return versions


def scrape_version(page: Page, version: str, filter_section: str | None, filter_command: str | None, cfg: dict) -> None:
    log(f"\n=== Discovering {version} ===", cfg["quiet"])
    commands = discover_commands(page, version)

    if filter_section:
        commands = [(s, sl, u) for s, sl, u in commands if s == filter_section]

    if filter_command:
        cmd_filter = filter_command.lower().replace(" ", "-")
        commands = [(s, sl, u) for s, sl, u in commands if cmd_filter in sl.lower()]

    log(f"  {len(commands)} commands to process", cfg["quiet"])

    for section, slug, url in commands:
        out = output_path(REPO_ROOT, version, section, slug, output_dir=cfg["output_dir"])

        if not cfg["force"] and out.exists() and out.stat().st_size > cfg["min_size"]:
            log(f"  [{version}] SKIP {section}/{slug}", cfg["quiet"])
            continue

        log(f"  [{version}] {section}/{slug}", cfg["quiet"])

        for attempt in range(cfg["retries"]):
            try:
                page.goto(url, wait_until=cfg["wait_until"], timeout=cfg["timeout"])
                name, desc, syntax, table_html = extract_page(page)
                pandoc_table = table_to_pandoc(table_html) if table_html else None
                content = build_markdown(name, desc, syntax, pandoc_table)
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_text(content, encoding="utf-8")
                time.sleep(cfg["delay"])
                break
            except Exception as exc:  # noqa: BLE001
                if attempt == cfg["retries"] - 1:
                    log(f"    ERROR after {cfg['retries']} attempts: {exc} — skipping", cfg["quiet"])
                    time.sleep(cfg["delay"])
                else:
                    log(f"    Retry {attempt + 1}/{cfg['retries']}...", cfg["quiet"])
                    time.sleep(cfg["delay"] * 2)


def main() -> None:
    config = load_config()

    parser = argparse.ArgumentParser(description="Scrape Fortinet CLI reference docs.")
    parser.add_argument("--version", help="Scrape only this version (e.g. 8.0.0)")
    parser.add_argument("--section", help="Scrape only this section (e.g. alertemail)")
    parser.add_argument("--command", help="Scrape commands matching this slug (spaces→hyphens, partial match)")
    parser.add_argument("--force", action="store_true", default=None,
                        help="Force rescape even if files exist")
    parser.add_argument("--retries", type=int, help="Max retry attempts per page")
    parser.add_argument("--delay", type=float, help="Seconds between requests")
    parser.add_argument("--timeout", type=int, help="Page navigation timeout (ms)")
    parser.add_argument("--wait-until", dest="wait_until",
                        choices=["domcontentloaded", "load", "networkidle"],
                        help="Playwright wait strategy")
    parser.add_argument("--min-size", dest="min_size", type=int,
                        help="Min file size (bytes) to consider a file already scraped")
    parser.add_argument("--headed", action="store_true", default=None,
                        help="Launch visible browser (debugging)")
    parser.add_argument("--quiet", action="store_true", default=None,
                        help="Suppress all output except errors")
    args = parser.parse_args()

    config = merge_args(config, args)

    versions = load_versions(args.version)
    if not versions:
        print("No versions matched. Check versions.yaml or --version argument.")
        return

    log(f"Scraping {len(versions)} version(s): {', '.join(versions)}", config["quiet"])

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=not config["headed"])
        try:
            context = browser.new_context(user_agent=config["user_agent"])
            pg = context.new_page()
            for version in versions:
                scrape_version(pg, version, args.section, args.command, config)
        finally:
            browser.close()

    log("\nDone.", config["quiet"])


if __name__ == "__main__":
    main()
