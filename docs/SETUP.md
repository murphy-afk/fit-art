# SETUP.md - onboarding checklist for a new client

Every client-specific value in this template is marked with `[square brackets]`
or a `PLACEHOLDER` comment. Work through this list, then run the verification
step at the bottom. Keep this file updated (open items / decisions go here).

## 1. Identity and contacts: `src/data/site.ts`

Single source of truth. Replace:

- `name` (legal name), `brand` (display name), `tagline` (slogan).
- `address` (street, postalCode, city, region, country) - feeds the footer,
  contact page, homepage and the JSON-LD structured data (no need to edit
  `BaseLayout.astro` for the address).
- `phones` (labels + `tel:` hrefs), `email`.
- `hours` (label / opens / closes for weekday and weekend) - shown on the
  homepage, footer, contact page and in JSON-LD.
- `socials` - replace the `href`s with the client's real profile URLs. Keep the
  labels (`Instagram`, `Facebook`, `TikTok`): the footer icons are keyed by them.
- `formspreeEndpoint` - see section 5.

Derived display strings (`cityLine`, `addressLine`, `hoursLine`) update
automatically.

## 2. Remaining bracket placeholders (page copy)

Search the repo for `[` in `src/` and replace the marked strings:

- `src/layouts/BaseLayout.astro` - default meta description.
- `src/pages/index.astro` - page title/description, H1 slogan, hero lede,
  success-story block (`[Nome del cliente]`, `[il risultato]`, photo alts).
- `src/pages/chi-siamo.astro` - description, "vantaggio unico" section.
- `src/pages/foto.astro` - description.
- `src/pages/404.astro` - description (`[Nome Palestra]`).
- `contatti.astro` builds its description from `site.ts`, nothing to edit.

Sample (non-bracketed) prose is marked with `Sample ... (docs/SETUP.md)`
comments - service descriptions, footer copy, "chi siamo" sections. Rewrite it
with the client's approved wording.

## 3. Images

- Photos: overwrite the files in `src/assets/images/` with the client's own
  photos, **keeping the same file names** (or update `src/data/images.ts`).
  Current files are free placeholder stock images (Unsplash / Pexels).
  Suggested aspect: landscape ~1600px wide.
- `public/og-image.jpg` - share-preview image, exactly 1200x630.
- Logo: replace `public/images/logo.svg`; favicon: replace `public/favicon.svg`
  (both are hand-drawn placeholders). If PNG favicons / an apple-touch-icon are
  wanted instead, run `node scripts/generate-favicons.cjs path/to/logo.png`
  (requires `sharp`) and re-add the `<link>` tags in `BaseLayout.astro`.
- Alt texts: every photo alt in `[square brackets]` must describe the real photo.

## 4. Pages and navigation

- Add/remove pages in `src/pages/`, and keep `NAV` in `src/data/site.ts` in
  sync (label, href, slug). `current="..."` on each page must match its slug.
- Optional video sections: drop MP4s in `public/videos/` and uncomment/add a
  `<video>` element where the `Optional: add a <video>` comments are.

## 5. Contact form (Formspree)

- Create a free account at formspree.io and replace the whole
  `formspreeEndpoint` URL in `src/data/site.ts`.
- While it contains `YOUR_FORM_ID`, `/contatti` shows the "not active yet"
  note instead of submitting. Nothing else to change.

## 6. Domain and deploy

- `astro.config.mjs`: set `site` (production URL) and, only for a GitHub Pages
  project site, `base` (e.g. `'/repo-name/'`). Root/custom domain: `base: '/'`.
- `public/robots.txt`: set the `Sitemap:` URL to match `site` + `base`.
- GitHub Pages: repository Settings > Pages > Source = "GitHub Actions"; the
  workflow in `.github/workflows/deploy.yml` builds, runs the style audit and
  deploys on push to `main`.

## 7. Verification

```bash
npm run build   # must pass
npm run check   # 0 hits
```

Then click through all pages: nav, phone/mailto/maps links, form note, footer
socials, and check the browser tab title/description with the new brand.

## Open items

- [ ] Official logo + favicon (currently hand-drawn SVG placeholders).
- [ ] Real Formspree form ID.
- [ ] Production domain in `astro.config.mjs` + `robots.txt`.
- [ ] Client-approved copy for all `Sample ...` blocks and `[placeholders]`.
- [ ] Client's own photos in `src/assets/images/` + `public/og-image.jpg`.
