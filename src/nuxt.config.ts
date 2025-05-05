export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/content",
    'nuxt-umami'
  ],

  css: ['~/assets/css/main.css'],

  seo: {
    "automaticDefaults": true,
  },

  site: {
    url: "https://numselli.xyz",
    trailingSlash: true
  },

  ui: {
    icons: ["heroicons", "lucide", "simple-line-icons", "mdi", "solar"],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },

  content: {
    highlight: {
      theme: "github-dark",
    },
    documentDriven: true
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  // appConfig: {
    umami: {
      id: '8d5dabea-9c89-4d2f-9ce1-84c7b18758c7',
      host: 'https://insights.numselli.xyz/',
      version: 2,
      ignoreDnt: true,
      useDirective: true,
      customEndpoint: '/',
      ignoreLocalhost: true
    },
  // },

  compatibilityDate: "2024-07-12"
});