import { ref, Ref } from 'vue-demi'
import { isClient } from '../_configurable'

/**
 * 获取页面是否隐藏
 * @returns
 */
export function useDocumentHidden(): Ref<boolean> {
  if (!isClient) return ref(false)

  const documentHidden = ref<boolean>(document.hidden)
  const handler = () => {
    documentHidden.value = document.hidden
  }
  document.addEventListener('visibilitychange', handler)
  return documentHidden
}
