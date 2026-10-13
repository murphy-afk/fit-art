# Roadmap — Fit'Art website redesign (Astro)

Working rules (from the client brief):
- Each session has its own planned prompt and a defined goal.
- Docs are updated at the end of every session.
- All changes are reviewed and approved by the client **before** anything is committed (git commits only after approval).
- Decisions and missing information are collected in dedicated sessions (Session 1).

| # | Session | Planned prompt (summary) | Goal / deliverable |
|---|---------|--------------------------|--------------------|
| 0 | Content scan (done) | "Scan all content on fitartfitness.it, including text inside images" | Complete content inventory -> `docs/CONTENT-INVENTORY.md` (OCR used for image-based content) |
| 1 | Decisions & content freeze (done) | "Answer the open questions: email, socials, media reuse, admin page, contact form, hosting, visual style" | `docs/DECISIONS.md` finalized; brand style from Instagram -> `docs/BRAND.md`; hosting = GitHub Pages; logo = IG profile pic |
| 2 | Scaffolding & design system (done, feedback applied in Session 3) | "Set up the Astro project: layouts (header/nav/footer), design tokens, responsive mobile-first, all routes stubbed" | Running Astro skeleton with shared layout and navigation; docs updated |
| 3 | Refinement & polish (done, approved) | "Review the skeleton: typography/token polish, responsive + mobile nav check, a11y basics, build performance, apply Session 2 feedback" | Polished skeleton ready for content; docs updated |
| 4 | Homepage (done, approved) | "Implement homepage: hero, hours, services with videos, success story, gallery teaser, CTA" | Homepage complete and presented for review |
| 5 | Content pages (done, awaiting review) | "Implement Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti" | All content pages complete and presented for review |
| 6 | SEO, accessibility, performance, forms | "Meta tags, sitemap.xml, robots.txt, favicon, image optimization, a11y pass, contact form handling, 404 page" | Production-ready build; docs updated |
| 7 | Final review & deploy | "Review everything, apply feedback, deploy, write handover docs" | Live site + handover documentation |

Session 1 is where the client answers the open questions (see `docs/DECISIONS.md`). Sessions 2–6 each end with a review checkpoint; nothing is committed without approval.

## Session 2 — deliverables (2026-10-10, awaiting review)

- **Astro 7.3.8**, static output (`astro.config.mjs`; `base` for GitHub Pages to be set at deploy time, Session 7).
- `src/layouts/BaseLayout.astro` — HTML shell (`lang="it"`, viewport, meta description, temporary favicon = IG logo).
- `src/components/Header.astro` — logo, brand, 7-item nav, mobile toggle (aria-expanded/aria-controls), phone CTA (desktop).
- `src/components/Footer.astro` — address, phones, placeholder email, socials (IG, TikTok, FB), hours.
- `src/styles/global.css` — design tokens from `docs/BRAND.md` (`#0A0A0A`, `#1E1E1E`, `#F5F5F5`, `#966B50`, `#F2E7D4`, `#B1B3B0`), mobile-first, breakpoints at 48/64rem.
- `src/data/site.ts` — shared data (contacts, hours, socials, NAV).
- Route stubs: `/`, `/chi-siamo`, `/valutazione-posturale`, `/cos-e-il-taping`, `/foto`, `/safeguarding`, `/contatti` (visible "stub" block listing the contents planned for Sessions 4–5).
- Build verified: `npm run build` -> `dist/`, 7 pages generated.
- **Pending**: Facebook URL confirmation (estimated from the IG handle), official logo, official email, definitive favicon (Session 6).
- Note: no commit — awaiting client approval (brief rules). Review feedback collected and applied in Session 3.
- **Next**: Session 3 — Refinement & polish of the skeleton (prompt in the table above).

## Session 3 — deliverables (2026-10-10, approved by the client)

Client feedback on Session 2 applied (see `docs/DECISIONS.md` §Session 3):

- **Lighter navbar**: header changed from `#0A0A0A/92%` to surface `#1E1E1E/94%` + blur — distinguishable from the content area (which stays `#0A0A0A`).
- **Accent moved off orange**: bronze/beige palette (`#966B50`, `#B08262`, `#F2E7D4`) replaced with **light grayish green** (`#A3BFAE`, `#BCD3C4`, `#E9F0EA`); CTA text dark for contrast; stub dashed border updated.
- **Slimmer navbar**: full horizontal nav only at `>= 64rem` (textual "Menu" hamburger below), shortened labels ("Valutazione", "Taping"; full titles in `<title>`/H1), brand tagline hidden on desktop, tighter spacing.
- **A11y basics**: skip-link "Salta al contenuto", `:focus-visible`, `prefers-reduced-motion`, `aria-label` toggle Apri/Chiudi menu, menu closes on Esc / outside click / link click, current page marked with weight (not only color).
- **Code style (new rules in AGENTS.md)**: no line with only `>` or `/>` (2 fixed in Header.astro); zero emojis everywhere (also removed from docs; the hamburger glyph replaced by the text "Menu"). Repeatable audit: `node check-style.cjs`.
- **Typography/token polish**: h1/h2/h3 scale with `clamp()`, `text-wrap: balance`, reduced default margins, commented tokens.
- **Docs updated**: AGENTS.md (code style rules, updated tokens), DECISIONS.md (§Session 3 + open item for icon library choice), BRAND.md (pointer note to DECISIONS), ROADMAP.
- Build verified: `npm run build` -> `dist/`, 7 pages.
- **Open**: choose the icon library together with the client (Lucide / Phosphor / Heroicons — `docs/DECISIONS.md`).
- **Next**: Session 4 — Homepage.

