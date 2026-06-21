---
name: seo-audit
description: Use when auditing SEO health, investigating ranking drops, reviewing technical SEO foundations, or running a comprehensive crawlability/indexation/Core Web Vitals check.
---

# SEO Audit

Comprehensive SEO diagnostics across technical, on-page, and content quality dimensions.

## Audit Sequence (priority order)

1. **Crawlability & indexation** (fix first — nothing else matters if Google can't crawl)
2. **Technical foundations**
3. **On-page factors**
4. **Content quality**
5. **Authority signals**

## 1. Crawlability & Indexation

```
robots.txt  — are important pages blocked?
XML sitemap — exists, submitted to Search Console, no errors?
Index status — check Search Console coverage report
noindex tags — any important pages accidentally noindexed?
Canonical tags — are they pointing to the right URLs?
```

## 2. Technical Foundations

**Core Web Vitals targets:**
- LCP (Largest Contentful Paint) < 2.5s
- INP (Interaction to Next Paint) < 200ms
- CLS (Cumulative Layout Shift) < 0.1

Check: PageSpeed Insights, Search Console Core Web Vitals report

**Other checks:**
- HTTPS on all pages (no mixed content)
- Mobile-friendly (Google's Mobile-Friendly Test)
- No redirect chains (max 1 redirect)
- Canonical URLs consistent (www vs non-www, trailing slash)

## 3. On-Page Factors

Per page:
- Title tag: unique, includes primary keyword, 50–60 chars
- Meta description: unique, compelling, 150–160 chars
- H1: exactly one per page, includes primary keyword
- URL: short, descriptive, hyphens, keyword included
- Internal links: 3–5 relevant links per page

## 4. Content Quality

- Thin content pages (under 300 words on important pages)
- Duplicate content (same content on multiple URLs)
- Keyword cannibalization (multiple pages targeting same term)
- Content freshness (outdated information, stale dates)

## 5. Authority Signals

- Referring domains and domain rating (Ahrefs/Moz)
- Anchor text distribution
- Link velocity (gaining or losing links over time)

## Schema Detection Caveat

`web_fetch` and `curl` **cannot reliably detect structured data / schema markup** — many CMS plugins inject JSON-LD via client-side JavaScript. Use Google Rich Results Test or Screaming Frog for schema validation.

## International SEO (if multilingual)

- hreflang tags: correct language codes, bidirectional
- Canonical strategy: language variants point to themselves
- Locale-specific content quality (not just machine-translated)

## Report Format

```
## Executive Summary
[3–5 sentence overview of health + top issues]

## Critical Issues (fix immediately)
[Blocking crawl, indexation, or major technical problems]

## Quick Wins (high impact, low effort)
[On-page fixes, meta updates, etc.]

## High Impact Changes (require dev work)
[Core Web Vitals, architecture, canonicalization]

## Monitoring Recommendations
[What to track going forward]
```
