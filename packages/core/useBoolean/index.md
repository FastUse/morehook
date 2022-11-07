---
category: UnDistribution(待分配)
---

# useBoolean
优雅的管理 boolean 值

## Usage

```html
<template>
  <div>
    <p>{{ useBooleanState }}</p>
    <button @click="useBooleanToggle">toggle</button>
    <button @click="setTrue">setTrue</button>
    <button @click="setFalse">setFalse</button>
  </div>
</template>

<script lang="ts" setup>
import { useBoolean } from '@morehook/core'

const [useBooleanState, { toggle: useBooleanToggle, setTrue, setFalse }] =
  useBoolean()
</script>
```