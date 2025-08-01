<template>
  <UContainer class="h-90 flex flex-col justify-center items-center">
    <h1 class="text-center font-bold text-8xl">{{ time }}</h1>
  </UContainer>

  <UModal :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
    title="Settings"
  >
    <UButton icon="solar:settings-linear" size="lg" color="neutral" variant="subtle" />

    <template #body>
      <div class="grid grid-flow-row grid-cols-2 gap-4">
        <UTabs orientation="vertical" variant="pill" :content="false" :items="tabItems" v-model="currentTab" class="w-full" />
        <div>
          <div v-if="!currentTab || currentTab==0">
            <USwitch size="xl" default-value label="12H" v-model="hour12" />
            <USwitch size="xl" default-value label="Include seconds" v-model="includeSeconds" />
            <USelect v-model="$colorMode.preference" :items="colourModeItems"/>
          </div>
          <!-- <div v-else-if="currentTab==1">Alarms</div> -->
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup>
const hour12 = ref(true)
const includeSeconds = ref(false)

const formatTime = date => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: includeSeconds.value ? '2-digit' : undefined, hour12: hour12.value }).toUpperCase()

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

const tabItems = ref([
  {
    label: 'Display'
  },
  // {
  //   label: 'Alarms'
  // }
])
const currentTab = ref(tabItems[0])
const colourModeItems = [
  {
    label: "System",
    value: "system"
  },
  {
    label: "Light",
    value: "light"
  },
  {
    label: "Dark",
    value: "dark"
  }
]
</script>
