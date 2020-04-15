import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { INITIAL_WORKSHOP_CONFIG as config } from './initial-workshop-config';

@Component({
  selector: 'peca-initial-workshop',
  templateUrl: '../peca-page.component.html',
})
export class InitialWorkshopPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  constructor(factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }
}
