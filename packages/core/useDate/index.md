---
category: Time
---

# useDate

操作时间，返回期望格式（内部使用了 dayjs）

## Usage

```html
<template>
  <div   >
    <p>{{ data }}</p>
    <button @click="refresh()">刷新时间</button>
  </div>
</template>

<script lang="ts" setup>
import { useDate } from '@morehook/core'

const { data, refresh } = useDate({
  method: 'hour',
  methodParam: 0
})
</script>
```