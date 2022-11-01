<template>
  <div>
    <p>Map：{{ state }}</p>
    <p>get 获取到的值：{{ actionMapValue }}</p>
    <p>has 获取到的值：{{ hasValue }}</p>

    <c-button @click="set('a', Math.random())">设置 A</c-button>
    <c-button @click="setAll([['a', Math.random()]])">设置所有 Map</c-button>
    <c-button @click="remove('a')">删除 A</c-button>
    <c-button @click="reset()">重置</c-button>
    <c-button
      @click="
        () => {
          actionMapValue = get('a')
        }
      "
    >
      获取 A
    </c-button>
    <c-button
      @click="
        () => {
          hasValue = has('a')
        }
      "
    >
      判断有无 A
    </c-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMap } from '@morehook/core'

const actionMapValue = ref()
const hasValue = ref(false)

const [state, { set, setAll, get, remove, has, reset }] = useMap([
  ['a', 1],
  ['b', 2]
])
</script>
