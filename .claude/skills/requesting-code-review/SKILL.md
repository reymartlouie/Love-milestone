---
name: requesting-code-review
description: Request a structured code review after completing a task or feature. Use after each task in subagent-driven development, after completing a major feature, or before merging to main.
---

# Requesting Code Review

Review early, review often.

## When Reviews Are Mandatory

- After each task in subagent-driven development
- After completing a major feature
- Before merge to main
- Before a PR is opened

## When Reviews Are Optional (but useful)

- When stuck and wanting a second perspective
- Before a large refactor
- When unsure about an architectural decision

---

## The Process

### Step 1 — Get the commit SHAs

```bash
git log --oneline -10
```

Note the SHAs for the commits being reviewed.

### Step 2 — Dispatch a reviewer subagent

Provide the reviewer with focused context — not your full session history. The reviewer should evaluate the code itself, not your journey to get there.

**Reviewer prompt template:**

```
You are a code reviewer. Review the following changes.

COMMITS: [SHA1]..[SHA2]
SPEC: [paste relevant section from docs/superpowers/specs/]
FOCUS: [what specifically to review - e.g., "auth logic", "API contracts", "error handling"]

Review for:
1. Spec compliance — does the code do what the spec says?
2. Code quality — clarity, duplication, naming, error handling
3. Security — input validation, auth checks, data exposure
4. Tests — coverage, quality, edge cases

Format findings as:
[CRITICAL] must fix before proceeding
[IMPORTANT] fix before merge
[MINOR] optional improvement
```

### Step 3 — Respond to feedback

| Finding level | Action |
|--------------|--------|
| CRITICAL | Fix immediately before any further work |
| IMPORTANT | Fix before proceeding to next task |
| MINOR | Address before merge, or document why skipping |

---

## Critical Rules

- Never skip review assuming the change is "too simple"
- Never ignore CRITICAL findings
- Never move forward with unfixed IMPORTANT issues
- Never dismiss valid feedback without technical reasoning

**If you disagree with a reviewer:** Provide technical proof and code examples. "I don't think so" is not a response. "Here's why your suggestion breaks X" is.

---

## Disagreement Protocol

1. State your position clearly
2. Provide evidence (code, docs, test output)
3. If reviewer provides counter-evidence: evaluate honestly
4. If you were wrong: *"You were right — I checked and it does [X]. Implementing now."*
