---
category: utils
---

# splitNumRandom

根据给定的总数和位数得到固定位数的随机值的数组

## Usage
``` ts
<script setup lang="ts">
import { ref } from 'vue'
import { splitNumRandom } from '@morehook/utils'

const randomArr = ref(splitNumRandom(20, 6))

function again() {
  randomArr.value = splitNumRandom(20, 6)
}
</script>
```