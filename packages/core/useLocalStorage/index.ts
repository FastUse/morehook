import { ref, Ref, isRef, watch as vueWatch } from 'vue-demi'
import { TypeSerializers, getValueType } from '../utils'

const storage = localStorage

/**
 * watch: 是否监听返回出去的值，当此值变化时同时更改 localStorage
 */
interface Options {
  watch: boolean
}

const defaultOptions = {
  watch: true
}

/**
 * 管理 localStorage
 * @param key 键
 * @param initialValue 初始值
 * @param options
 * @returns 返回取到的值
 */
export function useLocalStorage<T = any>(
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
    console.log(error, 'useLocalStorage 初始化失败')
  }

  // 判断类型取格式化方法
  const serializer = TypeSerializers[getValueType(data.value)]

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
