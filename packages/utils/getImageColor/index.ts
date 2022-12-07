interface Actions {
  x: number
  y: number
  target?: HTMLElement
}

export function getImageColor(url: string, actions: Actions): Promise<number[]>

export function getImageColor(url: string, { x, y, target }: Actions) {
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

      if (target) {
        imgW = target.offsetWidth
        imgH = target.offsetHeight
      }

      canvas.width = imgW
      canvas.height = imgH

      context.drawImage(image, 0, 0, imgW, imgH)
      const imageData = context.getImageData(x, y, 1, 1).data
      resolve(imageData)
    }
  })
}
