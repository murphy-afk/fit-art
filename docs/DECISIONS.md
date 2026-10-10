# Decisions — Fit'Art redesign

Session 1 ✅ CLOSED — all decisions made (2026-10-10).

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

- **Testimonial** ("Anna ha perso 40 chili…") → ✅ client confirmed OK to publish.
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
