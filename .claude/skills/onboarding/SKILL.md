---
name: onboarding
description: Use when optimizing user onboarding, reducing post-signup dropout, or increasing activation rates. Covers aha moment identification, flow design, checklist patterns, and measurement.
---

# Onboarding CRO

Get users to the aha moment as fast as possible.

**Goal:** Minimize time-to-value. The faster users experience success, the more likely they retain.

## Step 1: Define Your Activation Metric

The activation metric is the action that best predicts long-term retention.

Find it by asking: "What do retained users do that churned users don't?"

```
Low retention cohort: they did X
High retention cohort: they did Y
Activation = doing Y
```

Examples:
- Slack: send a message in first 24 hours
- Dropbox: upload first file
- HubSpot: create and send first email
- GitHub: create first repository

## Step 2: Map the Path to Activation

List every step between signup and activation:

```
Signup → Email verification → Profile setup → 
Connect integration → Import data → First action → AHA
```

Measure drop-off at every step. The biggest drop-off is your priority fix.

## Step 3: Choose Your Onboarding Pattern

| Pattern | How | Best For |
|---------|-----|---------|
| **Product-first** | Drop user into product immediately | Simple products, experienced users |
| **Guided setup** | Step-by-step wizard | Products needing personalization |
| **Value-first** | Show demo data before real setup | Complex products, "blank slate" risk |
| **Checklist** | 3–7 tasks, progress visible | Multi-step setup, gamification works |

## Onboarding Principles

- **One goal per session** — don't ask users to do 10 things
- **Progress visibility** — progress bars, checklists motivate completion
- **Interactive > tutorial** — let them do the thing, not watch
- **Empty states as opportunities** — first empty state = first call to action
- **Max 3–5 guided tour steps** — more feels like homework

## Checklist Design

If using onboarding checklist:
- 3–7 items max
- First item should be completable in 60 seconds (builds momentum)
- Include one "wow" item that demonstrates clear value
- Show completion percentage

## Email Onboarding Sequence

Triggered emails to support in-product onboarding:
- Day 0: Welcome + the one most important thing to do
- Day 2: Tips for getting started (if not yet activated)
- Day 5: Social proof + use case story
- Day 7: Check-in + offer help (if not yet activated)

## Measurement

| Metric | Definition |
|--------|-----------|
| Activation rate | % who complete activation event within 7 days |
| Time-to-activation | Median hours from signup to activation |
| Step completion | % who complete each onboarding step |
| D7 retention | % still active 7 days after signup |

**Related:** `/signup`, `/emails`, `/churn-prevention`, `/ab-testing`
