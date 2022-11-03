<template>
  <div>
    <p>num: {{ num }}</p>

    <c-button @click="sleep">暂停3秒执行</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSleep } from '@morehook/core'

const num = ref(0)
let timmer = setInterval(() => {
  num.value++
}, 1000)

async function sleep() {
  clearInterval(timmer)
  await useSleep(3000)
  timmer = setInterval(() => {
    num.value++
  }, 1000)
}
</script>
