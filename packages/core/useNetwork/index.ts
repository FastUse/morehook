import { reactive, onMounted, onUnmounted } from 'vue-demi'
import { isClient } from '../_configurable'

const getConnection = () => {
  const nav = navigator as any
  if (typeof nav !== 'object') return null
  return nav.connection || nav.mozConnection || nav.webkitConnection
}

/**
 * since: 在线与不在线最后改变时间
 * online: 网络是否为在线
 * rtt: 当前连接下评估的往返时延
 * type: 设备使用与所述网络进行通信的连接的类型
 * downlink: 有效带宽估算（单位：兆比特/秒）
 * downlinkMax: 最大下行速度（单位：兆比特/秒）
 * saveData: 用户代理是否设置了减少数据使用的选项
 * effectiveType: 网络连接的类型
 */
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

/**
 * 获取当前网络状态
 * @returns NetworkState
 */
export function useNetwork() {
  if (!isClient) return reactive({})

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
