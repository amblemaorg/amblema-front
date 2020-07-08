import {
    Component,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { GENERIC_ACTIVITY_CONFIG as config } from './generic-activity-config';

@Component({
    selector: 'peca-generic-activity',
    templateUrl: '../peca-page.component.html',
})
export class GenericActivityPageComponent extends PecaPageComponent implements AfterViewInit {
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
