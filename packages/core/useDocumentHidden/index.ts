import { ref, Ref } from 'vue-demi'

/**
 * 获取页面是否隐藏
 * @returns
 */
export function useDocumentHidden(): Ref<boolean> {
  const documentHidden = ref<boolean>(document.hidden)
  const handler = () => {
    documentHidden.value = document.hidden
  }
  document.addEventListener('visibilitychange', handler)
  return documentHidden
}
