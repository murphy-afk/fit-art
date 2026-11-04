/**
 * Shared site data - single source of truth of the template.
 * Every value a new client must replace is marked with [square brackets]
 * or a PLACEHOLDER comment. See docs/SETUP.md for the onboarding checklist.
 */

/**
 * Base path from astro.config.mjs ('' = domain root, default).
 * Astro prefixes bundled assets itself, but template links (href/src) and
 * public/ files are NOT auto-prefixed - always build internal URLs with path().
 * On a GitHub Pages project site (base '/fit-art/'), path() adds the prefix.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const path = (p: string): string =>
  p === '/' ? `${BASE}/` : `${BASE}${p.startsWith('/') ? p : `/${p}`}`;

export const SITE = {
  // PLACEHOLDER: legal name (footer copyright, structured data).
  name: '[Nome legale]',
  // PLACEHOLDER: display brand used in the header, titles and structured data.
  brand: '[Nome Palestra]',
  // PLACEHOLDER: short slogan / positioning line.
  tagline: '[Il tuo slogan]',
  // Structured address - feeds both the display strings below and JSON-LD.
  address: {
    street: '[Via e numero civico]',
    postalCode: '[00000]',
    city: '[Città]',
    region: '[PRO]',
    country: 'IT',
  },
  phones: [
    { label: '[030 0000000]', href: 'tel:+390300000000' },
    { label: '[030 0000001]', href: 'tel:+390300000001' },
  ],
  // PLACEHOLDER: swap in the client's official email.
  email: 'info@example.com',
  hours: {
    weekday: { label: 'Lun-Ven', opens: '08:00', closes: '20:00' },
    weekend: { label: 'Sab-Dom', opens: '09:00', closes: '18:00' },
  },
  // PLACEHOLDER: replace the hrefs with the client's profile URLs.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
  // PLACEHOLDER: the contact form on /contatti posts to Formspree (GitHub Pages
  // is static). Create the free account at formspree.io, then replace the whole
  // URL below with "https://formspree.io/f/XXXXXXX".
  // While it still contains "YOUR_FORM_ID", the form shows the "in attivazione"
  // note instead of submitting (see src/pages/contatti.astro).
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
} as const;

/** Display strings derived from the structured data above. */
export const cityLine = `${SITE.address.city} (${SITE.address.region})`;
export const addressLine = `${SITE.address.street}, ${SITE.address.postalCode} ${cityLine}, ${SITE.address.country === 'IT' ? 'Italia' : SITE.address.country}`;

export type Hours = (typeof SITE.hours)[keyof typeof SITE.hours];
export const hoursLine = (hours: Hours): string =>
  `${hours.label} ${hours.opens}-${hours.closes}`;

/** Main navigation - one entry per live page. */
export const NAV = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Chi siamo', href: '/chi-siamo', slug: 'chi-siamo' },
  { label: 'Foto', href: '/foto', slug: 'foto' },
  { label: 'Contatti', href: '/contatti', slug: 'contatti' },
] as const;

export type NavSlug = (typeof NAV)[number]['slug'];
