---
category: utils
---

# deepCopy

深拷贝（兼容函数，对象，相互引用场景）

## Usage
``` js
import { deepCopy } from '@morehook/utils'

const obj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: { h: { i: 2 } },
  d: function() { }
}
obj.b.push(obj.c)
obj.c.j = obj.b

const a4 = deepCopy(obj)
console.log(a4);
```