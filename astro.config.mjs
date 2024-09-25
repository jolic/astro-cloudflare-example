import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"

import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"

import compressor from "astro-compressor"

import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    tailwind({
        applyBaseStyles: true,
    }),
    compressor(),
    mdx(),
    react() // always the last one!
 ],
});