<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button class="icon-btn !outline-none" title="toggle_dark" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/Marshall-Sun/gztransfer"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
