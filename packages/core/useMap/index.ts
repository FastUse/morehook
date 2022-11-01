import { ref, Ref, markRaw } from 'vue-demi'

type MapValue = readonly (readonly [any, any])[]

/**
 * set: 新增数据
 * get: 获取数据
 * remove: 删除数据
 * has: 判断是否有某条数据
 * clear: 清除某条数据
 * setAll: 设置所有数据
 * reset: 清除所有数据
 */
interface Actions<T> {
  set: (key: string, value: T) => void
  get: (key: string) => T
  remove: (key: string) => void
  has: (key: string) => boolean
  clear: () => void
  setAll: (newMap: MapValue) => void
  reset: () => void
}

/**
 * 操作 Map
 * @param initialValue map 初始值
 * @returns state: map源数据，actions: Actions
 */
export function useMap<T = any>(
  initialValue?: MapValue
): [state: Ref<Map<any, any>>, actions: Actions<T>]

export function useMap<T = any>(initialValue?: MapValue) {
  const initialMap = initialValue ? new Map(initialValue) : new Map()
  const state = ref(initialMap) as Ref<Map<any, any>>

  const actions: Actions<T> = {
    set: (key: any, value: T) => {
      state.value.set(key, value)
    },
    get: (key: any) => {
      return state.value.get(key)
    },
    remove: (key: any) => {
      state.value.delete(key)
    },
    has: (key: any) => state.value.has(key),
    clear: () => state.value.clear(),
    setAll: (newMap: MapValue) => {
      state.value = new Map(newMap)
    },
    reset: () => (state.value = initialMap)
  }

  return [state, markRaw(actions)]
}
