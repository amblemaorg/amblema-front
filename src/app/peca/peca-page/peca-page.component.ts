import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  Inject
} from "@angular/core";
import { PageBlockFactory } from "./blocks/page-block-factory";
import { PageBlockComponent } from "./blocks/page-block.component";
import { Location, DOCUMENT } from "@angular/common"
import { ActivatedRoute } from "@angular/router";
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
import pdfFonts from "./pdf-fonts/custom-fonts"

@Component({
  selector: "peca-page",
  templateUrl: "./peca-page.component.html",
  styleUrls: ["./peca-page.component.scss"]
})
export class PecaPageComponent {
  protected pageBlockFactory: PageBlockFactory;
  header: { title: string; download: any };
  blocks: PageBlockComponent[];
  blockInstances = new Map<string, PageBlockComponent>();

  isFromSteps: boolean;
  fontsInstantiated: boolean;
  pdfData: any;

  constructor(
    protected factoryResolver: ComponentFactoryResolver, 
    protected location?: Location,
    protected route?: ActivatedRoute,
    @Inject(DOCUMENT) protected document?: Document
  ) {}

  public instantiateComponent(config) {
    this.header = config.header;
    this.blocks = config.blocks;
    this.pageBlockFactory = new PageBlockFactory(this.factoryResolver);
  }

  public changeComponentHeader(header) {
    this.header.title = header;
  }
  public instantiateBlocks(container: ViewContainerRef, reSet: boolean = false) {
    this.blocks.map((block, i) => {
      const pageBlockComponentFactory = this.pageBlockFactory.createPageBlockFactory(
        block.component
      );

      if (reSet && container.length > 0) container.clear();
      
      const pageBlockComponent = container.createComponent(
        pageBlockComponentFactory
      );
      const settings = {
        settings: block.settings,
        factory: this.pageBlockFactory
      };
      pageBlockComponent.instance.setSettings(settings);
      this.blockInstances.set(
        block.name || `block${i}`,
        pageBlockComponent.instance
      );
    });
}

  public setBlockData(blockName: string, blockData: any) {
    if (this.blockInstances.has(blockName)) {
      const blockComponent = this.blockInstances.get(blockName);
      blockComponent.setData(blockData);
    }
  }

  public setBlockFetcherUrls(blockName: string, urls: any) {
    if (this.blockInstances.has(blockName)) {
      const blockComponent = this.blockInstances.get(blockName);
      blockComponent.setFetcherUrls(urls);
    }
  }

  /**
   * @param {string} blockName - block name property
   * @param {object} urlGenerators - Object with functions to generate url for each http method
   * @param {function} urlGenerators.get
   * @param {function} urlGenerators.post
   * @param {function} urlGenerators.put
   * @param {function} urlGenerators.patch
   * @param {function} urlGenerators.delete
   * @param {...string} generatorsProps - block properties path (properties must be separeted by .)
   *   to use as argument for url generators functions in order of precedence
   *   Example 'settings.data.id', 'settings.data.teacher.id', etc
   *   will match with
   *   {
   *      put: ('settings.data.id', 'settings.data.teacher.id') => {}
   *   }
   *   in urlGenerators object
   */
  public createAndSetBlockFetcherUrls(
    blockName: string,
    urlGenerators: any,
    ...generatorsProps
  ) {
    const { get, post, put, patch, delete: deleteFn } = urlGenerators;

    if (this.blockInstances.has(blockName)) {
      const formComponent = this.blockInstances.get(blockName);

      const args = generatorsProps.map(prop => {
        const propertyPath = prop.split(".");
        return this.accessPropertyByArrayPath(formComponent, propertyPath);
      });

      const urls = {
        get: typeof get === "function" ? get(...args) : "",
        post: typeof post === "function" ? post(...args) : "",
        put: typeof put === "function" ? put(...args) : "",
        patch: typeof patch === "function" ? patch(...args) : "",
        delete: typeof deleteFn === "function" ? deleteFn(...args) : ""
      };
      formComponent.setFetcherUrls(urls);
    }
  }

  private accessPropertyByArrayPath(object, properties: string[]): any {
    return properties.reduce((prevObj: any, prop) => {
      return prevObj.hasOwnProperty(prop) ? prevObj[prop] : null;
    }, object);
  }

  goToSteps() {
    this.location.back();
  }

  public setPdfData(pdfData: any) {
    this.pdfData = pdfData;
  }
  
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
  
  //#region Generate PDF
  public async generatePDF() {
    this.instantiatePdfFonts(); // instantianting pdf font family
    const pdf = new PdfMakeWrapper(); // pdf document definition instance
    const pdfPageSizes = {
      width: 792,
      height: 612
    };

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
    pdf.images({
      openBook: open_book ? await new Img(open_book).build() : null,
      ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
      sponsorLogo: this.pdfData["sponsorLogo"] ? await new Img(this.pdfData.sponsorLogo).build() : null,
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
      this.pdfData["schoolYear"] ? new Txt(this.pdfData.schoolYear).fontSize(21).margin([0,0,0,5]).end : null,
      this.pdfData["sponsorName"] ? this.pdfData.sponsorName.toUpperCase() : null 
    ]).alignment('center').relativePosition(0,-20).style('coverHeader').bold().end);

    pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
      .closePath().color('#fff').end]).absolutePosition(45,0).end);
    pdf.add(new Canvas([new Polyline([{ x: 0, y: 0 },{ x: 0, y: 90 },{ x: 41, y: 115 },{ x: 45, y: 116 },{ x: 49, y: 115 },{ x: 90, y: 90 },{ x: 90, y: 0 }])
      .closePath().color('#fff').end]).absolutePosition(pdfPageSizes.width-135,0).end);

    pdf.add(await new Img('ambleLogo', true).fit([72,72]).absolutePosition(54,15).build());
    pdf.add(await new Img('sponsorLogo', true).fit([72,72]).absolutePosition(pdfPageSizes.width-126,15).build());

    pdf.add(new Stack([ 
      new Txt('AmbLeMario').bold().fontSize(62).end, 
      this.pdfData["schoolName"] ? new Txt(this.pdfData.schoolName).bold().fontSize(16).end : null, 
      this.pdfData["schoolName"] ? new Canvas([
        new Rect(0, [ (185 * this.pdfData.schoolName.length) / 21 , 1]).color('#81b03e').end
      ]).end : null,
      this.pdfData["schoolCity"] ? new Txt(this.pdfData.schoolCity).bold().margin([0,4]).end : null, 
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
      }
    });

    // PDF saving methods --
    pdf.create().open();
    // pdf.create().download('AmbLeMario');
  }
  //#endregion

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