<template>
  <UApp>
    <NuxtLoadingIndicator color="#14b8a6" />
    <AppNavbar />
    <div class="h-32"></div>
      <NuxtPage />
    <div class="h-32"></div>
    <AppFooter />
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>