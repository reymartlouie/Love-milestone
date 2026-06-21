---
name: using-git-worktrees
description: Create isolated git worktree workspaces for feature development. Use at the start of any new feature or task to avoid working on main/master directly.
---

# Using Git Worktrees

Create isolated workspaces per feature. Never develop directly on main/master.

---

## Step 0 — Detect Existing Isolation (always first)

Check if you're already in an isolated workspace:

```bash
# Are we in a worktree?
git worktree list

# Are we on main/master?
git branch --show-current

# Are we in a submodule? (do NOT confuse with worktrees)
git rev-parse --show-superproject-working-tree
```

If already isolated: proceed with development. Skip the rest of this skill.

**Critical:** Using `git worktree add` when a native harness tool is available creates phantom state the harness can't see. Check for native tools first.

---

## Step 1 — Create the Worktree

### Option A: Native tool (preferred if available)
Use the harness's built-in worktree tool if your platform provides one.

### Option B: Git worktree (manual fallback)

```bash
# Create worktree with new branch
git worktree add .worktrees/[feature-name] -b feat/[feature-name]

# Verify it was created
git worktree list
```

**Directory priority:**
1. User's explicit preference
2. `.worktrees/` (project-local, gitignored)
3. `worktrees/` (project-local, gitignored)
4. Default: `.worktrees/`

**Before creating project-local directories — verify gitignored:**
```bash
cat .gitignore | grep worktree
# Must show .worktrees/ or worktrees/ before proceeding
```

If not gitignored, add it first:
```bash
echo ".worktrees/" >> .gitignore
git add .gitignore && git commit -m "chore: gitignore worktrees directory"
```

---

## Step 2 — Switch to Worktree

```bash
cd .worktrees/[feature-name]
```

---

## Step 3 — Set Up Dependencies

Auto-detect project type and install:

```bash
# Node.js
[ -f package.json ] && npm install

# Python
[ -f requirements.txt ] && pip install -r requirements.txt
[ -f pyproject.toml ] && pip install -e .

# Rust
[ -f Cargo.toml ] && cargo build

# Go
[ -f go.mod ] && go mod download
```

---

## Step 4 — Verify Baseline

Run tests before making any changes:

```bash
npm test   # or pytest, cargo test, go test ./...
```

**All baseline tests must pass before starting work.** If they don't, stop and investigate — don't proceed past failing baseline tests without explicit user permission.

---

## Red Flags

- Never skip Step 0 detection
- Never bypass native tools to use git commands
- Never proceed past failing baseline tests
- Never create worktrees inside another worktree
- Never commit the `.worktrees/` directory itself
