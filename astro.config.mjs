import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import compressor from "astro-compressor"
import mdx from "@astrojs/mdx"

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://skillties.com',
  output: "server",
  adapter: cloudflare(),
  i18n: {
    locales: ['en', 'de',],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
    sitemap(),
    compressor(),
    mdx(), // always the last one!
  ],
});