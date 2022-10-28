# MoreHook

阅读 vueuse 源码的一些记录以及根据业务总结出的一套 hooks

## Usage
HTML:
``` html
<template>
  <div class="hello">
    <div>
      <p>{{ useBooleanState }}</p>
      <button @click="useBooleanToggle">toggle</button>
      <button @click="setTrue">setTrue</button>
      <button @click="setFalse">setFalse</button>
    </div>
  </div>
</template>
```

JS:
```ts
import { useBoolean } from '@morehook/core'

export default {
  setup() {
    const [
      useBooleanState,
      { toggle: useBooleanToggle, setTrue, setFalse }
    ] = useBoolean()

    return { useBooleanState, useBooleanToggle, setTrue, setFalse }
  },
}
```

## Install
``` bash
npm i @morehook/core
```

### CDN

```html
<script src="https://unpkg.com/@morehook/core"></script>
```

## 特别声明
作者目的为学习总结 vueuse 并根据平时业务场景总结出一套更适应自己的 hooks，因此项目包含大部分 vueuse 的 hooks（可能会稍加修改去除一些边缘情况）

+ [VueUse 官网链接](https://vueuse.org/)
+ [VueUse 作者 antfu](https://github.com/antfu)

## License
[MIT License](https://github.com/M-cheng-web/morehook/blob/main/LICENSE)Copyright (c) 2022 [M-cheng-web](https://github.com/M-cheng-web)