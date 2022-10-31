---
category: UnDistribution
---

# useExternal

用于动态地向页面加载或卸载外部资源

## Usage

```html
<template>
  <div>
    <!-- 图片挂载 -->
    <div style="width: 200px; height: 200px" ref="parent" />

    <button @click="imgLoad">加载 img</button>
    <button @click="imgUnload">卸载 img</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useExternal } from '@morehook/core'

// 监听 src 变化自动加载
// const srcRef = ref(
//   'http://img-steward-online.goodaa.com.cn/449c2e5dd6a948e3af67b69c4ece907a.js'
// )
// useExternal(srcRef, el => {
//   console.log('加载 js 文件2 成功', el)
// })
// setTimeout(() => {
//   srcRef.value = 'https://ahooks.js.org/useExternal/bootstrap-badge.css'
// }, 1000)

// ps: 加载 img 文件
const parent = ref()
const { load: imgLoad, unload: imgUnload } = useExternal(
  'https://s6.jpg.cm/2022/08/23/PVSGyi.png',
  el => {
    console.log('加载 img 文件成功', el)
  },
  {
    manual: true,
    target: parent
  }
)
</script>
```