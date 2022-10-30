<template>
  <div>
    <p>{{ data }}</p>
    <c-button @click="refresh()">刷新时间</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useDate } from '@morehook/core'

const { data, refresh } = useDate({
  method: 'hour',
  methodParam: 0
})
</script>
