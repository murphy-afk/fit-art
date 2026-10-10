/**
 * Dati condivisi del sito — Fit'Art ASD.
 * Fonte: docs/CONTENT-INVENTORY.md e docs/DECISIONS.md (Session 0–1).
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
  // PLACEHOLDER (docs/DECISIONS.md §1): sostituire con l'email ufficiale quando nota.
  email: 'info@fitartfitness.it',
  hours: {
    weekday: 'Lun–Ven 06:00–23:00',
    weekend: 'Sab–Dom 08:00–18:00',
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/fitartstudiofitness/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@fitartstudiofitness' },
    // TODO(Session 6): confermare l'URL reale della pagina Facebook — dal vecchio sito
    // era un link reale, ma l'URL esatto non è nell'inventario. Handle stimato dal brand.
    { label: 'Facebook', href: 'https://www.facebook.com/fitartstudiofitness/', pending: true },
  ],
} as const;

/** Navigazione principale — pagine live del vecchio sito (la pagina "Accedi" è stata eliminata in Session 1). */
export const NAV = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Chi siamo', href: '/chi-siamo', slug: 'chi-siamo' },
  { label: 'Valutazione Posturale', href: '/valutazione-posturale', slug: 'valutazione-posturale' },
  { label: "Cos'è il Taping", href: '/cos-e-il-taping', slug: 'cos-e-il-taping' },
  { label: 'Foto', href: '/foto', slug: 'foto' },
  { label: 'Safeguarding', href: '/safeguarding', slug: 'safeguarding' },
  { label: 'Contatti', href: '/contatti', slug: 'contatti' },
] as const;

export type NavSlug = (typeof NAV)[number]['slug'];
