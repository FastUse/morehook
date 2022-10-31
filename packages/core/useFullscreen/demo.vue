<template>
  <div>
    <div style="border: 1px solid red; background: #fff" ref="tar">123</div>
    <p>{{ isFullscreen }}</p>

    <c-button @click="setFull">设置div全屏</c-button>
    <c-button @click="exitFull">退出div全屏</c-button>
    <c-button @click="toggle">div-toggle</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFullscreen } from '@morehook/core'

const tar = ref()
const [isFullscreen, { setFull, exitFull, toggle }] = useFullscreen(tar)
</script>
