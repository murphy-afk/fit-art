# AGENTS.md — Fit'Art website project

Read this first, then the docs in `docs/` (ROADMAP → DECISIONS → BRAND → CONTENT-INVENTORY).

## What this is

Astro static site for **Palestra Fit'Art (Fit'Art ASD)** — gym + art gallery in Rosate (MI), Italy. Redesign of the old `fitartfitness.it` (built with WebSite X5 / Incomedia). **Single language: Italian.** Hosting: GitHub Pages (prototype).

## Non-negotiable rules (client brief)

- Work **one session at a time**; each session's planned prompt and goal are in `docs/ROADMAP.md`.
- **Update docs at the end of every session.**
- The client reviews and approves **before** anything is committed. **Never commit without explicit approval.**
- New decisions and open questions go into `docs/DECISIONS.md`.

## Commands

- `npm install`
- `npm run dev` → http://localhost:4321
- `npm run build` → `dist/` — **must pass at the end of every session**
- `npm run preview` → preview the production build

## Project layout

- `src/layouts/BaseLayout.astro` — HTML shell (`lang="it"`, meta, favicon)
- `src/components/Header.astro` / `Footer.astro` — shared chrome (nav, mobile toggle, contacts, socials)
- `src/data/site.ts` — **single source of truth** for contacts, hours, socials, NAV. Change data here, never hardcode it in components.
- `src/styles/global.css` — design tokens + all CSS (hand-written, no framework)
- `src/pages/*.astro` — one file per route
- `public/images/` — static assets (`logo-s150x150.jpg` = Instagram profile pic, temporary logo)
- `docs/` — BRAND.md (visual identity), CONTENT-INVENTORY.md (full old-site content, incl. OCR of image-based text), DECISIONS.md, ROADMAP.md

## Design tokens (from `docs/BRAND.md`)

Dark premium: near-black backgrounds, off-white bold type, warm bronze accent, photography-first.

| Role | Token | Hex |
|------|-------|-----|
| Base bg | `--color-bg` | `#0A0A0A` |
| Alt bg | `--color-bg-alt` | `#131313` |
| Surface | `--color-surface` | `#1E1E1E` |
| Text | `--color-text` | `#F5F5F5` |
| Accent (bronze) | `--color-accent` | `#966B50` |
| Accent hover | `--color-accent-strong` | `#B08262` |
| Beige tint | `--color-tint` | `#F2E7D4` |
| Muted | `--color-muted` | `#B1B3B0` |

## Conventions

- All UI text and content in Italian.
- Mobile-first CSS; breakpoints at `48rem` and `64rem`.
- **Placeholders stay marked** with comments pointing to `docs/DECISIONS.md`: email `info@fitartfitness.it`, Facebook URL (`pending`), logo. Do not remove the markers.
- Content must match `docs/CONTENT-INVENTORY.md`. Some old-site content exists **only inside images** (OCR-recovered — see the "Valutazione Posturale" and "Cos'è il Taping" inventory entries).
- Do **not** rebuild the old "Accedi" admin page (dropped in Session 1).
- No new pages or features beyond the roadmap without client approval.

## Session workflow

1. Read the current session row in `docs/ROADMAP.md`.
2. Implement; keep stubs and docs in sync.
3. `npm run build` — verify it passes.
4. Update docs (ROADMAP status, DECISIONS if needed).
5. Present to client; **commit only after explicit approval.**

## Current state (Session 2 done, 2026-10-10)

- Skeleton complete: layouts, design tokens, header/footer, 7 route stubs; build passes.
- **Next: Session 3 — Refinement & polish** (typography/token polish, responsive + mobile nav check, a11y basics, build performance, apply Session 2 feedback).
- Open items: official logo, official email, Facebook URL confirmation, safeguarding documents ("Modello Organizzativo e Codice di Condotta").
- When the GitHub Pages repo exists, set `base: '/NOME-REPO/'` in `astro.config.mjs` (Session 7 — deploy).
