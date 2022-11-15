import { defineComponent, ref } from 'vue-demi'
// import { useToggle } from '@morehook/core'

export const MButton = defineComponent({
  setup() {
    const count = ref(0)
    const handleIncrease = () => {
      count.value++
    }

    return () => (
      <div
        style={{ padding: 10, backgroundColor: '#cef', textAlign: 'center' }}
      >
        <h1>实验 tsx 写法</h1>
        <button onClick={handleIncrease}>Count++</button>
        <p>Parent count is: {count.value}</p>
      </div>
    )
  }
})
