# Roadmap — Fit'Art website redesign (Astro)

Working rules (from the client brief):
- Each session has its own planned prompt and a defined goal.
- Docs are updated at the end of every session.
- All changes are reviewed and approved by the client **before** anything is committed (git commits only after approval).
- Decisions and missing information are collected in dedicated sessions (Session 1).

| # | Session | Planned prompt (summary) | Goal / deliverable |
|---|---------|--------------------------|--------------------|
| 0 | Content scan (done) | "Scan all content on fitartfitness.it, including text inside images" | Complete content inventory → `docs/CONTENT-INVENTORY.md` (OCR used for image-based content) |
| 1 | Decisions & content freeze (done) | "Answer the open questions: email, socials, media reuse, admin page, contact form, hosting, visual style" | `docs/DECISIONS.md` finalized; brand style from Instagram → `docs/BRAND.md`; hosting = GitHub Pages; logo = IG profile pic |
| 2 | Scaffolding & design system (done, feedback applied in Session 3) | "Set up the Astro project: layouts (header/nav/footer), design tokens, responsive mobile-first, all routes stubbed" | Running Astro skeleton with shared layout and navigation; docs updated |
| 3 | Refinement & polish (done, approved) | "Review the skeleton: typography/token polish, responsive + mobile nav check, a11y basics, build performance, apply Session 2 feedback" | Polished skeleton ready for content; docs updated |
| 4 | Homepage | "Implement homepage: hero, hours, services with videos, success story, gallery teaser, CTA" | Homepage complete and presented for review |
| 5 | Content pages | "Implement Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti" | All content pages complete and presented for review |
| 6 | SEO, accessibility, performance, forms | "Meta tags, sitemap.xml, robots.txt, favicon, image optimization, a11y pass, contact form handling, 404 page" | Production-ready build; docs updated |
| 7 | Final review & deploy | "Review everything, apply feedback, deploy, write handover docs" | Live site + handover documentation |

Session 1 is where the client answers the open questions (see `docs/DECISIONS.md`). Sessions 2–6 each end with a review checkpoint; nothing is committed without approval.

## Session 2 — deliverables (2026-10-10, in attesa di review)

- **Astro 7.3.8**, output statico (`astro.config.mjs`; `base` per GitHub Pages da impostare al deploy, Session 7).
- `src/layouts/BaseLayout.astro` — shell HTML (`lang="it"`, viewport, meta description, favicon temporaneo = logo IG).
- `src/components/Header.astro` — logo, brand, nav 7 voci, toggle mobile (aria-expanded/aria-controls), CTA telefono (desktop).
- `src/components/Footer.astro` — indirizzo, telefoni, email placeholder, social (IG, TikTok, FB), orari.
- `src/styles/global.css` — design token da `docs/BRAND.md` (`#0A0A0A`, `#1E1E1E`, `#F5F5F5`, `#966B50`, `#F2E7D4`, `#B1B3B0`), mobile-first, breakpoint 48/64rem.
- `src/data/site.ts` — dati condivisi (contatti, orari, social, NAV).
- Route stub: `/`, `/chi-siamo`, `/valutazione-posturale`, `/cos-e-il-taping`, `/foto`, `/safeguarding`, `/contatti` (blocco "stub" visibile con i contenuti previsti per Sessioni 4–5).
- Build verificata: `npm run build` → `dist/`, 7 pagine generate.
- **Pending**: conferma URL Facebook (stimato dall'handle IG), logo ufficiale, email ufficiale, favicon definitivo (Session 6).
- Nota: nessun commit — in attesa di approvazione del client (regole del brief). Feedback di review raccolto e applicato in Session 3.
- **Prossimo**: Session 3 — Refinement & polish del skeleton (prompt nella tabella sopra).

## Session 3 — deliverables (2026-10-10, approvata dal client)

Feedback del client sulla Session 2 applicato (vedi `docs/DECISIONS.md` §Session 3):

- **Navbar più chiara**: header da `#0A0A0A/92%` a surface `#1E1E1E/94%` + blur — distinguibile dall'area contenuti (che resta `#0A0A0A`).
- **Accento rimosso dall'arancio**: palette bronze/beige (`#966B50`, `#B08262`, `#F2E7D4`) sostituita con **verde-grigio chiaro** (`#A3BFAE`, `#BCD3C4`, `#E9F0EA`); testo CTA scuro per il contrasto; bordo dashed degli stub aggiornato.
- **Navbar snellita**: nav orizzontale completa solo da `64rem` (hamburger testuale "Menu" sotto), etichette accorciate ("Valutazione", "Taping"; titoli completi in `<title>`/H1), tagline brand nascosta su desktop, spaziatura più compatta.
- **A11y basics**: skip-link "Salta al contenuto", `:focus-visible`, `prefers-reduced-motion`, `aria-label` toggle Apri/Chiudi menu, chiusura menu con Esc / click fuori / click link, pagina corrente evidenziata anche con spessore (non solo colore).
- **Code style (nuove regole in AGENTS.md)**: nessuna riga con solo `>` o `/>` (corrette 2 in Header.astro); zero emoji ovunque (rimosse anche da docs; il glifo hamburger sostituito dal testo "Menu"). Audit ripetibile: `node check-style.cjs`.
- **Tipografia/token polish**: scale h1/h2/h3 con `clamp()`, `text-wrap: balance`, margini di default ridotti, token commentati.
- **Docs aggiornati**: AGENTS.md (regole code style, token aggiornati), DECISIONS.md (§Session 3 + voce aperta scelta icon library), BRAND.md (nota rinvio a DECISIONS), ROADMAP.
- Build verificata: `npm run build` → `dist/`, 7 pagine.
- **Aperto**: scegliere insieme la icon library (Lucide / Phosphor / Heroicons — `docs/DECISIONS.md`).
- **Prossimo**: Session 4 — Homepage.
