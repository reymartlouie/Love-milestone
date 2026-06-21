---
name: slides
description: Strategic HTML presentation and pitch deck builder with Chart.js data visualization. Use when creating marketing presentations, investor pitch decks, product demos, or any data-driven slide deck.
---

# Slides — Strategic Presentation Builder

Build strategic HTML presentations with data visualization. Marketing decks, pitch decks, product demos, reports.

## Usage

```
/slides [topic] [slide-count]
/slides "Q3 investor update" 12
/slides "Product launch deck" 8
```

---

## Slide Types & When to Use

| Type | Purpose | Trigger |
|------|---------|---------|
| Title | Opening hook | Always slide 1 |
| Problem | Establish pain | Early (slide 2–3) |
| Solution | Your answer | After problem |
| How it works | Mechanism | After solution |
| Social proof | Trust builders | Mid-deck |
| Data/Chart | Metrics, growth | Mid-late deck |
| Comparison | vs. alternatives | Mid deck |
| Pricing | Plans & tiers | Late deck |
| Team | Credibility | Late deck |
| CTA | Next step | Always last |

---

## Emotional Arc (Duarte Sparkline)

Alternate between tension and resolution to maintain engagement:

```
Hook → Problem (tension) → Solution (relief) → Evidence (tension) →
Outcome (relief) → Objection (tension) → Proof (relief) → CTA
```

Avoid 3+ consecutive "positive" or "negative" slides.

---

## HTML Slide Template

Every slide must:
- Import `design-tokens.css`
- Use CSS variables exclusively (no hardcoded hex/px)
- Include Chart.js if the slide has charts
- Center-align content by default

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="design-tokens.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    .slide {
      width: 1280px;
      height: 720px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      padding: var(--space-16);
      font-family: var(--font-sans);
    }
    .slide-title {
      font-size: var(--text-4xl);
      font-weight: var(--font-bold);
      color: var(--color-text);
      text-align: center;
      line-height: var(--leading-tight);
    }
    .slide-body {
      font-size: var(--text-xl);
      color: var(--color-text-muted);
      text-align: center;
      margin-top: var(--space-6);
      max-width: 720px;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">[TITLE]</h1>
    <p class="slide-body">[BODY]</p>
  </div>
</body>
</html>
```

---

## Chart Patterns (Chart.js)

```js
// Bar chart
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue ($K)',
      data: [120, 190, 260, 380],
      backgroundColor: 'var(--color-primary)',
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
})

// Line chart — growth trend
new Chart(ctx, { type: 'line', ... })

// Donut — market share / breakdown
new Chart(ctx, { type: 'doughnut', ... })
```

---

## Copywriting Formulas by Slide Type

**Problem slide:** "Most [audience] struggle with [problem]. It costs them [consequence]."

**Solution slide:** "[Product] is the [category] that [outcome] without [objection]."

**Social proof:** "[Customer] went from [before] to [after] in [timeframe]."

**Metric slide:** Lead with the number. Big. Bold. One sentence explanation below.

**CTA slide:** One action only. Verb-first. Time-bounded if possible.

---

## Deck Structure Templates

### Investor Pitch (10 slides)
1. Title + tagline
2. Problem
3. Solution
4. Market size (TAM/SAM/SOM)
5. Product demo / how it works
6. Traction / metrics
7. Business model
8. Competition
9. Team
10. Ask + use of funds

### Product Launch (8 slides)
1. Hook / announcement
2. Problem it solves
3. Key features (3 max)
4. Demo / screenshot
5. Pricing
6. Launch offer / urgency
7. Social proof
8. CTA

### Quarterly Review (6 slides)
1. Summary / headline number
2. KPIs vs targets
3. What worked
4. What didn't
5. Next quarter priorities
6. Asks / decisions needed

---

## Slide Design Rules

- Max 40 words per slide (body text)
- One idea per slide — split if needed
- Numbers bigger than text when slide is data-focused
- No bullet lists with more than 4 items
- Images bleed to edge or don't appear at all
- Consistent slide padding: 80px all sides
