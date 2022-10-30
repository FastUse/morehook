import { reactive, onMounted, onUnmounted } from 'vue-demi'

const getConnection = () => {
  const nav = navigator as any
  if (typeof nav !== 'object') return null
  return nav.connection || nav.mozConnection || nav.webkitConnection
}

export interface NetworkState {
  since?: number | Date
  online?: boolean
  rtt?: number
  type?: string
  downlink?: number
  saveData?: boolean
  downlinkMax?: number
  effectiveType?: string
}

const handlerSetConnection = () => {
  const connection = getConnection()
  return {
    rtt: connection.rtt,
    type: connection.type,
    saveData: connection.saveData,
    downlink: connection.downlink,
    downlinkMax: connection.downlinkMax,
    effectiveType: connection.effectiveType
  } as NetworkState
}

export function useNetwork() {
  const state = reactive<NetworkState>({
    online: navigator.onLine,
    since: Date.now(),
    ...handlerSetConnection()
  })

  // 开启网络
  const onOnline = () => {
    state.online = true
    state.since = Date.now()
  }

  // 关闭网络
  const onOffline = () => {
    state.online = false
    state.since = Date.now()
  }

  // 更新网络状态
  const onConnectionChange = <T extends keyof NetworkState>() => {
    const connectionData = handlerSetConnection()
    Object.keys(connectionData).forEach(key => {
      const propertyKey = key as T
      state[propertyKey] = connectionData[propertyKey]
    })
  }

  onMounted(() => {
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    getConnection()?.addEventListener('change', onConnectionChange)
  })

  onUnmounted(() => {
    window.removeEventListener('online', onOnline)
    window.removeEventListener('offline', onOffline)
    getConnection()?.removeEventListener('change', onConnectionChange)
  })

  return state
}
