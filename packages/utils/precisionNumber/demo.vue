<template>
  <div class="">
    <!-- 加 -->
    <input
      v-model="addObj.a"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">+</div>
    <input
      v-model="addObj.b"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">= {{ addObj.c }}</div>
    <br />
    <br />

    <!-- 减 -->
    <input
      v-model="subtractObj.a"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">-</div>
    <input
      v-model="subtractObj.b"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">
      = {{ subtractObj.c }}
    </div>
    <br />
    <br />

    <!-- 乘 -->
    <input
      v-model="multiplyObj.a"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">x</div>
    <input
      v-model="multiplyObj.b"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">
      = {{ multiplyObj.c }}
    </div>
    <br />
    <br />

    <!-- 除 -->
    <input
      v-model="divideObj.a"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">÷</div>
    <input
      v-model="divideObj.b"
      type="number"
      style="border: 1px solid greenyellow"
    />
    <div style="display: inline-block; margin: 0px 10px">
      = {{ divideObj.c }}
    </div>
    <br />
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { precisionNumber } from '@morehook/utils'

const addObj: any = reactive({
  a: 0,
  b: 0,
  c: computed(() => {
    return precisionNumber.add(addObj.a, addObj.b)
  })
})

const subtractObj: any = reactive({
  a: 0,
  b: 0,
  c: computed(() => {
    return precisionNumber.subtract(subtractObj.a, subtractObj.b)
  })
})

const multiplyObj: any = reactive({
  a: 0,
  b: 0,
  c: computed(() => {
    return precisionNumber.multiply(multiplyObj.a, multiplyObj.b)
  })
})

const divideObj: any = reactive({
  a: 0,
  b: 0,
  c: computed(() => {
    return precisionNumber.divide(divideObj.a, divideObj.b)
  })
})
</script>
