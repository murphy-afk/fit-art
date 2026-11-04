# AGENTS.md - gym website template (Astro)

Read this first, then the docs in `docs/` (SETUP -> BRAND).

## What this is

Reusable **Astro static site template for gyms / fitness studios**, single
language: **Italian**. It was originally built for one client; that project
ended, so every trace of the client (name, contacts, address, photos, videos,
personal names, marketing claims) was removed and replaced with
`[placeholders]` and sample copy. Customize it per the checklist in
`docs/SETUP.md` for each new client. Hosting target: GitHub Pages (configurable).

## Non-negotiable rules

- Work **one session at a time**; agree the goal of the session first.
- **Update docs at the end of every session.**
- The client / repo owner reviews and approves **before** anything is committed.
  **Never commit without explicit approval.**
- New decisions and open questions go into `docs/SETUP.md` ("Open items").

## Commands

- `npm install`
- `npm run dev` -> http://localhost:4321
- `npm run build` -> `dist/` - **must pass at the end of every session**
- `npm run preview` -> preview the production build
- `npm run check` - style audit: reports lines containing only `>`/`/>`, any emoji-like characters and any em-dash (rules below)

Note: on Windows use `npm.cmd` if the PowerShell execution policy blocks `npm.ps1`.

## Project layout

- `src/layouts/BaseLayout.astro` - HTML shell (`lang="it"`, meta, favicon, JSON-LD)
- `src/components/Header.astro` / `Footer.astro` - shared chrome (nav, mobile toggle, contacts, socials)
- `src/data/site.ts` - **single source of truth** for brand, contacts, hours, socials, NAV. Change data here, never hardcode it in components.
- `src/data/images.ts` - image import hub; photos live in `src/assets/images/`
- `src/styles/global.css` - design tokens + all CSS (hand-written, no framework)
- `src/pages/*.astro` - one file per route (`404.astro` is served automatically by GitHub Pages)
- `public/` - `images/logo.svg`, `favicon.svg`, `og-image.jpg`, `robots.txt`, optional `videos/`
- `docs/` - SETUP.md (onboarding checklist), BRAND.md (visual identity)

## Design tokens (from `docs/BRAND.md`)

Dark premium: warm near-black backgrounds, off-white bold type, light gray-green interactive accent + warm sand decorative accent, photography-first.

| Role | Token | Hex |
|------|-------|-----|
| Base bg | `--color-bg` | `#121110` |
| Alt bg | `--color-bg-alt` | `#1B1917` |
| Surface (incl. navbar) | `--color-surface` | `#262321` |
| Text | `--color-text` | `#F5F5F5` |
| Accent (interactive: links, buttons) | `--color-accent` | `#A3BFAE` |
| Accent hover | `--color-accent-strong` | `#BCD3C4` |
| Sand (decorative: eyebrows, highlights) | `--color-sand` | `#E6D5B8` |
| Sand hover / light | `--color-sand-strong` | `#F2E7D4` |
| Light tint | `--color-tint` | `#E9F0EA` |
| Muted | `--color-muted` | `#B8B6B2` |

Navbar bg must stay visibly lighter than the page bg (surface vs base).

## Conventions

- **Language split**: all site content/UI text is **Italian** - never translate it. All **documentation** (`docs/`, this file) and **code comments** are in **English**.
- **Placeholder convention**: anything that must be replaced for a new client is written in `[square brackets]` or flagged with a `PLACEHOLDER` comment pointing to `docs/SETUP.md`. Do not invent real-looking content over a placeholder, and do not remove the markers until real content exists.
- Mobile-first CSS; breakpoints at `48rem` and `64rem` (full horizontal nav only at `>= 64rem`; hamburger below).
- Content must be generic or explicitly approved by the client. Sample copy blocks are marked with `Sample ... (docs/SETUP.md)` comments.
- No new pages or features beyond the agreed scope without client approval.

## Code style rules

- **No line may contain only `>` or `/>`.** Always close the tag on the previous line (e.g. `aria-label="…">Menu</button>`), never leave a dangling bracket line.
- **Absolutely no emojis anywhere** (source, docs, UI). Icons come **only from Lucide** (`@lucide/astro`). No glyph substitutes either (e.g. no hamburger-trigram characters); use text labels or Lucide icons. **Exception**: social-media brand logos (Instagram, Facebook, TikTok) are not in Lucide, so the footer uses hand-drawn inline SVGs in Lucide's style.
- **No em-dashes** in source, docs or UI. Use plain hyphens, colons, commas or the middle dot `·` instead. Enforced by the style audit.

## Session workflow

1. Agree the session goal with the client / repo owner.
2. Implement; keep stubs and docs in sync.
3. `npm run build` - verify it passes, and `npm run check` - 0 hits.
4. Update docs (`docs/SETUP.md` open items at minimum).
5. Present for review; **commit only after explicit approval.**

## Current state (template ready, 2026-11-04)

- 5 routes (home, chi-siamo, foto, contatti, 404); the three client-only content pages (brochure-based services + safeguarding) were removed with the client conversion.
- All photos are placeholder stock images (Unsplash / Pexels) in `src/assets/images/` + `public/og-image.jpg`; logo and favicon are hand-drawn placeholder SVGs (`public/images/logo.svg`, `public/favicon.svg`).
- Videos removed (the commented `<video>` markers show where a tour video can be re-added).
- `site`/`base` set to placeholder values in `astro.config.mjs`; sitemap + `robots.txt` in place.
- Contact form posts to `SITE.formspreeEndpoint` (still `YOUR_FORM_ID` placeholder).
- Build passes (5 pages), `npm run check` passes (0 hits).
- Open items: everything listed in `docs/SETUP.md`.
