// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://getstudynova.online',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});