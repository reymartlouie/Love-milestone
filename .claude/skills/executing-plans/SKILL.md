---
name: executing-plans
description: Execute a written implementation plan task by task with review checkpoints. Use after a plan exists in docs/superpowers/plans/ — works through each task sequentially, stops on blockers, never guesses.
---

# Executing Plans

Structured implementation of written plans with review checkpoints.

**Announce:** "I'm using the executing-plans skill to implement this plan."

---

## Phase 1 — Load and Review

1. Read the plan file fully: `docs/superpowers/plans/[feature-name].md`
2. Read the spec it references: `docs/superpowers/specs/[feature-name].md`
3. Raise any concerns **before starting**:
   - Missing dependencies
   - Ambiguous instructions
   - Conflicting requirements
   - Missing context
4. Create a task list (TodoWrite) from the plan tasks
5. Set up isolated workspace via `/using-git-worktrees`

**Never start on main/master without explicit user consent.**

---

## Phase 2 — Execute Tasks

For each task:

1. Mark task as `in_progress`
2. Follow the task steps **exactly** — no improvising
3. Run the specified verification commands
4. Read the complete output — don't assume success
5. Mark task as `completed` only after verification passes
6. Make the specified git commit

### Stop Immediately If:
- A dependency is missing and not in the plan
- Tests fail unexpectedly
- Instructions are unclear or contradictory
- The approach seems fundamentally wrong

**Ask for clarification rather than guessing.** One wrong assumption can cascade into hours of rework.

### If the plan needs updating:
Return to Phase 1 — re-read the updated plan before continuing.

---

## Phase 3 — Complete Development

After all tasks are marked complete:

1. Run the full test suite — not just task-specific tests
2. Verify all spec requirements are met
3. Invoke `/finishing-a-development-branch`

---

## Required Skills

This skill depends on:
- `/using-git-worktrees` — isolated workspace
- `/writing-plans` — the plan being executed
- `/finishing-a-development-branch` — branch completion

---

## Critical Rules

- Never skip a task — if a task seems unnecessary, question it before skipping
- Never combine tasks — each task is isolated for a reason
- Never implement "obvious" improvements not in the plan — that belongs in a new plan
- Never declare complete without running verification
