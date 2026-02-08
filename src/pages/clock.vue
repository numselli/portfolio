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

          <div v-if="currentTab==1">
            <UCard>
              <UInput type="time" v-model="newAlarm.time" />
              <UInput class="mt-2" placeholder="Label" v-model="newAlarm.label" />

              <USelect class="mt-2" v-model="newAlarm.repeat" :items="repeatItems"/>

              <div v-if="newAlarm.repeat === 'weekly'" class="flex gap-1 mt-3">
                <UButton v-for="(day, i) in days" :key="i" size="xs" :variant="newAlarm.days.includes(i) ? 'solid' : 'outline'" @click="toggleDay(i)">{{ day }}</UButton>
              </div>

              <UButton class="mt-4" block @click="addAlarm">Add Alarm</UButton>
            </UCard>

            <UCard v-for="alarm in alarms" :key="alarm.id">
              <div class="flex justify-between items-center">
                <div>
                  <div class="font-bold">{{ alarm.time }}</div>
                  <div class="text-sm text-gray-500">
                    {{ alarm.label }} — {{ alarm.repeat }}
                  </div>
                </div>

                <div class="flex gap-2">
                  <USwitch v-model="alarm.enabled" />
                  <UButton
                    color="red"
                    variant="ghost"
                    @click="removeAlarm(alarm.id)"
                  >
                    ✕
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </template>
  </UModal>

  <UModal v-model:open="alerting.value">    
    <template #content>
      <div class="h-48 m-4">
        <h1 class="text-center font-bold text-8xl">ALERT FOR: {{ alerting.label }}</h1>
      </div>
    </template>
  </UModal>
</template>

<script setup>
const tabItems = [{ label: 'Display' }, { label: 'Alarms' }]
const colourModeItems = [{ label: 'System', value: 'system' }, { label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]
const repeatItems = [{ label: 'Once', value: 'once' }, { label: 'Daily', value: 'daily' }, { label: 'Weekly', value: 'weekly' }]
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const hour12 = ref(true)
const includeSeconds = ref(false)
const alarms = ref([])
const currentTab = ref(0)
const alerting = ref({value: false})

const formatTime = date => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: includeSeconds.value ? '2-digit' : undefined, hour12: hour12.value }).toUpperCase()
const removeAlarm = id => alarms.value = alarms.value.filter(a => a.id !== id)

const time = ref(formatTime(new Date()))
const siteDescription = 'A simple clock with alarm and no ads'
useSeoMeta({
  description: siteDescription,
  "twitter:description": siteDescription,
  "twitter:title": siteDescription
});

let loop;
onMounted(()=> {
  loop = setInterval(() => {
    const now = new Date()
    time.value = formatTime(now)
    checkAlarms(now)
  }, 1000)
})
onUnmounted(() => clearInterval(loop))

if (import.meta.client) {
  const savedAlarms = localStorage.getItem('alarms')
  if (savedAlarms) alarms.value = JSON.parse(savedAlarms)

  const savedHour12 = localStorage.getItem('hour12')
  if (typeof savedHour12=="string") hour12.value = savedHour12

  const savedIncludeSeconds = localStorage.getItem('includeSeconds')
  if (typeof savedIncludeSeconds=="string") includeSeconds.value = savedIncludeSeconds
}
watch(alarms, () => localStorage.setItem('alarms', JSON.stringify(alarms.value)), { deep: true })
watch(hour12, () => localStorage.setItem('hour12', JSON.stringify(hour12.value)), { deep: true })
watch(includeSeconds, () => localStorage.setItem('includeSeconds', JSON.stringify(includeSeconds.value)), { deep: true })

function checkAlarms(now) {
  const hhmm = now.toTimeString().slice(0, 5)
  const today = now.getDay()

  alarms.value.forEach(alarm => {
    if (!alarm.enabled) return
    if (alarm.time !== hhmm) return
    if (alarm.repeat === 'weekly' && !alarm.days.includes(today)) return
    if (alarm.repeat === 'once') removeAlarm(alarm.id)
    alarmAlert(alarm)
  })
}

function addAlarm() {
  if (!newAlarm.value.time) return

  alarms.value.push({
    ...newAlarm.value,
    id: Math.random().toString(16).slice(2),
    enabled: true,
    days: [...newAlarm.value.days]
  })

  newAlarm.value.time = ''
  newAlarm.value.label = ''
  newAlarm.value.repeat = 'once'
  newAlarm.value.days = []
}

const newAlarm = ref({
  id: '',
  time: '',
  label: '',
  enabled: true,
  repeat: 'once',
  days: []
})

function toggleDay(day) {
  const i = newAlarm.value.days.indexOf(day)
  i === -1 ? newAlarm.value.days.push(day) : newAlarm.value.days.splice(i, 1)
}
function alarmAlert(alarm){
  const cMode = useColorMode()
  const origCmode = cMode.value
  alerting.value = {label: alarm.label, value: true}

  let alertLoop = setInterval(()=>{
    cMode.value = cMode.value == "dark" ? 'light' : "dark"
    cMode.forced=true
    if (!alerting.value.value){
      cMode.forced=false
      cMode.value = origCmode
      clearInterval(alertLoop)
    }
  }, 1000)
}
</script>
