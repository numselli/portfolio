<template>
  <div>
    <h2 class="uppercase text-xs font-semibold mb-6">
      FEATURED PROEJCTS
    </h2>
    <div class="space-y-4">
      <AppProjectCard/>
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
      />
    </div>
  </div>
</template>