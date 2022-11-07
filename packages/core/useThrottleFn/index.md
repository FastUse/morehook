---
category: Utilities
---

# useThrottleFn

处理节流函数

## Usage

```html
<template>
  <div>
    <p>num: {{ num }}</p>

    <c-button @click="run">执行函数 +1</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottleFn } from '@morehook/core'

const num = ref(0)
const { run } = useThrottleFn(() => {
  num.value++
}, 1000)
</script>
```