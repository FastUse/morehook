/**
 * x: x轴坐标
 * y: y轴坐标
 * direction: 快捷定义坐标(左上，右上，中间，左下，右下),优先级大于x，y
 * target: 图片在页面的DOM，以防图片在外层被压缩宽高导致传入的x，y与实际不一
 */
interface Actions {
  x?: number
  y?: number
  direction?:
    | 'left-top'
    | 'right-top'
    | 'center'
    | 'left-bottom'
    | 'right-bottom'
  target?: HTMLElement
}

/**
 * 获取图片中任意坐标的像素
 * @param url 图片路径
 * @param actions Actions
 */
export function getImageColor(url: string, actions: Actions): Promise<number[]>

export function getImageColor(
  url: string,
  { x, y, direction, target }: Actions
) {
  const canvas = document.createElement('canvas')
  if (!canvas) return
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const context = canvas.getContext('2d')!
  const image = new Image()
  image.src = url
  image.crossOrigin = 'Anonymous'

  return new Promise(resolve => {
    image.onload = () => {
      let imgW = image.width
      let imgH = image.height
      let _x = x || 0
      let _y = y || 0

      if (target) {
        imgW = target.offsetWidth
        imgH = target.offsetHeight
      }

      canvas.width = imgW
      canvas.height = imgH

      if (direction) {
        switch (direction) {
          case 'left-top':
            _x = 0
            _y = 0
            break
          case 'right-top':
            _x = imgW - 1
            _y = 0
            break
          case 'center':
            _x = imgW / 2
            _y = imgH / 2
            break
          case 'left-bottom':
            _x = 0
            _y = imgH - 1
            break
          case 'right-bottom':
            _x = imgW - 1
            _y = imgH - 1
            break
        }
      }

      context.drawImage(image, 0, 0, imgW, imgH)
      const imageData = context.getImageData(_x, _y, 1, 1).data
      resolve(imageData)
    }
  })
}
