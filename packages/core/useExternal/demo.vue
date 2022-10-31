<template>
  <div>
    <!-- 图片挂载 -->
    <div style="width: 200px; height: 200px" ref="parent" />

    <!-- 加载 css -->
    <div class="hello">
      <div class="bd-example">
        <span class="badge badge-pill badge-primary">Primary</span>
        <span class="badge badge-pill badge-secondary">Secondary</span>
        <span class="badge badge-pill badge-success">Success</span>
        <span class="badge badge-pill badge-danger">Danger</span>
        <span class="badge badge-pill badge-warning">Warning</span>
        <span class="badge badge-pill badge-info">Info</span>
        <span class="badge badge-pill badge-light">Light</span>
        <span class="badge badge-pill badge-dark">Dark</span>
      </div>
    </div>

    <c-button @click="cssLoad">加载 css </c-button>
    <c-button @click="cssUnload">卸载 css </c-button>
    <c-button @click="imgLoad">加载 img</c-button>
    <c-button @click="imgUnload">卸载 img</c-button>
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

// ps: 加载 js 文件
useExternal(
  'http://img-steward-online.goodaa.com.cn/449c2e5dd6a948e3af67b69c4ece907a.js',
  el => {
    console.log('加载 js 文件成功', el)
  }
)

// ps: 加载 css 文件
const { load: cssLoad, unload: cssUnload } = useExternal(
  'https://ahooks.js.org/useExternal/bootstrap-badge.css',
  el => {
    console.log('加载 css 文件成功', el)
  },
  {
    manual: true
  }
)

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
