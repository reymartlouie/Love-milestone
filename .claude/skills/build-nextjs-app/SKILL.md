---
name: build-nextjs-app
description: Build a complete Next.js web application — portfolios, web apps, dashboards with Supabase backend. Uses Next.js 14 + TypeScript + Tailwind CSS + Supabase + Vercel. One phase at a time.
---

# Next.js App Builder

Build production-ready Next.js applications — portfolios, web apps, dashboards.

**Stack:** Next.js 14 + TypeScript + Tailwind CSS + Supabase + Vercel Analytics

**Same stack as:** reymartlouie (personal portfolio)

---

## Phase Plan (10 phases, one at a time)

| # | Phase |
|---|-------|
| 1 | Project setup: `npx create-next-app@14` + TypeScript + Tailwind config |
| 2 | Folder structure + layout + metadata + fonts |
| 3 | Supabase setup (client + server + types generation) |
| 4 | Auth (Supabase Auth + middleware + protected routes) |
| 5 | Core pages + routing (App Router) |
| 6 | UI components + Tailwind design system |
| 7 | Data fetching (Server Components + Client Components) |
| 8 | API routes (if needed) |
| 9 | Vercel Analytics + SEO (metadata, OG images, sitemap) |
| 10 | Deploy to Vercel + environment variables |

---

## Standard Project Structure

```
project/
├── app/
│   ├── layout.tsx          ← root layout
│   ├── page.tsx            ← home page
│   ├── globals.css
│   └── [route]/
│       └── page.tsx
├── components/
│   ├── ui/                 ← reusable UI components
│   └── [feature]/
├── lib/
│   ├── supabase/
│   │   ├── client.ts       ← browser client
│   │   ├── server.ts       ← server client
│   │   └── middleware.ts
│   └── utils.ts
├── types/
│   └── supabase.ts         ← generated from Supabase
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── .env.local
```

---

## Standard dependencies

```json
{
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@supabase/supabase-js": "^2.x.x",
    "@supabase/ssr": "^0.x.x",
    "@tailwindcss/container-queries": "^0.1.1",
    "@vercel/analytics": "^1.x.x"
  },
  "devDependencies": {
    "typescript": "~5.x.x",
    "tailwindcss": "^3.x.x",
    "autoprefixer": "^10.x.x",
    "postcss": "^8.x.x"
  }
}
```

---

## Supabase Setup

```typescript
// lib/supabase/client.ts (browser)
import { createBrowserClient } from '@supabase/ssr'
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

// lib/supabase/server.ts (server components)
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export const createClient = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookies().getAll() } }
  )
```

---

## .env.local

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## Execution Rules

- One phase per response — stop and wait after each phase
- After each phase: show files created, commit message, then "Type 'next' to continue"
- Never advance without user confirmation
