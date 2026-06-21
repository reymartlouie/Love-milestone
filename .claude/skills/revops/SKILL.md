---
name: revops
description: Use when designing or optimizing revenue operations — lead lifecycle, scoring, routing, pipeline stages, CRM automation, or RevOps metrics. Connects marketing, sales, and customer success.
---

# Revenue Operations (RevOps)

Connect marketing, sales, and customer success with clean systems and clear handoffs.

**Key principle:** Get stage definitions, scoring criteria, and routing rules right on paper before building workflows.

## Before Building Anything

Gather:
- GTM motion (PLG, sales-led, or hybrid)
- Current tech stack (CRM, marketing automation, etc.)
- Specific bottleneck (leads going cold? handoff friction? bad data?)
- Existing SLAs and metrics

## Lead Lifecycle Design

### Stage Definitions

| Stage | Definition | Owner |
|-------|-----------|-------|
| Subscriber | Gave email, no product engagement | Marketing |
| MQL | Marketing qualified — meets ICP + intent signal | Marketing |
| SAL | Sales accepted — rep validated worth pursuing | Sales |
| SQL | Sales qualified — confirmed need + budget + timeline | Sales |
| Opportunity | Active deal in pipeline | Sales |
| Customer | Closed-won | CS |
| Churned | Cancelled | CS |

Never let stages overlap or be ambiguous — causes attribution errors.

### Lead Scoring Model

**Fit score (who they are):**
- Company size match: +20
- Industry match: +15
- Job title match: +10
- Technology match: +10

**Engagement score (what they did):**
- Pricing page visit: +15
- Demo request: +25
- Trial started: +30
- Feature X used: +20
- Email opened: +2
- Attended webinar: +10

MQL threshold: typically 50–75 combined points.

## Speed-to-Lead

Research shows responding within 5 minutes = 9x higher contact rate than 30 minutes.

Set SLAs:
- Inbound lead: < 5 minutes (business hours)
- Trial signup: immediate automated sequence + rep notification

## Pipeline Stage Management

| Stage | Exit Criteria (not just rep opinion) |
|-------|-------------------------------------|
| Discovery | Confirmed: pain, budget range, timeline |
| Demo | Product demo completed, use case validated |
| Evaluation | Technical review complete, champion identified |
| Proposal | Pricing shared, stakeholders mapped |
| Negotiation | Verbal agreement, legal review started |
| Closed Won | Contract signed |

Hygiene rule: no opportunity stays in same stage > 14 days without update or move.

## CRM Automation Rules

Build automations for:
- Lead assignment (round-robin, territory, or account-based)
- Stage progression (trigger on activity, not just rep action)
- Task creation (follow-up reminders)
- Alert notifications (deal went silent, score increased)
- Data enrichment (auto-populate company info)

## Key RevOps Metrics

| Metric | Target |
|--------|--------|
| MQL-to-SQL conversion | 20–30% |
| SQL-to-Close | 20–30% |
| Sales cycle length | Varies by ACV |
| Pipeline coverage | 3x quota |
| Lead response time | <5 min inbound |
| Data quality score | >90% complete on key fields |
