# /owl

Watch and audit another coding agent's work across Codex, Claude Code, Kilo
Code, OpenCode, PRs, branches, logs, and transcripts.

`/owl` is for cross-agent handoffs: monitor until done, reconstruct what was
asked, compare the result against evidence, report gaps, and make scoped fixes
only when the user authorizes repair.

## What It Does

- Resolves session, transcript, PR, branch, CI, log, and pasted run artifacts.
- Resolves Codex thread IDs through Codex host thread tools when available.
- Waits for completion when asked to watch.
- Reconstructs the original request and later scope changes.
- Checks claims against diffs, files, tests, CI, screenshots, and review state.
- Reports gaps, weak verification, scope drift, and residual risk.
- Makes narrow fixes when repair is explicitly authorized.

## When To Use It

Use it when a user says things like:

- "Watch this Codex session until it finishes."
- "Audit Codex session 019efa15-48af-7e61-bbb2-23c005cde4d5."
- "Claude finished. Check what it did."
- "Compare these Kilo and OpenCode runs."
- "Audit this PR and fix any missed review comments."

Skip it for ordinary code review when there is no other agent run to audit.

## Codex Session IDs

When `/owl` runs inside Codex Desktop, it should resolve Codex thread IDs with
the host thread reader first. It should only ask for a transcript, file path, or
URL if those thread tools are unavailable or cannot access the requested id.

When `/owl` runs inside OpenCode or another agent host that cannot call Codex
Desktop thread tools, provide a Codex thread link, exported transcript, or pasted
conversation so it has content to audit.

## Install

```sh
npm install hyper-agent-skills@latest
```

For OpenCode, restart the TUI after installing and use `/owl` from the slash
menu.

Or install only this skill with an Agent Skills compatible installer from this
repo:

```sh
npx @agent-native/skills@latest add --copy . --skill owl
```
