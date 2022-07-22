export class ImgHelper {
  /**
   * transform an image file into base 64 format
   *
   * @param imgSrc source of the image to be transformed into base 64 format
   */

  static startBase64FormattingFromImg = (imgSrc): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      let dataURL = null
      try {
        let canvas = document.createElement('canvas')
        const img = document.createElement('img')
        const ctx = canvas.getContext('2d')

        img.src = imgSrc

        img.onload = () => {
          canvas.height = img.height
          canvas.width = img.width
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

          dataURL = canvas.toDataURL('image/png')
          canvas = null
          resolve(dataURL)
        }
      } catch (e) {
        console.error('error while processing base64 conversion', e)
        resolve(dataURL)
      }
    })
  }

  static getBase64FromImg = (imgSrc, imgDir = '') => {
    return async () => {
      const dataURL = await ImgHelper.startBase64FormattingFromImg(
        `${imgDir}${imgSrc}`,
      )
      // console.log(dataURL)

      return dataURL
    }
  }
}
