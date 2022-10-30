<template>
  <div class="demo">
    <p>{{ useBooleanState }}</p>
    <button @click="useBooleanToggle">toggle</button>
    <button @click="setTrue">setTrue</button>
    <button @click="setFalse">setFalse</button>
  </div>
</template>

<script lang="ts" setup>
import { useBoolean } from '@morehook/core'

const [useBooleanState, { toggle: useBooleanToggle, setTrue, setFalse }] =
  useBoolean()
</script>

<style lang="scss" scoped>
.demo {
  button {
    margin-right: 20px;
  }
}
</style>
