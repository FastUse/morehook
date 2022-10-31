<template>
  <div>
    <p>sum：{{ sum }}</p>
    <c-button @click="fun">(同步)点击加 1</c-button>

    <div>-------</div>

    <p>sum2：{{ sum2 }}</p>
    <c-button @click="fun2">(异步)点击加 1</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLockFn } from '@morehook/core'

const sum = ref(0)
const fun = useLockFn(() => {
  sum.value++
})

const sum2 = ref(0)
const fun2 = useLockFn(
  () =>
    new Promise<void>(resolve => {
      sum2.value++
      setTimeout(() => {
        resolve()
      }, 1000)
    })
)
</script>
