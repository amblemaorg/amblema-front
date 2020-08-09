import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common"
import { 
    PdfMakeWrapper,
    Img,
    Rect,
    Canvas,
    Polyline,
    Txt,
    Toc,
    TocItem,
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

        const colors = {
            blue: '#00809A',
            green: '#81B03E',
            white: '#fff',
            darkGreen: '#337550',
        };

        const pdfData = pdf_data ? pdf_data : {};
  
        //* pdf metadata----------------------------------------
        pdf.info({
            title: 'AmbLeMario',
            author: 'AmbLeMa',
            subject: 'Anuario',
        });
  
        //* pdf page configurations-----------------------------
        pdf.pageSize('LETTER');
        pdf.pageOrientation('landscape');

        pdf.pageMargins([ 70, 60, 70, 60 ]);
        
        //? pdf background, when cover page the background is blue------------------------
        pdf.background((currentPage, pageSize) => {
          pdfPageSizes.width = pageSize.width;
          pdfPageSizes.height = pageSize.height;
  
          if (currentPage === 1) 
            return new Canvas([
              new Rect(0, [pdfPageSizes.width, pdfPageSizes.height]).color(colors.blue).end
            ]).end
          else if (currentPage > 2)
            return new Txt(this.getPageNumberFormated(`${currentPage}`)).bold().absolutePosition(20,pdfPageSizes.height-46).color(colors.darkGreen).end;
  
          return null
        });
        //? ---------------
  
        //* local images to get transformed into base64 format---------------------------------------------
        const open_book = await this.getBase64FromImg("../../../assets/images/pdf/open-book.png");
        const amble_logo = await this.getBase64FromImg("../../../assets/images/pdf/amblelogo.png");        
        // const sponsor_logo = await this.getBase64FromImg("../../../assets/images/pdf/sponsorlogo.png");
  
        //* pdf images library---------------------------------------------------------------------
        if (pdfData["sponsorLogo"]) pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
          sponsorLogo: pdfData["sponsorLogo"] ? await new Img(pdfData.sponsorLogo).build() : null,
        });
        else pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
        });
  
        //* loading images for pdf footer use-------------------------------------------------------------------------------------------------------------------
        // const cover_footer = open_book ? await new Img('openBook', true).width(990).margin([-105,-258,0,0]).build() : null;
        const cover_footer = open_book ? await new Img('openBook', true).width(pdfPageSizes.width+180).margin([-80,-233,0,0]).build() : null;
        const footer_amble_logo = amble_logo ? await new Img('ambleLogo', true).fit([42,42]).relativePosition(pdfPageSizes.width-60,-13).build() : null;
        const footer_sponsor_logo = pdfData["sponsorLogo"] ? await new Img('sponsorLogo', true).fit([65,30]).relativePosition(pdfPageSizes.width-140,-3).build() : null;
        //* FOOTER . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
         /* pdf footer, when cover page opened book appears
         */
        pdf.footer((currentPage, pageSize) => {
          if (currentPage === 1) 
            return cover_footer;
          else 
            return new Stack([
                footer_amble_logo,
                footer_sponsor_logo,
                new Canvas([
                    new Rect(0, [pdfPageSizes.width, 24]).color(colors.green).end
                ]).relativePosition(0,36).end
            ]).end;
        });        

        //* COVER PAGE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        pdf.add(new Stack([ 
          pdfData["schoolYear"] ? new Txt(pdfData.schoolYear).fontSize(21).margin([0,0,0,5]).end : null,
          pdfData["sponsorName"] ? pdfData.sponsorName.toUpperCase() : null 
        ]).alignment('center').relativePosition(0,-20).style('coverHeader').bold().end);
  
        if (amble_logo) pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
          .closePath().color(colors.white).end]).absolutePosition(45,0).end);
        if (pdfData["sponsorLogo"]) pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
          .closePath().color(colors.white).end]).absolutePosition(pdfPageSizes.width-135,0).end);
  
        if (amble_logo) pdf.add(await new Img('ambleLogo', true).fit([72,72]).absolutePosition(54,15).build());
        if (pdfData["sponsorLogo"]) pdf.add(await new Img('sponsorLogo', true).fit([72,72]).absolutePosition(pdfPageSizes.width-126,15).build());
  
        pdf.add(new Stack([ 
          new Txt('AmbLeMario').bold().fontSize(62).end, 
          pdfData["schoolName"] ? new Txt(pdfData.schoolName).bold().fontSize(16).end : null, 
          pdfData["schoolName"] ? new Canvas([
            new Rect(0, [ (185 * pdfData.schoolName.length) / 21 , 1]).color(colors.green).end
          ]).end : null,
          pdfData["schoolCity"] ? new Txt(pdfData.schoolCity).bold().margin([0,4]).end : null, 
        ])
        .alignment('center').margin([0,135,0,0]).color(colors.white).end);

        //* INDEX ----------------------------------------------------------------------------
        pdf.add(
          new Toc(
            new Txt('Indice').style('highlight').margin([0,0,0,15]).pageBreak('before').end
          ).end
        );

        //? PDF CONTENT VARIABLES -----------------------------------------------
        const menu_item_margin = 6;
        const column_split_1 = 1135;
        const column_split_2 = 997;
        const column_gap = 70;
        const column_style = 'text';
        const img_left_top_width = {width: 288, height: 160};
        const img_left_top = {x: 432, y: 63};
        const u_name_relpos = {x: 0, y: -4};
        const u_name_margin = 30;

        //* PDF CONTENT blocks ------------------------------------------------------------------------------------------------------------
        // HISTORICAL REVIEW ...................................................
        if (pdfData["historicalReviewText"] || pdfData["historicalReviewImg"]) {
          pdf.add(new TocItem(
            new Txt(pdfData.historicalReviewName).style('highlight').margin([0,0,0,10]).pageBreak('before').end
          ).tocStyle({ bold: true, italics: true }).tocMargin([0,0,0,menu_item_margin]).end,);

          if (pdfData["historicalReviewText"]) pdf.add(new Columns(
            this.getColums(pdfData.historicalReviewText, column_split_1, pdf, pdfData["historicalReviewImg"] ? true : false)
          ).columnGap(column_gap).style(column_style).end);    
          if (pdfData["historicalReviewImg"]) pdf.add(await new Img(pdfData.historicalReviewImg).fit([img_left_top_width.width, img_left_top_width.height]).absolutePosition(img_left_top.x, img_left_top.y).build());
        }

        // SPONSOR ..............................................................
        if (pdfData["sponsorName"] && (pdfData["sponsorLogo"] || pdfData["sponsorText"]) ) {
          pdf.add(new Stack([
            new TocItem(
              new Txt('Padrino').color(colors.blue).style('subHeading').italics().end
            ).tocStyle({ bold: true, italics: true }).tocMargin([0,0,0,menu_item_margin]).end,
            ...this.getUserNameOneOrTwoLines(pdfData.sponsorName, u_name_relpos)
          ]).margin([0,0,0,u_name_margin]).pageBreak('before').end);
          /* if (pdfData["sponsorText"])  */pdf.add(new Columns(
            this.getColums(/* pdfData.sponsorText */'gjghhfhgfhgfhg bhjhfhgfghf', column_split_1, pdf, pdfData["sponsorLogo"] ? true : false)
          ).columnGap(column_gap).style(column_style).end);    
          if (pdfData["sponsorLogo"]) pdf.add(await new Img('sponsorLogo', true).fit([img_left_top_width.width, img_left_top_width.height]).absolutePosition(img_left_top.x, img_left_top.y).build()); 
        }

        // COORDINATOR REVIEW ...................................................
        if (pdfData["coordinatorName"] && (pdfData["coordinatorImg"] || pdfData["coordinatorText"]) ) {
          pdf.add(new Stack([
            new TocItem(
              new Txt('Coordinador').color(colors.blue).style('subHeading').italics().end
            ).tocStyle({ bold: true, italics: true }).tocMargin([0,0,0,menu_item_margin]).end,
            ...this.getUserNameOneOrTwoLines(pdfData.coordinatorName, u_name_relpos)
          ]).margin([0,0,0,u_name_margin]).pageBreak('before').end);
          if (pdfData["coordinatorText"]) pdf.add(new Columns(
            this.getColums(pdfData.coordinatorText, column_split_1, pdf, pdfData["coordinatorImg"] ? true : false)
          ).columnGap(column_gap).style(column_style).end);    
          if (pdfData["coordinatorImg"]) pdf.add(await new Img(pdfData.coordinatorImg).fit([img_left_top_width.width, img_left_top_width.height]).absolutePosition(img_left_top.x, img_left_top.y).build()); 
        }

        // SCHOOL REVIEW ........................................................



        pdf.add(new Stack([
          new TocItem(
            new Txt('Otra pagina').color(colors.blue).style('subHeading').italics().end
          ).tocStyle({ bold: true, italics: true }).tocMargin([0,0,0,menu_item_margin]).end,
          new Txt('User Name').style(['highlight','userName']).relativePosition(u_name_relpos.x, u_name_relpos.y).end
        ]).margin([0,0,0,u_name_margin]).pageBreak('before').end);
        pdf.add(new Columns(
          this.getColums(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemolestie consequat, vel illum dolore eufeugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore tefeugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor inh. endrerit in vulputate velit essemo. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemo`, column_split_1, pdf, true)
        ).columnGap(column_gap).style(column_style).end);    
        if (pdfData["sponsorLogo"]) pdf.add(await new Img('sponsorLogo', true).fit([img_left_top_width.width, img_left_top_width.height]).absolutePosition(img_left_top.x, img_left_top.y).build());
                
        pdf.add(new Stack([
          new TocItem(
            new Txt('Ultima pagina').style(['highlight','heading']).end
          ).tocStyle({ bold: true, italics: true }).tocMargin([0,0,0,menu_item_margin]).end,
          (true) ? new Canvas([
            new Rect(0, [195, 1]).color(colors.blue).end
          ]).alignment('center').relativePosition(0,3).end : null,
          (true) ? new Txt('Analisis y resultados').style(['heading','subHeading']).relativePosition(0,8).end : null
        ]).color(colors.blue).margin([0,0,0,(true) ? 53 : 35]).pageBreak('before').end);
        pdf.add(new Columns(
          this.getColums(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemolestie consequat, vel illum dolore eufeugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore tefeugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemo. Ut wisi enim ad minimveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip exea commodo consequat. Duis autem vel eumiriure dolor in hendrerit in vulputate velit essemo`, column_split_2, pdf)
        ).columnGap(column_gap).style(column_style).end);  
        //* endOf PDF CONTENT blocks ------------------------------------------------------------------------------------------------------
  
        pdf.styles({
          coverHeader: {
            fontSize: 16,
            color: colors.white,
          },
          headerSchoolName: {
            fontSize: 16,
            decoration: 'underline',
            decorationColor: colors.green,
          },
          highlight: {
            fontSize: 18,
            color: colors.blue,
            bold: true,
          },
          userName: {
            fontSize: 22,            
          },
          heading: {
            fontSize: 25,
            alignment: 'center',
          },
          subHeading: {
            fontSize: 13,
            bold: true,
          },
          text: {
            alignment: 'justify',
            bold: true,
            italics: true,            
          }
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
        console.error('error while processing base64 conversion', e);
        resolve(dataURL)
      }
    });    
  }

  private getPageNumberFormated(number: string): string {
    return number.length > 1 ? number : `0${number}`
  }

  private getParagraph(text_: string, pdf: any): any[] {
    let printed = false;

    return text_ && text_.length > 0 ? text_.split(/\n\r+|\r\n+|\r+|\n+|\\r+|\\n+/).reduce(
      (finalText,line) => {              
        if (line.length > 0 && printed) finalText.push(pdf.ln(), new Txt(line).end);
        if (line.length > 0 && !printed) { printed = true; finalText.push(new Txt(line).end); }
        return finalText
      },[]) : null
  }

  private getColums(text_: string, splitAt: number, pdf: any, hasImg: boolean = false): any[] {
    let counter = 0;
    const index = text_.split("").reduce((pos,ch,i)=>{    	
    	if (!ch.match(/\n|\r/)) counter++;
      if (counter === splitAt) pos = i;
      return pos
    },-1);
    
    let half1 = index !== -1 ? text_.slice(0,index) : text_;
    let half2 = index !== -1 ? text_.slice(index) : '';

    const h1Macth = !half1.substring(half1.length-1).match(/[a-z]/i) ? false : true;
    const h2Macth = !half2.substring(0,1).match(/[a-z]/i) ? false : true;

    if (h1Macth && h2Macth) half1 = half1 + '-'; 
    else if (h1Macth && half2.substring(0,1)==='.') {
      half1 = half1 + '.';
      half2 = half2.replace('.', '');
    }

    return [
      new Stack(this.getParagraph(half1, pdf)).end, 
      half2 && half2.length > 0 ? new Stack(this.getParagraph(
        half2.length === 1 
          ? (half2.match(/[a-z]/i) 
              ? half2 : '') 
          : half2
        , pdf)
      ).relativePosition(0, hasImg ? 135 : 0).end : null
    ]
  }

  private getUserNameOneOrTwoLines(name, u_name_relpos): any[] {
    const name_ = name.length > 26 ? name.substring(0, 26) + '..' : name;

    return [new Txt(name_).style(['highlight','userName']).relativePosition(u_name_relpos.x, u_name_relpos.y).end]
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