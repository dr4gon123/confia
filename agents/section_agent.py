"""Section audit agent.

Receives a single top-level config section (raw text from *.conf),
the matching rules.yaml for that section, and the RASPA CLI reference
docs for every command in the section.

Responsibilities:
  - Validate each set <param> value against its rules.yaml rule
  - Look up parameter semantics from the RASPA CLI reference
  - Accept cross-section reference data from the orchestrator
  - Emit a diff config block with the recommended changes
  - Return structured findings for the orchestrator's report

This module is meant to be called by orchestrator.py, not run directly.
"""
from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class SectionFindings:
    section_name: str
    violations: list[dict] = field(default_factory=list)
    diff_conf: str = ""


def audit_section(
    section_name: str,
    raw_conf: str,
    rules_path: Path,
    raspa_ref_files: list[Path],
    cross_refs: dict[str, str] | None = None,
) -> SectionFindings:
    """Audit a single config section and return findings + diff config.

    Args:
        section_name:    e.g. "config system global"
        raw_conf:        Raw text of the section from the *.conf file
        rules_path:      Path to rules/<section>.yaml
        raspa_ref_files: List of RASPA .md files for commands in this section
        cross_refs:      Values from other sections this section references

    Returns:
        SectionFindings with violations list and remediation diff_conf block.
    """
    raise NotImplementedError
