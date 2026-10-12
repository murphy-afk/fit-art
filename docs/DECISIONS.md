# Decisions — Fit'Art redesign

Session 1 CLOSED — all decisions made (2026-10-10).

## Decided

1. **Public contact email** → PLACEHOLDER for now: `info@fitartfitness.it` (clearly marked in code, easy to swap). Client will add the real official email later. Real emails found on the old site: `auroraspinoccia@gmail.com` (Aurora Spinoccia), `fitart2020@gmail.com` (safeguarding).
2. **Social links** → drop YouTube and X (they pointed to "Incomedia", the old site vendor — incorrect); keep the real Facebook page; **add Instagram: https://www.instagram.com/fitartstudiofitness/**
3. **Media assets** → download the ~30 photos and 6+ videos from the live site and optimize them for the new site.
4. **Admin login page** → dropped (was non-functional and publicly exposed).
5. **Contact form** → build the form UI; GitHub Pages is static (no server endpoint), so ship with a placeholder action; can add Formspree later if wanted.
6. **Visual style** → copy the general style used on the gym's Instagram (@fitartstudiofitness) — colors, mood, imagery. → DONE: analysis of 19 posts + profile pic → `docs/BRAND.md`. Direction: dark premium (near-black `#0A0A0A`, off-white text, warm bronze accent `#966B50`, beige tint `#F2E7D4`), photography-first.

## Decided during Session 1 (additional findings)

- **Instagram bio** reveals extra services to feature: Allenamenti personalizzati, Preparazione atletica, Posturologia, Chinesiologia, Massoterapia (own IG @fitart_massoterapia).
- **TikTok** also exists: @fitartstudiofitness.
- **Logo candidate**: IG profile picture (black bg, white mark) — official logo file still to be requested.

## Open / defaults (can be adjusted any time)

- **Testimonial** ("Anna ha perso 40 chili…") → client confirmed OK to publish.
- **Safeguarding documents** ("Modello Organizzativo e Codice di Condotta") → placeholders for now; ask the gym for the files later.
- **Language** → Italian only (default).
- **Logo** → no official file; use the Instagram profile picture (black bg, white mark) — downloaded at the highest available resolution (150×150) to `public/images/`; replace with the official logo when available.
- **Email** → placeholder `info@fitartfitness.it`; swap when the official email is known.
- **Facebook URL** → STIMATO dall'handle IG (`facebook.com/fitartstudiofitness`) — the exact URL wasn't in the content inventory; marked `pending` in `src/data/site.ts`. Confirm before deploy (Session 7).
- **Navigazione** → struttura piatta con le 7 pagine live del vecchio sito (Home, Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti); "Accedi" eliminata (Session 1). Nessun dropdown; menu a hamburger sotto 48rem.
- **Favicon** → temporaneo = logo IG (`/images/logo-s150x150.jpg`); favicon definitivo nella Session 6.
- **Stack** → Astro 7.3.8 (static output), zero dipendenze runtime extra; CSS hand-written con token, no framework.

## Hosting — DECIDED

→ **GitHub Pages** (client already has a GitHub account; it's a prototype). Other free alternatives acceptable if needed.

## Session 3 — client feedback (2026-10-10)

1. **Navbar vs content contrast** → navbar must be visibly lighter than the main content area. Navbar bg = `--color-surface` `#1E1E1E` (94% + blur), content stays `--color-bg` `#0A0A0A`.
2. **Accent color** → NOT orange/bronze. Changed to **light grayish green**: accent `#A3BFAE`, hover `#BCD3C4`, tint `#E9F0EA` (replaces bronze `#966B50`/`#B08262` and beige `#F2E7D4`). CTA text switched to dark (`--color-bg`) for contrast. Supersedes the bronze derived from Instagram in `docs/BRAND.md`.
3. **Navbar crowding** → full horizontal nav only at `>= 64rem`; hamburger ("Menu" text button) below. Shortened nav labels: "Valutazione Posturale" → "Valutazione", "Cos'è il Taping" → "Taping" (full titles remain in the page `<title>`/H1). Brand tagline hidden on desktop. Tighter nav spacing.
4. **Code style (added to AGENTS.md)** → no line containing only `>` or `/>`; close tags on the previous line.
5. **No emojis anywhere** (source, docs, UI). If an icon is needed, use an icon from a library — **library to be chosen together with the client** (open item below). No glyph substitutes (e.g. no hamburger-trigram characters); text labels or library icons only.

## Open — icon library (to choose together, Session 3+)

Candidates to review with the client (icons needed later: phone, socials, map pin, menu, etc.):
- **Lucide** (successor of Feather) — minimal, consistent, MIT.
- **Phosphor** — flexible weights, broader set.
- **Heroicons** — Tailwind-team, simple set.

No icon library is installed yet; the mobile menu uses a text "Menu" button for now.
