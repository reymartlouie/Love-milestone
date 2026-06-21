---
name: dispatching-parallel-agents
description: Dispatch multiple independent subagents to work concurrently on separate problems. Use when 3+ failures or tasks exist across different subsystems with no shared state between them.
---

# Dispatching Parallel Agents

Run multiple independent subagents concurrently. One agent per independent problem domain.

---

## When to Use

✅ Use parallel dispatch when:
- 3+ independent problems exist simultaneously
- Each problem can be understood without context from others
- Failures involve different subsystems (e.g., auth, payments, notifications)
- No shared state between investigations

❌ Do NOT use when:
- Problems are interconnected or share root causes
- Tasks require full system understanding
- Agents would need to coordinate mid-execution
- One task's output is another's input

---

## Four-Step Process

### Step 1 — Group by domain

Categorize all problems/tasks by the broken component or subsystem:

```
auth failures → Agent A
payment errors → Agent B
notification bugs → Agent C
```

### Step 2 — Write focused agent prompts

Each prompt must be:
- **Focused** — one domain only
- **Self-contained** — all necessary context included
- **Specific** — exact files, exact expected outcomes

**Good prompt:**
```
Investigate why POST /api/auth/login returns 500 when email contains a +.
Files to check: src/auth/service.ts, src/auth/routes.ts
Expected: 200 with JWT token
Reproduce with: curl -X POST .../login -d '{"email":"test+1@example.com"}'
Return: root cause + minimal fix
```

**Bad prompt:**
```
Fix all the auth tests
```

### Step 3 — Launch concurrently

Dispatch all agents in a single message (same response) so they run in parallel, not sequentially.

### Step 4 — Integrate results

After all agents complete:
1. Review each agent's summary
2. Verify no conflicts between changes
3. Run the complete test suite across all changed areas
4. Apply fixes in dependency order if any

---

## Agent Prompt Template

```
You are a [investigator/builder/reviewer] subagent.

DOMAIN: [subsystem name]
TASK: [specific goal]
FILES: [list of relevant files]
REPRODUCE: [exact command to reproduce the issue]
CONTEXT: [any necessary background — no full session history]
CONSTRAINTS: [what NOT to change]
DELIVERABLE: [exactly what to return]
```

---

## Real Example

3 failing tests across different areas:

| Agent | Domain | Files | Goal |
|-------|--------|-------|------|
| A | User approval flow | `src/approvals/*` | Fix approval state machine |
| B | Batch completion | `src/batch/*` | Fix batch status not updating |
| C | Abort functionality | `src/abort/*` | Fix abort not cancelling children |

Result: All 3 fixed concurrently with zero conflicts.

**Sequential time:** ~90 min | **Parallel time:** ~30 min
