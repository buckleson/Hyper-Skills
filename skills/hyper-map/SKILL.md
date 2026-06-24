---
name: hyper-mapper
description: Use for any question about a codebase, its architecture, file relationships, or project content, especially when hmap-out/ exists. Builds or queries a Hyper Map knowledge graph using graphifyy while writing outputs to hmap-out instead of graphify-out.
---

# /hyper-mapper

Hyper Skills `/hyper-mapper` builds and queries a persistent codebase knowledge
graph. It uses the `graphifyy` package under the hood, but the Hyper-branded
output directory is always `hmap-out/`.

The installable skill folder is `hyper-map`; the command users invoke is
`/hyper-mapper`.

## Usage

```text
/hyper-mapper
/hyper-mapper .
/hyper-mapper <path>
/hyper-mapper https://github.com/<owner>/<repo>
/hyper-mapper <path> --mode deep
/hyper-mapper <path> --update
/hyper-mapper <path> --cluster-only
/hyper-mapper <path> --no-viz
/hyper-mapper query "what connects auth to billing?"
/hyper-mapper path "AuthModule" "Database"
/hyper-mapper explain "BillingService"
```

If no path is supplied, use `.`.

## Output Contract

Always write and read Hyper Map outputs from `hmap-out/`:

```text
hmap-out/
  graph.html
  GRAPH_REPORT.md
  graph.json
  manifest.json
```

Do not leave the default `graphify-out/` name in user-facing output. Use
`GRAPHIFY_OUT=hmap-out` for graphify commands, or pass explicit graph paths for
query/path/explain commands.

## Fast Path

Before searching raw files for architecture or codebase questions, check for
`hmap-out/graph.json`.

If it exists and the user is asking a natural-language codebase question, run a
graph query first:

```sh
GRAPHIFY_OUT=hmap-out graphify query "<question>" --graph hmap-out/graph.json
```

Only read raw files after the graph has oriented you or when you need exact
lines for an edit.

## Ensure Graphify Is Available

If `graphify` is not on PATH, install the official package:

```sh
uv tool install graphifyy
```

Fallback:

```sh
pipx install graphifyy
```

If neither `uv` nor `pipx` exists, use the active Python environment:

```sh
python -m pip install graphifyy
```

## Build Or Update

For a first build, prefer the headless extraction command when available:

```sh
GRAPHIFY_OUT=hmap-out graphify extract <path> --out .
```

If the user requested deep mode, preserve it:

```sh
GRAPHIFY_OUT=hmap-out graphify extract <path> --out . --mode deep
```

For updates:

```sh
GRAPHIFY_OUT=hmap-out graphify update <path>
```

For queries:

```sh
GRAPHIFY_OUT=hmap-out graphify query "<question>" --graph hmap-out/graph.json
```

For paths and explanations:

```sh
GRAPHIFY_OUT=hmap-out graphify path "A" "B" --graph hmap-out/graph.json
GRAPHIFY_OUT=hmap-out graphify explain "A" --graph hmap-out/graph.json
```

## Cross-Agent Notes

This skill can be installed into Agent Skills compatible clients, Codex, Claude
Code, OpenCode, Kilo Code, Cursor, and similar coding-agent environments. When
the host has subagents, use them for semantic extraction on large document
corpora. When it does not, use the `graphify extract` CLI path.

Read the files in `references/` only when their path applies:

- `github-and-merge.md` for GitHub URLs or multi-repo merges.
- `transcribe.md` for audio/video input.
- `query.md` for query/path/explain behavior.
- `update.md` for update and cluster-only flows.
- `exports.md` for wiki, SVG, GraphML, Neo4j, FalkorDB, MCP, or HTML exports.
- `add-watch.md` for URL ingestion or watch mode.
- `hooks.md` for hooks or always-on project instructions.
- `extraction-spec.md` for subagent semantic extraction.

## Report

After a successful build, tell the user:

```text
Hyper Map complete. Outputs in <absolute path>/hmap-out/

  graph.html       - interactive graph
  GRAPH_REPORT.md  - audit report
  graph.json       - raw graph data
```

Paste only the most useful highlights from `hmap-out/GRAPH_REPORT.md`: god
nodes, surprising connections, and suggested questions. Do not paste the full
report.
