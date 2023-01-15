<template>
  <c-button @click="add">添加异步函数</c-button>
</template>

<script setup lang="ts">
import { promiseScheduler } from '@morehook/utils'

const addTask = promiseScheduler(3)

// 模仿真实 axios 请求
const sleep = (time = 3000) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(123)
    }, time)
  )

function add() {
  addTask(sleep).then(res => {
    console.log('res', res)
  })
}
</script>
