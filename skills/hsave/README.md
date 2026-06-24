# /hsave

Hyper Save makes agent responses shorter while keeping technical accuracy.

Use it when you want fewer output tokens, faster scanning, and less filler.

## What It Does

- Removes filler, hedging, pleasantries, and repeated explanation.
- Keeps code, commands, paths, URLs, error strings, API names, and symbols exact.
- Preserves safety-critical clarity for destructive, security, or high-stakes
  steps.
- Persists until you turn it off.

## Use

```text
/hsave
/hsave lite
/hsave balanced
/hsave max
/hsave classic
/hsave off
```

## OpenCode

Install or update:

```sh
npm install hyper-agent-skills@latest
```

Restart OpenCode, press `/`, then choose `/hsave`.

## Agent Skills

Agent Skills compatible clients load the skill from:

```text
.agents/skills/hsave/SKILL.md
```
