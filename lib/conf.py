"""Parse FortiOS *.conf files into section dictionaries."""
from pathlib import Path


def parse_sections(path: Path) -> dict[str, str]:
    """Parse a FortiOS *.conf file and return {section_name: raw_text}.

    Each key is a top-level section name (e.g. "config system global"),
    and the value is the full raw text of that section including all nested
    config/edit/set blocks, ending at the matching top-level "end".

    Args:
        path: Path to the *.conf file.

    Returns:
        Ordered dict of section_name -> raw section text.
    """
    raise NotImplementedError
