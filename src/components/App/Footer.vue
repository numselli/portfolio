<template>
  <UFooter>
    <template #left>
      <p class="text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <template #right>
      <UButton
        v-for="value in links"
        :icon="value.icon"
        :to="value.url"
        :aria-label="value.name"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>

<script setup>
const {public: conf} = useRuntimeConfig()
const links = conf.socialLinks
</script>