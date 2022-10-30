---
category: UnDistribution
---

# useDebounceFn

处理防抖函数

## Usage

```html
<template>
  <div>
    <div>data: {{ data }}</div>
    <c-button @click="run">点击更改 data</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDebounceFn } from '@morehook/core'

const data = ref(0)

const { run } = useDebounceFn(
  () => {
    data.value = Math.random()
  },
  1000,
  true
)
</script>
```