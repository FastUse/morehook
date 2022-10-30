import { Ref } from 'vue-demi'
import { useToggle } from '@morehook/core'

const defaultValue = false

/**
 * toggle: 快捷切换正反值
 * setTrue: 切换值为 true
 * setFalse: 切换值为 false
 */
interface Actions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

/**
 * 优雅的管理 boolean 值
 * @param value 初始值 (默认为false)
 * @returns 返回数组，[0] 是返回值，[1]是各个操作方法
 */
export function useBoolean(value?: boolean): [Ref<boolean>, Actions]

export function useBoolean(value?: boolean) {
  value = value || defaultValue

  const [state, [toggle]] = useToggle(value, !value)

  const setTrue = () => toggle(true)
  const setFalse = () => toggle(false)

  const actions: Actions = { toggle, setTrue, setFalse }
  return [state, actions]
}
