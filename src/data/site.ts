/**
 * Shared site data — Fit'Art ASD.
 * Source: docs/CONTENT-INVENTORY.md and docs/DECISIONS.md (Session 0-1).
 */

export const SITE = {
  name: "Fit'Art ASD",
  brand: "Fit'Art StudioFitness",
  tagline: "Palestra e galleria d'arte",
  city: 'Rosate (MI)',
  address: 'Via Alessandro Manzoni 33, 20088 Rosate (MI), Italia',
  phones: [
    { label: '320 309 5913', href: 'tel:+393203095913' },
    { label: '346 362 9565', href: 'tel:+393463629565' },
  ],
  // PLACEHOLDER (docs/DECISIONS.md §1): swap in the official email once known.
  email: 'info@fitartfitness.it',
  hours: {
    weekday: 'Lun–Ven 06:00–23:00',
    weekend: 'Sab–Dom 08:00–18:00',
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/fitartstudiofitness/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@fitartstudiofitness' },
    // Official Facebook page — confirmed by the client (Session 6 close, 2026-10-13).
    // Replaces the estimated handle that was marked `pending`.
    { label: 'Facebook', href: 'https://www.facebook.com/share/19c2zGVGed/' },
  ],
  // PLACEHOLDER (docs/DECISIONS.md §Session 6): the contact form on /contatti posts
  // to Formspree (GitHub Pages is static). Create the free account at formspree.io,
  // then replace the whole URL below with "https://formspree.io/f/XXXXXXX".
  // While it still contains "YOUR_FORM_ID", the form shows the "in collaudo" note
  // instead of submitting (see src/pages/contatti.astro).
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
} as const;

/** Main navigation — live pages of the old site (the "Accedi" page was removed in Session 1). */
export const NAV = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Chi siamo', href: '/chi-siamo', slug: 'chi-siamo' },
  // Labels shortened in Session 3 (less crowded navbar): full titles stay in the
  // page `<title>`/H1 — docs/DECISIONS.md §Session 3.
  { label: 'Valutazione', href: '/valutazione-posturale', slug: 'valutazione-posturale' },
  { label: 'Taping', href: '/cos-e-il-taping', slug: 'cos-e-il-taping' },
  { label: 'Foto', href: '/foto', slug: 'foto' },
  { label: 'Safeguarding', href: '/safeguarding', slug: 'safeguarding' },
  { label: 'Contatti', href: '/contatti', slug: 'contatti' },
] as const;

export type NavSlug = (typeof NAV)[number]['slug'];
