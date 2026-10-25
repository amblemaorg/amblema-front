export const IMAGE_MAX_SIDE = 1920;
export const IMAGE_JPEG_QUALITY = 0.82;

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

  /**
   * Single-pass compression of an image data URL before uploading it:
   * limits the longest side and re-encodes photos as JPEG. Images with
   * transparency or few colors (logos) stay PNG. Returns the original when
   * it can't be improved or isn't a raster data URL, and null when the browser
   * can't decode it (invalid image).
   * The yearbook PDF embeds images at 900px max, so 1920px loses nothing there.
   */
  static compressDataUrl(
    dataUrl: string,
    maxSide = IMAGE_MAX_SIDE,
    quality = IMAGE_JPEG_QUALITY,
  ): Promise<string> {
    const isRaster =
      typeof dataUrl === 'string' &&
      dataUrl.startsWith('data:image/') &&
      !/^data:image\/(gif|svg)/.test(dataUrl);
    if (!isRaster || typeof document === 'undefined') {
      return Promise.resolve(dataUrl);
    }
    const sourceMime = dataUrl.substring(5, dataUrl.indexOf(';'));

    return new Promise<string>((resolve) => {
      const img = new Image();
      img.onerror = () => resolve(null);
      img.onload = () => {
        try {
          // Browsers already apply the EXIF orientation when decoding
          const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
          const canvas = ImgHelper.drawScaled(
            img,
            Math.round(img.naturalWidth * scale),
            Math.round(img.naturalHeight * scale),
          );
          const keepPng = sourceMime !== 'image/jpeg' && ImgHelper.isGraphic(canvas);
          const outputMime = keepPng ? 'image/png' : 'image/jpeg';
          const result = keepPng
            ? canvas.toDataURL('image/png')
            : canvas.toDataURL('image/jpeg', quality);

          const notImproved =
            scale === 1 && outputMime === sourceMime && result.length >= dataUrl.length;
          resolve(notImproved ? dataUrl : result);
        } catch (e) {
          console.error('error while compressing image', e);
          resolve(dataUrl);
        }
      };
      img.src = dataUrl;
    });
  }

  // Halving steps avoid the aliasing of a single big downscale on canvas
  private static drawScaled(
    img: HTMLImageElement | ImageBitmap,
    width: number,
    height: number,
  ): HTMLCanvasElement {
    let source: HTMLImageElement | ImageBitmap | HTMLCanvasElement = img;
    let w = img instanceof HTMLImageElement ? img.naturalWidth : img.width;
    let h = img instanceof HTMLImageElement ? img.naturalHeight : img.height;
    do {
      w = Math.max(width, Math.round(w / 2));
      h = Math.max(height, Math.round(h / 2));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(source, 0, 0, w, h);
      source = canvas;
    } while (w > width || h > height);
    return source as HTMLCanvasElement;
  }

  // Transparency or <= 256 colors: logos/diagrams that JPEG would blur
  private static isGraphic(canvas: HTMLCanvasElement): boolean {
    const data = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
    const colors = new Set<number>();
    let fewColors = true;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 255) return true;
      if (fewColors) {
        colors.add((data[i] << 16) | (data[i + 1] << 8) | data[i + 2]);
        fewColors = colors.size <= 256;
      }
    }
    return fewColors;
  }

  // Bytes of the binary file encoded in a base64 data URL
  static dataUrlBytes(dataUrl: string): number {
    const base64 = dataUrl.substring(dataUrl.indexOf(',') + 1);
    const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
    return Math.floor((base64.length * 3) / 4) - padding;
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
