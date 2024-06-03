// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'kdg.social'
    }
  },
  components: [
    {
      path: '~/components/ui',
      pathPrefix: true
    },
    {
      path: '~/components/org',
      pathPrefix: true
    }
  ],
  css: ['@/assets/css/global.css', '@/assets/css/colors.css', '@/assets/css/layout.css'],
  fonts: {
    defaults: {
      weights: [400, 500, 700]
    }
  },
  devtools: { enabled: true },
  imports: {
    presets: [
      {
        from: 'clsx',
        imports: ['clsx']
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    'radix-vue/nuxt',
    '@nuxt/test-utils',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts'
  ]
})
