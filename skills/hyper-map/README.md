# /hyper-mapper

Build and query a Hyper Map codebase knowledge graph.

`/hyper-mapper` uses the official `graphifyy` package under the hood and writes
Hyper-branded outputs to `hmap-out/` instead of `graphify-out/`.

## What It Does

- Maps code, docs, papers, images, and transcripts into a graph.
- Produces `hmap-out/graph.json`, `hmap-out/GRAPH_REPORT.md`, and optional HTML.
- Answers architecture questions from the graph before falling back to raw file
  search.
- Supports Codex, Claude Code, Kilo Code, OpenCode, Agent Skills compatible
  clients, and other coding-agent environments.

## Install

```sh
npm install hyper-agent-skills
```

For OpenCode, restart the TUI after installing and use `/hyper-mapper` from the
slash menu.

Or install only this skill with an Agent Skills compatible installer from this
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill hyper-map
```

## Use

```text
/hyper-mapper .
/hyper-mapper query "how does auth reach storage?"
/hyper-mapper --update
```

Outputs land in:

```text
hmap-out/
  graph.html
  GRAPH_REPORT.md
  graph.json
```
