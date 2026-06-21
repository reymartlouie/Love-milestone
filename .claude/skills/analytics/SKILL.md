---
name: analytics
description: Use when setting up analytics tracking, designing event architecture, implementing GA4 or alternative platforms, building tracking plans, or auditing existing measurement systems.
---

# Analytics Tracking

Set up measurement systems that inform decisions. Track with purpose, not indiscriminately.

## Before Implementing Anything

Define what decisions this data will support:
- What business questions need answers?
- Who will use this data and how?
- What actions will different data points trigger?

If you can't answer these, you'll track everything and use nothing.

## Event Architecture

**Naming convention:** `object_action` (lowercase, underscore)

```
signup_completed
trial_started
feature_used
payment_failed
subscription_cancelled
```

**Properties:** provide context without duplicating automatic data

```javascript
// Good
track('feature_used', {
  feature_name: 'export',
  file_format: 'csv',
  record_count: 150
})

// Bad — duplicates what platform already captures
track('feature_used', {
  timestamp: Date.now(),  // platform captures this
  user_id: userId,        // platform captures this
  feature_name: 'export'
})
```

## GA4 Implementation

```javascript
// Page view (auto-tracked)
// Custom event
gtag('event', 'signup_completed', {
  method: 'google',
  plan: 'pro'
})
```

## GTM Data Layer Pattern

```javascript
window.dataLayer = window.dataLayer || []
window.dataLayer.push({
  event: 'trial_started',
  plan_type: 'pro',
  source: 'pricing_page'
})
```

## Alternative Platforms

| Platform | Best For |
|----------|---------|
| GA4 | Standard web analytics, free |
| Mixpanel | Product analytics, user flows |
| Amplitude | Growth analytics, cohorts |
| PostHog | Open-source, EU data residency |

## Conversion Definitions

Define conversions before implementation — don't let the tool define them for you:

```
Micro-conversion: email captured, demo viewed, pricing page visited
Macro-conversion: trial started, first feature used, payment completed
```

## Privacy Requirements

- Consent required: EU (GDPR), California (CCPA), UK (UK GDPR)
- Never store PII in analytics properties (email, full name, phone)
- Implement consent mode for GA4 in consent-required regions

## Tracking Plan Template

| Event | Trigger | Properties | Platform | Owner |
|-------|---------|-----------|---------|-------|
| signup_completed | User submits registration | plan, method, source | GA4, Mixpanel | Growth |

## Validation Checklist

- [ ] Events fire on correct triggers (not on page load instead of click)
- [ ] Properties populate correctly
- [ ] Works across Chrome, Firefox, Safari
- [ ] No PII in event properties
- [ ] Conversion goals configured in platform
- [ ] Test in debug/preview mode before publishing
