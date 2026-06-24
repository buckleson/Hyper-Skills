# Graph Report - .  (2026-06-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 19 nodes · 18 edges · 2 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e70d1540`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]

## God Nodes (most connected - your core abstractions)
1. `copyDir()` - 2 edges
2. `install()` - 2 edges
3. `__dirname` - 1 edges
4. `packageRoot` - 1 edges
5. `sourceRoot` - 1 edges
6. `commandsRoot` - 1 edges
7. `skillNames` - 1 edges
8. `opencodeCommands` - 1 edges
9. `__dirname` - 1 edges
10. `packageRoot` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (2 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.20
Nodes (8): commandsRoot, __dirname, opencodeCommandRoot, opencodeCommands, packageRoot, skillNames, sourceRoot, targetRoot

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (8): commandsRoot, copyDir(), __dirname, install(), opencodeCommands, packageRoot, skillNames, sourceRoot

## Knowledge Gaps
- **14 isolated node(s):** `__dirname`, `packageRoot`, `sourceRoot`, `commandsRoot`, `skillNames` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `__dirname`, `packageRoot`, `sourceRoot` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._