// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts'
  ],

  devtools: {
    enabled: true
  },

  // Fondu entre les pages (styles dans main.css)
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  // Thème sombre unique : pas de bascule clair/sombre, polices gérées par @nuxtjs/google-fonts
  ui: {
    colorMode: false,
    fonts: false
  },

  routeRules: {
    '/**': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  googleFonts: {
    families: {
      'Cormorant Garamond': { wght: [400, 500, 600], ital: [400, 500] },
      'Jost': [400, 500]
    },
    display: 'swap'
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    locales: [{ code: 'fr', language: 'fr-FR', name: 'Français' }]
  }
})
