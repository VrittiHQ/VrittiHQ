# Vritti Website — Agent Instructions

## Identity
Public-facing marketing website for Vritti (vrittiai.com). Waitlist-optimized landing page targeting SMB operators and investors evaluating the "Workforce OS for India's 500M+ deskless workforce" thesis.

## Tech Stack
- **Framework:** Next.js (App Router)
- **UI:** React, TailwindCSS
- **Linting:** ESLint

## Architecture
```
src/
├── app/            # Next.js App Router pages & layouts
├── components/     # UI components (hero, features, CTA sections)
└── config/         # Site configuration
```

## Rules

### Mandatory
- Use Next.js **App Router** only.
- Default to **Server Components** for SEO. Only add `'use client'` for interactive elements (waitlist form, animations).
- Use **TailwindCSS** for all styling.
- Every page MUST have proper `<title>`, `<meta description>`, and Open Graph tags.
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<footer>`).
- Optimize all images with `next/image`.
- Keep copy problem-first and founder-driven. No generic SaaS template language.

### Never Do
- Never use Pages Router.
- Never add dashboard/app functionality here — this is marketing only.
- Never use placeholder copy like "Lorem ipsum" or "Your Company".
- Never add heavy JS libraries that hurt Core Web Vitals (this site must score 90+ on Lighthouse).

## Dev Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
```

## Onboarding (Run Once After Clone)
```bash
git config core.hooksPath .agents/hooks
npm install
```

## Git Workflow
```
feature/your-feature  →  PR to dev  →  release merges dev to main
```
- Create feature branches from `dev`
- Direct pushes to `main` are blocked by pre-push hook
