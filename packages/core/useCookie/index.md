---
category: UnDistribution
---

# useCookie

操作 Cookie

## Usage

```html
<template>
  <div>
    <div>value:{{ state }}</div>
    <button @click="handlerUpdateState">修改Cookie</button>
  </div>
</template>

<script setup lang="ts">
import { useCookie } from '@morehook/core'

// 获取cookie中的 obj
const state = useCookie('obj', {
  defaultValue: '1111',
  watch: true,
  path: '/useCookie',
  expires: 1
})

const handlerUpdateState = () => {
  state.value = String(Math.random())
}
</script>
```