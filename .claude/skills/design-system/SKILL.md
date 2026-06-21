---
name: design-system
description: Design system generation — token architecture, component specs, and theme setup. Use when creating or documenting a design system, setting up CSS variables/tokens, defining component states, or generating brand-compliant design specs.
---

# Design System

Comprehensive design system framework: token architecture, component specifications, theme switching.

## Token Architecture (3 layers)

```
Primitives → Semantics → Component tokens
```

### Layer 1 — Primitives (raw values)
```css
:root {
  --blue-50: #EFF6FF;
  --blue-500: #3B82F6;
  --blue-900: #1E3A5F;
  --gray-50: #F9FAFB;
  --gray-900: #111827;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;
}
```

### Layer 2 — Semantics (purpose aliases)
```css
:root {
  --color-primary: var(--blue-500);
  --color-primary-hover: var(--blue-600);
  --color-surface: var(--gray-50);
  --color-surface-raised: #FFFFFF;
  --color-text: var(--gray-900);
  --color-text-muted: var(--gray-500);
  --color-border: var(--gray-200);
  --color-error: var(--red-500);
  --color-success: var(--green-500);
}

.dark {
  --color-primary: var(--blue-400);
  --color-surface: var(--gray-900);
  --color-text: var(--gray-50);
  --color-border: var(--gray-700);
}
```

### Layer 3 — Component tokens
```css
:root {
  --button-bg: var(--color-primary);
  --button-text: #FFFFFF;
  --button-radius: var(--radius-md);
  --button-padding-x: var(--space-4);
  --button-padding-y: var(--space-2);
  --input-border: var(--color-border);
  --input-focus-ring: var(--color-primary);
  --card-surface: var(--color-surface-raised);
  --card-radius: var(--radius-lg);
  --card-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
}
```

**Rule:** Always reference semantic tokens in components — never primitives directly, never hardcoded hex.

---

## Component State Specs

### Button States
| State | Background | Text | Border | Shadow |
|-------|-----------|------|--------|--------|
| Default | `--button-bg` | `--button-text` | none | sm |
| Hover | `primary-hover` | same | none | md |
| Active | `primary-active` | same | none | none |
| Focus | same | same | `focus-ring` 2px | sm |
| Disabled | `gray-300` | `gray-500` | none | none |
| Loading | same + 70% opacity | hidden | none | none |

### Input States
| State | Border | Background | Label |
|-------|--------|-----------|-------|
| Default | `--color-border` | white | above input |
| Focus | `--color-primary` 2px | white | same |
| Error | `--color-error` | `error-50` | red helper text below |
| Disabled | `--color-border` | `gray-100` | muted |
| Success | `--color-success` | white | checkmark icon |

---

## Typography Scale

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

---

## Spacing System (4px base)

```
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128px
```

Use multiples of 4 only. Never arbitrary values.

---

## Elevation / Shadow Scale

```css
:root {
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.07), 0 2px 4px rgb(0 0 0 / 0.05);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05);
  --shadow-xl: 0 20px 25px rgb(0 0 0 / 0.1), 0 10px 10px rgb(0 0 0 / 0.04);
}
```

---

## Theme Switching Pattern

```tsx
// next-themes setup
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>

// Toggle
const { theme, setTheme } = useTheme()
<Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  Toggle
</Button>
```

---

## Design System Checklist

- [ ] All colors use semantic tokens
- [ ] All spacing uses the 4px scale
- [ ] Dark mode tokens defined and tested
- [ ] Focus states defined for every interactive element
- [ ] Error states defined for every form element
- [ ] All components documented with all states
- [ ] Token file exported as CSS variables + JSON
