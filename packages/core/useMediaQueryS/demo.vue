<template>
  <div>
    <div>xs: (max-width:500px)</div>
    <div>sm: (min-width:500px)</div>
    <div>md: (min-width:700px)</div>
    <div>lg: (min-width:800px)</div>
    <div>xl: (min-width:1100px)</div>
    <div>xxl: (min-width:1300px)</div>

    <p>当前屏幕大小: {{ queryKey }}</p>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useMediaQueryS } from '@morehook/core'

const query = {
  xs: '(max-width:500px)',
  sm: '(min-width:500px)',
  md: '(min-width:700px)',
  lg: '(min-width:900px)',
  xl: '(min-width:1100px)',
  xxl: '(min-width:1300px)'
}

const queryKey = useMediaQueryS(query)
watch(
  queryKey,
  value => {
    console.log('value', value)
  },
  { immediate: true }
)
</script>
