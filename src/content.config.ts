import { defineContentConfig, defineCollection } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection(asSeoCollection({
      type: 'page',
      source: 'projects/*.md'
    })),
  }
})