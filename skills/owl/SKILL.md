---
name: owl
description: Use when asked to watch, monitor, audit, review, compare, or fix another coding agent's work from a Codex thread, Claude Code transcript, Kilo Code run, OpenCode session, PR, branch, log, or pasted summary. Works across coding agents by reconstructing the request, checking evidence, reporting gaps, and making narrow fixes only when authorized.
---

# /owl

Hyper Skills `/owl` watches another coding agent's work and audits whether the
result matches what the user actually asked for.

Use it across Codex, Claude Code, Kilo Code, OpenCode, and other coding agents
whenever the user gives a session id, transcript, PR, branch, CI run, issue,
log, chat link, or pasted run summary.

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
2. Prefer the most direct source: host thread tools, local transcript files,
   GitHub tools, git history, CI logs, or pasted content.
3. If a watch target is still running, poll at a reasonable interval until it
   reaches a terminal state or is clearly waiting on a human or external system.
4. If the artifact cannot be resolved, ask for the missing identifier or path.

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

## Report

Lead with the outcome and keep it compact:

```md
Status
- Done, blocked, stale, or still running.

Requested
- What the user asked the watched agent to do.

Observed
- What the watched agent changed, claimed, and verified.

Gaps
- Missing behavior, bugs, weak verification, or scope drift.

Fixes made
- Files changed and validation run. Omit for audit-only work.

Remaining risk
- Anything still unverified or waiting on CI/review/deploy/human input.
```

Name exact files, commands, PRs, branches, or session ids when they matter.
