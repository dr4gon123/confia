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
    md = build_markdown("config alertemail setting", "Configure alert email.", None, "TABLE_CONTENT")
    assert "# config alertemail setting" in md
    assert "Configure alert email." in md
    assert "## Syntax" in md
    assert "config alertemail setting" in md
    assert "## Parameters" in md
    assert "TABLE_CONTENT" in md


def test_build_markdown_without_table():
    md = build_markdown("config alertemail setting", "Configure alert email.", None, None)
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
