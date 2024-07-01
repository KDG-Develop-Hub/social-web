// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'kdg.social'
    }
  },
  css: [
    '@/assets/css/global.css',
    '@/assets/css/layout.css',
    '@/assets/css/typography.css',
    '@/assets/css/corner.css',
    '@/assets/css/elevation.css',
    '@/assets/css/colors/light.css',
    '@/assets/css/colors/light-mc.css',
    '@/assets/css/colors/light-hc.css',
    '@/assets/css/colors/dark.css',
    '@/assets/css/colors/dark-mc.css',
    '@/assets/css/colors/dark-hc.css'
  ],
  fonts: {
    defaults: {
      weights: [400, 500, 700]
    }
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['./types/**'],
    presets: [
      {
        from: 'date-fns',
        imports: [['*', 'dateFns']]
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts'
  ]
})
