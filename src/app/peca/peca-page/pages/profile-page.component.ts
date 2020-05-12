import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { PROFILE_CONFIG as config } from './profile-config';

@Component({
    selector: 'peca-profile',
    templateUrl: '../peca-page.component.html',
})
export class ProfilePageComponent extends PecaPageComponent implements AfterViewInit {
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