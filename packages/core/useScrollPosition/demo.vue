<template>
  <div>
    <div
      ref="divRef"
      style="border: 1px solid red; height: 300px; overflow: auto"
    >
      <div style="height: 900px; background-color: yellowgreen">
        我是内容，请滑动我，除了我你还可以滑动外层查看效果
      </div>
    </div>
    <p>document body scrollY: {{ scrollY }}</p>
    <p>div scrollY: {{ divScrollY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useScrollPosition } from '@morehook/core'

const { scrollY } = useScrollPosition()

const divRef = ref()
const { scrollY: divScrollY } = useScrollPosition({ target: divRef })
</script>
