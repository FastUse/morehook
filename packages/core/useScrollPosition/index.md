---
category: UnDistribution(待分配)
---

# useScrollPosition

获取scroll 的Y轴滚动量 (可指定元素)

## Usage

```html
<template>
  <div>
    <div
      ref="divRef"
      style="border: 1px solid red; height: 300px; overflow: auto"
    >
      <div style="height: 900px; background-color: yellowgreen"></div>
    </div>
    <p>document body scrollY: {{ scrollY }}</p>
    <p>div scrollY: {{ divScrollY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useScrollPosition } from '@morehook/core'

const { scrollY } = useScrollPosition()

const divRef = ref()
const { scrollY: divScrollY } = useScrollPosition({ target: divRef })
</script>
```