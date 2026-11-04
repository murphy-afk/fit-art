# Brand & Style - dark premium design tokens

The template ships a complete, ready-to-use visual identity. All tokens live in
`src/styles/global.css`; this file explains the direction and how to adapt it.

## Direction

- **Dark premium look**: warm near-black backgrounds, bold off-white
  typography, big imagery.
- **Photography-first**: full-bleed hero photo, generous image grids, dark
  overlay on the hero for text contrast.
- **Two accents**: light grayish green is the *interactive* accent (links,
  buttons, icons); warm sand is the *decorative* accent (eyebrows, highlights,
  gradients). This avoids the usual gym-neon clichés.
- **No emojis, no icons except Lucide** (social brand marks are hand-drawn
  inline SVGs in Lucide's stroke style).

## Tokens

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Base background | `--color-bg` | `#121110` | page background |
| Alt background | `--color-bg-alt` | `#1B1917` | alternating sections, footer |
| Surface | `--color-surface` | `#262321` | cards, navbar (must stay lighter than base) |
| Text | `--color-text` | `#F5F5F5` | main text |
| Accent | `--color-accent` | `#A3BFAE` | links, buttons, interactive icons |
| Accent hover | `--color-accent-strong` | `#BCD3C4` | hover / focus states |
| Sand | `--color-sand` | `#E6D5B8` | eyebrows, decorative highlights |
| Sand hover / light | `--color-sand-strong` | `#F2E7D4` | hover, gradients |
| Light tint | `--color-tint` | `#E9F0EA` | light sections, highlights |
| Muted | `--color-muted` | `#B8B6B2` | secondary text, borders |

## Typography and layout

- System sans stack (`--font-sans`), heavy weights for headings, generous
  line-height for body copy.
- Max content width `--max-width: 72rem`, mobile-first, breakpoints at
  `48rem` and `64rem`.
- Eyebrows (small uppercase-ish labels in sand) introduce sections; CTAs are
  pill buttons (`btn-primary` in accent, `btn-ghost` outlined).

## Rebranding for a client

1. Update the color tokens in `src/styles/global.css` (keep the surface
   clearly lighter than the base background).
2. Swap `public/images/logo.svg` and `public/favicon.svg`.
3. Replace the placeholder photos in `src/assets/images/` + `public/og-image.jpg`.
4. Keep `theme-color` in `src/layouts/BaseLayout.astro` in sync with `--color-bg`.
