---
name: test-driven-development
description: Enforce strict TDD — write failing test first, then implement, then refactor. Use whenever writing any production code. If you wrote code before the test, delete it and restart.
---

# Test-Driven Development (TDD)

Write tests before implementation. Watch them fail first. Then make them pass.

---

## The Cycle: RED → GREEN → REFACTOR

### RED — Write a failing test
```
- Name it to describe behavior: "retries failed operations 3 times"
- Test real behavior, avoid unnecessary mocks
- Run it — confirm it FAILS
- A passing test before implementation is a broken test
```

### GREEN — Write the minimum code to pass
```
- Don't add anything beyond what the test requires
- No "while I'm here" improvements
- No speculative features
- Ugly is fine — you'll refactor next
```

### REFACTOR — Clean up while staying green
```
- Remove duplication
- Improve naming
- Extract helpers
- Run tests after every change — stay green throughout
```

---

## Non-Negotiable Rules

**NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST.**

If you write code before tests:
1. Delete the production code completely
2. Write the test
3. Watch it fail
4. Re-implement

Keeping it as "reference" while writing tests afterward defeats TDD — the test will pass immediately and prove nothing.

---

## What Good Tests Look Like

```ts
// Good — describes behavior clearly
it('returns 404 when user does not exist', async () => {
  const res = await request(app).get('/users/nonexistent-id')
  expect(res.status).toBe(404)
  expect(res.body.error).toBe('User not found')
})

// Bad — tests implementation, not behavior
it('calls findById', async () => {
  await getUser('123')
  expect(mockRepo.findById).toHaveBeenCalled()
})
```

---

## Rationalizations to Reject

| Rationalization | Reality |
|----------------|---------|
| "Too simple to test" | Simplicity doesn't prevent bugs |
| "I'll test after" | Tests written after pass immediately, prove nothing |
| "Already manually tested" | Can't re-run, no systematic record |
| "Deleting X hours of work is wasteful" | Sunk cost fallacy — keep the bad code and you keep the bad foundation |
| "The test would be trivial" | Write it anyway — trivial tests catch trivial regressions |

---

## Test Naming Convention

```
[unit] [condition/context] [expected outcome]

Examples:
- "AuthService when email is taken throws DuplicateEmailError"
- "Cart calculates total with discount applied correctly"
- "API rate limiter blocks requests after 100 per minute"
```

---

## When to Mock

Mock **external systems only**:
- HTTP calls to third-party APIs
- Email/SMS providers
- Payment processors

Do NOT mock:
- Your own database (use a test DB)
- Your own services
- Framework code

Real tests on real code catch real bugs.

---

## Regression Test Verification

When fixing a bug, verify the test actually catches the bug:

1. Write the test → it fails (proves it catches the bug)
2. Fix the code → test passes
3. **Revert the fix** → test must fail again
4. Re-apply the fix → test passes

Step 3 is mandatory. Skipping it means your regression test might not actually test the regression.
