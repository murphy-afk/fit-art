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
- **Facebook URL** -> CONFIRMED by the client (Session 6 close, 2026-10-13): https://www.facebook.com/share/19c2zGVGed/ — replaces the estimated IG handle (`facebook.com/fitartstudiofitness`, previously marked `pending` in `src/data/site.ts`).
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
5. **Style audit**: the arrow characters that pre-dated the rule were flagged by `check-style.cjs` (range U+2190-21FF in the emoji regex); while translating the docs to English (Session 4 follow-up) they were all replaced with `->`, so the audit now passes with zero hits.

## Session 5 — content pages (2026-10-13)

1. **Content sourcing**: Chi siamo and Safeguarding texts re-fetched verbatim from the live old site. Taping and Valutazione Posturale texts **transcribed from the original brochure/infographic images** (they existed only inside images); the 5 Taping brochure pages are also kept as images on the page ("La brochure" gallery).
2. **New assets downloaded** (see "Media assets" above): `taping-page-1..5.jpg`, `foto-palestra.jpg`. The other 6 photos of the old Foto page were already local (4 as `gallery-*.jpg`, 2 as service photos) - the Foto page reuses them, so all 7 originals are now on the site.
3. **Aurora Spinoccia / posturology contact**: the Valutazione Posturale flyer lists a dedicated contact for the service (Aurora Spinoccia, auroraspinoccia@gmail.com, +39 334 226 6851). **DECIDED (client)**: published **only on the Valutazione Posturale page**, in a dedicated callout ("Per la Valutazione Posturale") that makes it explicit her contact is for that service only; not added anywhere else (not in Contatti, not in the footer).
4. **Contact form**: UI built (nome, email, telefono facoltativo, messaggio) with `action="#"` and a visible note ("il modulo e in fase di collaudo") - per decision 5 above, handling (e.g. Formspree) comes in Session 6.
5. **Google Maps**: Contatti uses a Google Maps **search link** (opens in a new tab), not an embedded iframe - keeps the page light; can upgrade to an embed in Session 6/7 if wanted.
6. **Footer note** updated from "Session 3" to "Session 5".

## Session 6 — SEO, a11y, performance, forms (2026-10-13)

1. **Contact form handling -> Formspree (client)**. GitHub Pages is static, so the form posts to Formspree via fetch (success/error message in an `aria-live` status region, honeypot anti-spam, native POST fallback without JS). The endpoint lives in `SITE.formspreeEndpoint` (`src/data/site.ts`) as the placeholder `https://formspree.io/f/YOUR_FORM_ID`: **the client creates the free Formspree account and pastes the real ID (single-line swap)**. Until then the form shows the "in fase di collaudo" note and never submits.
2. **Image optimization -> astro:assets (client)**. The 18 content photos moved from `public/images/` to `src/assets/images/` and are rendered with Astro's `<Image>` (automatic WebP + `sizes` + `decoding=async`, e.g. hero 101 kB -> 32 kB). Central imports in `src/data/images.ts`. The logo stays in `public/images/` because it is also the favicon source; videos stay in `public/videos/`.
3. **Favicon**: generated from the temporary IG logo (`scripts/generate-favicons.cjs`): `favicon-16/32.png`, `apple-touch-icon.png`, plus a 1200x630 `og-image.jpg` (hero photo, darkened) for social previews. Rerun the script when the official logo arrives.
4. **Structured data**: JSON-LD `HealthClub` in the layout (address, phones, hours, socials from `src/data/site.ts`) for Google search results.
5. **Facebook URL**: CONFIRMED by the client at Session 6 close (2026-10-13): https://www.facebook.com/share/19c2zGVGed/ — the `pending` marker and the estimated handle were removed from `src/data/site.ts`.
6. **404 page**: new `src/pages/404.astro` (Italian, CTA home/contatti/telefono); excluded from the sitemap.
7. **Favicon corners** (follow-up, client request): the logo JPEG is a circle on a white square, so the generated icons had white corners — `scripts/generate-favicons.cjs` now applies a circular mask and the corners are transparent. Regenerated `favicon-16/32.png` + `apple-touch-icon.png`.

## Session 7 — final review & deploy (2026-10-13)

1. **Deploy target -> GitHub Pages project URL (client)**. Live at `https://murphy-afk.github.io/fit-art/`; the custom domain (`fitartfitness.it`) is connected later — the exact switch steps (astro.config `site`/`base`, robots.txt, DNS) are in `docs/HANDOVER.md` §4.
2. **Placeholder items ship as-is (client)**: Formspree ID, official logo/favicon, official email, safeguarding documents all stay marked and are swapped later (one line each — HANDOVER §5).
3. **No further content feedback (client)**: Sessions 4-6 accepted as built; Session 7 applies only the technical review findings.
4. **Base-path handling (technical)**: `path()` in `src/data/site.ts` prefixes internal links and `public/` assets with `base` (Astro does not do this for hand-written URLs). All site URLs go through it; it collapses to plain `/...` when `base` becomes `/`.
5. **Deploy automation**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on push to `main`, running the style audit first. Pages source must be set once to "GitHub Actions" (manual, repo Settings -> Pages).
6. **Review fixes**: footer prototype note loses its internal "(Session N)" suffix (not site content); `scroll-padding-top` added for the sticky header; dead `.stub` CSS removed; `npm run check` added.
7. **Video captions (open, WCAG)**: the service/tour videos have `aria-label` but no captions track. To confirm whether the promo MP4s contain speech; if they do, captions or a transcript come in a follow-up.
8. **Google Maps link corrected (client, 2026-10-13)**: the Contatti address card now points to `https://maps.app.goo.gl/Uf1LsX99xcg7mxeU6` (was a generic `google.com/maps/search/?query=...` URL built from the address).
9. **CI lockfile compatibility (technical)**: `package-lock.json` regenerated with npm 10 so `npm ci` works on CI (npm 11, used locally, writes a lockfile that npm 10 rejects with "Missing: @emnapi/runtime from lock file"). Validated with both npm 10 and npm 11. Local dev stays on Node 24; CI uses Node 22.
10. **GitHub Pages activated (client, 2026-10-13)**: repo Settings -> Pages -> Source "GitHub Actions" set by the client; the deploy workflow went green and the site is live at https://murphy-afk.github.io/fit-art/.
11. **Mobile menu button = icon only (client, 2026-10-13 follow-up)**: the "Menu" text label was overlapping neighbouring content on small screens, so the toggle now shows only the Lucide `Menu` icon (18px, square 2.75rem tap target). The accessible name stays on the button via `aria-label` ("Apri menu"/"Chiudi menu", toggled by the existing script). Supersedes the Session 4 follow-up choice of icon + text label.
