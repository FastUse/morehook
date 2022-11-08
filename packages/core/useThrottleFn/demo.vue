<template>
  <div>
    <p>num: {{ num }}</p>

    <c-button @click="run">执行函数 +1</c-button>
    <c-button @click="runTrue">执行函数 +1(最后一次执行有效)</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottleFn } from '@morehook/core'

const num = ref(0)
const { run: runTrue } = useThrottleFn(
  () => {
    num.value++
  },
  1000,
  true
)
const { run } = useThrottleFn(
  () => {
    num.value++
  },
  1000,
  false
)
</script>
