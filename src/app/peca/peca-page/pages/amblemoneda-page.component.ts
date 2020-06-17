import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { AMBLEMONEDA_CONFIG as config } from './amblemoneda-config';
import { Router } from '@angular/router';

@Component({
  selector: 'peca-amblemoneda',
  templateUrl: '../peca-page.component.html',
})
export class AmblemonedaPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  constructor(factoryResolver: ComponentFactoryResolver, router: Router) {
    super(factoryResolver);
    this.instantiateComponent(config);
    // TODO: change for a code that must reload only this page component
    // It reloads all components
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }
}
