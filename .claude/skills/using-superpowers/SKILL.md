---
name: using-superpowers
description: Master guide for the superpowers skill system — when and how to invoke each skill. Use when unsure which superpowers skill applies, or to understand the full workflow from idea to shipped feature.
---

# Using Superpowers

**Core rule:** Invoke skills if there's even a 1% chance they apply — before responding or before taking action.

---

## Priority Order

1. **User's explicit instructions** (always highest)
2. **Superpowers skills** (check before defaulting to intuition)
3. **Default system behavior** (fallback only)

---

## Full Workflow: Idea → Shipped Feature

```
/brainstorming          → clarify what you're building, produce written spec
/writing-plans          → break spec into 2–5 min tasks with TDD steps
/using-git-worktrees    → create isolated workspace
/executing-plans        → implement task by task
  or
/subagent-driven-development → implement with fresh subagent per task
/test-driven-development → enforce RED→GREEN→REFACTOR throughout
/requesting-code-review → review after each task or major feature
/receiving-code-review  → process review feedback with technical rigor
/verification-before-completion → verify before claiming done
/finishing-a-development-branch → merge, PR, or discard
```

---

## Skill Selection Guide

| Situation | Skill |
|-----------|-------|
| Starting anything new | `/brainstorming` |
| Ready to plan implementation | `/writing-plans` |
| Have a plan, ready to build | `/executing-plans` or `/subagent-driven-development` |
| Writing any production code | `/test-driven-development` |
| Something is broken | `/systematic-debugging` |
| About to say "it's done" | `/verification-before-completion` |
| Feature complete, need review | `/requesting-code-review` |
| Received review feedback | `/receiving-code-review` |
| Ready to merge/PR | `/finishing-a-development-branch` |
| 3+ independent problems | `/dispatching-parallel-agents` |
| Context filling up | `/subagent-driven-development` or `/cavecrew` |
| Want to write a new skill | `/writing-skills` |

---

## Skill Types

**Rigid skills** — follow exactly, no adaptation:
- `test-driven-development`
- `verification-before-completion`
- `systematic-debugging`

**Flexible skills** — adapt to context:
- `brainstorming`
- `writing-plans`
- `dispatching-parallel-agents`

The skill itself will tell you which it is.

---

## Red Flags — You're Rationalizing Away a Skill

- "This is too simple to need brainstorming"
- "I don't need a plan for this, it's obvious"
- "TDD would slow me down here"
- "I'll verify later"
- "The review is unnecessary for this change"

These thoughts are the exact moments the skills are most needed.

---

## Process Skills Come Before Implementation Skills

A request to "build X" requires:
1. `/brainstorming` first (what is X exactly?)
2. `/writing-plans` (how do we build X?)
3. Then implementation

Never jump straight to building.
