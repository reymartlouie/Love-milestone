---
name: build-landing-page
description: Build a complete landing page with React + TypeScript + Vite + Tailwind CSS. For company sites, product pages, portfolios. No backend needed. One phase at a time.
---

# Landing Page Builder

Build fast, beautiful landing pages.

**Stack:** React + TypeScript + Vite + Tailwind CSS + Lucide React

**Same stack as:** betterkabankalan, brewed (graceylogisticsservices uses Vite + React without Tailwind)

---

## Phase Plan (6 phases, one at a time)

| # | Phase |
|---|-------|
| 1 | `npm create vite@latest` + TypeScript + Tailwind setup |
| 2 | Folder structure + base layout + fonts + colors |
| 3 | Navbar + Hero section |
| 4 | Core sections (Services, Features, About, Testimonials) |
| 5 | Contact section + Footer + animations |
| 6 | SEO (meta tags, OG image, sitemap, robots.txt) + build |

---

## Standard Project Structure

```
project/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css           ← Tailwind imports
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── public/
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Setup Commands

```bash
npm create vite@latest project-name -- --template react-ts
cd project-name
npm install
npm install tailwindcss @tailwindcss/vite lucide-react
```

---

## vite.config.ts (with Tailwind)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## Standard dependencies

```json
{
  "dependencies": {
    "react": "^19.x.x",
    "react-dom": "^19.x.x",
    "lucide-react": "^0.x.x"
  },
  "devDependencies": {
    "typescript": "~5.x.x",
    "vite": "^8.x.x",
    "@vitejs/plugin-react": "^6.x.x",
    "tailwindcss": "^4.x.x",
    "@tailwindcss/vite": "^4.x.x"
  }
}
```

---

## Section Component Pattern

```tsx
// src/sections/Services.tsx
export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>
        {/* content */}
      </div>
    </section>
  )
}
```

---

## SEO Files

**public/robots.txt**
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

**public/sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
</urlset>
```

---

## Execution Rules

- One phase per response — stop and wait after each phase
- After each phase: show files, commit message, "Type 'next' to continue"
- Never advance without user confirmation
