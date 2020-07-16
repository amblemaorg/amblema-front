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
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';

@Component({
    selector: 'peca-environmental-project',
    templateUrl: '../peca-page.component.html',
})
export class EnvironmentalProjectPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    constructor(factoryResolver: ComponentFactoryResolver, private httpFetcherService: HttpFetcherService) {
        super(factoryResolver);
        this.instantiateComponent(config);
    }

ngOnInit(){
this.getInfo();
}

getInfo(){
    const info = this.httpFetcherService.get(`pecasetting/environmentalproject`).subscribe(data =>{
        console.log("proyecto ambiental", data);
    },
    error => console.log(error), ()=>{
        info.unsubscribe();
    })
}
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
        });
    }
}
