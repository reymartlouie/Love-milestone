---
name: brainstorming
description: Design-first brainstorming before any implementation. Use when starting any new feature, project, or task — forces clarification of requirements, proposes 2-3 approaches with trade-offs, and produces a written spec before a single line of code is written.
---

# Brainstorming: Design-First Process

**Hard gate:** Do NOT invoke any implementation skill, write any code, scaffold any project, or take any implementation action until you have presented a design and the user has approved it.

This applies even to "simple" projects — simple projects contain unexamined assumptions that lead to wasted effort.

---

## Nine-Step Process

### Step 1 — Explore existing context
Read relevant files, check existing patterns, understand what's already there.

### Step 2 — Offer visual tools if helpful
Suggest diagrams, flowcharts, or mockups if the problem is visual or architectural.

### Step 3 — Ask clarifying questions (one at a time)
Never ask a list of questions. Ask the most important one, wait for answer, then ask the next.

Key questions to work through:
- What problem does this actually solve?
- Who uses this and how?
- What does success look like?
- What are the constraints (time, tech, compatibility)?
- What should this explicitly NOT do?

### Step 4 — Propose 2–3 approaches with trade-offs

For each approach:
- Name it clearly
- Describe the approach in 2–3 sentences
- List pros and cons
- State your recommendation and why

### Step 5 — Present design sections with approval gates
Break the design into logical sections. Present each section and get approval before moving to the next.

### Step 6 — Write design documentation
Save the agreed spec to: `docs/superpowers/specs/[feature-name].md`

Include:
- Problem statement
- Chosen approach and rationale
- Data models / API contracts
- User flows
- Edge cases and error handling
- Out of scope items

### Step 7 — Self-review the spec
Check for:
- Completeness: does it cover all user flows?
- Consistency: no contradictions between sections?
- Testability: can every requirement be verified?
- Missing edge cases

### Step 8 — Get user approval on written spec
Present the spec. Explicitly ask: "Does this capture what you want? Any changes before I start planning?"

Allow revision loops — return to earlier steps if changes are needed.

### Step 9 — Hand off to writing-plans
Once spec is approved, invoke `/writing-plans` to break it into implementation tasks.

---

## Design Principles

- Break systems into smaller units with single purposes and well-defined interfaces
- Prefer explicit over implicit
- Design for testability from the start
- Name things accurately — a confusing name means a confused concept

---

## What This Prevents

- Building the wrong thing correctly
- Discovering requirements mid-implementation
- Rework from unexamined assumptions
- "Simple" tasks that balloon in scope
