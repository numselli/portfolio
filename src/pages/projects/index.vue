<template>
  <UContainer>
    <main class="min-h-screen">
      <AppHeader class="mb-12" title="Projects" :description="siteDescription" />
      <div class="space-y-4">
        <AppProjectCard/>
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
</script>
