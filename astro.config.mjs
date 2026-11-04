import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PLACEHOLDER (docs/SETUP.md): set the production URL.
  // - Custom domain (or any root deployment): site: 'https://example.com', base: '/'
  // - GitHub Pages project site: site: 'https://<user>.github.io', base: '/<repo>/'
  site: 'https://example.com',
  base: '/',
  // sitemap.xml generated at build; robots.txt in public/ links to it.
  // The 404 page is excluded (it is not real content).
  integrations: [sitemap({ filter: (page) => page !== '/404' })],
});
