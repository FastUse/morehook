<template>
  <div>
    <DynamicLoading
      v-model="showLoadingX"
      @close="closeX"
      :realRrogress="realRrogress"
      :isFakeProgress="false"
    />

    <DynamicLoading v-model="showLoadingY" @close="closeY" />

    <c-button @click="handlerShowLoadingX">展示-手动控制进度条loading</c-button>
    <c-button @click="showLoadingY = true">展示-自动控制进度条loading</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DynamicLoading } from '@morehook/component'

// -------- 自动控制进度条 loading --------
const showLoadingY = ref(false)
function closeY() {
  setTimeout(() => {
    alert('关闭自动控制进度条-loading')
  }, 2000)
}

// -------- 手动控制进度条 loading --------
const showLoadingX = ref(false)
const realRrogress = ref(0)
// eslint-disable-next-line no-undef
let timmer: NodeJS.Timeout | null = null

function handlerShowLoadingX() {
  showLoadingX.value = true
  timmer = setInterval(() => {
    realRrogress.value += 10
  }, 1000)
}

function closeX() {
  if (timmer) {
    clearInterval(timmer)
  }
}
</script>
