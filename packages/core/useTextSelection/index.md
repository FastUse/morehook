---
category: UnDistribution(待分配)
---

# useTextSelection

获取用户选中的字符串以及其位置信息

> 获取到的 数据是相对于视图的左上角计算的(除 height，width外)

[位置信息回参参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

[兼容性参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection)


## Usage

```html
<template>
  <div>
    <p ref="p">可选择区域: asdasasdsadsadsadasd eeeeeeeeeeeeeeee</p>
    <div>已选择的值：{{ text }}</div>
    <div>位置信息：rect: {{ rect }}</div>
    <div>left: {{ rect.left }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTextSelection } from '@morehook/core'

const p = ref()
const { text, rect } = useTextSelection(p)
</script>
```