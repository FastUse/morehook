---
category: utils
---

# precisionNumber

解决数字运算时精度问题(最高支持到16位)

## Usage
``` ts
<template>
  <div class="">
    <!-- 加 -->
    <input
      v-model="addObj.a"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">+</div>
    <input
      v-model="addObj.b"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">= {{ addObj.c }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { precisionNumber } from '@morehook/utils'

const addObj: any = reactive({
  a: 0,
  b: 0,
  c: computed(() => {
    return precisionNumber.add(addObj.a, addObj.b)
  })
})
</script>
```