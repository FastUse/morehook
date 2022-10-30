---
category: UnDistribution
---

# useCookie

用来操作 Cookie

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