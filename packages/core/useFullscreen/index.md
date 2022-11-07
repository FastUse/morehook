---
category: UnDistribution(待分配)
---

# useFullscreen

控制元素全屏

## Usage

```html
<template>
  <div>
    <div style="border: 1px solid red; background: #fff" ref="tar">123</div>
    <p>{{ isFullscreen }}</p>

    <button @click="setFull">设置div全屏</button>
    <button @click="exitFull">退出div全屏</button>
    <button @click="toggle">div-toggle</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFullscreen } from '@morehook/core'

const tar = ref()
const [isFullscreen, { setFull, exitFull, toggle }] = useFullscreen(tar)
</script>
```