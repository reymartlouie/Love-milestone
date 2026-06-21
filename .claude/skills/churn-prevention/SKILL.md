---
name: churn-prevention
description: Use when reducing customer churn through cancel flow design, dunning/payment recovery, churn prediction, or proactive retention strategies.
---

# Churn Prevention

Reduce churn through cancel flows, payment recovery, and proactive retention.

**Key insight:** "A discount won't save someone who isn't using the product." Match retention offer to cancellation reason.

## Three Pillars

### 1. Cancel Flow Design

Goal: Convert 25–35% of would-be churners through targeted interventions.

**Cancel flow structure:**
1. **Exit survey** — ask why they're cancelling (required, single question)
2. **Dynamic save offer** — match offer to cancellation reason
3. **Pause option** — for "too busy" / "not ready" reasons
4. **Confirmation step** — one more chance after they've seen the offer

**Save offer by cancellation reason:**

| Reason | Save Offer |
|--------|-----------|
| Too expensive | Downgrade option, annual discount |
| Not using it enough | Onboarding call, guided tour |
| Missing feature | Roadmap preview, workaround |
| Switching to competitor | Direct comparison, migration help |
| Business shutting down | Pause option |
| Didn't understand value | Success story, case study |

### 2. Payment Recovery (Dunning)

Goal: Recover 50–60% of failed payments before they churn involuntarily.

**Retry logic:**
- Day 0: Payment fails → immediate retry
- Day 3: Retry #2 → email notification
- Day 7: Retry #3 → urgent email with update card link
- Day 14: Retry #4 → final warning
- Day 21: Cancel subscription

**Email sequence for failed payment:**
1. Day 0: "Action required — update your payment method" (plain text, direct)
2. Day 7: "Your account will be cancelled in 7 days" (add urgency)
3. Day 14: "Last chance — your account expires tomorrow"

### 3. Churn Prediction (Proactive)

Leading indicators of churn (varies by product):
- Login frequency dropping below baseline
- Key feature usage declining
- Support tickets increasing
- No activity for X days
- Downgrading plan

**Proactive intervention:**
- Trigger in-app message or email when at-risk signals fire
- Offer success call or help session
- Share relevant use case or feature they haven't tried

## Metrics to Track

| Metric | Target |
|--------|--------|
| Monthly churn rate | <2% B2B SaaS, <5% B2C |
| Cancel flow save rate | 25–35% |
| Failed payment recovery | 50–60% |
| Proactive retention rate | Track separately |
