---
name: hyper-agnos
description: Use when the user wants cost-aware multi-model orchestration, cheaper model selection, model balance checks, parallel delegation, or invokes /hyper-agnos. Hyper Agnos discovers available models and credits when possible, chooses the best affordable routing plan, and keeps high-judgment work with the strongest model while cheaper models handle bounded scans, edits, tests, and summaries.
---

# /hyper-agnos

Hyper Agnos is a cost-aware orchestration mode for codebase-heavy work. It uses
the best available model for judgment and cheaper capable models for bounded
research, coding, validation, and summarization.

Use it when work is broad, token-heavy, parallelizable, or cost-sensitive.

## Activation

Use when the user invokes `/hyper-agnos`, asks for cheaper models, asks to
balance quality and cost, asks to check available models or credits, or wants
multi-agent delegation without wasting premium tokens.

If the task is tiny, highly coupled, credential-sensitive, or mostly judgment,
keep it local and explain that delegation would add overhead.

## Discover Available Models

Before planning, find what the current host can actually use.

1. Inspect native model or agent selectors exposed by the IDE, CLI, MCP tools,
   plugins, environment, or project config.
2. Check provider CLIs or APIs only when already configured. Do not request or
   print secret keys.
3. If safe account metadata is available, check remaining credits, balance,
   rate limits, quotas, or plan restrictions.
4. Prefer live pricing/model metadata from provider docs, CLIs, dashboards, or
   APIs when available. Do not rely on stale remembered prices.
5. If model inventory, pricing, or balance cannot be discovered, ask the user
   for the available providers/models and any budget or credit limits.

Record uncertainty briefly. Example:

```text
Model inventory: discovered from host selector.
Balance: unavailable in this host; user confirmation needed before paid calls.
```

## Rank Models

Build a routing table from the discovered options:

- **Coordinator:** strongest reasoning, architecture, synthesis, final review,
  safety calls, product tradeoffs, and conflict resolution.
- **Builder:** good code generation at moderate cost for bounded edits.
- **Scout:** cheapest reliable model for repo search, documentation scans,
  dependency inventory, log reduction, and test triage.
- **Verifier:** model/tool path suited for tests, browser checks, screenshots,
  CI inspection, and structured result summaries.
- **Fallback:** local or lowest-cost option for simple formatting, list
  extraction, and mechanical cleanup.

Balance quality, cost, latency, context window, tool access, rate limits, and
privacy. Use cheap models only for tasks with clear scopes and evidence
requirements. Keep high-risk decisions with the coordinator.

## Delegation Pattern

1. Name the expensive-token risk: broad repo scan, long logs, many files,
   repeated edits, large docs, browser validation, or CI output.
2. Split independent work into bounded lanes before reading everything locally.
3. Give each delegated lane a self-contained packet:
   - Repo path or target artifact.
   - Exact objective.
   - In-scope and out-of-scope files or surfaces.
   - Expected evidence: files, line refs, commands, diffs, failures,
     screenshots, costs, and uncertainty.
   - Verification commands or browser flows.
   - Stop conditions.
4. Run independent lanes in parallel when the host supports it.
5. Reopen important cited files, logs, screenshots, and diffs before trusting a
   delegated claim.
6. Integrate results with the coordinator and produce the final user-facing
   answer, fix, or audit.

## Cost Controls

- Prefer cheapest sufficient model, not cheapest model blindly.
- Put hard caps on exploratory scans: path filters, turn limits, output limits,
  and stop conditions.
- Summarize long outputs before asking a premium model to reason over them.
- Avoid sending secrets, private logs, or broad unfiltered data to external
  providers.
- Ask before using paid providers when balance, quota, or pricing is unknown.
- Report model-routing assumptions when they affect cost or quality.

## Fix And Verify

When edits are authorized:

1. Use cheaper builders only for narrow, reversible patches.
2. Keep shared-file coordination and final diff review with the coordinator.
3. Run the smallest useful validation after each meaningful patch.
4. If delegated work conflicts, prefer direct evidence over agent summaries.
5. Stop and ask when the next step needs credentials, paid spend, destructive
   actions, or product judgment.

## Report

Keep the final report compact:

```md
Routing
- Coordinator, cheap lanes, balance/credit status, and assumptions.

Work split
- What ran locally or through delegated models.

Evidence
- Files, commands, diffs, screenshots, logs, or CI checked.

Result
- What changed or what was found.

Cost and risk
- Spend-sensitive choices, unknown balance/pricing, and remaining risk.
```

Do not mention upstream skill names, source repos, or unrelated branding in
user-facing output.
