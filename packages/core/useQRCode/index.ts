import qrcode from 'easyqrcodejs'
import { ref, Ref, watch, isRef } from 'vue-demi'
import { isClient } from '../_configurable'

type Text = Ref<string> | string

/**
 * onRenderingStart: 开始渲染钩子
 * onRenderingEnd: 渲染结束钩子
 */
interface useQRCodeOptions {
  onRenderingStart?: (qrCodeOptions: any) => void
  onRenderingEnd?: (qrCodeOptions: any, dataURL: string) => void
  [key: string]: any
}

const defaultUseQRCodeOptions = {
  onRenderingEnd: () => {
    // 渲染完毕钩子
  }
}

/**
 * 根据字符串生成二维码
 * @param text 二维码字符串内容
 * @param options useQRCodeOptions
 * @returns base64 格式的二维码内容
 */
export function useQRCode(text: Text, options?: useQRCodeOptions) {
  const state = ref<string>()

  if (!isClient) return state

  const { onRenderingEnd, ...otherOptions } = {
    ...defaultUseQRCodeOptions,
    ...options
  }

  const Qrcode = new qrcode(document.createElement('div'), {
    text: isRef(text) ? text.value : text,
    ...otherOptions,
    onRenderingEnd(qrCodeOptions: any, dataURL: string) {
      state.value = dataURL
      onRenderingEnd(qrCodeOptions, dataURL)
    }
  })
  if (isRef(text)) {
    watch(text, () => {
      Qrcode.makeCode(text.value)
    })
  }

  return state
}
