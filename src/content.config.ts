import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection(asSeoCollection({
      type: 'page',
      source: 'projects/*.md'
    })),
    blogs: defineCollection(asSeoCollection({
      type: 'page',
      source: 'blogs/*.md',
      schema: z.object({
        date: z.string()
      })
    }))
  }
})