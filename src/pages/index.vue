<template>
  <UContainer>
    <main class="min-h-screen">
      <div class="space-y-24">
        <HomeIntro />
        <HomeSocialLinks />
        <HomeFeaturedProjects />
        <HomeFeaturedVideos />
        <HomeFeaturedArticles />
      </div>
    </main>
  </UContainer>
</template>

<script setup>
const siteDescription = 'My personal homepage'
useSeoMeta({
  title: "Home",
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});
</script>