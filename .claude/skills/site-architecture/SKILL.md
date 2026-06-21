---
name: site-architecture
description: Use when planning website structure, page hierarchies, navigation systems, URL patterns, or internal linking strategies. Produces ASCII tree hierarchies, URL mapping tables, and internal linking plans.
---

# Site Architecture

Plan website structure, navigation, and internal linking for SaaS, content, and e-commerce sites.

**Not for:** XML sitemaps (use `/seo-audit`) or schema markup (use `/schema`).

## Core Principles

- Users should reach important pages within **3 clicks from homepage**
- Header navigation: **4–7 items max** (cognitive overload above 7)
- URLs: human-readable, hyphens, reflect hierarchy, short but descriptive
- Internal links: descriptive anchor text (never "click here")

## URL Patterns

```
/[category]/[subcategory]/[page]

Examples:
/features/reporting
/integrations/slack
/customers/case-study-acme
/blog/saas-pricing-strategy
/vs/competitor-name
```

Rules:
- Lowercase only
- Hyphens not underscores
- No dates in URLs (they go stale)
- Max 3 levels deep for most content

## Site Type Templates

### SaaS Site

```
/
├── /features/
│   ├── /features/[feature-name]/
├── /pricing/
├── /integrations/
│   ├── /integrations/[integration-name]/
├── /customers/
│   ├── /customers/[case-study]/
├── /vs/
│   ├── /vs/[competitor]/
├── /blog/
├── /docs/ (or docs.domain.com)
└── /about/
    ├── /about/team/
    └── /about/careers/
```

### Content / Blog

```
/
├── /blog/
│   ├── /blog/[category]/
│   │   └── /blog/[category]/[post-slug]/
├── /[topic-hub]/           ← pillar pages
│   └── /[topic-hub]/[sub-topic]/
└── /resources/
    ├── /resources/templates/
    └── /resources/guides/
```

## Navigation Structure

### Header (primary nav)
4–7 items. Ordered by: most valuable to visitor first (not company org chart).

Typical SaaS: Product | Features | Pricing | Customers | Resources | [CTA Button]

### Footer
Full sitemap. Organized by: Product, Company, Resources, Legal

### Breadcrumbs
On all pages below root level. Helps navigation and SEO.

## Internal Linking Strategy

**Hub-and-spoke model:**
- Hub page = broad topic overview, links to all spokes
- Spoke pages = specific subtopics, link back to hub + related spokes

**Link rules:**
- Every important page should have ≥3 internal links pointing to it
- Anchor text describes destination: "pricing strategy guide" not "read more"
- Don't link to the same page twice in one piece
- Homepage links to 5–8 highest-priority pages max

## Audit Checklist

- [ ] Every important page reachable in ≤3 clicks from homepage
- [ ] No orphan pages (pages with 0 internal links pointing to them)
- [ ] No broken internal links
- [ ] URL structure is consistent throughout
- [ ] Nav items match actual user mental models (test with users)
