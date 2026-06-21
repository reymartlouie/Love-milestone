---
name: ab-testing
description: Use when designing A/B tests, calculating sample sizes, analyzing experiment results, or building a growth experimentation program with ICE scoring and velocity tracking.
---

# A/B Testing & Experimentation

Design rigorous experiments that produce trustworthy results.

## Before Running Any Test

1. **Define the hypothesis:** "We believe [change] will [result] because [reason]"
2. **Select primary metric** — the one number that defines success
3. **Select secondary metrics** — supporting signals
4. **Select guardrail metrics** — things that must not get worse
5. **Calculate required sample size** before starting

## Sample Size Calculation

Minimum detectable effect (MDE) × baseline conversion rate = required sample.

Rule of thumb: need ~1,000 conversions per variant to detect a 20% lift with 95% confidence.

Use a calculator: `sampsize.com` or built-in tool in your testing platform.

**Never stop a test early because it looks good.** Peeking invalidates results.

## Test Design Principles

- One variable per test (unless factorial design)
- Random assignment — never manually assign users
- Run for minimum 1–2 full business cycles
- Avoid running during major external events (holidays, product launches)
- Document every test: hypothesis, variants, dates, results

## ICE Scoring for Prioritization

Score test ideas on three dimensions (1–10 each):

| Dimension | Question |
|-----------|---------|
| **Impact** | How much could this move the needle? |
| **Confidence** | How confident are we this will work? |
| **Ease** | How easy is it to implement? |

ICE score = (Impact + Confidence + Ease) / 3

Run highest ICE score tests first.

## Reading Results

- **Statistical significance** target: 95% (p < 0.05)
- **Practical significance** — is the lift large enough to matter?
- Check secondary metrics — did anything unexpected move?
- Check guardrails — did anything break?

## Common Mistakes

- Stopping tests too early (peeking)
- Running too many tests simultaneously on the same traffic
- Testing changes that are too small to detect
- Not segmenting results (mobile vs desktop may differ dramatically)
- Celebrating wins without implementing them

## Building an Experimentation Program

Track velocity (tests per month), win rate, and cumulative lift. Document learnings as a shared playbook. Target: 2–4 tests running simultaneously, 1+ new test per week.
