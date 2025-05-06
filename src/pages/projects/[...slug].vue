<template>
    <UContainer>
        <h1 class="font-bold">{{ project.title }}</h1>
        <div class="grid grid-cols-2 content-between	">
            <UAvatar :src="project.thumbnail" :ui="{ rounded: 'rounded z-10 relative' }" size="md" :alt="project.title"/>
            <div class="">

                <div class="flex">
                    <div v-for="link in project.links">
                        <NuxtLink :to="link.url" target="_blank"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Icon aria-hidden="true" :name="link.icon" class="w-5 h-5 z-10" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <USeparator/>

        <main class="">
            <!-- min-h-screen -->
            <ContentRenderer :value="project" />
        </main>
    </UContainer>
</template>

<script setup>
const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => queryCollection('projects').path(route.path).first())

const siteDescription = project.value.description
useSeoMeta({
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});
</script>
