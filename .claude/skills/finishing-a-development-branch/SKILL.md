---
name: finishing-a-development-branch
description: Complete a development branch — verify tests, detect environment, present merge/PR/keep/discard options, execute the choice, clean up workspace. Use when a feature or task is fully implemented and verified.
---

# Finishing a Development Branch

Structured completion of development work.

**Core sequence: Verify tests → Detect environment → Present options → Execute choice → Clean up**

---

## Step 1 — Verify Tests

Run the full test suite:

```bash
npm test   # or pytest, cargo test, go test ./...
```

**Stop if tests fail.** Do not proceed to options until all tests pass. Fix failures first.

---

## Step 2 — Detect Environment

```bash
# Normal repo or worktree?
git worktree list

# Detached HEAD?
git branch --show-current
# Empty output = detached HEAD
```

---

## Step 3 — Determine Base Branch

```bash
git log --oneline main..HEAD    # if base is main
git log --oneline master..HEAD  # if base is master
```

Identify: what branch did this work originate from?

---

## Step 4 — Present Options

### Normal repository (4 options):

```
Development complete. Tests passing. What would you like to do?

1. Merge locally to [base branch]
   → Merges now, stays local, no PR

2. Push and create a Pull Request
   → Pushes branch, opens PR for review

3. Keep branch as-is
   → No merge, no push, preserve for later

4. Discard this work
   → Delete branch and all changes (requires confirmation)
```

### Detached HEAD / worktree (3 options — no merge):
Options 2, 3, 4 only (can't merge from detached HEAD).

---

## Step 5 — Execute the Choice

### Option 1 — Merge locally
```bash
git checkout [base-branch]
git merge --no-ff feat/[feature-name] -m "feat: [description]"
git log --oneline -5  # verify merge
```

### Option 2 — Push and PR
```bash
git push -u origin feat/[feature-name]
gh pr create --title "[title]" --body "[description]"
```

### Option 3 — Keep as-is
```bash
# Nothing to execute — confirm branch is preserved
git branch  # show it's still there
```

### Option 4 — Discard
```
⚠️ This will permanently delete all work on this branch.
Type "yes, discard" to confirm:
```
Only proceed after typed confirmation.

```bash
git checkout [base-branch]
git branch -D feat/[feature-name]
```

---

## Step 6 — Clean Up Workspace

**Only for merge (Option 1) and discard (Option 4):**

```bash
# Must be in main repo root before removal
cd [main-repo-root]
git worktree remove .worktrees/[feature-name]
git worktree prune
```

**Never clean up for Option 2 (PR open) or Option 3 (keep as-is).**
**Only remove worktrees your tool created** — never remove others.

---

## Safety Rules

- Require typed confirmation before discarding
- Always `cd` to main repo root before worktree removal
- Verify success after each git operation before proceeding
- Never delete a worktree that has uncommitted changes
