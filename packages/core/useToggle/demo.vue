<script setup lang="ts">
import { useToggle } from '@morehook/core';

const [ useToggleDemoState, [ useTToggle, useTSetLeft, useTSetCenter, useTSetRight]] = useToggle('left','center','right');

const handleUseTToggle = ()=>{
  useTToggle('center')
};
</script>

<template>
  <div>
    <p>useToggleDemoState: {{useToggleDemoState}}</p>
    <button @click="handleUseTToggle">设置指定值</button>
    <button @click="useTToggle">useTToggle</button>
    <button @click="useTSetLeft">useTSetLeft</button>
    <button @click="useTSetCenter">useTSetCenter</button>
    <button @click="useTSetRight">useTSetRight</button>
  </div>
</template>