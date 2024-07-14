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

        <UDivider/>

        <main class="">
            <!-- min-h-screen -->
            <ContentDoc />
        </main>
    </UContainer>
</template>

<script setup>
    // useSeoMeta({
    //     title: "Projects | numselli",
    //     description: "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
    // });

    const route = useRoute()
    const project = await queryContent(route.path).findOne()
</script>
