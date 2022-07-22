// const content: any = require('../../../../../../assets/images/pdf/');
// export const IMAGE: string = content.img;

import { ImgHelper } from 'src/app/helpers/img.helper'

// List img available
const imgDirectory = '../../../../../../assets/images'

export const pdfImgs = {
  amblelogo: ImgHelper.getBase64FromImg(
    `${imgDirectory}/pdf/open-book.png`,
    imgDirectory,
  ),
}
