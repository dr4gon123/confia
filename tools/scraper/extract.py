from pathlib import Path

import pypandoc
from playwright.sync_api import Page


def slug_to_filename(slug: str) -> str:
    return slug.replace("-", "_") + ".md"


def output_path(repo_root: Path, version: str, section: str, slug: str, output_dir: str = "config") -> Path:
    major = ".".join(version.split(".")[:2])
    return repo_root / output_dir / major / version / section / slug_to_filename(slug)


def table_to_pandoc(table_html: str) -> str:
    # Disable simple/multiline/pipe table extensions to force grid table output
    return pypandoc.convert_text(
        table_html,
        "markdown-simple_tables-multiline_tables-pipe_tables",
        format="html",
    )


def build_markdown(command_name: str, description: str, syntax: str | None, pandoc_table: str | None) -> str:
    fallback = f"{command_name}\n    set <parameter> <value>\nend"
    parts = [
        f"# {command_name}",
        "",
        description,
        "",
        "## Syntax",
        "",
        "```",
        syntax or fallback,
        "```",
        "",
        "## Parameters",
        "",
        pandoc_table if pandoc_table else "_No parameter table found._",
    ]
    return "\n".join(parts) + "\n"


def extract_page(page: Page) -> tuple[str, str, str | None, str | None]:
    """
    Extract (command_name, description, syntax | None, table_html | None).

    syntax is the raw CLI syntax block from the page (e.g. "config alertemail setting\n    set ...\nend").
    Waits for the <h1> before reading so it is safe to call right after page.goto().
    """
    page.wait_for_selector("h1", timeout=15_000)
    command_name = page.inner_text("h1").strip()

    # First <p> that follows the h1 in document order
    description: str = str(page.eval_on_selector_all(
        "h1 ~ p",
        "els => els.length > 0 ? els[0].innerText.trim() : ''",
    ))

    # Syntax block: first <pre> whose text starts with "config"
    syntax: str = str(page.eval_on_selector_all(
        "pre",
        "els => { const s = els.find(e => e.innerText.trim().startsWith('config')); "
        "return s ? s.innerText.trim() : ''; }",
    ))

    # First <table> in the page body (the parameter table)
    table_el = page.query_selector("table")
    table_html = table_el.evaluate("el => el.outerHTML") if table_el else None

    return command_name, description, syntax or None, table_html
