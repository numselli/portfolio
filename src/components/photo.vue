<template>
    <UPageCard @click="changeOpen" variant="subtle" :description="album.description">
      <NuxtImg :src="album.preview" loading="lazy" quality="50" alt="Tailwind CSS" class="w-full" />
      <UModal fullscreen v-model:open="open">
        <template #body>
            <div class="h-full w-full overflow-hidden p-0 flex items-center justify-center">
                <NuxtImg
                    :src="album.preview"
                    alt="Album preview"
                    class="block max-w-[98vw] max-h-[98svh] object-contain"
                    sizes="100vw"
                    fit="inside"
                />
            </div>
            <!-- <NuxtImg :src="album.preview" loading="lazy" alt="Tailwind CSS" class="w-full"/> -->
        </template>
        <template #header>
            <UButton label="close" @click="changeOpen" color="neutral" variant="subtle" />
            <USlideover :close="{variant: 'outline', class: 'rounded-full'}" title="EXIF Data">
                <UButton label="Show EXIF Data" color="neutral" variant="subtle" />

                <template #body>
                    <div v-for="exif in sdf">
                        <div v-if="p.album.exifInfo[exif]">
                            {{exif}}: {{ p.album.exifInfo[exif] }}
                        </div>
                    </div>
                </template>
            </USlideover>
        </template>
      </UModal>
    </UPageCard>
</template>


<script setup>
const p = defineProps(["album"])
const open = ref(false)

const sdf = Object.keys(p.album.exifInfo)
const changeOpen = () => open.value = !open.value
</script>