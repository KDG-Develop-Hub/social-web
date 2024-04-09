// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "kdg.social",
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
    modules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
});