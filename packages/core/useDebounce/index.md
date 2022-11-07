---
category: UnDistribution(待分配)
---

# useDebounce

处理防抖值 - 连续触发只会更新一次值

## Usage

```html
<template>
  <div>
    <div>data: {{ data }}</div>
    <c-button @click="() => (originData = Math.random())">
      点击更改 data
    </c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDebounce } from '@morehook/core'

const originData = ref(Math.random())

const data = useDebounce(originData, 1000, true)
</script>
```