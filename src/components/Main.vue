<script setup lang="ts">
import type { Line, Station } from '~/const'
import { LineList } from '~/const'
import stations from '~/const/stations'

const query = ref('')

const filteredStations = computed<Station[]>(() => {
  const substring = query.value.trim().toLowerCase()
  if (!substring)
    return []

  const currentLine = LineList.find(
    line => String(line).toLowerCase() === substring,
  ) as Line
  if (currentLine) {
    return stations.filter(station => station.lines.find(
      line => String(line) === currentLine),
    )
  }

  return stations.filter(
    station => [station.name, station.abbr].some(
      name => name.toLowerCase().includes(substring),
    ),
  )
})

</script>

<template>
  <div>
    <div flex justify-center mb-4>
      <img alt="logo" src="/favicon.svg" h-12>
    </div>
    <p>
      广州地铁换乘助手
    </p>
    <p>
      <em text-sm op75>Guangzhou Metro Transfer Assistant</em>
    </p>
    <div py-4 />
    <input
      id="input"
      v-model="query"
      placeholder="搜索换乘车站"
      type="text"
      autofocus
      autocomplete="off"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-300 dark:gray-700"
      outline="none active:none"
    >
  </div>
  <div>{{ filteredStations }}</div>
</template>
