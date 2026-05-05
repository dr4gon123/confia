"""FastAPI server for the YAML viewer.

Serves the React static app and exposes API endpoints for listing
and loading *.conf.yaml files from the input/ directory.

Run with:
    uvicorn viewer.server:app --reload
"""
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

INPUT_DIR = Path(__file__).resolve().parent.parent / "input"
STATIC_DIR = Path(__file__).resolve().parent / "static"

app = FastAPI(title="YAML Viewer")

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/")
def index():
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/api/files")
def list_files() -> list[str]:
    """List all *.conf.yaml files available in input/."""
    return [f.name for f in sorted(INPUT_DIR.glob("*.conf.yaml"))]


@app.get("/api/files/{filename}")
def get_file(filename: str):
    """Return the raw content of a *.conf.yaml file from input/."""
    path = INPUT_DIR / filename
    if not path.exists() or path.suffix not in {".yaml", ".yml"} or not path.name.endswith(".conf.yaml"):
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path, media_type="text/plain")
