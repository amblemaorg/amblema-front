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
import { PdfMakeWrapper, Txt, Img } from 'pdfmake-wrapper';
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
  
  public async generatePDF() {
    this.instantiatePdfFonts();

    console.log("pdf data",this.pdfData);

    const pdf = new PdfMakeWrapper();

    pdf.info({
        title: 'AmbLeMario',
        author: 'AmbLeMa',
        subject: 'Anuario',
    });

    pdf.pageSize('LETTER');
    pdf.pageOrientation('landscape');
    
    pdf.add(new Txt('pdf works!').bold().end);

    pdf.add(await new Img('http://157.245.131.248:10506/resources/images/sponsors/5f05f560da299af23c853ce1.jpe').build());
    
    const img_ = await this.getBase64FromImg("../../../assets/images/profile2.png");
    if (img_) pdf.add(await new Img(img_).build());

    pdf.create().open();
    // pdf.create().download('AmbLeMario');
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