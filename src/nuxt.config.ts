export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "@nuxtjs/seo"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
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
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  content: {
    documentDriven: true
  },
  appConfig: {
		umami: {
			id: '8d5dabea-9c89-4d2f-9ce1-84c7b18758c7',
			host: 'https://insights.numselli.xyz/',
			version: 2,
			ignoreDnt: true,
			useDirective: true,
			customEndpoint: '/',
			ignoreLocalhost: true
		}
	}
});