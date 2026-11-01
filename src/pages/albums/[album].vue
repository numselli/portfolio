<template>
  <div>
    <UPageHeader :title="album.info.albumName" :description="`${album.info.description} (${album.info.assetCount} Images)`">
      <template #description>
        <div class="text-lg text-pretty text-muted">{{ `${album.info.description} (${album.info.assetCount} Images)` }}</div>
        <div class="text-lg text-pretty text-muted">Updated on <UInputDate :default-value="date" disabled /></div>
      </template>
    </UPageHeader>
  </div>
    
  <div class="h-12"></div>
    
    
  <UPageColumns>
    <photo v-for="(album, index) in album.assets" :key="index" :album="album"/>
  </UPageColumns>
</template>


<script setup>
  import photo from '~/components/photo.vue';
  import { parseDate } from '@internationalized/date'

  const {params} = useRoute()

  const album = await $fetch(`/api/albums/${params.album}`)

  const rawDate = album.info.updatedAt.replace("/", "-").split("T")[0]
  const date = shallowRef(new parseDate(rawDate))

  const siteDescription = 'A collection of useful links'
  useSeoMeta({
    title: album.info.albumName,
    description: siteDescription,
    "og:image": album.thumbnail,
    "twitter:image": album.thumbnail,
    "twitter:description": siteDescription,
    "twitter:title": siteDescription
  });
</script>