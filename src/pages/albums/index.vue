<template>
  <UContainer>
    <UBlogPosts>
      <UBlogPost v-for="(album, index) in albums" :title="album.albumName" :key="index" variant="subtle" :image="album.thumbnail" :to="`/albums/${album.id}`" :description="album.description" :date="album.updatedAt">
        <template #footer>
          assetCount: {{album.assetCount}}
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UContainer>
</template>

<script setup>
  const albums = await $fetch(`/api/albums`)
</script>