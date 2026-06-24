# Hyper Skills

Hyper Skills is a small set of installable skills for coding agents.

It ships four Hyper-branded workflows:

- [`/owl`](skills/owl/README.md): watch, audit, compare, and optionally repair
  another coding agent's work across Codex, Claude Code, Kilo Code, OpenCode,
  Pi and other IDE agent hosts, PRs, branches, transcripts, and logs.
- [`/hvisualizerr`](skills/hvisualizerr/README.md): turn implementation plans
  into visual review artifacts with diagrams, file maps, annotated code, open
  questions, UI canvases, and optional prototypes.
- [`/hyper-mapper`](skills/hyper-map/README.md): build and query a Hyper Map
  codebase knowledge graph using `graphifyy`, with outputs in `hmap-out/`.
- [`/hsave`](skills/hsave/README.md): switch agents into concise-response mode
  to reduce output tokens while preserving technical accuracy.

## Install

Install into the current project with one command:

```sh
npm install hyper-agent-skills@latest
```

The package postinstall copies the Hyper skills into:

```text
.agents/skills/
```

For OpenCode it also creates slash-command wrappers in:

```text
.opencode/commands/
```

Restart OpenCode after installing so the `/` menu reloads the command list.

You can also retry the copy manually:

```sh
npx hyper-agent-skills@latest install
```

List included skills:

```sh
npx hyper-agent-skills@latest list
```

## Skills

### `/owl`

Use `/owl` when another agent has done or is doing work and you need a careful
watcher: resolve the run, reconstruct the request, check evidence, report gaps,
track live updates, and make narrow fixes only when authorized.

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

### `/hsave`

Use `/hsave` to reduce output tokens for the current session. It keeps code,
commands, paths, URLs, error strings, API names, and symbols exact while
dropping filler and long narration.

## Agent Skills Installers

Agent Skills compatible installers can also install individual folders from the
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill owl
npx @agent-native/skills@latest add --copy . --skill hvisualizerr
npx @agent-native/skills@latest add --copy . --skill hyper-map
npx @agent-native/skills@latest add --copy . --skill hsave
```

## License

MIT
