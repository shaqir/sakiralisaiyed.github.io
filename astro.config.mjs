// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sakiralisaiyed.com', // or your github.io URL
  vite: { plugins: [tailwind()] },
});
