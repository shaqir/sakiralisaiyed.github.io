// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sakiralisaiyed.com', // or use your github.io URL
  output: 'static',
  integrations: [tailwind()],
});
