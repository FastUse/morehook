<template>
  <div>
    <p>{{ useBooleanState }}</p>

    <c-button @click="useBooleanToggle">toggle</c-button>
    <c-button @click="setTrue">setTrue</c-button>
    <c-button @click="setFalse">setFalse</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useBoolean } from '@morehook/core'

const [useBooleanState, { toggle: useBooleanToggle, setTrue, setFalse }] =
  useBoolean()
</script>
