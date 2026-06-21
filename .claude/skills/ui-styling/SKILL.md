---
name: ui-styling
description: UI styling with shadcn/ui + Tailwind CSS. Use when building React/Next.js UI components, setting up shadcn, implementing dark mode, building responsive layouts, design tokens, or accessible component patterns.
---

# UI Styling — shadcn/ui + Tailwind CSS

Build beautiful, accessible UIs with shadcn/ui components and Tailwind CSS utility classes.

## Core Stack

- **shadcn/ui** — pre-built accessible components (Radix UI primitives), copy-paste model
- **Tailwind CSS** — utility-first, zero runtime overhead
- **TypeScript** — full type safety on all components

## Supported Frameworks

React, Next.js, Vite, Remix, Astro

---

## Setup

```bash
npx shadcn@latest init
```

Adds: `components.json`, Tailwind config, CSS variables, `cn()` utility.

Add components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card dialog form table
```

---

## Component Patterns

### Composition Rule
Use Tailwind classes directly on shadcn components. Extract to a component only for true repetition (3+ uses with identical variants).

```tsx
// Good — compose inline
<Button className="w-full font-semibold" variant="outline" size="lg">
  Get Started
</Button>

// Good — extract when repeated identically
const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <Button className="w-full font-semibold" variant="default">
    {children}
  </Button>
)
```

### Dark Mode
Use CSS variables + `dark:` variant:
```css
:root { --background: 0 0% 100%; }
.dark { --background: 222.2 84% 4.9%; }
```

```tsx
<div className="bg-background text-foreground">...</div>
```

---

## Layout Patterns

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Centered container
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

// Sidebar layout
<div className="flex min-h-screen">
  <aside className="w-64 shrink-0">...</aside>
  <main className="flex-1 overflow-auto">...</main>
</div>
```

---

## Breakpoints (mobile-first)

| Prefix | Min width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

Always start with mobile styles, add breakpoint prefixes for larger screens.

---

## Accessibility Patterns

```tsx
// Dialog with proper ARIA
<Dialog>
  <DialogTrigger asChild>
    <Button aria-label="Open settings">Settings</Button>
  </DialogTrigger>
  <DialogContent aria-describedby="dialog-desc">
    <DialogTitle>Settings</DialogTitle>
    <p id="dialog-desc">Manage your account settings.</p>
  </DialogContent>
</Dialog>

// Form with visible labels
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="you@example.com" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

---

## Design Token Extensions

`tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      brand: {
        50: 'hsl(var(--brand-50))',
        500: 'hsl(var(--brand-500))',
        900: 'hsl(var(--brand-900))',
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Cal Sans', ...defaultTheme.fontFamily.sans],
    }
  }
}
```

---

## Best Practices

- Mobile-first always — base styles for 375px, scale up
- Semantic tokens over hardcoded values (`text-foreground` not `text-gray-900`)
- `cn()` utility for conditional classes
- `asChild` on triggers for proper HTML semantics
- Never disable focus rings — style them instead
- Use `size-` shorthand over `w-x h-x` for square elements (Tailwind v3.4+)
