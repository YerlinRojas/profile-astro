import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  // ...
  pages: [
    './src/pages/index.astro', // Página principal
    './src/pages/projects/[slug].astro', // Página de detalle de producto dinámica
  ],
  integrations: [
    tailwind(), 
    react(),
  ],
  experimental: {
    env: {
      schema: {
        SERVICE_FORM: envField.string({ context: "client", access: "public" }),
        TEMPLATE_FORM: envField.string({ context: "client", access: "public" }),
        KEY_FORM: envField.string({ context: "client", access: "public" })
      }
    }
  }
});