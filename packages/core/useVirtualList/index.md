---
category: UnDistribution
---

# useVirtualList

管理虚拟列表

## Usage

```html
<template>
  <div>
    <div
      :ref="containerProps.ref"
      @scroll="containerProps.onScroll"
      style="height: 300px; overflow: auto; border: 1px solid #cccccc"
    >
      <div :style="wrapperStyle">
        <div
          v-for="active in list"
          :key="active"
          style="
            height: 60px;
            border-bottom: 1px solid #cccccc;
            background-color: white;
          "
        >
          {{ active }}
        </div>
      </div>
    </div>

    <c-button type="button" @click="handleVirtualScrollTo">
      scroll to
    </c-button>
  </div>
</template>

<script lang="ts" setup>
import { useVirtualList } from '@morehook/core'

const { list, wrapperStyle, containerProps, scrollTo } = useVirtualList(
  Array.from(Array(99999).keys()),
  { itemHeight: 60, overscan: 10 }
)

// 滚动到第22个元素
const handleVirtualScrollTo = () => {
  scrollTo(22)
}
</script>
```