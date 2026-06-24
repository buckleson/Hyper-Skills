# /hvisualizerr

Turn implementation plans into Hyper-branded visual review artifacts.

`/hvisualizerr` creates structured planning output with diagrams, file maps,
annotated code, open questions, UI canvases, and optional prototypes. It is meant
for plans that should be reviewed before implementation, not buried in chat.

## What It Does

- Grounds plans in real repo files, schemas, actions, and symbols.
- Chooses document-only, canvas, canvas + prototype, or prototype-first output.
- Produces MDX-style plan artifacts for review.
- Keeps the plan as the approval gate before code edits.
- Supports local output files when hosted plan tools are not appropriate.

## Output Files

Local mode writes a folder such as:

```text
plans/<slug>/
  plan.mdx
  canvas.mdx
  prototype.mdx
  .plan-state.json
```

Only create the optional files when the plan actually needs them.

## Install

```sh
npm install hyper-agent-skills
```

For OpenCode, restart the TUI after installing and use `/hvisualizerr` from the
slash menu.

Or install only this skill with an Agent Skills compatible installer from this
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill hvisualizerr
```
