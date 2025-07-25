// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Default static
  output: "server",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),
});
