# Decisions — Fit'Art redesign

Session 1 CLOSED — all decisions made (2026-10-10).

## Decided

1. **Public contact email** -> PLACEHOLDER for now: `info@fitartfitness.it` (clearly marked in code, easy to swap). Client will add the real official email later. Real emails found on the old site: `auroraspinoccia@gmail.com` (Aurora Spinoccia), `fitart2020@gmail.com` (safeguarding).
2. **Social links** -> drop YouTube and X (they pointed to "Incomedia", the old site vendor — incorrect); keep the real Facebook page; **add Instagram: https://www.instagram.com/fitartstudiofitness/**
3. **Media assets** -> download the ~30 photos and 6+ videos from the live site and optimize them for the new site.
4. **Admin login page** -> dropped (was non-functional and publicly exposed).
5. **Contact form** -> build the form UI; GitHub Pages is static (no server endpoint), so ship with a placeholder action; can add Formspree later if wanted.
6. **Visual style** -> copy the general style used on the gym's Instagram (@fitartstudiofitness) — colors, mood, imagery. DONE: analysis of 19 posts + profile pic -> `docs/BRAND.md`. Direction: dark premium (near-black `#0A0A0A`, off-white text, warm bronze accent `#966B50`, beige tint `#F2E7D4`), photography-first.

## Decided during Session 1 (additional findings)

- **Instagram bio** reveals extra services to feature: Allenamenti personalizzati, Preparazione atletica, Posturologia, Chinesiologia, Massoterapia (own IG @fitart_massoterapia).
- **TikTok** also exists: @fitartstudiofitness.
- **Logo candidate**: IG profile picture (black bg, white mark) — official logo file still to be requested.

## Open / defaults (can be adjusted any time)

- **Testimonial** ("Anna ha perso 40 chili…") -> client confirmed OK to publish.
- **Safeguarding documents** ("Modello Organizzativo e Codice di Condotta") -> placeholders for now; ask the gym for the files later.
- **Language** -> see "Language policy" below (Italian content, English docs/comments).
- **Logo** -> no official file; use the Instagram profile picture (black bg, white mark) — downloaded at the highest available resolution (150x150) to `public/images/`; replace with the official logo when available.
- **Email** -> placeholder `info@fitartfitness.it`; swap when the official email is known.
- **Facebook URL** -> ESTIMATED from the IG handle (`facebook.com/fitartstudiofitness`) — the exact URL wasn't in the content inventory; marked `pending` in `src/data/site.ts`. Confirm before deploy (Session 7).
- **Navigation** -> flat structure with the 7 live pages of the old site (Home, Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti); "Accedi" removed (Session 1). No dropdowns; hamburger menu below 48rem.
- **Favicon** -> temporary = IG logo (`/images/logo-s150x150.jpg`); definitive favicon in Session 6.
- **Stack** -> Astro 7.3.8 (static output), zero extra runtime dependencies; hand-written CSS with tokens, no framework.

## Hosting — DECIDED

-> **GitHub Pages** (client already has a GitHub account; it's a prototype). Other free alternatives acceptable if needed.

## Language policy — DECIDED (client, 2026-10-13)

- **Site content** (all UI text, pages, meta) stays **Italian** — never translate it, even if the surrounding docs/comments are in English.
- **Documentation** (`docs/`, `AGENTS.md`) and **code comments** are kept in **English**.
- Applied retroactively in Session 4 follow-up: doc sections and code comments translated to English; Italian page names/titles (e.g. "Chi siamo") are content, not comments, and remain Italian.

## Icon library — DECIDED (client, 2026-10-13)

**Lucide** (installed as `@lucide/astro`, the current official Astro package; the older `lucide-astro` name is deprecated).

- Chosen by the client over Phosphor and Heroicons (candidates listed below for reference).
- Replaces the open item from Session 3 ("library to be chosen together with the client").
- Rules that still apply: no emojis anywhere, no glyph substitutes (e.g. no hamburger-trigram characters); icons come only from Lucide, text labels where a label is clearer than an icon.
- First uses (Session 4 follow-up): `Menu` icon next to the "Menu" button label, `Phone` icon in the header call CTA. Socials / map pin icons to be added in Sessions 5–6 where relevant.
- Styling: icons inherit `currentColor`, sized inline (e.g. `size={18}`), always `aria-hidden` when accompanied by a text label.

### Candidates (kept for reference — not used)

- **Lucide** (successor of Feather) — minimal, consistent, MIT. CHOSEN.
- **Phosphor** — flexible weights, broader set.
- **Heroicons** — Tailwind-team, simple set.

## Session 3 — client feedback (2026-10-10)

1. **Navbar vs content contrast** -> navbar must be visibly lighter than the main content area. Navbar bg = `--color-surface` `#1E1E1E` (94% + blur), content stays `--color-bg` `#0A0A0A`.
2. **Accent color** -> NOT orange/bronze. Changed to **light grayish green**: accent `#A3BFAE`, hover `#BCD3C4`, tint `#E9F0EA` (replaces bronze `#966B50`/`#B08262` and beige `#F2E7D4`). CTA text switched to dark (`--color-bg`) for contrast. Supersedes the bronze derived from Instagram in `docs/BRAND.md`.
3. **Navbar crowding** -> full horizontal nav only at `>= 64rem`; hamburger ("Menu" text button) below. Shortened nav labels: "Valutazione Posturale" -> "Valutazione", "Cos'è il Taping" -> "Taping" (full titles remain in the page `<title>`/H1). Brand tagline hidden on desktop. Tighter nav spacing.
4. **Code style (added to AGENTS.md)** -> no line containing only `>` or `/>`; close tags on the previous line.
5. **No emojis anywhere** (source, docs, UI). If an icon is needed, use an icon from a library — library since decided (see "Icon library" above). No glyph substitutes; text labels or library icons only.

## Session 4 — homepage (2026-10-13, approved by the client)

1. **Service videos**: the 6 MP4s downloaded from the old site are used in the service cards with `preload="metadata"` + visible controls (no autoplay — respects `prefers-reduced-motion` and saves bandwidth). Poster = matching photo where available; for "Mal di schiena" and "Rieducazione funzionale" there is no dedicated poster (first frame from the video).
2. **New copy to approve** (did not exist on the old site, written for Session 4):
   - Ginnastica Posturale — "Esercizi mirati per correggere la postura e prevenire dolori e compensi."
   - Ginnastica contro il mal di schiena — "Lavoro specifico per alleviare e prevenire il mal di schiena."
   - Preparazione Atletica — "Programmi di preparazione per migliorare la prestazione e la condizione atletica."
   - Rieducazione funzionale — "Recupero del movimento dopo infortuni e operazioni, con un percorso personalizzato."
3. **Pilates: 8 benefits + full description** rendered in an expandable `<details>` inside the Pilates card (long content, doesn't fit a grid card).
4. **Gallery claim**: used "L'unica palestra in Italia che è anche una galleria d'arte" (USP from the old site, reworded) — to confirm with the client.
5. **Style audit**: the arrow characters that pre-dated the rule were flagged by `check-style.cjs` (range U+2190–21FF in the emoji regex); while translating the docs to English (Session 4 follow-up) they were all replaced with `->`, so the audit now passes with zero hits.
