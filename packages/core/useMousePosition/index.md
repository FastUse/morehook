---
category: Sensors
---

# useMousePosition

捕捉鼠标方位
 * 分两种 1.点击触发 2.移动触发
 * 也分为全局触发和某个元素触发

## Usage

```html
<template>
  <div>
    <div
      ref="target"
      style="border: 1px solid red; width: 300px; height: 300px"
    ></div>
    <p>offsetX(相对于自身): {{ offsetX }}</p>
    <p>offsetY(相对于自身): {{ offsetY }}</p>
    <p>pageX(相对于 body): {{ pageX }}</p>
    <p>pageY(相对于 body): {{ pageY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMousePosition } from '@morehook/core'

const target = ref()

const { offsetX, offsetY, pageX, pageY } = useMousePosition({
  type: 'move',
  target
})
</script>
```