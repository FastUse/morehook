const {
  uniPlatform,
  titleBarHeight,
  statusBarHeight,
  platform,
  windowWidth,
  screenHeight,
  navigationBarHeight
} = uni.getSystemInfoSync()

const isAlipayMp = uniPlatform === 'mp-alipay' // 是否是支付宝小程序平台

const isWeixinMp = uniPlatform === 'mp-weixin' // 是否是微信小程序平台

const isWeb = uniPlatform === 'web' // 是否是h5

const isIos = platform === 'ios' // 是否是IOS

const isAndroid = platform === 'android' // 是否是安卓设备

const ua = window?.navigator?.userAgent?.toLowerCase?.()

const uaMatch = ua?.match(/micromessenger/i)

const isWechat = uaMatch && uaMatch[0] ? uaMatch[0] === 'micromessenger' : false // 是否在微信客户端中

const isWechatH5 = isWechat && isWeb // 是微信客户端且是 H5

const isNoWechatH5 = !isWechat && isWeb // 是不在微信客户端且是 H5

const isWechatIos = isWeixinMp && isIos // 是微信小程序且是IOS平台

export {
  isWechatIos,
  isAlipayMp,
  isWeixinMp,
  isIos,
  isWeb,
  titleBarHeight,
  statusBarHeight,
  navigationBarHeight,
  platform,
  uniPlatform,
  isAndroid,
  isWechat,
  isWechatH5,
  isNoWechatH5,
  windowWidth,
  screenHeight
}
