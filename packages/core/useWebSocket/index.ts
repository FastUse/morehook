import { Ref, ref } from 'vue-demi'
import { isClient } from '../_configurable'

/**
 * manual: 是否手动连接 (默认false)
 * reconnectLimit: 重连数
 * reconnectInterval: 重连间隔时间
 * onOpen: 打开连接回调
 * onClose: 关闭连接回调
 * onMessage: 发送消息回调
 * onError: 连接报错回调
 */
interface UseWebSocketOptions {
  manual?: boolean // 是否手动连接（默认自动）
  reconnectLimit?: number // 重连数
  reconnectInterval?: number // 重连间隔时间
  onOpen?: (event: WebSocketEventMap['open']) => void
  onClose?: (event: WebSocketEventMap['close']) => void
  onMessage?: (event: WebSocketEventMap['message']) => void
  onError?: (event: WebSocketEventMap['error']) => void
}
enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3
}
/**
 * connect: 连接方法
 * disconnect: 关闭连接方法
 * sendMessage: 发送消息方法
 * readyState: 当前连接状态
 * latestMessage: 最后返回的消息
 * webSocketIns: 连接实例
 */
interface Result {
  connect: () => void
  disconnect: () => void
  sendMessage: WebSocket['send']
  readyState: Ref<ReadyState>
  latestMessage: Ref<WebSocketEventMap['message'] | undefined>
  webSocketIns: Ref<WebSocket | undefined>
}

const defaultOptions = {
  manual: false,
  reconnectLimit: 3,
  reconnectInterval: 3000,
  onOpen: () => {
    //
  },
  onClose: () => {
    //
  },
  onMessage: () => {
    //
  },
  onError: () => {
    //
  }
}

/**
 * 管理 websocket
 * @param socketUrl 连接地址
 * @param options UseWebSocketOptions
 * @return Result
 */
export function useWebSocket(
  socketUrl: string,
  options?: UseWebSocketOptions
): Result

export function useWebSocket(socketUrl: string, options?: UseWebSocketOptions) {
  const {
    manual,
    reconnectLimit,
    reconnectInterval,
    onOpen,
    onClose,
    onMessage,
    onError
  } = { ...defaultOptions, ...options }

  if (!socketUrl || typeof socketUrl !== 'string') {
    throw new Error('useWebSocket require string socketUrl')
  }

  const run = () => {
    socket.value = new WebSocket(socketUrl)
    socket.value.addEventListener('open', function (event) {
      readyState.value = ReadyState.Open
      onOpen(event)
    })

    socket.value.addEventListener('message', function (event) {
      latestMessage.value = event
      onMessage(event)
    })

    socket.value.addEventListener('error', function (event) {
      console.log('error ', event)
      reconnect()
      onError(event)
    })
    socket.value.addEventListener('close', function (event) {
      readyState.value = ReadyState.Closed
      onClose(event)
    })
  }

  // 连接
  const connect = () => {
    if (readyState.value !== ReadyState.Open) {
      reconnectCount.value = 0
      run()
    }
  }

  // 错误后再次连接
  const reconnect = () => {
    if (reconnectCount.value >= reconnectLimit) return
    setTimeout(() => {
      reconnectCount.value++
      run()
    }, reconnectInterval)
  }

  // 取消连接
  const disconnect = () => {
    if (
      (readyState.value === ReadyState.Connecting ||
        readyState.value === ReadyState.Open) &&
      socket.value
    ) {
      readyState.value = ReadyState.Closing
      socket.value.close()
    }
  }

  // 发送消息
  const sendMessage = (
    data: string | ArrayBufferLike | Blob | ArrayBufferView
  ) => {
    if (data && socket.value && readyState.value === ReadyState.Open)
      socket.value.send(data)
  }

  if (!isClient) {
    return {
      latestMessage: '',
      readyState: -1,
      connect: () => {
        //
      },
      disconnect: () => {
        //
      },
      sendMessage: () => {
        //
      },
      webSocketIns: ref()
    }
  }

  const readyState = ref<number>(ReadyState.Connecting) // 连接状态
  const reconnectCount = ref<number>(0) // 连接数
  const socket = ref<WebSocket>() // socket 对象
  const latestMessage = ref<WebSocketEventMap['message']>() // 最近消息

  if (!manual) connect()

  return {
    latestMessage,
    readyState,
    connect,
    disconnect,
    sendMessage,
    webSocketIns: socket
  }
}
