<template>
  <div>
    <div>data: {{ data }}</div>
    <div>点击 {{ sum }} 次</div>
    <c-button @click="handleBtn">点击更改 data</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDebounceFn } from '@morehook/core'

const sum = ref(0)
function handleBtn() {
  run()
  sum.value++
}

const data = ref(Math.random())

const { run } = useDebounceFn(
  () => {
    data.value = Math.random()
  },
  1000,
  true
)
</script>
