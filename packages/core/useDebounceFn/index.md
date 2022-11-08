---
category: Utilities
---

# useDebounceFn

处理防抖函数

## Usage

```html
<template>
  <div>
    <div>data: {{ data }}</div>
    <button @click="run">点击更改 data</button>
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