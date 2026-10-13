import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Hosting: GitHub Pages (decided in Session 1 — docs/DECISIONS.md).
  // When the GitHub repo exists, set base: '/NOME-REPO/' (Session 7 — deploy).
  site: 'https://fitartfitness.it',
  // sitemap.xml generated at build (Session 6); robots.txt in public/ links to it.
  // The 404 page is excluded (it is not real content).
  integrations: [sitemap({ filter: (page) => page !== '/404' })],
});
