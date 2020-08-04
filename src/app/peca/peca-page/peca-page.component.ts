import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { PageBlockFactory } from "./blocks/page-block-factory";
import { PageBlockComponent } from "./blocks/page-block.component";
import { Location } from "@angular/common"
import { ActivatedRoute } from "@angular/router";

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

  constructor(
    protected factoryResolver: ComponentFactoryResolver, 
    protected location?: Location,
    protected route?: ActivatedRoute
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

  /*
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

  public generatePDF() {
    
  }
}