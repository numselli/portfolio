<template>
  <UPageColumns>
    <photo v-for="(album, index) in albums" :key="index" :album="album"/>
  </UPageColumns>
</template>


<script setup>
  import photo from '~/components/photo.vue';
  const {params} = useRoute()

  const albums = await $fetch(`/api/albums/${params.album}`)

  const siteDescription = 'A collection of useful links'
  useSeoMeta({
    description: siteDescription,
    "twitter:description": siteDescription,
    "twitter:title": siteDescription
  });
</script>