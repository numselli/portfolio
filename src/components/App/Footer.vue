<template>
  <footer
    class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8"
  >
    <br>
    <p>© {{year}} numselli. All rights reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>