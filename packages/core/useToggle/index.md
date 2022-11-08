---
category: State
---

# useToggle

用于在N个状态值间切换

## Usage

```html
<template>
  <div>
    <p>state: {{ state }}</p>

    <button @click="useToggleState">useToggleState</button>
    <button @click="useSet1">useSet1</button>
    <button @click="useSet2">useSet2</button>
    <button @click="useSet3">useSet3</button>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@morehook/core'

const [state, [useToggleState, useSet1, useSet2, useSet3]] = useToggle(1, 2, 3)
</script>
```