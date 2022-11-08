---
category: Utilities
---

# useSleep

暂停程序 - 在设定时间后继续执行

谨慎选择 while暂停方式，其原理是跑满cpu以至于不能执行其他程序

## Usage

```html
<template>
  <div>
    <p>num: {{ num }}</p>

    <button @click="sleep">暂停3秒执行</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSleep } from '@morehook/core'

const num = ref(0)
let timmer = setInterval(() => {
  num.value++
}, 1000)

async function sleep() {
  clearInterval(timmer)
  await useSleep(3000)
  timmer = setInterval(() => {
    num.value++
  }, 1000)
}
</script>
```