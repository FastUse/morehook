import { ref, Ref } from 'vue-demi'

export function useDocumentHidden(): Ref<boolean> {
  const documentHidden = ref<boolean>(document.hidden)
  const handler = () => {
    documentHidden.value = document.hidden
  }
  document.addEventListener('visibilitychange', handler)
  return documentHidden
}
