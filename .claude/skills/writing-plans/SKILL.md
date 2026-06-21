---
name: writing-plans
description: Create detailed implementation plans broken into 2–5 minute tasks with TDD steps, exact code, and commands. Use after brainstorming is complete and a spec is approved — before any implementation starts.
---

# Writing Plans

Generate comprehensive, task-by-task implementation guides. Plans assume zero context — any engineer (or subagent) should be able to follow them without asking questions.

---

## Key Principles

- **Zero-context assumption** — specify which files to touch, show actual code, give exact commands
- **No placeholders** — no "TBD", "add validation here", or vague instructions
- **Bite-sized tasks** — each task takes 2–5 minutes
- **TDD throughout** — every task follows: write failing test → run it → implement → verify → commit
- **DRY & YAGNI** — don't build what isn't needed; no speculative abstractions
- **Frequent commits** — each task ends with `git commit`

---

## Plan Structure

### Header
```markdown
# Plan: [Feature Name]
**Spec:** docs/superpowers/specs/[feature-name].md
**Goal:** One sentence summary
**Approach:** Brief architecture description
```

### File Map
List every file being created or modified and why:
```markdown
## Files
- `src/auth/service.ts` — new: authentication business logic
- `src/auth/service.test.ts` — new: TDD tests for auth service
- `src/routes/auth.ts` — modified: add login/logout endpoints
- `prisma/schema.prisma` — modified: add Session model
```

### Numbered Tasks
Each task must include:
1. **Task title** — imperative verb, clear outcome
2. **Steps** — numbered, specific, no ambiguity
3. **Code blocks** — complete, copy-pasteable
4. **Commands** — exact shell commands with expected output
5. **Verification** — how to confirm it worked
6. **Commit message** — ready to use

```markdown
## Task 3: Add password hashing to user registration

**Steps:**
1. Open `src/auth/service.ts`
2. Write failing test first:
   ```ts
   it('hashes password before saving', async () => {
     const user = await authService.register('test@example.com', 'plaintext')
     expect(user.password).not.toBe('plaintext')
     expect(await bcrypt.compare('plaintext', user.password)).toBe(true)
   })
   ```
3. Run test — confirm it fails: `npm test -- --grep "hashes password"`
4. Install bcrypt: `npm install bcrypt @types/bcrypt`
5. Implement in service:
   ```ts
   async register(email: string, password: string) {
     const hashed = await bcrypt.hash(password, 12)
     return this.db.user.create({ data: { email, password: hashed } })
   }
   ```
6. Run test — confirm it passes
7. Commit: `git commit -m "feat(auth): hash passwords with bcrypt on registration"`
```

### Self-Review Section
After writing all tasks, verify:
- Every spec requirement maps to at least one task
- No task references undefined variables or imports
- Commands are correct for the project's package manager
- Test names clearly describe behavior

---

## Save Location

```
docs/superpowers/plans/[feature-name].md
```

---

## After Saving — Present Execution Options

Ask the user which execution mode they prefer:

**Option A — Subagent-Driven** (`/subagent-driven-development`)
Fresh subagent per task + two-stage review. Best for complex features or when you want maximum quality.

**Option B — Inline Execution** (`/executing-plans`)
Execute tasks in this session. Faster, better for smaller plans.
