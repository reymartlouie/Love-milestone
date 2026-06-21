---
name: caveman-help
description: Display the caveman skill reference card — all commands, modes, and usage. Use when user invokes /caveman-help or asks what caveman commands are available.
---

# Caveman Help

Display reference card for all caveman skills.

## Trigger

`/caveman-help`

## Output This Reference Card

```
CAVEMAN — why use many token when few do trick
===============================================

MODES
  /caveman         → full (default)
  /caveman lite    → remove filler, keep sentences
  /caveman full    → drop articles + filler, fragments OK
  /caveman ultra   → max compression, abbreviate common words
  /caveman wenyan  → classical Chinese variant

SKILLS
  /caveman-commit   → terse conventional commit messages
  /caveman-review   → one-line PR feedback (L42: 🔴 bug: ...)
  /caveman-compress → compress .md/.txt files ~46%
  /caveman-stats    → show token savings for session
  /caveman-help     → this card
  /cavecrew         → delegate to compressed subagents

SUBAGENTS (via /cavecrew)
  investigator → find code locations + call chains
  builder      → surgical edits ≤2 files
  reviewer     → audit diffs for bugs

STOP
  "stop caveman" or "normal mode"

SOURCE: github.com/JuliusBrussee/caveman
```
