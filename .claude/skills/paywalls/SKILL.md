---
name: paywalls
description: Use when optimizing in-product upgrade moments — feature gates, usage limit walls, trial expiration screens, or freemium-to-paid conversion flows.
---

# Paywall & Upgrade Screen CRO

Convert freemium users and trial users to paid.

**Core principle: Value Before Ask.** An upgrade should feel like a natural next step after users have experienced real value — not before.

## When to Show Upgrade Prompts

| Trigger | Right Time | Wrong Time |
|---------|-----------|-----------|
| Feature gate | After user discovers they need it | Before they understand the product |
| Usage limit | When they're actively hitting the limit | After they've given up |
| Trial expiration | After activation milestone is reached | Day 1 of trial |
| Time-triggered | After value has been clearly demonstrated | Arbitrary schedule |

## Paywall Types

**Feature lock** — user clicks a paid feature
- Show: what they'll unlock + minimal friction upgrade CTA
- Never: show a locked feature and not explain why

**Usage limit** — free tier cap hit
- Show: what they've accomplished + what comes next
- Frame as growth: "You've hit [X]. Upgrade to keep going."

**Trial expiration** — time-based prompt
- Show: what they'll lose + summary of value received
- Frame around loss: "Keep your [X items, Y automations] active"

## Essential Upgrade Screen Elements

1. **Headline** — benefit-focused, not feature-focused: "Keep building" not "Upgrade to Pro"
2. **Value demonstration** — what have they accomplished that they'd lose?
3. **Feature comparison** — what specifically unlocks?
4. **Transparent pricing** — no hidden fees, clear billing cycle
5. **Social proof** — one sentence: "Join 5,000+ teams on Pro"
6. **Clear CTA** — single button, verb-first
7. **Escape hatch** — easy dismiss that doesn't feel punitive

## Dark Patterns to Avoid

- Hidden close buttons (destroys trust)
- Guilt-trip messaging ("No thanks, I want to stay limited")
- Blocking critical workflows entirely (user data inaccessible)
- False urgency ("Offer expires in 10 minutes" — then it resets)

## Copy Framework

```
Headline:  [Action they want to take / outcome they want]
Context:   You've [achievement]. [Upgrade] to [continue/unlock/expand].
Features:  ✓ [Feature 1]  ✓ [Feature 2]  ✓ [Feature 3]
Proof:     [Customer quote or number]
CTA:       [Upgrade to Pro — $X/mo]
Dismiss:   [Maybe later]
```

## Measurement

| Metric | Track |
|--------|-------|
| Upgrade screen CTR | % who see it and click upgrade |
| Upgrade conversion | % who click and complete payment |
| Dismiss-then-convert | % who dismiss and upgrade within 7 days |

**Related:** `/pricing`, `/cro`, `/ab-testing`, `/onboarding`
