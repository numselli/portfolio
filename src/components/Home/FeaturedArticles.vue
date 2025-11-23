<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      RECENT ARTICLES
    </h2>
    <UBlogPosts class="gap-2 lg:gap-y-4">
      <UBlogPost v-for="(blog, index) in blogs" :key="index" v-bind="blog" :to="blog.path" :date="blog.date"/>
    </UBlogPosts>
  </div>
</template>

<script setup>
const { data: blogs } = await useAsyncData("blogs", () => queryCollection('blogs').order('date', 'DESC').all())
</script>
