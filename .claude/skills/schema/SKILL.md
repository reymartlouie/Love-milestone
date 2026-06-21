---
name: schema
description: Use when implementing structured data / schema markup for rich search results — FAQ snippets, product schema, article schema, breadcrumbs, organization markup, and more.
---

# Schema Markup

Implement structured data so search engines understand your content and display rich results.

**Format:** Always use JSON-LD. Google recommends it — easier to maintain than microdata or RDFa.

**Rule:** Schema must accurately represent page content. Never markup content that isn't actually on the page.

## Before Starting

1. What page type? (article, product, FAQ, etc.)
2. What rich results do you want? (star ratings, FAQ snippet, breadcrumbs)
3. What data exists on the page to populate the schema?
4. Does existing schema need fixing?
5. What's the tech stack? (CMS, framework)

## Common Schema Types

### Organization (every site)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourhandle",
    "https://linkedin.com/company/yourco"
  ]
}
```

### Article / BlogPosting
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {"@type": "Person", "name": "Author Name"},
  "datePublished": "2024-01-15",
  "dateModified": "2024-06-01",
  "image": "https://yoursite.com/image.jpg"
}
```

### FAQPage (gets FAQ rich snippets in SERP)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is your pricing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our plans start at $29/month."
    }
  }]
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yoursite.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://yoursite.com/blog"
  }]
}
```

### SoftwareApplication (SaaS products)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Product Name",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "29",
    "priceCurrency": "USD"
  }
}
```

## Implementation

Place JSON-LD in `<head>` or at end of `<body>`:

```html
<script type="application/ld+json">
{ ... schema here ... }
</script>
```

## Validation

1. Google Rich Results Test: `search.google.com/test/rich-results`
2. Schema.org Validator: `validator.schema.org`
3. Search Console → Enhancements (after indexing)

**Note:** `web_fetch` and `curl` cannot detect schema injected via client-side JavaScript. Use the tools above for validation.
