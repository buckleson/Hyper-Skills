# /owl

Watch and audit another coding agent's work across Codex, Claude Code, Kilo
Code, OpenCode, Pi and other IDE agent hosts, PRs, branches, logs, and
transcripts.

`/owl` is for cross-agent handoffs: monitor until done, reconstruct what was
asked, compare the result against evidence, report gaps, and make scoped fixes
only when the user authorizes repair.

## What It Does

- Resolves session, transcript, PR, branch, CI, log, and pasted run artifacts.
- Resolves Codex, OpenCode, Kilo Code, Claude Code, Pi, IDE agent, PR, branch,
  CI, log, and pasted run artifacts through the best available host adapter.
- Resolves native session IDs through host tools when available.
- Watches running sessions until completed, failed, blocked, stale, or waiting
  for human input.
- Reports meaningful live updates: status changes, diffs, commands, failures,
  test results, review comments, and blockers.
- Reconstructs the original request and later scope changes.
- Checks claims against diffs, files, tests, CI, screenshots, and review state.
- Reports gaps, issues, weak verification, scope drift, and residual risk.
- Makes narrow fixes when repair is explicitly authorized.

## When To Use It

Use it when a user says things like:

- "Watch this Codex session until it finishes."
- "Audit Codex session 019efa15-48af-7e61-bbb2-23c005cde4d5."
- "Claude finished. Check what it did."
- "Compare these Kilo and OpenCode runs."
- "Watch this Pi IDE agent run and tell me what changes."
- "Audit this PR and fix any missed review comments."

Skip it for ordinary code review when there is no other agent run to audit.

## Session IDs And IDE Hosts

When `/owl` runs inside a host that exposes native session tools, it should use
those tools first. This includes Codex thread readers, OpenCode session/log
access, Kilo Code or IDE extension logs, Pi or other IDE run viewers, Claude
Code transcripts, and GitHub or CI APIs.

When the current host cannot access another tool's private session id, provide a
thread link, exported transcript, log path, branch, PR, or pasted conversation so
`/owl` has evidence to audit.

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
