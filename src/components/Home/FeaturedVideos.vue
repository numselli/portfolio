<template>
  <div>
    <h2 class="uppercase text-xs font-semibold mb-6">
      RECENT VIDEOS
    </h2>

    <UBlogPosts class="gap-2 lg:gap-y-4">
      <UBlogPost v-for="(video, index) in videos" :key="index" v-bind="video" :to="video.url"/>
    </UBlogPosts>

    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Videos &rarr;"
        to="https://youtube.com/@numselli/videos"
        target="_blank"
        variant="link"
      />
    </div>
  </div>
</template>

<script setup>
const { data: videos } = await useAsyncData("videos", () => $fetch('/api/ytvids'))
</script>
