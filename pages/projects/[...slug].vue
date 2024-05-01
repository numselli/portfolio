<template>
    <aside class="top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li v-for="link in project.links">
                    <NuxtLink :to="link.url" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon aria-hidden="true" :name="link.icon" class="w-5 h-5 z-10" />
                        <span class="ms-3">{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>

    <main class="min-h-screen">
        <ContentDoc/>
    </main>
</template>

<script setup>
    useSeoMeta({
        title: "Projects | numselli",
        description: "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
    });

    const route = useRoute()
    const project = await queryContent(route.path).findOne()
</script>
