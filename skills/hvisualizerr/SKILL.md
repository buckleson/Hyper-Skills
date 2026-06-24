---
name: hvisualizerr
description: Turn ordinary implementation plans into Hyper-branded visual review artifacts with diagrams, file maps, annotated code, open questions, UI canvases, and optional prototypes.
metadata:
  visibility: exported
---

# /hvisualizerr

Hyper Skills `/hvisualizerr` turns a chat plan into a reviewable visual plan
artifact. Use it when the user needs to see, compare, comment on, or approve a
direction before code changes begin.

It is a Hyper-branded adaptation of the visual planning workflow: plans stay
grounded in real files and become structured artifacts with prose, diagrams,
wireframes, prototypes, API/data blocks, file maps, and open questions.

## When To Use

Use `/hvisualizerr` for multi-file, ambiguous, risky, architecture-heavy,
data-heavy, or UI-heavy work where the wrong direction would be expensive.

Also use it when:

- A pasted text plan needs a richer review surface.
- A UI flow needs a static canvas or clickable prototype.
- A backend/API/data decision needs diagrams or explicit contracts.
- A reviewer should approve the approach before implementation.

Skip it for trivial fixes, one-line changes, and anything whose diff is easier
to review than a plan.

## Plan Discipline

- Read the real codebase first. Name actual files, helpers, schema, actions, and
  symbols instead of inventing them.
- Lead with reuse. For each step, explain what existing pieces are reused before
  describing new work.
- Decide hard-to-reverse bets early: wire formats, ids, data shape, auth,
  ownership, and public contracts.
- Make the artifact standalone. A reader should understand it without seeing
  the chat.
- Treat planning as read-only. Do not edit source files until the user approves
  the plan direction.
- Keep unresolved items in one bottom Open Questions block with recommended
  defaults.

## Visual Surface Choice

- **No visual surface:** backend-only, data-only, migration-only, copy-only, or
  architecture plans where inline document diagrams are enough.
- **Canvas:** one static screen, before/after UI, component state, popover, or
  visual direction.
- **Canvas + prototype:** multi-step UI flows, onboarding, wizards, approval
  flows, or navigation changes.
- **Prototype-first:** when the user asks to operate the UI or interaction is
  the main question.

Before authoring any wireframe, canvas, or document-body plan, read the relevant
files in this skill's `references/` directory:

- `references/wireframe.md`
- `references/canvas.md`
- `references/document-quality.md`
- `references/exemplar.md`

Do not author these from memory.

## Hosted And Local Modes

Prefer the active Plan connector when the host provides one. If the connector is
available, use its block catalog and create/update tools rather than returning a
chat-only plan.

Use local-files mode when the user asks for fully local artifacts, no hosted
database writes, offline/private planning, source-controlled plan files, or a
repo-owned output. In local-files mode:

1. Fetch the block catalog with the local Plan CLI when available.
2. Write `plan.mdx`, optional `canvas.mdx`, optional `prototype.mdx`, and
   optional `.plan-state.json` under `plans/<slug>/` or another agreed folder.
3. Run the local plan checker before handoff.
4. Report the local plan path and any local bridge URL.

## Output

The output must be a structured plan artifact, not just inline chat prose. If no
Plan connector or local Plan CLI is available, stop and tell the user exactly
what is missing rather than pretending a plain Markdown answer is equivalent.

After creating the artifact, ask the user to review and approve the direction
before source edits begin.
