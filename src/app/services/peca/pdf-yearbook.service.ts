import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common"
import { 
    PdfMakeWrapper,
    Img,
    Rect,
    Canvas,
    Polyline,
    Txt,
    Stack,
    Columns,
  } from 'pdfmake-wrapper';
  // import pdfFonts from "pdfmake/build/vfs_fonts";
  import pdfFonts from "../../peca/peca-page/pdf-fonts/custom-fonts"

@Injectable({
  providedIn: 'root',
})
export class PdfYearbookService {
  fontsInstantiated: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  private instantiatePdfFonts() {
    if (!this.fontsInstantiated) {
      // PdfMakeWrapper.setFonts(pdfFonts); // with default pdf font
      PdfMakeWrapper.setFonts(pdfFonts, { // with custom fonts -----
          montserrat: {
            normal: 'Montserrat-Regular.ttf',
            bold: 'Montserrat-ExtraBold.ttf',
            italics: 'Montserrat-Regular.ttf',
            bolditalics: 'Montserrat-Medium.ttf'
          }
      });
      PdfMakeWrapper.useFont('montserrat'); // ----------------------
      
      this.fontsInstantiated = true;
    }
  }

  generateYearbookPdf(pdf_data: any): boolean {
    const generateThisPdf = async () => {
        clearInterval(interval);
        this.instantiatePdfFonts(); // instantianting pdf font family
        const pdf = new PdfMakeWrapper(); // pdf document definition instance
        const pdfPageSizes = {
          width: 792,
          height: 612
        };

        const pdfData = pdf_data ? pdf_data : {};
  
        // pdf metadata
        pdf.info({
            title: 'AmbLeMario',
            author: 'AmbLeMa',
            subject: 'Anuario',
        });
  
        // pdf page configurations
        pdf.pageSize('LETTER');
        pdf.pageOrientation('landscape');
        
        /**
         * pdf background, when cover page the background is blue
         */
        pdf.background((currentPage, pageSize) => {
          pdfPageSizes.width = pageSize.width;
          pdfPageSizes.height = pageSize.height;
  
          if (currentPage === 1) 
            return new Canvas([
              new Rect(0, [pdfPageSizes.width, pdfPageSizes.height]).color('#00809A').end
            ]).end
  
          return null
        });
  
        // local images to get transformed into base64 format
        const open_book = await this.getBase64FromImg("../../../assets/images/pdf/open-book.png");
        const amble_logo = await this.getBase64FromImg("../../../assets/images/pdf/amblelogo.png");
        // const sponsor_logo = await this.getBase64FromImg("../../../assets/images/pdf/sponsorlogo.png");
  
        // pdf images library
        if (pdfData["sponsorLogo"]) pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
          sponsorLogo: pdfData["sponsorLogo"] ? await new Img(pdfData.sponsorLogo).build() : null,
        });
        else pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
        });
  
        // loading images for pdf footer use
        // const cover_footer = open_book ? await new Img('openBook', true).width(990).margin([-105,-258,0,0]).build() : null;
        const cover_footer = open_book ? await new Img('openBook', true).width(pdfPageSizes.width+180).margin([-80,-255,0,0]).build() : null;
  
        /**
         * pdf footer, when cover page opened book appears
         */
        pdf.footer((currentPage, pageSize) => {
          if (currentPage === 1) 
            return cover_footer;
  
          return null
        });
  
        //* PDF CONTENT blocks --------------------------------------------------
        pdf.add(new Stack([ 
          pdfData["schoolYear"] ? new Txt(pdfData.schoolYear).fontSize(21).margin([0,0,0,5]).end : null,
          pdfData["sponsorName"] ? pdfData.sponsorName.toUpperCase() : null 
        ]).alignment('center').relativePosition(0,-20).style('coverHeader').bold().end);
  
        if (amble_logo) pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
          .closePath().color('#fff').end]).absolutePosition(45,0).end);
        if (pdfData["sponsorLogo"]) pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
          .closePath().color('#fff').end]).absolutePosition(pdfPageSizes.width-135,0).end);
  
        if (amble_logo) pdf.add(await new Img('ambleLogo', true).fit([72,72]).absolutePosition(54,15).build());
        if (pdfData["sponsorLogo"]) pdf.add(await new Img('sponsorLogo', true).fit([72,72]).absolutePosition(pdfPageSizes.width-126,15).build());
  
        pdf.add(new Stack([ 
          new Txt('AmbLeMario').bold().fontSize(62).end, 
          pdfData["schoolName"] ? new Txt(pdfData.schoolName).bold().fontSize(16).end : null, 
          pdfData["schoolName"] ? new Canvas([
            new Rect(0, [ (185 * pdfData.schoolName.length) / 21 , 1]).color('#81b03e').end
          ]).end : null,
          pdfData["schoolCity"] ? new Txt(pdfData.schoolCity).bold().margin([0,4]).end : null, 
        ])
        .alignment('center').margin([0,135,0,0]).color('#fff').end);
        
        pdf.add(new Txt('Indice').pageBreak('before').end);
        //* endOf PDF CONTENT blocks --------------------------------------------
  
        pdf.styles({
          coverHeader: {
            fontSize: 16,
            color: '#fff',
          },
          headerSchoolName: {
            fontSize: 16,
            decoration: 'underline',
            decorationColor: '#81b03e',
          },
          subtitle: {
            fontSize: 16,
          },
          usertype: {
            fontSize: 16,
          },
          username: {
            fontSize: 16,
          },
          heading: {
            fontSize: 16,
          },
          subheading: {
            fontSize: 16,
          },
        });
  
        // PDF saving methods --
        pdf.create().open();
        // pdf.create().download('AmbLeMario');
      };
  
      let interval = null;
  
      try {
        generateThisPdf();
        return false;
      } catch (error) {
        interval = setInterval(() => {
          try {
            generateThisPdf();
            return false;
          } catch (error) {
            // TODO --
          }
        }, 2000);
      }
  }

  /**
   * transform an image file into base 64 format
   * 
   * @param imgSrc source of the image to be transformed into base 64 format
   */
  private async getBase64FromImg(imgSrc): Promise<any> {
    return new Promise<any>((resolve,reject)=>{
      let dataURL = null;
      try {
        let canvas = this.document.createElement("canvas");
        const img = this.document.createElement("img");
        const ctx = canvas.getContext('2d');

        img.src = imgSrc;      

        img.onload = () => {
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          dataURL = canvas.toDataURL('image/png');        
          canvas = null;
          resolve(dataURL)
        }

      }catch (e) {
        console.log('error while processing base64 conversion', e);
        resolve(dataURL)
      }
    });    
  }

}



// TO USE CUSTOM FONT, do the following:
//
// - npm install pdfmake-font-generator --save-dev
// - pdfmakefg /path/of/your/custom/fonts /path/of/the/output/file.js , i.e: 
//      - pdfmakefg ./my-fonts ./pdf/fonts/custom-fonts.js
// - import pdfFonts from "./pdf/fonts/custom-fonts"; // The path of your custom fonts
//
// ----------------------------------------
// PdfMakeWrapper.setFonts(pdfFonts, {
//   montserrat: {
//     normal: 'Montserrat-Regular.ttf',
//     bold: 'Montserrat-ExtraBold.ttf',
//     italics: 'Montserrat-Regular.ttf',
//     bolditalics: 'Montserrat-Medium.ttf'
//   }
// });
// PdfMakeWrapper.useFont('montserrat');
// ----------------------------------------
//