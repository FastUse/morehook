<template>
  <div>
    <p>按钮组件</p>
    <Button>asdasdasd</Button>
    <c-button @click="changeA">更改父按钮默认填充值</c-button>
    <c-button @click="changeB">更改子按钮默认填充值</c-button>
  </div>
</template>

<script lang="ts" setup>
import { Button, useBtn, useSmallBtn } from '@morehook/component'

const { btnDefaultText } = useBtn()
const { smallBtnDefaultText } = useSmallBtn()

function changeA() {
  btnDefaultText.value = Math.random()
}
function changeB() {
  smallBtnDefaultText.value = Math.random()
}
</script>
