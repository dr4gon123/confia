"""Resolve RASPA CLI reference paths by (version, section, slug)."""
from pathlib import Path

RASPA_ROOT = Path(__file__).resolve().parent.parent / "raspa"


def cli_ref_path(version: str, section: str, slug: str) -> Path:
    """Return path to the RASPA markdown file for a CLI command.

    Args:
        version: FortiOS patch version, e.g. "7.4.3"
        section: CLI section name, e.g. "system"
        slug:    Command slug (hyphen-separated), e.g. "config-system-global"

    Returns:
        Path to raspa/config/<major>/<version>/<section>/<slug_as_filename>.md
    """
    major = ".".join(version.split(".")[:2])
    filename = slug.replace("-", "_") + ".md"
    return RASPA_ROOT / "config" / major / version / section / filename


def section_ref_files(version: str, section: str) -> list[Path]:
    """Return all CLI reference markdown files for a given section."""
    major = ".".join(version.split(".")[:2])
    section_dir = RASPA_ROOT / "config" / major / version / section
    if not section_dir.exists():
        return []
    return sorted(section_dir.glob("*.md"))
