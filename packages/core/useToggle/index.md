---
category: State
---

# useToggle
用于在多个状态值间切换的 Hook（支持N个状态切换）

## Usage
```ts
import { useTToggle } from '@morehook/vue';

const [ useToggleDemoState, [ useTToggle, useTSetLeft, useTSetCenter, useTSetRight]] = useToggle('left','center','right');

const handleUseTToggle = ()=>{
  useTToggle('center')
};
```
