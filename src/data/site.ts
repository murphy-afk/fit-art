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
    // TODO(Session 6): confirm the real Facebook page URL — the old site had a real
    // link, but the exact URL isn't in the content inventory. Handle estimated from the brand.
    { label: 'Facebook', href: 'https://www.facebook.com/fitartstudiofitness/', pending: true },
  ],
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
