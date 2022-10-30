<template>
  <div class="hello" style="display: flex; align-items: flex-start">
    <p>value:{{ state }}</p>
    <button @click="handlerUpdateState">修改Cookie</button>
  </div>
</template>

<script lang="ts">
import { useCookie } from '@morehook/core'

export default {
  setup() {
    // 获取cookie中的 obj
    const state = useCookie('obj', {
      defaultValue: '1111',
      watch: true,
      path: '/useCookie',
      expires: 1
    })

    const handlerUpdateState = () => {
      state.value = String(Math.random())
    }

    return {
      state,
      handlerUpdateState
    }
  }
}
</script>
