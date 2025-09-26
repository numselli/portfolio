<template>
  <UContainer>
    <div class="space-y-4">
      <UBlogPosts>
        <UBlogPost v-for="(post, index) in projects" :key="index" v-bind="post" :to="post.path" :image="post.meta.thumbnail"/>
      </UBlogPosts>
    </div>
  </UContainer>
</template>

<script setup>
const { data: projects } = await useAsyncData("/projects", () => queryCollection('projects').all())

// {
//     title: 'Nuxt Icon v1',
//     description: 'Discover Nuxt Icon v1!',
//     image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
//     date: '2024-11-25'
//   },
</script>
