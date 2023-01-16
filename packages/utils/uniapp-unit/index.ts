const { titleBarHeight, statusBarHeight } = uni.getSystemInfoSync()

/**
 * rpx转px
 */
const rpxToPx = (rpx: number | string) => {
  const windowWidth = uni.getSystemInfoSync().windowWidth
  return (windowWidth * Number.parseInt(String(rpx))) / 750
}

/**
 * px转rpx
 */
const pxToRpx = (px: number | string) => {
  // ios screenWidth 是正常的, 安卓端 screenWidth 是不正常的,所以用 windowWidth
  // const screenWidth = uni.getSystemInfoSync().screenWidth;
  const windowWidth = uni.getSystemInfoSync().windowWidth
  return (750 * Number.parseInt(String(px))) / windowWidth
}

/**
 * 获取导航栏高度 (默认转 rpx 单位)
 */
const getWindowTop = () => {
  return pxToRpx(uni.getSystemInfoSync().windowTop)
}

/**
 * 获取状态栏高度 (默认转 rpx 单位)
 */
const getStatusBarHeight = () => {
  return pxToRpx(uni.getSystemInfoSync().statusBarHeight)
}

/**
 * 获取页面高度 (默认转 rpx 单位)
 */
const getWindowHeight = () => {
  return pxToRpx(uni.getSystemInfoSync().windowHeight)
}

export {
  rpxToPx,
  pxToRpx,
  getWindowTop,
  getStatusBarHeight,
  getWindowHeight,
  titleBarHeight,
  statusBarHeight
}
