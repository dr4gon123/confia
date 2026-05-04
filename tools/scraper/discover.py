from playwright.sync_api import Page

BASE_URL = "https://docs.fortinet.com/document/fortigate"

# Slugs that signal the end of the CLI configuration commands section in the TOC.
# If Fortinet adds new top-level sections, add their slugs here.
_SECTION_TERMINATORS = {"cli-diagnose-commands", "cli-execute-commands"}


def discover_commands(page: Page, version: str) -> list[tuple[str, str, str]]:
    """
    Return list of (section, slug, url) for all config commands in a version.

    Navigates to the CLI reference root (which redirects to the TOC page),
    reads the left-nav in document order, and collects links under
    'CLI configuration commands' whose slugs start with 'config-'.
    The section is the most recent non-config- slug seen before each command.

    NOTE: The caller must configure the page's browser context with a real
    user-agent string. The site's WAF blocks requests that use the default
    Playwright/Chromium headers and returns a block page instead of the docs.
    Example: browser.new_context(user_agent="Mozilla/5.0 ...")
    """
    toc_url = f"{BASE_URL}/{version}/cli-reference/"
    page.goto(toc_url, wait_until="domcontentloaded", timeout=60_000)
    # Wait for the TOC links to be present in the DOM.
    page.wait_for_selector("a.toc[href*='/cli-reference/']", timeout=30_000)

    # Extract all TOC links in document order as {href, text} dicts.
    # The site uses <a class="toc"> elements inside <ul class="toc"> — no <nav>.
    links: list[dict] = page.eval_on_selector_all(
        "a.toc[href*='/cli-reference/']",
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

    if not results:
        raise RuntimeError(
            f"discover_commands: no config commands found for {version!r}. "
            "Check the selector or TOC structure — Fortinet may have restructured the page."
        )

    return results
