---
name: receiving-code-review
description: Process incoming code review feedback with technical rigor — evaluate before implementing, verify claims, push back when warranted. Use when receiving review feedback from any reviewer.
---

# Receiving Code Review

Evaluate feedback before acting on it. Actions speak louder than words.

**Do not say "Great point!" or "You're absolutely right!" — just start working.**

---

## The Response Framework

### Step 1 — READ
Read the complete feedback without reacting. Finish before forming opinions.

### Step 2 — VERIFY
Before implementing any suggestion, check codebase reality:
- Does the suggested change break existing functionality?
- Does the reviewer have full context of this area?
- Is the proposed feature actually used (YAGNI)?
- Does it contradict architectural decisions already made?

### Step 3 — CLARIFY (if needed)
If any item is unclear: **stop implementation entirely.**

Items in a review may be related. Partial understanding = wrong implementation. Ask once, clearly, about all unclear items before proceeding.

### Step 4 — IMPLEMENT IN ORDER
1. Blocking/CRITICAL issues first
2. Simple fixes
3. Complex refactoring last

Test each change individually. Don't batch fixes.

---

## Banned Responses (performative, not technical)

- "You're absolutely right!"
- "Great catch!"
- "I completely agree!"
- "Thanks for the feedback!"

These are filler. Replace with action or a technical response.

---

## When to Push Back

Push back when feedback:
- **Breaks existing functionality** — demonstrate with a test
- **Lacks full context** — explain the constraint the reviewer missed
- **Violates YAGNI** — show the feature isn't actually used
- **Contradicts architectural decisions** — reference the spec or prior decision

**How to push back:**
```
"I checked [X] and here's what I found: [evidence].
If we make this change, it breaks [Y] because [reason].
Alternative: [your proposal]."
```

---

## When You Were Wrong

If your pushback was incorrect:

*"You were right — I checked and it does [X]. Implementing now."*

Correct factually, no drama, move on.

---

## External Reviewer vs. Internal Partner

**External reviewer** — apply skepticism:
- Verify suggestions before implementing
- They may not have full context

**Internal partner / your own review** — higher trust:
- They know the codebase
- Still verify, but less skepticism needed

---

## Multi-Item Feedback Processing

1. List all items
2. Identify unclear items → clarify first
3. Group: blocking / simple / complex
4. Implement blocking items
5. Run tests
6. Implement simple items
7. Run tests
8. Implement complex refactoring
9. Run full test suite
10. Report completion with evidence
