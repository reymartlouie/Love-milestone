---
name: marketing-plan
description: Use when a founder or marketing lead needs a complete 12-month marketing strategy. Produces a fractional CMO-level plan structured by AARRR with 90-day roadmap, channel strategy, and tactical idea bank. Invoke with /marketing-plan {client-slug}.
---

# Marketing Plan

Fractional CMO-level 12-month marketing strategy. AARRR-structured, client-specific, operationally honest.

**Invoke:** `/marketing-plan {client-slug}`

**Do not use** for single-channel tactics or generic idea lists.

## Three Phases

### Phase 1 — INIT (Research & Audit)
- Read `.agents/product-marketing.md` if it exists
- Audit current state: team, budget, channels, what's working/stuck
- Score current marketing maturity (0–5 per AARRR stage)
- Identify funding stage and capability unlocks

### Phase 2 — REVIEW (Build Interactively)
Walk through each of the 13 sections one at a time. Save progress to `marketing-plans/{client-slug}/progress.md` so sessions can resume.

### Phase 3 — FINALIZE
Compile into single markdown file. Verify cross-references. Output: `marketing-plans/{client-slug}/final_plan.md`

## 13-Section Structure

1. **Executive summary** — 3 strategic bets, 90-day priorities, 12-month outcome
2. **Strategic frame** — category claim, ICP definition, brand voice
3. **Current state** — team, budget, what's done/in-flight/stuck (scored 0–5)
4. **Acquisition** — awareness channels, 90-day + 12-month moves
5. **Activation** — first valued experience, onboarding, conversion
6. **Retention** — lifecycle, churn prevention, deepening engagement
7. **Referral** — ambassador, affiliate, word-of-mouth mechanics
8. **Revenue** — pricing, upsells, ACV expansion
9. **90-day roadmap** — weeks 1–12, AARRR-tagged, owner-assigned
10. **12-month outlook** — quarterly milestones tied to funding unlocks
11. **Marketing operations stack** — skills + tools per stage
12. **Tactical idea bank** — 100+ ideas cross-referenced to AARRR + status
13. **Measurement, RACI, open decisions, appendix**

## Mandatory Customizations

Every plan must address:
- Current budget ($/mo breakdown)
- Unit economics (ARPC, retention, LTV)
- Team composition and skill gaps
- Current channels + performance
- Funding timeline and capability unlocks
- SaaS growth phase (pre-PMF, post-PMF, scaling)

Items that can't be confirmed → listed in Section 13 as "open decisions."

## Output

Length: 8,000–12,000 words
Tone: Direct, named tradeoffs, explicit assumptions. Written for sharp, busy founders. No jargon for jargon's sake.
