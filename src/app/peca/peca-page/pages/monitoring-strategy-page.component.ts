import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { MONITORING_STRATEGY_CONFIG as config } from './monitoring-strategy-config';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'peca-initial-diagnostic',
    templateUrl: '../peca-page.component.html',
})
export class MonitoringStrategyPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;


    constructor(factoryResolver: ComponentFactoryResolver, private httpFetcherService: HttpFetcherService) {
        super(factoryResolver);
        this.instantiateComponent(config);
    }

    ngOnInit(){
        const info = this.httpFetcherService.get(`pecasetting/environmentalproject`).subscribe(data =>{
            console.log("monitoreo de actividades", data);
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
