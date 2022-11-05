import { ref, Ref, isRef } from 'vue-demi'

type State = string | number | boolean | undefined
type RefState = Ref<State>

type Fn = (v?: any) => void
type Actions = Fn[]

/**
 * 用于在N个状态值间切换
 * @param args 多个数据源
 * @return [0]: 当前选中值  [1]: [toggle(), ...activeState()] (操作当前值)
 */
export function useToggle<T extends State, U extends RefState>(
  ...args: (T | U)[]
): [U, Actions]

export function useToggle<T extends State, U extends RefState>(
  ...args: (T | U)[]
) {
  const argsStateArr = args.map(variable =>
    isRef(variable) ? variable : ref(variable)
  )
  const state = ref<State>(argsStateArr[0].value)

  let currIndex = 0
  const len = args.length

  const toggle = (param?: T | U) => {
    // 判定是否在参数里
    if (param !== undefined && args.includes(param)) {
      state.value = isRef(param) ? param.value : param
      return
    }
    // 不在参数中则顺延
    currIndex = currIndex + 1 > len - 1 ? 0 : currIndex + 1
    state.value = argsStateArr[currIndex].value
  }

  const createHandle = () => {
    return argsStateArr.map((active, index) => () => {
      state.value = active.value
      currIndex = index
    })
  }

  const actions: Actions = [toggle, ...createHandle()]
  return [state, actions]
}
