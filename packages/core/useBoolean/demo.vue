<template>
  <div>
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
    color: #fff;
    margin-right: 20px;
    padding: 0px 6px;
    background-color: #999;
    border-radius: 10px;
  }
}
</style>
