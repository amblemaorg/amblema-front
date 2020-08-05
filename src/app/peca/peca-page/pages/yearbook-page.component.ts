import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { YEARBOOK_CONFIG as config } from './yearbook-config';

@Component({
    selector: 'peca-yearbook',
    templateUrl: '../peca-page.component.html',
})
export class YearbookPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    constructor(factoryResolver: ComponentFactoryResolver) {
        super(factoryResolver);
        this.instantiateComponent(config);
        this.setPdfData("here goes pdf data"); //* NEW
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
        });
    }
}
