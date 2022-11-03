<template>
  <div>
    <p ref="p">可选择区域: asdasasdsadsadsadasd eeeeeeeeeeeeeeee</p>
    <div>已选择的值：{{ text }}</div>
    <div>位置信息：rect: {{ rect }}</div>
    <div>left: {{ rect.left }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTextSelection } from '@morehook/core'

const p = ref()
const { text, rect } = useTextSelection(p)
</script>
