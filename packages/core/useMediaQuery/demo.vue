<template>
  <div>
    <p>当前是否满足设定值 : {{ state }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@morehook/core'

const state = useMediaQuery('(min-width: 680px)')
</script>
