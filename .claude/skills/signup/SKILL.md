---
name: signup
description: Use when optimizing signup and registration flows — reducing friction, improving form design, increasing completion rates, or designing multi-step flows.
---

# Signup Flow Optimization

Reduce friction between intent and account creation.

**Every extra field reduces conversion by 5–10%.** Ask only what you need to create the account.

## Friction Audit

Measure and address:
- Form start rate (how many who see signup actually start it?)
- Form completion rate (how many who start actually finish?)
- Drop-off by field (which field causes abandonment?)
- Error rate (how often do users hit validation errors?)

## Field Principles

**Required fields for signup (maximum):**
- Email
- Password (or magic link — removes this entirely)

**Defer everything else:**
- Name → collect after activation
- Company → collect during onboarding
- Use case → ask in onboarding, not signup
- Phone → only if legally required or sales-qualified

## Form Design Rules

- One column layout (mobile-first)
- Field labels above fields (not placeholder text — it disappears on focus)
- Inline validation (show errors as they type, not on submit)
- Password requirements visible upfront (don't surprise after they type)
- Auto-focus on first field
- Submit button describes the action: "Create account" not "Submit"

## Reducing Friction Options

| Technique | Impact | Tradeoff |
|-----------|--------|---------|
| Social login (Google/GitHub) | High | Less data control |
| Magic link (no password) | High | Slower for return users |
| Single-step form | Medium | Works for simple products |
| Multi-step (progressive) | Medium | Better for complex products |
| Phone verification | -30% | Only if fraud risk is high |

## Mobile-Specific

- Input type="email" triggers email keyboard
- Input type="password" shows/hides toggle
- Full-width CTA button, thumb-accessible
- Font size ≥ 16px (avoids iOS zoom on focus)

## Social Proof on Signup Page

Add near the form:
- "Join X teams" (number, not vague)
- 1–2 short testimonials from recognizable company logos
- Security/privacy signal: "No credit card required" or "SOC 2 Certified"

## A/B Test Ideas (high value)

- Social login vs. email/password only
- 1-step vs. 2-step form
- CTA copy variations: "Start free trial" vs "Create your account" vs "Get started"
- Social proof placement (above vs. below form)

**Related:** `/cro`, `/onboarding`, `/ab-testing`
