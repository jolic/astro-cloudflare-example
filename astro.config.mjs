import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"

import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"

import compressor from "astro-compressor"

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    react(),
    compressor(), // always the last one!
],
});