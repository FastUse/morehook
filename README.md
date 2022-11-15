# MoreHook

阅读 vueuse 源码的一些记录以及根据业务总结出的一套 hooks

## DOCUMENT & DEMO
[https://fastuse.github.io/morehook/](https://fastuse.github.io/morehook/)

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
<script src="https://cdn.jsdelivr.net/npm/@morehook/core"></script>
```

## Other
此项目采用 vitepress + rollup 包含打包部署npm包以及对文档的一键部署，用的同样也是 vueuse 那一套流程，去除了单测及一些小点，强烈推荐感兴趣的同学熟悉一番，以下为功能点:
+ 🚀 自动插入 Type 类型声明
+ 🚀 自动插入 Demo 示例
+ 🚀 自动插入 hooks 生成右侧导航栏
+ 🚀 自动辨别 hooks 所属类型在右侧导航栏进行分类
+ 🚀 eslint
+ 🚀 typescript
+ 🚀 脚本打包并发布文档系统

```
❌ 当前 @morehook/core 内包含 ['js-cookie', 'dayjs', 'easyqrcodejs'] 插件，追求更小包体积的可以联系我
```

## SIGNIFICANCE STATEMENT (重要说明)
作者目的为学习总结 vueuse 并根据平时业务场景总结出一套更适应自己的 hooks，因此项目包含大部分 vueuse 的 hooks（可能会稍加修改去除一些边缘情况），感谢默默付出的大佬们，致敬!

+ [VueUse 官网链接](https://vueuse.org/)
+ [VueUse 作者 antfu](https://github.com/antfu)

## License
[MIT License](https://github.com/M-cheng-web/morehook/blob/main/LICENSE)Copyright (c) 2022 [M-cheng-web](https://github.com/M-cheng-web)