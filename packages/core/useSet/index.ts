import { ref, Ref, markRaw } from 'vue-demi'

/**
 * add: 添加值
 * remove: 删除某个值
 * has: 判断是否存在
 * clear: 清除全部
 * reset: 重置 set
 */
interface Actions<T> {
  add: (value: T) => void
  remove: (value: T) => void
  has: (value: T) => boolean
  clear: () => void
  reset: (value: T[]) => void
}

/**
 * 操作 Set 数据结构
 * @param initialValue 初始值 - 当传入的初始值发生改变时 Set数据也会变
 * @return [0]: 生成的 set 结构， [1]: 快捷操作 set 结构的函数，参照Actions
 */
export function useSet<T = any>(
  initialValue?: T[]
): [state: Ref<Set<any>>, actions: Actions<T>]

export function useSet<T = any>(initialValue?: T[]) {
  const initialSet = initialValue ? new Set(initialValue) : new Set()
  const state = ref(initialSet)

  const actions: Actions<T> = {
    add: (value: T) => {
      state.value.add(value)
    },
    remove: (value: T) => {
      state.value.delete(value)
    },
    has: (value: T) => state.value.has(value),
    clear: () => state.value.clear(),
    reset: (value: T[] = []) => {
      state.value = new Set(value)
    }
  }

  return [state, markRaw(actions)]
}
