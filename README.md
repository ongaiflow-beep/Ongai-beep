# PT Victory Utama Karya — Corporate Website

A production-grade, bilingual (Bahasa Indonesia ⇄ English) marketing site for a
Jakarta-based construction & general contractor. Built to the structure defined
in [`wireframes/`](./wireframes) and elevated to a modern-corporate visual
standard with smooth, performance-conscious motion.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 3** — design tokens for the industrial-slate + safety-orange palette
- **Framer Motion** — scroll reveals, staggered grids, count-ups, filter transitions
- **Lenis** — inertial smooth scrolling (pointer/wheel; native on touch)
- **lucide-react** — UI icons (brand glyphs are local SVGs in `components/ui/social-icons.tsx`)
- Type **Poppins** (headings) / **Inter** (body) via `next/font`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
# production
npm run build && npm run start
```

## Pages

`/` Home · `/company` (+ `/company/management/[slug]`) · `/services` (+ `/services/[slug]`)
· `/projects` (+ `/projects/[slug]`) · `/news` (+ `/news/[slug]`) · `/careers`
(+ `/careers/[slug]`) · `/contact` · custom `not-found`. All detail routes are
statically generated via `generateStaticParams` with per-page metadata.

## Project structure

```
app/                      # routes (server components export metadata → render client views)
components/
  layout/                 # header, footer, providers, smooth-scroll, back-to-top, CTA band
  ui/                     # primitives, motion, media, section, page-hero, chips, marquee, logos
  views/                  # one client "*-view" per route (content + interactivity)
  cards.tsx               # project / service / news / team / job / event cards
lib/
  i18n.tsx                # LanguageProvider + useLanguage().tl() bilingual helper
  data/                   # all content (services, projects, news, team, jobs, company, site)
  lenis.ts, utils.ts, types.ts
```

## Bilingual content

Every piece of copy is a `{ id, en }` object localized at render time with
`tl()` from `useLanguage()`. The language toggle (navbar) persists to
`localStorage` and defaults to **Indonesian**. To edit content, change the data
files in `lib/data/` — no component edits required.

## Imagery

Figures are rendered by `components/ui/media.tsx` — branded, dependency-free
duotone + blueprint-pattern placeholders that are deterministic per `seed`
(so they never break and stay varied). To use real photography, configure a CDN
in `next.config.mjs` (`images.remotePatterns` already allows Unsplash) and swap
`<Media />` for `next/image` at the relevant call sites.

## Accessibility & performance

- `prefers-reduced-motion` respected globally (Framer `MotionConfig`, Lenis disabled, ken-burns off)
- Visible focus rings, semantic landmarks, labelled icon buttons, skip link, form labels
- Transform/opacity-only animations; static prerendering; `next/font` with `display: swap`

> Note: the contact form is wired to a simulated submit — connect it to an email
> service or an API route in production.
