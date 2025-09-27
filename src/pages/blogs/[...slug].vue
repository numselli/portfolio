<template>
    <div class="max-w-3xl mx-auto min-h-screen my-12">
        <div v-if="blog">
            <h1 class="text-2xl font-semibold mb-6">{{ blog.title }}</h1>
            <ContentRenderer v-if="blog" :value="blog" />

            <div class="mt-8">
                <nuxt-link to="/blogs" class="hover:underline">Back</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
// const d = await queryCollection('blogs').path(route.path).first()
const { data: blog } = await useAsyncData(route.path, () => queryCollection('blogs').path(route.path).first())

if (blog.value?.ogImage) defineOgImage(blog.value?.ogImage) // <-- Nuxt OG Image
// Ensure the schema.org is rendered
useHead(blog.value.head || {}) // <-- Nuxt Schema.org
useSeoMeta(blog.value.seo || {}) // <-- Nuxt Robots



// const siteDescription = blog.value.description
// useSeoMeta({
//   description: siteDescription,
//   "twitter:description": siteDescription,
//   "twitter:title": siteDescription
// });
</script>
