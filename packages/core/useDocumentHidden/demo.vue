<template>
  <div>页面是否隐藏: {{ hidden }}</div>
  <div>请打开控制台看打印消息</div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useDocumentHidden } from '@morehook/core'

const hidden = useDocumentHidden()

watch(hidden, val => {
  console.log('页面是否被隐藏', val)
})
</script>
