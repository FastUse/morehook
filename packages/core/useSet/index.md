---
category: UnDistribution(待分配)
---

# useSet

快捷操作 Set 数据结构

## Usage

```html
<template>
  <div>
    <p>setVal: {{ setVal }}</p>

    <c-button @click="add(4)">添加 set值</c-button>
    <c-button @click="remove(4)">删除 set值</c-button>
    <c-button @click="clear">清除全部 set值</c-button>
    <c-button @click="reset([7, 8, 9])">重置 set值</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useSet } from '@morehook/core'

const [setVal, { add, remove, clear, reset }] = useSet([1, 2, 3])
</script>
```