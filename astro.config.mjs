import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Hosting: GitHub Pages (decided in Session 1 — docs/DECISIONS.md).
  // Session 7: deployed as a project site -> site = user pages host, base = repo name.
  // When fitartfitness.it is pointed at GitHub Pages (custom domain), change to:
  //   site: 'https://fitartfitness.it', base: '/',
  site: 'https://murphy-afk.github.io',
  base: '/fit-art/',
  // sitemap.xml generated at build (Session 6); robots.txt in public/ links to it.
  // The 404 page is excluded (it is not real content).
  integrations: [sitemap({ filter: (page) => page !== '/404' })],
});
