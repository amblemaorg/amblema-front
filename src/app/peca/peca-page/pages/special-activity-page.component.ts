import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { SPECIAL_ACTIVITY_CONFIG as config } from './special-activity-config';

@Component({
    selector: 'peca-special-activity',
    templateUrl: '../peca-page.component.html',
})
export class SpecialActivityPageComponent extends PecaPageComponent implements AfterViewInit {
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
