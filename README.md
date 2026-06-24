# Hyper Skills

Hyper Skills is a small set of installable skills for coding agents.

It ships three Hyper-branded workflows:

- [`/owl`](skills/owl/README.md): watch, audit, compare, and optionally repair
  another coding agent's work across Codex, Claude Code, Kilo Code, OpenCode,
  PRs, branches, transcripts, and logs.
- [`/hvisualizerr`](skills/hvisualizerr/README.md): turn implementation plans
  into visual review artifacts with diagrams, file maps, annotated code, open
  questions, UI canvases, and optional prototypes.
- [`/hyper-mapper`](skills/hyper-map/README.md): build and query a Hyper Map
  codebase knowledge graph using `graphifyy`, with outputs in `hmap-out/`.

## Install

Install into the current project with one command:

```sh
npm install hyper-skills
```

The package postinstall copies the Hyper skills into:

```text
.agents/skills/
```

You can also retry the copy manually:

```sh
npx hyper-skills install
```

List included skills:

```sh
npx hyper-skills list
```

## Skills

### `/owl`

Use `/owl` when another agent has done or is doing work and you need a careful
watcher: resolve the run, reconstruct the request, check evidence, report gaps,
and make narrow fixes only when authorized.

### `/hvisualizerr`

Use `/hvisualizerr` for plans that deserve a review surface before
implementation. It supports document-only, canvas, canvas + prototype, and
prototype-first workflows.

### `/hyper-mapper`

Use `/hyper-mapper` to map a repo or answer architecture questions from an
existing map. It uses `graphifyy` and writes:

```text
hmap-out/
  graph.html
  GRAPH_REPORT.md
  graph.json
```

Install Graphify when needed:

```sh
uv tool install graphifyy
```

Fallback:

```sh
pipx install graphifyy
```

## Agent Skills Installers

Agent Skills compatible installers can also install individual folders from the
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill owl
npx @agent-native/skills@latest add --copy . --skill hvisualizerr
npx @agent-native/skills@latest add --copy . --skill hyper-map
```

## License

MIT
