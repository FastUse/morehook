---
category: UnDistribution(待分配)
---

# useMediaQuery

监听 mediaQuery 状态 (此 hook 只针对单个监听，useMediaQueryS支持多个)

## Usage

```html
<template>
  <div>
    <p>当前是否满足设定值 : {{ state }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@morehook/core'

const state = useMediaQuery('(min-width: 680px)')
</script>
```