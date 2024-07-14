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
useSeoMeta({
  title: "Projects",
  description: "Most of the projects I have worked on.",
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
