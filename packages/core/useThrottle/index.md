---
category: UnDistribution(待分配)
---

# useThrottle

处理节流值
 * 不同于 useThrottleFn,此函数专门用来对某个值的节流变化

## Usage

```html
<template>
  <div>
    <p>源数据 state: {{ state }}</p>
    <p>节流数据 throttleState: {{ throttleState }}</p>

    <button @click="changeState">节流更改state</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottle } from '@morehook/core'

const state = ref(Math.random())
const throttleState = useThrottle(state)

function changeState() {
  state.value = Math.random()
}
</script>
```