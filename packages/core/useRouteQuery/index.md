---
category: UnDistribution(待分配)
---

# useRouteQuery

获取vueRouter query

确保项目已安装Vue Router v4.x版本及以上，否则将不能使用此Hook

## Usage

```html
<template>
  <div>
    <div class="hello" style="display: flex; align-items: flex-start">
      <p>value:{{ state }}</p>
      <button @click="handlerUpdateState">修改query</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouteQuery } from '@morehook/core'

const state = useRouteQuery('a')

const handlerUpdateState = () => {
  state.value = String(Math.random())
}
</script>
```