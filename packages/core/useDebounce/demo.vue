<template>
  <div>
    <div>data: {{ data }}</div>
    <div>点击 {{ sum }} 次</div>
    <c-button @click="handleBtn"> 点击更改 data </c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDebounce } from '@morehook/core'

const sum = ref(0)
function handleBtn() {
  originData.value = Math.random()
  sum.value++
}

const originData = ref(Math.random())

const data = useDebounce(originData, 1000, true)
</script>
