<template>
  <div>
    <p
      v-if="realData"
      :class="['text', delayData ? 'text-display' : 'text-no-display']"
    >
      我是示例文字，我很可爱
    </p>

    <div>真实展示 realData: {{ realData }}</div>
    <div>过渡展示 delayData: {{ delayData }}</div>

    <c-button @click="showText = !showText">设置显隐</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDelayData } from '@morehook/core'

const showText = ref(false)
const { realData, delayData } = useDelayData(showText)
</script>

<style>
.text {
  transition: all 0.5s;
  color: #fff;
}
.text-display {
  opacity: 1;
  background-color: rgb(0, 60, 255);
}
.text-no-display {
  opacity: 0;
}
</style>
