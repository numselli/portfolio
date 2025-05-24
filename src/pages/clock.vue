<template>
  <UContainer class="h-90 flex flex-col justify-center items-center">
    <h1 class="text-center font-bold text-8xl">{{ time }}</h1>
  </UContainer>
</template>

<script setup>
const formatTime = date => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase()

const time = ref(formatTime(new Date()))
const siteDescription = 'A simple clock with no ads'
useSeoMeta({
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});

let loop;
onMounted(()=> {
  loop = setInterval(() => {
    time.value = formatTime(new Date())
  }, 1000*1);
})
onUnmounted(()=>{
  clearInterval(loop)
})

</script>
