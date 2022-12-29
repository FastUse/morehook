<template>
  <div class="">
    <c-button @click="download">下载文件</c-button>
  </div>
</template>

<script lang="ts" setup>
import { downloadFile } from '@morehook/utils'

const originFile =
  'https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/morehook/RE4wB6h.3x93ajva7f60.webp'

function download() {
  downloadFile(originFile, 'xxx')
}
</script>
