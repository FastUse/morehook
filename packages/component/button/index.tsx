import { defineComponent, ref } from 'vue-demi'
// import { useToggle } from '@morehook/core'
import './index.scss'

export const useBtn = () => {
  console.log(111)
}

export const button = defineComponent({
  name: 'cbutton',
  setup() {
    const count = ref(0)
    const handleIncrease = () => {
      count.value++
    }

    return () => (
      // style={{ padding: 10, backgroundColor: '#cef', textAlign: 'center' }}
      <div class="Btn">
        <h1>实验 tsx 写法</h1>
        <button onClick={handleIncrease}>Count++</button>
        <p>Parent count is: {count.value}</p>
      </div>
    )
  }
})
