---
name: programmatic-seo
description: Use when planning or building SEO-optimized pages at scale using templates and structured data — directories, comparison pages, location pages, integration pages, glossary terms, and similar high-volume page types.
---

# Programmatic SEO

Create SEO-optimized pages at scale using templates and structured data.

**Core rule: Unique value per page.** Not just variable substitution. Every page must have content that makes it worth visiting.

## Data Quality Hierarchy

| Source | Strength |
|--------|---------|
| Proprietary data (your own) | Strongest — impossible to replicate |
| Licensed/purchased data | Strong |
| Aggregated public data (enriched) | Medium |
| Raw public data | Weakest — easily replicated, thin content risk |

## 12 Programmatic Playbooks

| Playbook | Best Data Source | Example |
|---------|----------------|---------|
| Templates | Product + user data | "Notion template for [use case]" |
| Curation | Public + editorial | "Best [tools] for [job]" |
| Comparisons | Product data | "[Tool A] vs [Tool B]" |
| Locations | Geographic data | "[Service] in [City]" |
| Personas | Job + industry data | "[Tool] for [role]" |
| Integrations | Partner/API data | "[Product] + [Integration]" |
| Glossary | Definition + examples | "What is [term]?" |
| Translations | Content + locale | "[Content] in [language]" |
| Directories | Business/product data | "Top [category] tools" |
| Profiles | Entity data | "[Person/Company] profile" |

## Validation Before Building

1. Confirm keyword pattern has real search volume (not just logical)
2. Check that search intent matches your page format
3. Verify you have enough unique data to make pages valuable
4. Confirm you won't cannibalize existing content

## URL Structure

Use subfolders, not subdomains: `/integrations/slack` not `integrations.yoursite.com/slack`

Pattern: `/{category}/{slug}` — consistent, hierarchical, keyword-rich

## Internal Linking

Hub-and-spoke model:
- Hub page: `/integrations/` — overview, links to all integration pages
- Spoke pages: `/integrations/slack/`, `/integrations/zapier/`
- Cross-link spokes: "Also integrates with [Zapier →]"

## Indexation Management

Don't index all pages immediately:
1. Submit top 20% first (highest-volume keywords)
2. Monitor for indexation and ranking
3. Expand based on performance
4. Noindex thin or underperforming pages

## Quality Checklist Before Launch

- [ ] Each page has unique content beyond template variables
- [ ] All pages have unique title tags and meta descriptions
- [ ] Internal links connect hub to spokes
- [ ] No keyword cannibalization with existing pages
- [ ] Pages render correctly (no broken templates)
- [ ] Sitemap submitted with new URLs

## Common Failure Modes

- **Thin content** from identical templating → add unique data per page
- **Keyword cannibalization** → check existing pages before building
- **Pages with no search demand** → validate volume before building
- **Slow indexation** → submit priority pages via Search Console
