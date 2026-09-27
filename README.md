# Pomodoro

A dark-themed marketing site for a **Pomodoro timer app**, built with Next.js — hero, features, how-it-works, testimonials, pricing, FAQ, and footer sections, plus a **fully working Pomodoro timer component** embedded in the page.

## What it does

- **Working Pomodoro timer** (`components/pomodoro-timer.tsx`) — client-side countdown with 25-minute focus sessions and 5-minute breaks, play/pause/reset controls, and a circular progress indicator that auto-switches between focus and break modes
- **Marketing sections** — header/navbar, announcement bar, hero, features, how-it-works, integration showcase, partners, testimonials, pricing, FAQ, footer
- Decorative UI components: animated gradient cards, interactive grid backgrounds, shine borders, marquee strips
- Dark mode via `next-themes`

All content is static — no API routes, no server actions, no backend.

## Features

- Real, functional Pomodoro timer (not just a mockup)
- Responsive, mobile-first layout
- shadcn/ui component library (buttons, accordions, dialogs, etc.)
- Static-export friendly

## Tech stack

| Layer      | Tech |
|------------|------|
| Framework  | Next.js 15 (App Router) |
| Language   | TypeScript + React 19 |
| Styling    | Tailwind CSS, tailwindcss-animate |
| UI kit     | shadcn/ui (Radix UI primitives) |
| Icons      | Lucide React |
| Theme      | next-themes |
| Package manager | pnpm |

## Quick start

```bash
# install dependencies
pnpm install

# run the dev server
pnpm dev

# open http://localhost:3000
```

Production build:

```bash
pnpm build
pnpm start
```

Static export (as configured in `next.config.mjs` for GitHub Pages):

```bash
pnpm build   # emits a static site into out/
```

## Project structure

```
pomodoro/
├── app/
│   ├── page.tsx        # Page composition (all sections)
│   ├── layout.tsx      # Root layout + metadata
│   └── globals.css
├── components/
│   ├── pomodoro-timer.tsx   # Working focus/break timer
│   ├── header.tsx
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── how-it-works-section.tsx
│   ├── integration-section.tsx
│   ├── partners-section.tsx
│   ├── showcase-section.tsx
│   ├── testimonials-section.tsx
│   ├── pricing-section.tsx
│   ├── faq-section.tsx
│   ├── footer.tsx
│   ├── announcement-bar.tsx
│   ├── theme-provider.tsx
│   └── ui/             # shadcn/ui primitives + decorative components
├── lib/
│   └── utils.ts
├── public/             # Placeholder images/logos
└── next.config.mjs
```

## Environment variables

None required. Fully static site.

## Deployment notes

- `next.config.mjs` uses `output: 'export'` with `images: { unoptimized: true }`, so `pnpm build` produces a static `out/` directory deployable to GitHub Pages, Cloudflare Pages, or Netlify.
- `basePath: '/pomodoro'` is set for the GitHub Pages project-site deploy. **Remove `basePath`** when deploying to a custom domain or Vercel/Netlify root.
- Originally generated with v0; Next.js was bumped to 15.2.8 (fixes CVE-2025-55182 "React2Shell" and related Dec-2025 security advisories).

---

Built by Girish Lade — https://ladestack.in
