---
category: State
---

# useSessionStorage

优雅操作 sessionStorage 存储

## Usage

```html
<template>
  <div>
    <p>sessionStorage-a: {{ sessionStorage }}</p>

    <button @click="change">更改 sessionStorage</button>
  </div>
</template>

<script lang="ts" setup>
import { useSessionStorage } from '@morehook/core'

const sessionStorage = useSessionStorage<any>('a', 'cheng')

function change() {
  sessionStorage.value = Math.random()
}
</script>
```