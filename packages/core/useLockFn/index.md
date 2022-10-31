---
category: UnDistribution
---

# useLockFn

给函数设置单行道，只有此函数执行完毕才能执行下一个

## Usage

```html
<template>
  <div>
    <p>sum：{{ sum }}</p>
    <button @click="fun">(异步)点击加 1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLockFn } from '@morehook/core'

const sum = ref(0)
const fun = useLockFn(
  () =>
    new Promise<void>(resolve => {
      sum.value++
      setTimeout(() => {
        resolve()
      }, 1000)
    })
)
</script>
```