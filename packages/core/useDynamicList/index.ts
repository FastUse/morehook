import { ref, Ref, isRef } from 'vue-demi'
import { getRandomStr } from '../utils'

export function useDynamicList<T = any>(initialValue: Ref<T[]>) {
  let uuid = 0
  const uuidKeys = ref<string[]>([]) // 记录当前所有的下标
  const keysAdding = '+' + getRandomStr(8) // 唯一key

  const setUUID = (index?: number) => {
    index = index === undefined ? uuidKeys.value.length : index
    uuidKeys.value.splice(index, 0, String(uuid++) + keysAdding)
  }

  initialValue.value.forEach(() => setUUID())

  // 重置列表
  const resetList = (resetList: Ref<T[]> | T[]) => {
    uuidKeys.value = []
    if (isRef(resetList)) {
      resetList.value.forEach(() => setUUID())
      initialValue = resetList
    } else {
      resetList.forEach(() => setUUID())
      initialValue.value = resetList
    }
  }

  // 插入列表
  // 兼容: insert(0, 1) insert(0, 1, 2) insert(0, [1, 2])
  const insert = (index: number, ...obj: any[] | any[][]) => {
    if (obj.length === 0) return
    let list = []
    if (obj.length === 1 && Array.isArray(obj[0])) {
      list = obj[0] // insert(0, [1, 2])
    } else {
      list = obj // insert(0, 1) insert(0, 1, 2)
    }

    list.forEach((active, i) => setUUID(index + i))
    initialValue.value.splice(index, 0, ...list)
  }

  const replace = (index: number, obj: T) => {
    initialValue.value.splice(index, 1, obj)
  }

  const remove = (index: number) => {
    uuidKeys.value.splice(index, 1)
    initialValue.value.splice(index, 1)
  }

  // 互换位置
  const move = (oldIndex: number, newIndex: number) => {
    if (oldIndex === newIndex) return
    ;[initialValue.value[oldIndex], initialValue.value[newIndex]] = [
      initialValue.value[newIndex],
      initialValue.value[oldIndex]
    ]
    ;[uuidKeys.value[oldIndex], uuidKeys.value[newIndex]] = [
      uuidKeys.value[newIndex],
      uuidKeys.value[oldIndex]
    ]
  }

  const getKey = (index: number) => uuidKeys.value[index]
  const getIndex = (key: string) => uuidKeys.value.indexOf(key)

  const push = (obj: T) => {
    initialValue.value.push(obj)
    setUUID()
  }

  const pop = () => {
    initialValue.value.pop()
    uuidKeys.value.pop()
  }

  const unshift = (obj: T) => {
    initialValue.value.unshift(obj)
    setUUID(0)
  }

  const shift = () => {
    initialValue.value.shift()
    uuidKeys.value.shift()
  }

  return {
    list: initialValue,
    resetList,
    insert,
    replace,
    remove,
    move,
    push,
    pop,
    unshift,
    shift,
    getKey,
    getIndex
  }
}
