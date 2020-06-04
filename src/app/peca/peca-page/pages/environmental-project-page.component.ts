import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { ENVIRONMENTAL_PROJECT_CONFIG as config } from './environmental-project-config';

@Component({
    selector: 'peca-environmental-project',
    templateUrl: '../peca-page.component.html',
})
export class EnvironmentalProjectPageComponent extends PecaPageComponent implements AfterViewInit {
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
