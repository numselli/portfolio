<template>
    <div class="max-w-3xl mx-auto min-h-screen my-12">
        <div v-if="project">
            <h1 class="text-2xl font-semibold mb-6">{{ project.title }}</h1>
            <ContentRenderer v-if="project" :value="project" />

            <div class="mt-8">
                <nuxt-link to="/projects" class="hover:underline">Back</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => queryCollection('projects').path(route.path).first())


if (project.value?.ogImage) defineOgImage(project.value?.ogImage) // <-- Nuxt OG Image
// Ensure the schema.org is rendered
useHead(project.value.head || {}) // <-- Nuxt Schema.org
useSeoMeta(project.value.seo || {}) // <-- Nuxt Robots

// const siteDescription = project.value.description
// useSeoMeta({
//   description: siteDescription,
//   "twitter:description": siteDescription,
//   "twitter:title": siteDescription
// });
</script>
