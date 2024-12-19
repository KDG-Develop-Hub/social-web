// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-vuefire',
    '@nuxt/icon'
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      type: 'transition'
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'kdg.social',
      meta: [
        {
          name: 'description',
          content: 'デモテキストデモテキスデモテキストデモテキスト'
        }
      ]
    }
  },

  css: [
    '@/assets/css/global.css',
    '@/assets/css/layout.css',
    '@/assets/css/typography.css',
    '@/assets/css/corner.css',
    '@/assets/css/motion.css',
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
    dirs: ['./entities/**'],
    presets: [
      {
        from: 'date-fns',
        imports: [['*', 'dateFns']]
      }
    ]
  },

  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
  },

  icon: {
    size: '1.5rem',
    serverBundle: {
      collections: ['material-symbols']
    }
  },

  compatibilityDate: '2024-11-27'
})
