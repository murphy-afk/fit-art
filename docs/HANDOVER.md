# Handover — Fit'Art website

Session 7 deliverable (see `docs/ROADMAP.md`). This is the technical guide for
whoever maintains the site after the project.

## 1. What this is

Astro 7 static site for **Palestra Fit'Art (Fit'Art ASD)**, Rosate (MI), Italy.
Single language: **Italian** (content), English for docs/comments.
Repo: `github.com/murphy-afk/fit-art`.

- 8 pages: `/`, `/chi-siamo`, `/valutazione-posturale`, `/cos-e-il-taping`, `/foto`,
  `/safeguarding`, `/contatti`, `/404`.
- No database, no server: plain HTML/CSS/JS built into `dist/`.

## 2. Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server -> http://localhost:4321 |
| `npm run build` | Production build -> `dist/` (must pass at the end of any work session) |
| `npm run preview` | Serve the production build locally |
| `node check-style.cjs` (or `npm run check`) | Style audit: no standalone `>`/`/>` lines, no emojis/arrows (rules in AGENTS.md) |

Requires Node 20+ (CI uses Node 22).

## 3. Where things live

| Path | Purpose |
|---|---|
| `src/layouts/BaseLayout.astro` | HTML shell: meta, canonical/OG/Twitter, JSON-LD, favicons, header/footer |
| `src/components/` | Header (nav + mobile toggle), Footer (contacts, socials, hours) |
| `src/data/site.ts` | **Single source of truth**: contacts, hours, socials, NAV, Formspree endpoint, `path()` link helper |
| `src/data/images.ts` | Imports of all content photos (astro:assets) |
| `src/pages/*.astro` | One file per route |
| `src/styles/global.css` | Design tokens + all CSS (hand-written, no framework) |
| `src/assets/images/` | Content photos (optimized WebP at build) |
| `public/` | Copied as-is: `videos/`, `images/logo-s150x150.jpg`, favicons, `og-image.jpg`, `robots.txt` |
| `scripts/generate-favicons.cjs` | Regenerates favicons/OG image from the logo (rerun when the official logo arrives) |
| `.github/workflows/deploy.yml` | Builds + deploys to GitHub Pages on every push to `main` |

**To change site data (phone numbers, hours, socials, nav, form endpoint): edit
`src/data/site.ts` only** — components read from it.

## 4. Deploy (GitHub Pages)

- Pushing to `main` triggers the `Deploy to GitHub Pages` workflow: install ->
  style audit -> build -> upload -> deploy. The live site is then at
  **https://murphy-afk.github.io/fit-art/**.
- One-time setup (if not done yet): repo **Settings -> Pages -> Source:
  "GitHub Actions"**. Also check Settings -> Pages -> Custom domain is empty.
- `astro.config.mjs` holds the URL config:
  ```js
  site: 'https://murphy-afk.github.io',
  base: '/fit-art/',
  ```
  Internal links must go through `path()` (in `src/data/site.ts`) so they get
  the `/fit-art/` prefix; Astro prefixes bundled assets automatically.

### When the custom domain fitartfitness.it is connected (later)

1. Repo Settings -> Pages -> Custom domain: `fitartfitness.it` (+ DNS A/CNAME records at the registrar).
2. In `astro.config.mjs`: `site: 'https://fitartfitness.it', base: '/'`.
3. In `public/robots.txt`: `Sitemap: https://fitartfitness.it/sitemap-index.xml`.
4. Rebuild/deploy. `path()` then returns plain `/...` paths — no other changes needed.

> Note: on a *project* site crawlers never read `/fit-art/robots.txt` (they only
> fetch `robots.txt` from the domain root), so the sitemap hint there is inert
> until the custom domain is connected — where it becomes the real discovery path.

## 5. Open placeholders (swap when available)

All are marked in code and safe to deploy as-is:

| Placeholder | Where to change |
|---|---|
| Contact form not active | `SITE.formspreeEndpoint` in `src/data/site.ts`: create the free Formspree account, paste `https://formspree.io/f/XXXXXXX` (single-line swap; the "in fase di collaudo" note disappears automatically) |
| Temporary logo/favicon | Replace `public/images/logo-s150x150.jpg`, rerun `node scripts/generate-favicons.cjs` |
| Official email | `SITE.email` in `src/data/site.ts` (currently `info@fitartfitness.it`) |
| Safeguarding documents | `src/pages/safeguarding.astro` placeholder section |

## 6. Working rules (client brief)

- One roadmap session at a time; planned prompts in `docs/ROADMAP.md`.
- Update docs at the end of every session.
- **Never commit/push without explicit client approval.**
- New decisions/open questions -> `docs/DECISIONS.md`.
- Site content stays Italian; docs and code comments in English.

## 7. Where the docs are

- `docs/ROADMAP.md` — session plan and per-session deliverables.
- `docs/DECISIONS.md` — every decision and why (hosting, colors, Formspree...).
- `docs/BRAND.md` — visual identity/tokens (accent superseded by DECISIONS §Session 3).
- `docs/CONTENT-INVENTORY.md` — full content of the old site (incl. OCR).
- `AGENTS.md` — conventions for AI/agents working in this repo.
