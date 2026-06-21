---
name: competitor-profiling
description: Use when building structured competitor profiles covering positioning, features, pricing, SEO strength, and customer sentiment. Produces comparable markdown profiles with raw data saved separately.
---

# Competitor Profiling

Build structured, fact-based competitor profiles for strategic analysis.

**Rule: Facts over opinions.** Every claim must be traceable to a source.

## Profile Depth Options

**Quick scan** (~2–3 hours per competitor)
- Homepage + pricing page
- Core SEO metrics
- Top-level positioning

**Deep profile** (~4–6 hours per competitor)
- All key pages (homepage, features, pricing, about, case studies)
- Full backlink analysis
- Review mining (G2, Capterra, Trustpilot)
- SEO keyword gaps

## Research Sources

| Data Type | Source |
|-----------|--------|
| Positioning/messaging | Scrape homepage, pricing, features pages |
| SEO metrics | Ahrefs, Semrush, or Moz |
| Customer sentiment | G2, Capterra, Trustpilot, App Store |
| Pricing | Their pricing page (dated) |
| Team size | LinkedIn |
| Funding | Crunchbase |
| Tech stack | BuiltWith, Wappalyzer |

## Profile Template

```markdown
# Competitor: [Name]
**Profiled:** [Date] | **Depth:** Quick / Deep

## At a Glance
- Domain Rating: [X]
- Est. Organic Traffic: [X/mo]
- Team Size: ~[X]
- Funding: [Stage, $Amount, Date]
- Pricing: [range]

## Positioning
**Tagline:** "[exact tagline]"
**Category claim:** [how they define the category]
**Primary ICP:** [who they're targeting]

## Messaging Themes
- [Theme 1]
- [Theme 2]
- [Theme 3]

## Product
**Core features:** [list]
**Key integrations:** [list]
**Differentiators they claim:** [list]

## Pricing
| Tier | Price | Key Limits |
|------|-------|-----------|
| [name] | $X/mo | [limits] |

## Customer Sentiment (from reviews)
**Loves:** [what customers praise]
**Hates:** [what customers complain about]
**Switching from:** [what they switched from]

## SEO Profile
- Top keywords: [list with volume]
- Content strategy: [description]
- Backlink profile: [quality, quantity]

## Competitive Implications
**Their strengths:** [honest assessment]
**Their weaknesses:** [honest assessment]
**Our opportunity:** [where we can win]
```

## File Structure

```
competitor-profiles/
  [competitor-name].md          ← structured profile
  raw/
    [competitor-name]-pages/    ← scraped page content
    [competitor-name]-reviews/  ← raw review data
    [competitor-name]-seo/      ← raw SEO data
```

## Summary Document

After profiling 3+ competitors, create `competitor-profiles/summary.md`:
- Side-by-side comparison across key dimensions
- Market positioning map
- Identified gaps and opportunities
