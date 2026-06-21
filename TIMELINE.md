# Our Milestone — Feature Timeline

A living document tracking what's been built, what's in progress, and what we want to add next.

---

## Current State of the App

### Core Experience
- [x] **Loading screen** — Animated beating heart with pulse ring and a percentage progress bar. Dark-mode aware.
- [x] **Love letter intro** — Two-stage fullscreen overlay: envelope prompt → personal note reveal. Space/tap to open; second interaction triggers music and transitions to the main page.
- [x] **Music autoplay** — Music starts playing the moment the love letter is dismissed.

### Hero Section
- [x] **Title & tagline** — "Our Love Story", "Reymart & Keisha", "2024 — Death"
- [x] **Scroll-based fade** — Hero content fades, scales, and blurs as the user scrolls down (0–400px range).
- [x] **Scattered polaroid photos** — 5 relationship photos displayed at various angles with staggered entrance animations.
- [x] **Scroll hint** — "Space to explore" on desktop, "Swipe to explore" on mobile.

### Music Player
- [x] **3-song playlist** — Nobody Else (default), Tenerif Sea, ILYSB (stripped).
- [x] **Controls** — Play/pause, previous/next track, volume slider.
- [x] **Loop & auto-advance** — Each track loops; automatically moves to next song when finished.

### Memory Counter
- [x] **Live counter** — Updates every second showing years, months, days, hours, minutes, and seconds since September 4, 2024.
- [x] **Milestone banners** — Special messages triggered at 100, 365, 500, 730, 1000 days and every 6-month mark.

### Timeline Section
- [x] **Alternating card layout** — Left/right cards with title, date, photo, and description.
- [x] **Scroll-reveal animation** — Cards animate in as they enter the viewport.
- [x] **6 relationship milestones** (private) — From First Stolen Photo (Sept 4, 2024) to First Valentine's Day (Feb 14, 2025).
- [x] **Clickable photos** — Opens the photo modal.

### Photo Modal
- [x] **Glassmorphism lightbox** — Frosted glass style overlay.
- [x] **Zoom** — 0.5x steps up to 4x, via buttons, keyboard (`+`/`-`), or mouse scroll wheel.
- [x] **Pan** — Click-and-drag to move around when zoomed in.
- [x] **Navigation** — Prev/Next buttons and keyboard arrow keys, with a photo counter badge.

### Polish & Technical
- [x] **Particle hearts** — 15 ambient floating hearts + click-burst effect (12 hearts per click).
- [x] **System dark mode** — Full light/dark theme using CSS custom properties and `prefers-color-scheme`.
- [x] **Mobile responsive** — Dedicated responsive CSS, scroll snap on sections, mobile-specific layouts.
- [x] **Lazy loading** — Images load on demand for performance.
- [x] **Private content system** — Milestones and photos are gitignored; a Vite plugin provides fallback placeholder data for public builds.
- [x] **Deployed on Vercel** — SPA routing configured via `vercel.json`.

---

## Desired Features / Roadmap

### Near-Term (Easy Wins)
- [x] **Movies We've Watched** — A card grid section listing movies watched together with heart ratings, genre tags, date watched, and optional notes. Private data via `movies.private.js`.
- [ ] **More songs** — Expand the playlist beyond 3 songs. Add a shuffle mode.
- [ ] **More timeline milestones** — Add entries beyond Feb 14, 2025 (first trip together, first fight & makeup, etc.).
- [ ] **Parallax background** — The component exists but is currently hidden (`display: none`). Re-enable and tune for visual depth.
- [ ] **Custom favicon** — Replace the default Vite favicon with a heart or a photo.

### Mid-Term (New Sections)
- [ ] **"Our Things" section** — A dedicated section for shared favorites: places, movies, songs, inside jokes, foods.
- [ ] **Bucket list / Future plans** — A checklist of things to do together (travel goals, experiences, etc.) with the ability to mark items as done.
- [ ] **Countdown to next anniversary** — A live countdown timer to September 4 of the next year, shown prominently near the memory counter.
- [ ] **Letter wall** — A section where each of us can write a letter to the other, revealed on a specific date or milestone.

### Long-Term (Bigger Ideas)
- [ ] **Video support in timeline** — Allow milestone cards to embed short video clips instead of just photos.
- [ ] **Photo map** — An interactive map pinning places we've visited or that are meaningful to us.
- [ ] **Our quiz** — A fun trivia game about our relationship ("What did Reymart order on our first date?") with a score at the end.
- [ ] **Annual time capsule** — On each anniversary, lock a message or photo that can only be opened on the next one.
- [ ] **PDF / print export** — Generate a printable "our story" document from the timeline milestones.

---

## Build History

| Date | What Was Built |
|------|----------------|
| Dec 2025 | Initial app with animations and design system |
| Dec 2025 | Real photos added to the gallery |
| Dec 2025 | Photo modal (two iterations, landed on glassmorphism) |
| Dec 2025 | Private milestones system with Vite plugin |
| Dec 2025 | Parallax bg, particle hearts, memory counter; Apple-inspired UI redesign |
| Dec 2025 | Music player with autoplay; Love letter intro screen; scroll effects |
| Dec 2025 | Dark mode; liquid glass aesthetic; lazy loading; smooth scroll |
| Jan 2026 | Mobile swipe indicator; scattered photos layout fix |
| Jan 2026 | Footer section fix |
| Feb 2026 | Default track changed to "Nobody Else" |

---

*Last updated: June 2026*
