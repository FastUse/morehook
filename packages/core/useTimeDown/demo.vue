<template>
  <div>
    <p>当前倒计时：{{ useTime }}</p>

    <c-button @click="setTimeReset(20)">重置倒计时</c-button>
    <c-button @click="setTimeOff">倒计时-暂停</c-button>
    <c-button @click="setTimeOn">倒计时-继续</c-button>
    <c-button @click="setTimeToggle">倒计时-切换状态(继续/暂停)</c-button>
  </div>
</template>

<script lang="ts" setup>
import { useTimeDown } from '@morehook/core'

function timeReset() {
  alert('时间重置回调')
}
function timeEnd() {
  alert('倒计时结束回调')
}
function timeStart() {
  // 有两种情况触发，1.自动开始，2.暂停后继续
  alert('倒计时开始回调')
}
function timeStop() {
  alert('倒计时暂停回调')
}

const [useTime, { setTimeToggle, setTimeOn, setTimeOff, setTimeReset }] =
  useTimeDown(
    10,
    {
      timeReset,
      timeEnd,
      timeStart,
      timeStop
    },
    true
  )
</script>
