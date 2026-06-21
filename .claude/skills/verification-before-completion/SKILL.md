---
name: verification-before-completion
description: Require fresh verification evidence before claiming any work is complete. Use before saying any task, feature, or fix is done — run the actual command, read the actual output, then claim completion.
---

# Verification Before Completion

**Non-negotiable: NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.**

---

## The Five Steps (every time)

1. **Identify** the verification command that proves your claim
2. **Execute** the full command — freshly, right now
3. **Read** the complete output and exit codes
4. **Verify** the output actually confirms your assertion
5. **Only then** make the claim with evidence attached

---

## Banned Phrases (unverified assumptions)

Never say these without running verification first:

- "should work now"
- "probably fixed"
- "seems to be working"
- "I believe this will pass"
- "the tests should pass"
- "this looks correct"

Replace with: *"Tests pass: [paste output]"* or *"Build succeeds: exit code 0"*

---

## What Counts as Evidence

| ✅ Evidence | ❌ Not Evidence |
|------------|----------------|
| `34/34 tests pass` (actual output) | "Should pass now" |
| Build exit code 0 | Linter passing alone |
| `curl` response showing correct data | "The logic looks right" |
| Screenshot of working UI | "I tested it manually" |
| Error no longer appears in logs | "I fixed the root cause" |

---

## Regression Test Verification (mandatory cycle)

When fixing a bug:

1. Write test → **must fail** (proves it catches the bug)
2. Fix code → test passes
3. **Revert the fix** → test must fail again
4. Restore fix → test passes

Step 3 is not optional. A test that passes before the fix is not testing the fix.

---

## Before Closing Any Task

Run the specific verification for what you just did:

| What you did | Verification command |
|-------------|---------------------|
| Fixed a bug | `npm test` (full suite) |
| Added an endpoint | `curl` the actual endpoint |
| Ran a migration | Query the DB for the new schema |
| Built frontend | `npm run build` → exit 0 |
| Fixed a type error | `tsc --noEmit` → exit 0 |
| Fixed a lint error | `npm run lint` → exit 0 |

---

## Why This Matters

Claiming completion without verification is not confident — it's dishonest, regardless of how certain you feel. Fatigue, pattern-matching, and overconfidence cause bugs to slip through. The command takes 10 seconds. The investigation it prevents takes hours.
