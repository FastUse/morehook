---
category: UnDistribution
---

# useLocalStorage

管理 localStorage

## Usage

```html
<template>
  <div>
    <p>localData: {{ localData }}</p>

    <c-button @click="changeData">更改data值</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@morehook/core'

function changeData() {
  localData.value = Math.random()
}

const localData = useLocalStorage('a')
</script>
```