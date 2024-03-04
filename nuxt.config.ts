import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "styled-system": resolve("./styled-system"),
  },
  app: {
    head: {
      title: "kdg.social",
    },
  },
  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["@/assets/css/global.css"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Zen Maru Gothic": [400, 500, 600, 700],
      "JetBrains Mono": [400],
    },
  },
  imports: {
    presets: [
      {
        from: "clsx",
        imports: ["clsx"],
      },
    ],
  },
  modules: ["@nuxtjs/google-fonts"],
});
