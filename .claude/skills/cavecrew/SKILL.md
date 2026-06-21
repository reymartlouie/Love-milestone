---
name: cavecrew
description: Compressed-output subagent delegation — investigator, builder, reviewer. Use when user invokes /cavecrew or asks to delegate tasks to save main-context tokens during long sessions.
---

# Cavecrew

Three compressed-output subagents for token-efficient delegation.

## Subagents

| Agent | Use For |
|-------|---------|
| `cavecrew-investigator` | Finding code locations, call chains, symbol definitions |
| `cavecrew-builder` | Small surgical edits (≤2 files) |
| `cavecrew-reviewer` | Audit diffs for defects |

Output ~60% of verbose equivalents.

## When to Use Cavecrew

- Prefer compact, structured findings
- Long session, main context filling up
- Task is clearly scoped to one of the three roles

## When to Use Standard Agents Instead

- Need prose, architectural discussion, or deep rationale
- Task spans many files (builder will signal `too-big.`)
- Onboarding or explaining to new contributors

## Delegation Rules

### cavecrew-investigator
- Returns: file paths first, line numbers, call chains
- Never: prose summaries, architectural opinions

### cavecrew-builder
- Returns: list of changed files + verification status
- Hard limit: ≤2 files per task
- On scope creep: signal `too-big.` and halt — do not proceed

### cavecrew-reviewer
- Returns: categorized issues with severity tags (🔴🟡🔵)
- Bugs only — no design feedback, no approvals

## Output Format

All cavecrew output uses caveman compression. Exception: security alerts and irreversible actions revert to clear English, then resume caveman.

## Usage

```
/cavecrew investigator find where AuthService.login is called
/cavecrew builder add null check to user.ts:42
/cavecrew reviewer review this diff
```
