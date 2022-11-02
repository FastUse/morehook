<template>
  <div>
    <div class="hello" style="display: flex; align-items: flex-start">
      <p>value:{{ state }}</p>
      <button @click="handlerUpdateState">修改query</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouteQuery } from '@morehook/core'

const state = useRouteQuery('a')

const handlerUpdateState = () => {
  state.value = String(Math.random())
}
</script>
