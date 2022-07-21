// const content: any = require('../../../../../../assets/images/pdf/');
// export const IMAGE: string = content.img;

/**
 * transform an image file into base 64 format
 *
 * @param imgSrc source of the image to be transformed into base 64 format
 */
// const  getBase64FromImg = async(imgSrc): Promise<any> => {
//   return new Promise<any>((resolve, reject) => {
//     let dataURL = null;
//     try {
//       let canvas = document.createElement("canvas");
//       const img = document.createElement("img");
//       const ctx = canvas.getContext("2d");

//       img.src = imgSrc;

//       img.onload = () => {
//         canvas.height = img.height;
//         canvas.width = img.width;
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//         dataURL = canvas.toDataURL("image/png");
//         canvas = null;
//         resolve(dataURL);
//       };
//     } catch (e) {
//       console.error("error while processing base64 conversion", e);
//       resolve(dataURL);
//     }
//   });
// }

// Utils to become img to Base64
const startBase64FormattingFromImg = (imgSrc): Promise<any> => {
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

const getBase64FromImg = (imgSrc, imgDir = '') => {
  return async () => {
    const dataURL = await startBase64FormattingFromImg(`${imgDir}${imgSrc}`)
    console.log(dataURL)
    return dataURL
  }
}

// List img available
const imgDirectory = '../../../../../../assets/images'

const pdfImgs = {
  amblelogo: getBase64FromImg(
    `${imgDirectory}/pdf/open-book.png`,
    imgDirectory,
  ),
}

export const { amblelogo } = pdfImgs
