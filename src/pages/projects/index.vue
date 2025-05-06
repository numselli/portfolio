<template>
  <UContainer>
    <main class="min-h-screen">
      <AppHeader class="mb-12" title="Projects" :description="description" />
      <div class="space-y-4">
        <AppProjectCard
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
    </main>
  </UContainer>
</template>

<script setup>
const siteDescription = 'A collection of the projects I have worked on'
useSeoMeta({
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});


const description = ""

const route = useRoute()
const { data: projects } = await useAsyncData(route.path, () => queryCollection('projects').all())
</script>
