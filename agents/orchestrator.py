"""Auditor orchestrator.

Entry point for the agent army. Reads a *.conf file from input/,
splits it into top-level config sections via lib.conf.parse_sections(),
spawns one section_agent per section, coordinates cross-section
references, and assembles the full audit report in reports/.

Run with:
    python -m agents.orchestrator --file input/<name>.conf [--version 7.4.3]
"""
import argparse
from pathlib import Path

from lib.conf import parse_sections

INPUT_DIR = Path(__file__).resolve().parent.parent / "input"
REPORTS_DIR = Path(__file__).resolve().parent.parent / "reports"


def main() -> None:
    parser = argparse.ArgumentParser(description="FortiGate config auditor orchestrator.")
    parser.add_argument("--file", required=True, help="*.conf file inside input/")
    parser.add_argument("--version", default=None, help="FortiOS version (e.g. 7.4.3) for RASPA lookup")
    args = parser.parse_args()

    conf_path = INPUT_DIR / args.file
    if not conf_path.exists():
        raise SystemExit(f"File not found: {conf_path}")

    sections = parse_sections(conf_path)
    print(f"Found {len(sections)} config sections in {conf_path.name}")

    # TODO: spawn one section_agent per section, collect diffs, write report
    raise NotImplementedError


if __name__ == "__main__":
    main()
