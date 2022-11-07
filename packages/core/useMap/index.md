---
category: UnDistribution(待分配)
---

# useMap

优雅的管理 Map 结构数据

## Usage

```html
<template>
  <div>
    <p>Map：{{ state }}</p>
    <p>get 获取到的值：{{ actionMapValue }}</p>
    <p>has 获取到的值：{{ hasValue }}</p>

    <button @click="set('a', Math.random())">设置 A</button>
    <button @click="setAll([['a', Math.random()]])">设置所有 Map</button>
    <button @click="remove('a')">删除 A</button>
    <button @click="reset()">重置</button>
    <button
      @click="
        () => {
          actionMapValue = get('a')
        }
      "
    >
      获取 A
    </button>
    <button
      @click="
        () => {
          hasValue = has('a')
        }
      "
    >
      判断有无 A
    </button>
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
```