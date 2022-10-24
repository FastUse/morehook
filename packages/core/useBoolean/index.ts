import { Ref } from 'vue'
import { useToggle } from '@morehook/vue'

const defaultValue = false

interface Actions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

export function useBoolean(value?: boolean): [Ref<boolean>, Actions]

export function useBoolean(value?: boolean) {
  value = value || defaultValue

  const [state, [toggle]] = useToggle(value, !value)

  const setTrue = () => toggle(true)
  const setFalse = () => toggle(false)

  const actions: Actions = { toggle, setTrue, setFalse }
  return [state, actions]
}