// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://harimoradiya.github.io',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy-policy'),
    }),
  ],
  image: {
    // Enable optimized image processing
    remotePatterns: [],
  },
});