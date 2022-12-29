/**
 * 下载文件
 * @param url 文件远程路径
 * @param fileName 下载的文件名
 */
export function downloadFile(url: string, fileName?: string): void

export async function downloadFile(url: string, fileName?: string) {
  if (!url) return
  const responsePromise = await fetch(url)
  const blob = await responsePromise.blob()
  const objectURL = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = objectURL
  if (!fileName) {
    const nameArr = url.split('.')
    fileName = nameArr[nameArr.length - 2]
  }
  a.download = fileName
  a.click()
  a.remove()
}
