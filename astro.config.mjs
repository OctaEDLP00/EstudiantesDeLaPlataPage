// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    fallback: {
      en: 'es',
      fr: 'es',
    },
  },
});
