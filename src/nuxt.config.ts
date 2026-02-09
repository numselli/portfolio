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

  // content: {
  //   experimental: { sqliteConnector: 'native' },
  // },
  css: ['~/assets/css/main.css'],

  seo: {
    "automaticDefaults": true,
  },

  site: {
    url: "https://numselli.xyz",
    trailingSlash: true
  },

  sitemap: {
    sitemaps: {
      albums:{
        sitemapName: "albums",
        sources:[
          `https://numselli.xyz/api/sitemap/albums`
        ]
      },
      default:{
        sitemapName: "default",
        "includeAppSources": true
      }
    }
  },

  ui: {
    icons: ["mdi", "solar"],
    colorMode: {
      preference: 'system'
    }
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full"
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen"
      }
    }
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900]
    }
  },

  runtimeConfig:{
    public: {
      immichDomain: "https://photos.numselli.xyz/api",
      immichKey: "CdsDCT51RpHNUMYx6d1iigjUzWxsLX2yjSkPQXS3f1w",
      socialLinks: [
        {
          name: "GitHub",
          icon: "mdi:github",
          url: "https://github.com/numselli"
        },
        {
          name: "YouTube",
          icon: "mdi:youtube",
          url: "https://youtube.com/@numselli"
        },
        {
          name: "Reddit",
          icon: "mdi:reddit",
          url: "https://reddit.com/u/numselli"
        },
        {
          name: "Discord",
          icon: "mdi:discord",
          url: "https://discord.gg/5kNZFH5"
        }
      ]
    }
  },

  // appConfig: {
    umami: {
      id: '8d5dabea-9c89-4d2f-9ce1-84c7b18758c7',
      host: 'https://insights.numselli.xyz/',
      version: 2,
      ignoreDnt: true,
      useDirective: false,
      customEndpoint: '/',
      ignoreLocalhost: true
    },
  // },

  compatibilityDate: "2024-07-12"
});