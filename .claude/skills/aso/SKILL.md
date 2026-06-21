---
name: aso
description: Use when auditing or optimizing App Store (iOS) or Google Play listings — title, description, keywords, screenshots, ratings, and conversion rate. Provide an App Store or Google Play URL to begin.
---

# App Store Optimization (ASO)

Improve app visibility and conversion rate on Apple App Store and Google Play.

**To begin:** Provide an App Store or Google Play URL.

## Audit Dimensions (scored 0–100)

| Dimension | Weight | What to Check |
|-----------|--------|--------------|
| Title | 20% | Keyword in title, character limit, clarity |
| Description | 20% | First 3 lines (above fold), keywords, benefits |
| Visuals | 25% | Screenshots tell a story, first screenshot is hook |
| Ratings | 15% | Average rating, review volume, recency |
| Metadata | 10% | Subtitle, keyword field (iOS), category |
| Conversion | 10% | Preview video, icon, overall persuasiveness |

## Title Optimization

**iOS:** 30 characters max
**Android:** 50 characters max

Formula: `[Brand] — [Primary Keyword]` or `[Brand]: [Value Prop]`

- Include highest-volume keyword in title (biggest ranking factor)
- Don't waste characters on generic words ("app", "best")
- Avoid punctuation except dash

## Description

**First 3 lines are above the fold** — most users never tap "more"

First 3 lines formula:
```
Line 1: What it does (outcome-focused)
Line 2: Primary feature or proof point
Line 3: CTA or social proof
```

Full description:
- Bullet points for scannability
- Primary keywords in first 250 characters
- Platform benefits (iOS/Android specific features)
- No keyword stuffing (hurts conversion, minimal ranking benefit)

## Screenshots

- First screenshot = most important (hook)
- Show the app doing something valuable, not a loading screen
- Captions on every screenshot (short, benefit-focused)
- Consistent visual style across all screenshots
- Test landscape vs portrait for tablets

## Keyword Strategy

**iOS:** Keyword field (100 chars) + title + subtitle — don't repeat keywords
**Android:** Keywords must be in title or description (no separate field)

Research: App Annie, Sensor Tower, or search autocomplete in the app store

## Ratings Strategy

Getting reviews:
- Trigger in-app review prompt after positive moment (not at launch)
- iOS: use `SKStoreReviewController` (Apple handles timing)
- Android: use In-App Review API

Responding to reviews:
- Respond to all 1-2 star reviews within 48 hours
- Acknowledge the issue, explain fix, invite them back
- Thank positive reviewers occasionally

## Competitive Analysis

For each top competitor in your category:
- Screenshot their store listing
- Note their title keywords
- Read their 1-star reviews (your opportunity)
- Track their rating trend

## Output Format

```
## ASO Audit: [App Name]
**Overall Score:** [X/100]

### Title (X/20)
[Current] → [Recommended]
Reason: [specific improvement]

### Screenshots (X/25)
Issue: [what's wrong]
Fix: [specific change]

### Priority Actions
1. [Highest impact change]
2. [Second highest]
3. [Third]
```
