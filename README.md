# Gym website template (Astro)

Reusable **Astro static site template for gyms and fitness studios**, single
language: **Italian**. It started as a client project; the client deal fell
through, so all client-specific material (name, contacts, address, photos,
personal names, claims) has been removed and replaced with `[placeholders]`.

Follow [`docs/SETUP.md`](docs/SETUP.md) to customize it for a new client.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run check    # style audit (no standalone ">" lines, no emojis, no em-dashes)
```

## Pages

`/` (home) · `/chi-siamo` · `/foto` · `/contatti` · `404`

## Structure

- `src/data/site.ts` - single source of truth: brand, contacts, hours, socials, nav.
- `src/data/images.ts` - image import hub (`src/assets/images/`).
- `src/pages/*.astro` - one file per route.
- `src/layouts/BaseLayout.astro` - HTML shell, SEO meta, JSON-LD.
- `src/components/` - Header / Footer.
- `src/styles/global.css` - design tokens + all CSS (hand-written, no framework).
- `public/` - logo, favicon, `og-image.jpg`, `robots.txt`.

## Documentation

- [`docs/SETUP.md`](docs/SETUP.md) - onboarding checklist: every placeholder to replace before handover.
- [`docs/BRAND.md`](docs/BRAND.md) - visual identity and design tokens.
- [`AGENTS.md`](AGENTS.md) - conventions for working in this repo.

Site content is Italian; documentation and code comments are in English.
