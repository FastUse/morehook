<template>
  <div>
    <div>webScoket状态: {{ readyState }}</div>

    <c-button @click="connect">连接webScoket</c-button>
    <c-button @click="disconnect">关闭webScoket</c-button>
    <c-button @click="handleSendMessage">发送消息</c-button>
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
