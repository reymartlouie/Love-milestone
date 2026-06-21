---
name: subagent-driven-development
description: Execute implementation plans by dispatching a fresh subagent per task with two-stage review (spec compliance + code quality). Use for complex features where maximum quality and context isolation are needed.
---

# Subagent-Driven Development

Fresh subagent per task + two-stage review = high quality, fast iteration.

Each subagent gets isolated context — no inherited session history, sharp focus on one task.

---

## When to Use This vs. Inline Execution

| Use subagent-driven | Use executing-plans (inline) |
|--------------------|------------------------------|
| Complex feature | Small, simple plan |
| Maximum quality needed | Speed is priority |
| Long session (context filling up) | Short session |
| Multiple reviewers needed | Quick implementation |

---

## Setup

1. Load plan: `docs/superpowers/plans/[feature-name].md`
2. Extract ALL tasks upfront with full context
3. Set up isolated workspace via `/using-git-worktrees`

---

## Per-Task Loop

### 1. Dispatch implementer subagent

```
You are an implementer subagent.

TASK: [task title from plan]
PLAN STEPS:
[paste exact steps from plan]

FILES TO MODIFY: [list]
TESTS TO WRITE: [list]
VERIFICATION COMMAND: [exact command]

Constraints:
- Follow plan steps exactly
- TDD: write failing test first
- Commit at the end of the task
- If unclear on anything, ask before implementing
```

### 2. Handle questions
If the subagent asks questions: answer completely before it proceeds. Partial answers cause wrong implementations.

### 3. Spec compliance review

After implementer completes, dispatch a reviewer:

```
You are a spec compliance reviewer.

SPEC SECTION: [paste relevant spec section]
COMMITS: [SHA range]
QUESTION: Does the implementation do exactly what the spec requires?

Report:
[PASS] if fully compliant
[FAIL: reason] for each deviation
```

If FAIL: same implementer subagent fixes and resubmits. Do NOT manually patch.

### 4. Code quality review

After spec review passes:

```
You are a code quality reviewer.

COMMITS: [SHA range]
Review for: clarity, duplication, naming, error handling, test coverage, edge cases.

Format: [CRITICAL] / [IMPORTANT] / [MINOR]
```

Address CRITICAL before proceeding. IMPORTANT before merge.

### 5. Repeat for next task

---

## Model Selection

Match model to task complexity:

| Task type | Model |
|-----------|-------|
| Mechanical (boilerplate, CRUD) | Cheaper/faster model |
| Integration (connecting systems) | Standard model |
| Architecture / design decisions | Most capable model |

---

## Final Review

After all tasks complete: one full review of all changes together.

```
Review all commits from [first SHA]..[last SHA].
Verify the complete feature works end-to-end per spec.
Run: [full test suite command]
```

---

## Critical Rules

- Never skip reviews — not even for "trivial" tasks
- Never start code quality review before spec compliance passes
- Never manually patch code a subagent should fix
- Never proceed with unfixed CRITICAL findings
- If a subagent asks questions: stop, answer fully, then let it proceed