## Session 4 — deliverables (2026-10-13, approved by the client)

Complete homepage (`src/pages/index.astro` + a dedicated section in `src/styles/global.css`):

- **Full-bleed hero**: `hero-functional.jpg` with dark overlay, the decennial claim from the old site, "Chiama" CTA (tel:) + "Scopri i corsi" anchor.
- **Hours**: 3 cards (Mon–Fri 06–23, Sat–Sun 08–18, address) sourced from `SITE` in `src/data/site.ts`.
- **Services**: 8-service grid — 5 with **MP4 videos** downloaded from the old site (Functional Training, Pilates, Mal di schiena, Preparazione Atletica, Rieducazione funzionale; posters where available), 3 with photos (Indoor Cycling, Dimagrire, Ginnastica Posturale). Original text descriptions from the old site where they existed; Pilates with the full description + **8 benefits** in an expandable `<details>`.
- **Success story**: "Anna ha perso 40 chili in meno di un anno" + 2 photos + phone CTA.
- **Gallery teaser**: tour video (`palestra-tour.mp4`) + 4 photos + link to `/foto`; "galleria d'arte" claim.
- **Final CTA**: both phone numbers + `/contatti` link, with the sentence "Valuteremo insieme le tue esigenze…".
- Content verified by re-fetching `fitartfitness.it/index.html` (original texts).
- **Approval requested**: 4 **new** service descriptions (Posturale, Mal di schiena, Preparazione Atletica, Rieducazione) — no texts existed on the old site, written for Session 4 (see `docs/DECISIONS.md` §Session 4).
- Style audit `node check-style.cjs`: zero hits in `src/` (28 pre-existing hits were arrow characters in docs, left untouched at the time).
- Build verified: `npm run build` -> `dist/`, 7 pages.
- No commit — awaiting client approval.
- **Next**: Session 5 — content pages (Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti).

## Session 5 — deliverables (2026-10-13, awaiting review)

All 6 content pages implemented (stubs replaced):

- **Content sourcing**: original texts re-fetched from `fitartfitness.it` (Chi siamo, Safeguarding); Taping and Valutazione Posturale content **transcribed from the brochure/infographic images** (text existed only inside images — docs/CONTENT-INVENTORY.md). New assets downloaded: 5 Taping brochure pages (`public/images/taping-page-1..5.jpg`) + 1 remaining gallery photo (`foto-palestra.jpg`); the other 6 Foto-page photos were already local (4 `gallery-*.jpg` + 2 service photos).
- **Chi siamo** (`chi-siamo.astro`): original intro, 4 areas (cardio-tonica, sala corsi fitness e pilates, muscle-training, TRAINING ZONE), art-gallery USP section, team claim + CTA.
- **Valutazione Posturale** (`valutazione-posturale.astro`): cos'è la postura, perché si altera (appoggi asimmetrici, sovraccarichi plantari, compensi), cosa analizziamo, esame baropodometrico (statica/dinamica, pressioni plantari, sovraccarichi e asimmetrie, report con immagini), aree del corpo, cosa ottieni, CTA.
- **Cos'è il Taping** (`cos-e-il-taping.astro`): il nastro (descrizione), a cosa serve, 6 benefici, concetti generali (durata max 5 gg, applicazioni illimitate, pelle preparata), controindicazioni in a callout, brochure gallery (5 immagini originali).
- **Foto** (`foto.astro`): tour video + tutte e 7 le foto del vecchio sito + CTA visita.
- **Safeguarding** (`safeguarding.astro`): definizione, perché è importante, 7 componenti numerate, responsabile Prof. Massimo Spinoccia (fitart2020@gmail.com), placeholder "Modello Organizzativo e Codice di Condotta" (documenti non ancora forniti).
- **Contatti** (`contatti.astro`): 4 recapiti card (indirizzo + Google Maps link, telefoni, email placeholder, orari) + form UI (nome, email, telefono facoltativo, messaggio) con `action="#"` placeholder — invio gestito in Session 6.
- **New CSS** (`global.css`): `.feature-grid`/`.feature-card`/`.feature-num`, `.page-media`, `.prose`, `.callout`, `.contact-grid`/`.contact-card`, `.contact-form`/`.form-field`/`.form-note`; `.btn` restyled to work on `<button>` too; `.section-action` now a flex row.
- Style audit `node check-style.cjs`: zero hits. Build verified: `npm run build` -> `dist/`, 7 pages.
- No commit — awaiting client approval.
- **Next**: Session 6 — SEO, accessibility, performance, forms (meta tags, sitemap, robots.txt, favicon, 404, form handling).

## Session 4 follow-up (2026-10-13, client instructions — approved)

- **Icon library decided: Lucide** — installed as `@lucide/astro` (see `docs/DECISIONS.md` §Icon library). First icons added: `Menu` (nav toggle), `Phone` (header CTA).
- **Language policy**: site content stays Italian; documentation and code comments are kept in English. Italian sections of the docs and Italian code comments translated to English; arrow characters in docs replaced with `->` (clears the style audit).
