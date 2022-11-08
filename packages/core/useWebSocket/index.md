---
category: Network
---

# useWebSocket

管理 websocket

## Usage

```html
<template>
  <div>
    <div>webScoket状态: {{ readyState }}</div>

    <button @click="connect">连接webScoket</button>
    <button @click="disconnect">关闭webScoket</button>
    <button @click="handleSendMessage">发送消息</button>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useWebSocket } from '@morehook/core'

const { connect, readyState, latestMessage, disconnect, sendMessage } =
  useWebSocket('ws://127.0.0.1:8080')

const handleSendMessage = () => {
  sendMessage('hello v3hooks')
}

watchEffect(() => {
  console.log(latestMessage.value)
})
</script>
```