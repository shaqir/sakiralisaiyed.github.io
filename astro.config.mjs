// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sakiralisaiyed.com', // or your github.io URL
  integrations: [tailwind()],
});
