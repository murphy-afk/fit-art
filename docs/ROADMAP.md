# Roadmap — Fit'Art website redesign (Astro)

Working rules (from the client brief):
- Each session has its own planned prompt and a defined goal.
- Docs are updated at the end of every session.
- All changes are reviewed and approved by the client **before** anything is committed (git commits only after approval).
- Decisions and missing information are collected in dedicated sessions (Session 1).

| # | Session | Planned prompt (summary) | Goal / deliverable |
|---|---------|--------------------------|--------------------|
| 0 | Content scan ✅ (done) | "Scan all content on fitartfitness.it, including text inside images" | Complete content inventory → `docs/CONTENT-INVENTORY.md` (OCR used for image-based content) |
| 1 | Decisions & content freeze ✅ (done) | "Answer the open questions: email, socials, media reuse, admin page, contact form, hosting, visual style" | `docs/DECISIONS.md` finalized; brand style from Instagram → `docs/BRAND.md`; hosting = GitHub Pages; logo = IG profile pic |
| 2 | Scaffolding & design system | "Set up the Astro project: layouts (header/nav/footer), design tokens, responsive mobile-first, all routes stubbed" | Running Astro skeleton with shared layout and navigation; docs updated |
| 3 | Homepage | "Implement homepage: hero, hours, services with videos, success story, gallery teaser, CTA" | Homepage complete and presented for review |
| 4 | Content pages | "Implement Chi siamo, Valutazione Posturale, Cos'è il Taping, Foto, Safeguarding, Contatti" | All content pages complete and presented for review |
| 5 | SEO, accessibility, performance, forms | "Meta tags, sitemap.xml, robots.txt, favicon, image optimization, a11y pass, contact form handling, 404 page" | Production-ready build; docs updated |
| 6 | Final review & deploy | "Review everything, apply feedback, deploy, write handover docs" | Live site + handover documentation |

Session 1 is where the client answers the open questions (see `docs/DECISIONS.md`). Sessions 2–5 each end with a review checkpoint; nothing is committed without approval.
