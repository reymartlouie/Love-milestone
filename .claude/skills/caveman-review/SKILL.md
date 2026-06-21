---
name: caveman-review
description: Ultra-compressed code review — one line per finding with location, problem, and fix. Use when user invokes /caveman-review or asks for terse PR feedback.
---

# Caveman Review

Terse, actionable code review. One line per finding.

## Format

```
L<line>: <problem>. <fix>.
```

Multi-file:
```
<file>:L<line>: <problem>. <fix>.
```

## Severity Markers

| Tag | Meaning |
|-----|---------|
| 🔴 bug | Broken behavior, causes incidents |
| 🟡 risk | Works but fragile — race condition, missing null check, bad error handling |
| 🔵 nit | Style/naming/micro-opt — optional to address |
| ❓ q | Genuine question, not directive |

## What to Exclude

- "I noticed that..." / "It seems like..."
- Hedging: "perhaps", "you might want to"
- Restating code logic already visible in the diff
- Self-congratulation

## What to Include

- Exact line numbers
- Symbol names in backticks
- Concrete fix, not just the problem
- Reasoning when non-obvious

## Exception — Write Full Paragraph For

- Security vulnerabilities
- Architectural disputes
- Onboarding contexts

Resume terse format immediately after.

## Example

```
L42: 🔴 bug: `user` can be null here. Add `if (!user) return 401`.
L78: 🟡 risk: no error handling on `db.save()`. Wrap in try/catch.
L103: 🔵 nit: `getUserData` → `fetchUser` (matches naming convention).
```

Scope: review only. No fixes, no approvals, no linter runs.
