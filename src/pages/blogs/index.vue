<template>
  <UContainer>
    <main class="min-h-screen">
      <AppHeader class="mb-12" title="Blog posts" :description="siteDescription" />
      <div class="space-y-4">
        <UBlogPosts>
          <UBlogPost v-for="(blog, index) in blogs" :key="index" v-bind="blog" :to="blog.path" :date="blog.date"/>
        </UBlogPosts>
      </div>
    </main>
  </UContainer>
</template>

<script setup>
const siteDescription = 'A collection of my blog posts'
useSeoMeta({
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});

const { data: blogs } = await useAsyncData("blogs", () => queryCollection('blogs').order('date', 'DESC').all())
</script>