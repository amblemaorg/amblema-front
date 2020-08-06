import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
    Inject
} from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { PecaPageComponent } from '../peca-page.component';
import { YEARBOOK_CONFIG as config } from './yearbook-config';

@Component({
    selector: 'peca-yearbook',
    templateUrl: '../peca-page.component.html',
})
export class YearbookPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    constructor(factoryResolver: ComponentFactoryResolver, @Inject(DOCUMENT) document: Document) {
        super(factoryResolver,null,null,document);
        this.instantiateComponent(config);
        this.setPdfData("here goes pdf data"); //* NEW      
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
        });
    }
}
