---
name: brand
description: Brand identity management — voice consistency, visual standards, messaging frameworks, and asset compliance. Use when establishing brand guidelines, syncing brand tokens to a design system, auditing branded content, or generating brand-compliant assets.
---

# Brand Kit

Manage brand identity across voice, visual standards, messaging, assets, and compliance.

## When to Activate

- Establishing or updating brand guidelines
- Ensuring tone/voice consistency across copy
- Syncing brand decisions into design tokens
- Validating assets against brand standards
- Creating brand-compliant marketing materials

---

## Brand Sync Workflow

```
Edit guidelines doc → Sync to design tokens → Verify output consistency
```

1. **Guidelines doc** — single source of truth (brand.md or brand-guidelines.json)
2. **Token sync** — propagate color/font/spacing decisions into CSS variables
3. **Verification** — check output matches guidelines

---

## Brand Voice Framework

Define along 5 axes:

| Axis | Opposing ends | Choose a position |
|------|--------------|-------------------|
| Tone | Formal ←→ Casual | e.g., "Professional but approachable" |
| Energy | Reserved ←→ Energetic | |
| Complexity | Simple ←→ Technical | |
| Warmth | Cool/Distant ←→ Warm/Human | |
| Authority | Humble ←→ Expert | |

**Voice rules to define:**
- Words to always use
- Words to never use
- Sentence length preference (short / varied / long)
- Use of contractions (yes / no)
- Oxford comma (yes / no)
- How to address the user ("you" / "your team" / first name)

---

## Visual Identity Standards

### Logo Usage Rules
- Minimum size: 32px height (digital), 0.5 inch (print)
- Clear space: 1× logo height on all sides
- Approved backgrounds: white, brand-primary, brand-dark
- Forbidden: stretch, rotate, recolor, add effects, place on busy images

### Color Standards
```
Primary:    [hex] — main brand color, CTAs, links
Secondary:  [hex] — accents, highlights
Neutral:    [hex range] — text, backgrounds, borders
Error:      #EF4444
Success:    #22C55E
Warning:    #F59E0B
```

Forbidden: off-brand colors, unapproved tints, low-contrast combinations.

### Typography Standards
```
Display:  [Font] — headings, hero text only
Body:     [Font] — all paragraph text
Mono:     [Font] — code, technical content
```

Never mix more than 2 typefaces in a single design.

---

## Asset Validation Rules

- File naming: `[brand]-[type]-[variant]-[size].[ext]`
  - Example: `acme-logo-primary-2x.svg`
- Required formats: SVG (vector), PNG (raster @ 1× and 2×), WebP (web)
- Image dimensions must match spec exactly
- Color profile: sRGB for all digital assets

---

## Compliance Checklist

- [ ] Logo has required clear space
- [ ] Only approved colors used
- [ ] Typography matches brand standards
- [ ] Voice/tone matches brand guidelines
- [ ] CTA text follows approved patterns
- [ ] All assets named correctly
- [ ] Contrast ratios meet 4.5:1 minimum
- [ ] No unauthorized brand modifications

---

## Brand Guidelines Template

```markdown
# [Brand Name] Brand Guidelines

## Mission & Values
[1-2 sentences]

## Voice & Tone
[5-axis position + rules]

## Logo
[Usage rules + forbidden uses]

## Colors
Primary: #[hex] | Secondary: #[hex] | Neutral: #[hex]

## Typography
Display: [Font] | Body: [Font] | Mono: [Font]

## Imagery Style
[Description of photo/illustration style]

## Do / Don't Examples
[Side-by-side examples]
```
