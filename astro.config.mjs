import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...
  pages: [
    // Otras páginas estáticas aquí
    './src/pages/index.astro', // Página principal
    './src/pages/projects/[slug].astro', // Página de detalle de producto dinámica
  ],
  integrations: [tailwind()],
});