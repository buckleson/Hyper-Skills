# /hyper-agnos

Hyper Agnos is a cost-aware orchestration skill for codebase-heavy work.

It discovers available models and account limits when the current host exposes
them, then routes the work to the best affordable mix: strong models for
architecture, synthesis, and final review; cheaper models for bounded scans,
edits, testing, logs, and summaries.

## What It Does

- Finds available models, provider limits, credits, quotas, and pricing when
  host tools make that information available.
- Asks for model or budget details only when it cannot discover them safely.
- Ranks models by quality, cost, latency, context window, tool access, privacy,
  and rate limits.
- Splits large work into coordinator, builder, scout, verifier, and fallback
  lanes.
- Uses cheaper models for bounded heavy lifting while keeping final judgment
  with the strongest appropriate model.
- Requires evidence from delegated work: files, commands, diffs, failures,
  screenshots, and uncertainty.

## When To Use It

Use it when a user says things like:

- "Use the cheapest good model for this repo scan."
- "Find my available models and choose the best balance."
- "Use premium reasoning only where it matters."
- "Split this broad task across cheaper agents."
- "Check model balance first, then build."

Skip it for tiny fixes, highly coupled edits, or sensitive work where model
routing would add more risk than value.

## Model And Balance Discovery

`/hyper-agnos` should inspect native host selectors, model APIs, provider CLIs,
plugin tools, environment configuration, or project settings before asking the
user for details.

It should not print or request secret keys. If balance, credits, quotas, or live
pricing are unavailable, it should state that limitation and ask before using
paid providers.

## Install

```sh
npm install hyper-agent-skills@latest
```

For OpenCode, restart the TUI after installing and use `/hyper-agnos` from the
slash menu.

Or install only this skill with an Agent Skills compatible installer from this
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill hyper-agnos
```
