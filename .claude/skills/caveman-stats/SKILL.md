---
name: caveman-stats
description: Display token usage and estimated savings for the current session. Use when user invokes /caveman-stats or asks how many tokens caveman mode has saved.
---

# Caveman Stats

Display real token usage and estimated savings for current session.

## Trigger

`/caveman-stats`

## Behavior

Read session log to calculate:
- Total output tokens used
- Estimated tokens without compression (baseline)
- Tokens saved
- % reduction achieved
- Caveman mode: active / inactive

Report format:

```
session tokens:  1,240
baseline est:    3,850
saved:           2,610 (67%)
mode:            full
```

## Rules

- Read from session data — no AI estimation
- Show actuals only; no guesses
- If session data unavailable: report "stats unavailable — no session log found"
