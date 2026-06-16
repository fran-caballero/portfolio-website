// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://fran-caballero.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
});
