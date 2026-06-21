---
name: ui-ux-pro-max
description: UI/UX Pro Max — comprehensive design intelligence for web and mobile. Use when designing pages, creating components, selecting color/typography systems, reviewing UI for accessibility, or making any visual design decision across React, Next.js, Vue, Tailwind, SwiftUI, Flutter, and more.
---

# UI/UX Pro Max — Design Intelligence System

Comprehensive design guide covering 50+ UI styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 10 technology stacks.

## When to Activate

- Designing or reviewing any page, screen, or component
- Selecting color palette, typography, or visual style
- Accessibility and UX quality control
- Responsive layout decisions
- Chart and data visualization choices

## Design Workflow

**Step 1 — Analyze Requirements**
Extract: product type, target audience, platform (web/mobile), style preference, existing brand constraints.

**Step 2 — Generate Design System**
Select from: style, color palette, font pairing, layout pattern, animation approach.

**Step 3 — Apply Stack-Specific Guidelines**
Adapt output to the tech stack in use (see stacks below).

**Step 4 — Pre-Delivery Check**
Run checklist before shipping any UI.

---

## Priority Rule Framework

| Priority | Category | Key Rules |
|----------|----------|-----------|
| CRITICAL | Accessibility | 4.5:1 contrast, keyboard nav, focus states, ARIA labels |
| CRITICAL | Touch & Interaction | 44×44px min targets, feedback within 80–150ms |
| HIGH | Performance | Lazy load images, prevent CLS, optimize bundle |
| HIGH | Style Consistency | SVG icons only (no emoji icons), platform-adapted styles |
| HIGH | Layout & Responsive | Mobile-first, no horizontal scroll, fluid breakpoints |
| HIGH | Navigation | Predictable back, ≤5 bottom nav items, deep linking |
| MEDIUM | Typography & Color | Semantic tokens, accessible color pairs, scale system |
| MEDIUM | Animation | 150–300ms duration, motion conveys meaning, respect prefers-reduced-motion |
| MEDIUM | Forms & Feedback | Visible labels, inline error placement, loading states |
| LOW | Charts & Data | Accessible color palettes, legends, tooltips on all data points |

---

## UI Style Catalog (50+ styles)

**Trending**
- Glassmorphism — frosted glass, backdrop blur, subtle borders
- Claymorphism — soft 3D, clay-like shadows, rounded forms
- Neubrutalism — raw borders, high contrast, intentional "ugly"
- Bento Grid — card-based modular layouts
- AI-Native UI — generative gradients, fluid shapes

**Classic**
- Minimalism — whitespace-first, typographic hierarchy
- Material Design — elevation, ripple, color system
- Flat Design — no shadows, bold color, simple icons
- Skeuomorphism — realistic textures and depth

**Specialized**
- Dark Mode Premium — deep blacks, neon accents
- Neumorphism — soft shadows, monochromatic depth
- Brutalism — raw HTML aesthetic, stark typography
- Cyberpunk — neon, grid overlays, dystopian palette

---

## Color System

161 palettes organized by product type:

| Product Type | Palette Direction |
|-------------|------------------|
| SaaS / B2B | Trust blues, professional grays |
| Healthcare | Clean whites, calming teals |
| Fintech | Deep navy, gold accents |
| E-commerce | Energetic, conversion-optimized |
| Creative / Portfolio | Bold, expressive, unique |
| Education | Friendly, accessible, warm |
| Gaming | High contrast, vivid neons |
| Wellness | Earth tones, soft pastels |

**Token structure:**
```css
/* Primitives */
--color-blue-500: #3B82F6;

/* Semantics */
--color-primary: var(--color-blue-500);
--color-surface: var(--color-gray-50);

/* Component */
--button-bg: var(--color-primary);
```

Always use semantic tokens — never hardcode hex values in components.

---

## Typography System (57 pairings)

**Pairing formula:** Display font (headings) + Text font (body) + Mono font (code)

| Context | Heading | Body | Vibe |
|---------|---------|------|------|
| SaaS | Inter | Inter | Clean, modern |
| Editorial | Playfair Display | Source Serif | Elegant |
| Startup | Cal Sans | Manrope | Bold, friendly |
| Developer Tool | JetBrains Mono | Inter | Technical |
| Luxury Brand | Cormorant | Jost | Premium |

Scale: 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 / 72px

---

## Supported Tech Stacks

**Web:** React, Next.js, Vue 3, Svelte, Angular, HTML/Tailwind, shadcn/ui, Laravel
**Mobile:** SwiftUI, Jetpack Compose, React Native, Flutter
**Emerging:** Spatial computing, AR/VR interfaces

---

## Pre-Delivery Checklist

- [ ] No emoji icons — SVG only
- [ ] Tap feedback fires within 80–150ms
- [ ] 4.5:1 contrast ratio verified (light + dark)
- [ ] Touch targets ≥44×44pt everywhere
- [ ] Tested at 375px (small phone) and landscape
- [ ] Reduced-motion variant exists for all animations
- [ ] Dynamic Type / text scaling doesn't break layout
- [ ] All images have alt text
- [ ] Focus order follows logical DOM order
- [ ] Error states are visible and descriptive
