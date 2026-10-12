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
- `node check-style.cjs` — style audit: reports lines containing only `>`/`/>` and any emoji-like characters (rules below)

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
| Surface (incl. navbar) | `--color-surface` | `#1E1E1E` |
| Text | `--color-text` | `#F5F5F5` |
| Accent (light gray-green) | `--color-accent` | `#A3BFAE` |
| Accent hover | `--color-accent-strong` | `#BCD3C4` |
| Light tint | `--color-tint` | `#E9F0EA` |
| Muted | `--color-muted` | `#B1B3B0` |

Note: the accent was bronze/orange (`#966B50`) in Session 2; the client changed it to **light grayish green** in Session 3 (see `docs/DECISIONS.md` §Session 3). Navbar bg must stay visibly lighter than the page bg (surface vs base).

## Conventions

- All UI text and content in Italian.
- Mobile-first CSS; breakpoints at `48rem` and `64rem` (full horizontal nav only at `>= 64rem`; hamburger below).
- **Placeholders stay marked** with comments pointing to `docs/DECISIONS.md`: email `info@fitartfitness.it`, Facebook URL (`pending`), logo. Do not remove the markers.
- Content must match `docs/CONTENT-INVENTORY.md`. Some old-site content exists **only inside images** (OCR-recovered — see the "Valutazione Posturale" and "Cos'è il Taping" inventory entries).
- Do **not** rebuild the old "Accedi" admin page (dropped in Session 1).
- No new pages or features beyond the roadmap without client approval.

## Code style rules (client brief, Session 3)

- **No line may contain only `>` or `/>`.** Always close the tag on the previous line (e.g. `aria-label="…">Menu</button>`), never leave a dangling bracket line.
- **Absolutely no emojis anywhere** (source, docs, UI). If an icon is needed, use an icon from a proper icon library — the library is to be chosen together with the client (open question in `docs/DECISIONS.md`). No glyph substitutes either (e.g. no hamburger-trigram characters); use text labels or library icons.

## Session workflow

1. Read the current session row in `docs/ROADMAP.md`.
2. Implement; keep stubs and docs in sync.
3. `npm run build` — verify it passes.
4. Update docs (ROADMAP status, DECISIONS if needed).
5. Present to client; **commit only after explicit approval.**

## Current state (Session 3 done, 2026-10-10)

- Skeleton complete and polished: layouts, tokens (accent = light gray-green), header/footer, 7 route stubs; build passes.
- Navbar = surface (lighter than content), horizontal nav only at `>= 64rem`, shortened labels; a11y basics (skip-link, focus-visible, reduced motion, keyboard-friendly menu).
- Code style rules in force: no standalone `>`/`/>` lines, zero emojis (icons only from a library — to be chosen together with the client).
- **Next: Session 4 — Homepage** (hero, hours, services with videos, success story, gallery teaser, CTA).
- Open items: official logo, official email, Facebook URL confirmation, safeguarding documents ("Modello Organizzativo e Codice di Condotta"), **icon library choice (client)**.
- When the GitHub Pages repo exists, set `base: '/NOME-REPO/'` in `astro.config.mjs` (Session 7 — deploy).
