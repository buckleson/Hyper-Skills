---
name: owl
description: Use when asked to watch, monitor, audit, review, compare, or fix another coding agent's work from a Codex thread, Claude Code transcript, Kilo Code run, OpenCode session, Pi/IDE agent run, PR, branch, log, or pasted summary. Works across coding agents by reconstructing the request, checking evidence, reporting gaps, and making narrow fixes only when authorized.
---

# /owl

Hyper Skills `/owl` watches another coding agent's work and audits whether the
result matches what the user actually asked for.

Use it across Codex, Claude Code, Kilo Code, OpenCode, Pi or other IDE agent
hosts, and other coding agents whenever the user gives a session id,
transcript, PR, branch, CI run, issue, log, chat link, or pasted run summary.

## Modes

Choose the mode from the user's wording:

- **Watch only:** monitor until the target is done, blocked, stale, or waiting
  on a human. Do not edit files.
- **Audit:** inspect the work and produce a gap report. Do not edit files.
- **Audit and fix:** audit first, then make narrow fixes for clear gaps.
- **Compare:** compare multiple agent runs against the same original request.

If authority is unclear, default to audit-only and state what you would fix.

## Resolve The Target

1. Identify every supplied artifact: thread id, transcript path, PR, branch,
   commit, CI run, issue, link, log, screenshot, or pasted summary.
2. Prefer the most direct source: host session tools, host thread tools, IDE
   agent APIs, local transcript files, GitHub tools, git history, CI logs, or
   pasted content.
3. If a watch target is still running, poll at a reasonable interval until it
   reaches a terminal state or is clearly waiting on a human or external system.
4. If the artifact cannot be resolved, ask for the missing identifier or path.

### Host And IDE Adapters

Use the best available adapter for the environment that is running `/owl`.
Do not assume every host stores sessions in local files.

- **Codex:** use native thread tools first, such as `read_thread`,
  `list_threads`, or `codex_app.read_thread` when exposed.
- **Claude Code:** use the transcript, JSONL/log path, terminal output, git
  diff, branch, PR, or any available Claude session export.
- **OpenCode:** use OpenCode command/session logs, project transcript files, TUI
  output, git state, or PR/branch evidence. If OpenCode cannot read another
  host's private session id, ask for an export or pasted transcript.
- **Kilo Code and IDE agents:** use the IDE's task/session panel, extension
  logs, terminal output, workspace changes, PR/branch evidence, or exported
  conversation.
- **Pi or other agent IDEs:** use any native run/session reader first. If none
  is available, use the IDE log, terminal output, transcript export, PR, branch,
  commit, or pasted conversation.
- **GitHub and CI:** use PR metadata, review threads, checks, logs, comments,
  commits, and diffs when the watched work is represented there.

If an adapter returns an access error, unavailable-tool error, or not-found
result, record that as evidence and move to the next available adapter before
asking the user for more material.

### Codex Thread And Session IDs

When the user supplies a Codex thread or session id, resolve it with the host
thread APIs before searching local files, git history, or the workspace.

- In Codex Desktop, use the available thread tools such as `read_thread` or
  `list_threads`. If the current environment exposes `codex_app.read_thread`,
  call it with the supplied thread id.
- If the user asks about the current Codex session and a thread/session id is
  available from the host environment, use that id directly.
- Start with recent turns and omit large command outputs unless the audit needs
  them. If command output matters, request bounded output.
- If the target thread is longer than the first result, paginate older turns
  until you have the original request, later scope changes, and the watched
  agent's final or current state.
- Only ask the user for a transcript path, link, or pasted content after host
  thread tools are unavailable, deny access, or report that the id is not found.
- When running from OpenCode or another agent that cannot access Codex Desktop
  thread tools, explain that the session id is not enough in that host and ask
  for a Codex thread link, transcript export, or pasted transcript.

## Watch Live Sessions

When the user asks to watch a running session:

1. Capture the current state: latest turn/log entry, git status, branch, changed
   files, active command, CI status, and any visible blocker.
2. Poll the same source until it reaches a terminal state: completed, failed,
   blocked, stale, waiting for user input, or explicitly stopped.
3. Use conservative polling intervals. Shorten them only when the host provides
   cheap status checks; lengthen them for CI, long builds, or remote agents.
4. On each meaningful change, note what changed: new files, diffs, commands,
   test results, errors, review comments, deploy links, or status transitions.
5. Do not edit files while in watch-only mode. If a clear issue appears, report
   the issue and ask for repair authority unless the user already requested
   audit-and-fix.
6. If the watched agent is waiting for a human or credential, report the exact
   wait condition and what input is needed.

## Reconstruct The Contract

Before judging the work, write down the compact contract:

- Original user request and later scope changes.
- Explicit constraints: no-edit rules, branch rules, package versions,
  validation expectations, design requirements, security/privacy limits.
- Implied acceptance criteria: behavior, tests, CI, docs, screenshots, deploys,
  review replies, or status updates.
- The watched agent's final claims and caveats.

The user's request is the source of truth, not the watched agent's summary.

## Audit Evidence

Inspect evidence, not vibes:

- Read changed files and relevant unchanged code around touched paths.
- Check git status and diffs without reverting unrelated work.
- Compare claimed commands with actual output when available.
- Inspect failed or skipped tests, CI logs, screenshots, review comments,
  deploy output, and error traces.
- For UI work, prefer screenshots or browser checks over prose claims.
- For live sessions, compare each update against the original contract and
  separate in-progress work from final claims.

Classify findings as:

- **Gap:** requested behavior is missing or incomplete.
- **Bug:** implementation likely fails or regresses behavior.
- **Verification miss:** the work may be right but evidence is weak.
- **Scope drift:** unrelated changes or skipped constraints.
- **No issue:** concern is already handled, with evidence.

## Fix Narrowly

When the user authorized repair:

1. Fix only gaps with clear evidence.
2. Preserve unrelated local changes and do not move branches unless asked.
3. Follow existing repo patterns.
4. Run the smallest useful validation after each meaningful fix.
5. Stop and report instead of guessing when a fix needs a product decision,
   credential, destructive action, or broad rewrite.

After fixing, re-run the smallest useful validation and update the audit with
what changed, what passed, and what remains unresolved.

## Report

Lead with the outcome and keep it compact:

```md
Status
- Done, blocked, stale, or still running.

Requested
- What the user asked the watched agent to do.

Observed
- What the watched agent changed, claimed, and verified.

Updates
- Important status changes while watching. Omit if this was a one-shot audit.

Gaps
- Missing behavior, bugs, weak verification, or scope drift.

Issues
- Concrete failures, errors, or risks with evidence.

Fixes made
- Files changed and validation run. Omit for audit-only work.

Remaining risk
- Anything still unverified or waiting on CI/review/deploy/human input.
```

Name exact files, commands, PRs, branches, or session ids when they matter.
