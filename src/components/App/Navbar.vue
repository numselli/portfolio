<template>
  <div ref="headerRef" :style="styles">
    <UHeader title="">
      <UNavigationMenu :items="items" />
      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>
  </div>
</template>

<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const route = useRoute()

const items = computed(() => [
  {
    label: "Home",
    to: "/",
    icon: "mdi:home-outline",
    active: route.path === '/'
  },
  {
    label: "Projects",
    to: "/projects/",
    icon: "mdi:folder-file-outline",
    active: route.path.startsWith('/projects')
  },
  {
    label: "Articles",
    to: "/blogs/",
    icon: "mdi:file-document-outline",
    active: route.path.startsWith('/blogs')
  },
  {
    label: "Photos",
    to: "/albums/",
    icon: "mdi:image-frame",
    active: route.path.startsWith('/albums')
  },
  {
    label: "Clock",
    to: "/clock/",
    icon: "mdi:clock-time-five-outline",
    active: route.path.startsWith('/clock')
  }
]);
</script>