<template>
  <div>
    <p>state: {{ state }}</p>

    <c-button @click="useToggleState">useToggleState</c-button>
    <c-button @click="useSet1">useSet1</c-button>
    <c-button @click="useSet2">useSet2</c-button>
    <c-button @click="useSet3">useSet3</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@morehook/core'

const [state, [useToggleState, useSet1, useSet2, useSet3]] = useToggle(1, 2, 3)
</script>
