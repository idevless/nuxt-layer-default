import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ui: {
    fonts: false,
  },
  icon: {
    provider: "server",
    serverBundle: {
      collections: ["cif"],
    },
  },
  css: [join(currentDir, "assets/css/main.css")],
});
