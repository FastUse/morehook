---
category: component
---

# dynamicLoading

全局动画 loading

## Usage

```html
<template>
  <div>
    <DynamicLoading v-model="showLoading" @close="close" />

    <c-button @click="handlerShowLoading">展示loading</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DynamicLoading } from '@morehook/component'

const showLoading = ref(false)

function handlerShowLoading() {
  showLoading.value = true
}

function close() {
  showLoading.value = false
}
</script>
```