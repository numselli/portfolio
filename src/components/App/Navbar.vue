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
    icon: "solar:home-smile-outline",
    active: route.path === '/'
  },
  {
    label: "Projects",
    to: "/projects/",
    icon: "solar:folder-with-files-outline",
    active: route.path.startsWith('/projects')
  },
  {
    label: "Articles",
    to: "/blogs/",
    icon: "solar:document-add-outline",
    active: route.path.startsWith('/blogs')
  },
  {
    label: "Photos",
    to: "/albums/",
    icon: "solar:gallery-linear",
    active: route.path.startsWith('/albums')
  },
  {
    label: "Clock",
    to: "/clock/",
    icon: "solar:clock-circle-linear",
    active: route.path.startsWith('/clock')
  }
]);
</script>