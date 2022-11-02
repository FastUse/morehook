---
category: UnDistribution
---

# useQRCode

根据字符串生成二维码

借助于 [EasyARCodeJS](https://github.com/ushelp/EasyQRCodeJS) 实现，具体api可参照其文档

## Usage

```html
<template>
  <div>
    <div>二维码:</div>
    <img :src="state" alt="" />
    <c-button @click="change">更改二维码内容</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useQRCode } from '@morehook/core'

const text = ref<string>('https://www.baidu.com/')

const state = useQRCode(text, {
  // logo: img.default, 可放置图片
  colorDark: '#000000'
})

function change() {
  text.value = String(Math.random())
}
</script>
```