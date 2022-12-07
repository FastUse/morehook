<template>
  <div class="">
    原始图片:
    <img
      ref="target"
      :src="originImg"
      style="margin-bottom: 40px; width: 1920px"
    />
    获取到的颜色块: {{ bgc }}
    <div
      style="height: 100px; width: 100px"
      :style="{ backgroundColor: bgc }"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import { getImageColor } from '@morehook/utils'
import { useMousePosition } from '@morehook/core'

const target = ref()
const { offsetX, offsetY } = useMousePosition({ type: 'move', target })

const bgc = ref()
const originImg =
  'https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/morehook/RE4wB6h.3x93ajva7f60.webp'

onMounted(() => {
  watchEffect(() => {
    const x = offsetX.value === -1 ? 0 : offsetX.value
    const y = offsetY.value === -1 ? 0 : offsetY.value
    getImageColor(originImg, { x, y, target: target.value }).then(res => {
      bgc.value = `rgba(${res.join(',')})`
    })
  })
})
</script>
