import { defineComponent, ref } from 'vue-demi'
// import { useToggle } from '@morehook/core'
import './index.scss'

export const useCcc = () => {
  console.log('ccc')
}

export const ccc = defineComponent({
  name: 'ccc',
  setup() {
    const count = ref(0)
    const handleIncrease = () => {
      count.value++
    }

    return () => (
      // style={{ padding: 10, backgroundColor: '#cef', textAlign: 'center' }}
      <div class="ccc">
        <h1>实验 tsx 写法</h1>
        <button onClick={handleIncrease}>Count++</button>
        <p>Parent count is: {count.value}</p>
      </div>
    )
  }
})
