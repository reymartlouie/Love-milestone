---
name: systematic-debugging
description: Structured root-cause debugging — investigate before fixing, one hypothesis at a time. Use when encountering any bug, error, or unexpected behavior. Never apply a fix without knowing the root cause.
---

# Systematic Debugging

Find root causes before attempting fixes.

**Core rule: NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST.**

---

## Four-Phase Process

### Phase 1 — Root Cause Investigation

1. **Read the error message carefully** — the full message, not just the first line
2. **Reproduce consistently** — if you can't reproduce it reliably, you don't understand it yet
3. **Review recent changes** — `git log --oneline -20`, `git diff HEAD~1`
4. **Gather diagnostic evidence**:
   - Add logging at key points
   - Check network requests / responses
   - Inspect database state
   - Read stack traces from bottom to top
5. **Trace data flow backward** through the call stack to where the bad data originates

Do not stop Phase 1 until you can state: *"The bug is caused by X in file Y at line Z."*

### Phase 2 — Pattern Analysis

1. Find working examples of the same pattern in your codebase
2. Compare them against the broken code line by line
3. Identify the specific differences
4. Understand dependencies and assumptions in both

### Phase 3 — Hypothesis and Testing

1. Form **one specific hypothesis** about the root cause
2. Write it down: *"I believe the bug is caused by [X] because [evidence Y]."*
3. Test with the **minimal possible change** — one variable at a time
4. Never layer multiple fixes together — you won't know which one worked

### Phase 4 — Implementation

1. Write a failing test that reproduces the bug
2. Implement a single fix targeting the root cause
3. Verify the test now passes
4. Run the full test suite — no regressions
5. Commit with a descriptive message explaining the root cause

---

## Red Flags — Stop and Restart Phase 1 If:

- You're thinking "quick fix for now"
- You're proposing a solution before completing investigation
- You're applying multiple fixes simultaneously
- You've tried 3+ fixes and nothing works

Three failed fixes = the wrong root cause. Go back to Phase 1.

---

## Diagnostic Commands

```bash
# Recent changes
git log --oneline -20
git diff HEAD~1 -- [file]

# Find where something is called
grep -rn "functionName" src/

# Check environment
node --version && npm --version
cat .env | grep RELEVANT_VAR

# Database state (if applicable)
# Run a targeted query against test DB
```

---

## Why This Works

| Approach | Time to fix | First-time success rate |
|----------|------------|------------------------|
| Systematic (this skill) | 15–30 min | ~95% |
| Random fix attempts | 2–3 hours | ~40% |

Systematic debugging saves time even though it feels slower at the start.

---

## When Architecture Is the Problem

If you've applied 3+ correct fixes and the bug persists or returns, the root cause may be architectural. Stop feature-level debugging and raise the concern:

*"I've investigated X, Y, and Z. Each is a symptom of [architectural issue]. We may need to reconsider [component/pattern]."*
