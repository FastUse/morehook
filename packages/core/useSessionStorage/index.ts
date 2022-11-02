import { ref, Ref, isRef, watch as vueWatch } from 'vue-demi'
import { TypeSerializers, getValueType } from '../utils'

const storage = sessionStorage

/**
 * watch: 是否监听返回值，当返回值更改时也会同步到 sessionStorage (默认 true)
 */
interface Options {
  watch: boolean
}

const defaultOptions = {
  watch: true
}

/**
 * 优雅操作 sessionStorage 存储
 * @param key 键值
 * @param initialValue 初始值
 * @param options watch: 是否监听返回值，当返回值更改时也会同步到 sessionStorage
 * @returns key代表的值 (默认为初始值)
 */
export function useSessionStorage<T = any>(
  key: string,
  initialValue?: T | Ref<T>,
  options?: Options
) {
  const { watch } = { ...defaultOptions, ...options }
  const data = ref() as Ref<T | undefined | null>

  try {
    if (initialValue !== undefined) {
      data.value = isRef(initialValue) ? initialValue.value : initialValue
    } else {
      data.value = JSON.parse(storage.getItem(key) || '{}')
    }
  } catch (error) {
    console.log(error, 'useLocalStorage初始化失败')
  }

  const type = getValueType(data.value)
  const serializer = TypeSerializers[type]
  const setStorage = () => storage.setItem(key, serializer.write(data.value))

  // 状态监听
  if (watch) {
    vueWatch(
      data,
      newValue => {
        if (newValue === undefined || newValue === null) {
          storage.removeItem(key)
          return
        }
        setStorage()
      },
      {
        deep: true
      }
    )
  }

  setStorage()

  return data
}
