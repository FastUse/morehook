<script setup lang="ts">
async function download() {
  let responsePromise = await fetch('https://cdn.jsdelivr.net/npm/@morehook/core')
  let blob = await responsePromise.blob()
  let objectURL = window.URL.createObjectURL(blob)
  let a = document.createElement('a')
  a.href = objectURL
  a.download = 'morehook'
  a.click()
  a.remove()
}
</script>

<template>
  <button @click="download">下载 MoreHook</button>
</template>

<style scoped lang="scss">
button {
  color: rgba(62, 175, 124);
  background-color: #6164690d;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0px 6px;
  border-radius: 4px;
}
</style>