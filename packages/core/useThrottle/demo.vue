<template>
  <div>
    <p>源数据 state: {{ state }}</p>
    <p>节流数据 throttleState: {{ throttleState }}</p>

    <c-button @click="changeState">节流更改state</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottle } from '@morehook/core'

const state = ref(Math.random())
const throttleState = useThrottle(state)

function changeState() {
  state.value = Math.random()
}
</script>
