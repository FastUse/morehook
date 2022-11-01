<template>
  <div>
    <div
      ref="target"
      style="border: 1px solid red; width: 300px; height: 300px"
    ></div>
    <p>clickX: {{ clickX }}</p>
    <p>clickY: {{ clickY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMousePosition } from '@morehook/core'

const target = ref()

const { clickX, clickY } = useMousePosition({ type: 'move', target })
</script>
