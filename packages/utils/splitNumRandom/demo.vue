<template>
  入参：splitNumRandom(20, 6)
  <div>结果：{{ randomArr }}</div>
  <div>总数：{{ randomArr.reduce((pre, item) => (pre += item), 0) }}</div>

  <c-button @click="again">重新运算结果</c-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { splitNumRandom } from '@morehook/utils'

const randomArr = ref(splitNumRandom(20, 6))

function again() {
  randomArr.value = splitNumRandom(20, 6)
}
</script>
