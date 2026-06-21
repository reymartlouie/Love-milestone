---
name: build-fullstack-app
description: Universal Full-Stack Web App Builder. Use when the user asks to build, scaffold, or create a complete full-stack web application from scratch — including frontend, backend, database, auth, testing, CI/CD, and deployment.
---

# Universal Full-Stack Web App Builder (Advanced Auto-Execution Mode)

You are an expert full-stack developer tasked with building a complete, production-ready full-stack web application from scratch. The application to build is described in the user's query (app name, purpose, key features, user flows, technical preferences, data models, UI/UX details, etc.).

Follow this exact process without deviation:

## Step 1 — Analyze Requirements

Thoroughly extract and expand all explicit and implied features:
- Core CRUD operations
- Authentication & authorization
- Real-time features
- Offline support
- Analytics & dashboards
- Admin panels
- Payments

Add production essentials automatically:
- Responsive design
- Accessibility (ARIA, WCAG 2.1 AA)
- Security (input validation, CSP, rate limiting, OWASP Top 10)
- Error handling & error boundaries
- Structured logging & monitoring hooks

## Step 2 — Choose Tech Stack

Select and justify a modern, scalable stack tailored to the app. Default choices to evaluate:

| Layer | Options |
|-------|---------|
| Frontend | Next.js/React + TypeScript + Tailwind CSS |
| Backend | NestJS/Node or FastAPI/Python |
| Database | PostgreSQL / Supabase / MongoDB |
| ORM | Prisma / TypeORM / SQLAlchemy |
| Auth | JWT / OAuth2 / NextAuth |
| Real-time | Socket.io / Supabase Realtime |
| Testing | Playwright (E2E) + Vitest/Jest (unit) |
| Deploy | Vercel (frontend) + Render/Railway (backend) |

## Step 3 — Create Detailed Phase Plan

Define 14–18 sequential phases specific to the app. Each phase must include:
- Clear sub-steps and deliverables
- Key files to create/modify
- Git commit message
- Comprehensive E2E testing goals using Playwright
- Performance/security checkpoints

**Standard phase template:**

| # | Phase |
|---|-------|
| 1 | Monorepo/Project Setup + Git + CI Basics |
| 2 | Database Schema + ORM Setup |
| 3 | Authentication & Authorization System |
| 4 | Core Backend API Endpoints |
| 5 | Frontend Scaffold + Routing + State Management |
| 6 | Core UI Components + Responsive Layout |
| 7 | API Integration + Real-Time Features |
| 8 | Advanced Features (offline, search, file uploads) |
| 9 | Analytics/Dashboard + Charts |
| 10 | Admin/Settings Panels + Theming |
| 11 | Playwright E2E Test Suite Setup |
| 12 | Full Browser-Based End-to-End Testing (multiple user flows) |
| 13 | Security Audit + Performance Optimization (Lighthouse 95+) |
| 14 | CI/CD Pipeline + Automated Tests |
| 15 | Documentation + README + Env Config |
| 16 | Deployment to Production Hosts |
| 17 | Post-Deployment Verification (browser checks on live URL) |

## Step 4 — Execute One Phase at a Time

**Do NOT run all phases at once.** Execute one phase per user turn only.

### Execution flow:

1. On first invocation: complete Steps 1–3 (analyze requirements, choose stack, output the full phase plan). Then **stop and ask**: "Ready to start Phase 1?"
2. When the user says go/yes/next: execute **only the current phase**, then stop.
3. After each phase, output a short summary:
   - Files created/modified
   - Git commit message (do not run git unless the user is in a git repo and confirms)
   - E2E test goals for the phase (describe, don't run unless asked)
4. End every phase response with: `"Phase N complete. Type 'next' to continue to Phase N+1, or ask questions first."`

### Per-phase execution rules:

- Provide full code for all new/changed files in that phase only.
- Use TypeScript, proper types, Zod/Yup validation, loading states, error boundaries, accessibility.
- Keep each phase response focused — no code from other phases.
- For testing phases: write the Playwright scripts but only run them if the user asks.

---

## Mandatory Rules

- Prioritize PWA + offline-first when suitable; otherwise optimized SPA + secure API.
- Use best practices: clean architecture, DRY, env vars, linting (ESLint/Prettier), husky hooks.
- Include only features that fit the app; justify any additions.
- **One phase per response — never advance without user confirmation.**
- **Always stop and wait after each phase.**

---

## Final Deliverable (after Phase 17 or last phase)

Provide all of the following:

1. **Complete repository structure** with all code files
2. **Full README** (setup, run dev/prod, deploy commands)
3. **CI/CD config** (GitHub Actions or equivalent)
4. **Live demo URL** (Vercel/Render/Netlify)
5. **Final scores**: Lighthouse (performance, accessibility, best practices, SEO), security audit summary
6. **Playwright test run summary** — 100% pass rate with test names and counts

---

Start NOW: Analyze the app description, choose stack, output the tailored phase plan, then **stop and ask the user to confirm before executing Phase 1**.
