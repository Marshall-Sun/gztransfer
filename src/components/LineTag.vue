<script setup lang="ts">
import type { Line } from '~/const'
import { LineColorMap, LineFontColorMap, LineNameMap } from '~/const'

const { line } = defineProps<{ line: Line }>()
</script>

<template>
  <span
    whitespace-nowrap px-5px rounded-sm
    :style="`background: ${LineColorMap[line]}; color: ${LineFontColorMap[line]}`"
  >
    {{ LineNameMap[line] }}
  </span>
</template>
