import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector
} from '@angular/core';
import { PageBlockFactory } from './blocks/page-block-factory';

@Component({
  selector: 'peca-page',
  templateUrl: './peca-page.component.html',
  styleUrls: ['./peca-page.component.scss']
})
export class PecaPageComponent {
  protected pageBlockFactory: PageBlockFactory;
  // protected factoryResolver: ComponentFactoryResolver;
  header: { title: string ,download:any}
  blocks: { component: string, settings: any[] }[]

  constructor(protected factoryResolver: ComponentFactoryResolver) { }

  public instantiateComponent(config) {
    this.header = config.header;
    this.blocks = config.blocks;
    this.pageBlockFactory = new PageBlockFactory(this.factoryResolver);
  }

  public instantiateBlocks(container: ViewContainerRef) {
    this.blocks.map(block => {
      const pageBlockComponentFactory = this.pageBlockFactory.createPageBlockFactory(block.component);
      const pageBlockComponent = container.createComponent(pageBlockComponentFactory);
      const settings = { settings: block.settings, factory: this.pageBlockFactory }
      pageBlockComponent.instance.setSettings(settings);
    })
  }
}
