<script setup lang="ts">
import type { Station } from '~/const'
import { LineNameMap } from '~/const'

const { station } = defineProps<{ station: Station }>()
</script>

<template>
  <div
    mt-6 flex="~ col" items-center
    border="~ rounded gray-300 dark:gray-700"
  >
    <div text-28px my-2>
      {{ station.name }}
    </div>
    <div flex="~ wrap">
      <div v-for="line in station.lines" :key="line">
        <LineTag :line="line" mx-1 />
      </div>
    </div>
    <div my-2>
      <div v-for="item in station.transfers" :key="`${item.from}_${item.to}`">
        <span>
          {{ LineNameMap[item.from] }}➡️{{ LineNameMap[item.to] }}
        </span>
        <span>：</span>
        <span v-if="Array.isArray(item.doorIndex)">
          <span v-for="(door, index) in item.doorIndex" :key="door">
            <span>{{ index === 0 ? null : '/' }}</span>
            <span>{{ door === 'any' ? '同台换乘' : `${door}号门` }}</span>
          </span>
        </span>
        <span v-else>
          {{ item.doorIndex === 'any' ? '同台换乘' : `${item.doorIndex}号门` }}
        </span>
      </div>
    </div>
    <div v-if="station.note" relative w-full py-2 bg="gray-200 dark:gray-800">
      <em absolute left-1 top-1 text-sm op75>备注</em>
      <div v-for="str in station.note" :key="str">
        {{ str }}
      </div>
    </div>
  </div>
</template>
