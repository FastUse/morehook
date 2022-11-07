---
category: Utilities
---

# useCopy
控制 剪切板内容

## Usage

```html
<template>
  <div   >
    <div>当前剪切板内容: {{ text }}</div>
    <c-button @click="change">更改剪切板内容</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useCopy } from '@morehook/core'

const text = useCopy()

function change() {
  text.value = Math.random()
}
</script>
```