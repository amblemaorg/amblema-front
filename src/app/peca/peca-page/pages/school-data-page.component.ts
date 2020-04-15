import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { SCHOOL_DATA_CONFIG as config } from './school-data-config';

@Component({
  selector: 'peca-school-data',
  templateUrl: '../peca-page.component.html',
})
export class SchoolDataPageComponent extends PecaPageComponent implements AfterViewInit {
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
