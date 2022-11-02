<template>
  <div>
    <div>二维码:</div>
    <img :src="state" alt="" />
    <c-button @click="change">更改二维码内容</c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useQRCode } from '@morehook/core'

const text = ref<string>('https://www.baidu.com/')

const state = useQRCode(text, {
  // logo: img.default,
  colorDark: '#000000'
})

function change() {
  text.value = String(Math.random())
}
</script>
