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
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'peca-environmental-project',
    templateUrl: '../peca-page.component.html',
})
export class EnvironmentalProjectPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) 
    container: ViewContainerRef;
    infoDataSubscription: Subscription;
    enviromentalInfo: any;
    isInstanciated: boolean;
    topics = [];
    loadedData: boolean;
    UrlLapse = "";
    routerSubscription: Subscription;
    constructor(factoryResolver: ComponentFactoryResolver, private globals: GlobalService ,private httpFetcherService: HttpFetcherService) {
        super(factoryResolver);
        globals.blockIntancesEmitter.subscribe((data) => {
            data.blocks.forEach((block, name) =>
              this.blockInstances.set(name, block)
            );
            console.log(this.blockInstances, "bloques");
            if (this.loadedData) this.updateMethods();
          });
        this.instantiateComponent(config);
    }

ngOnInit(){
this.getInfo();
}

getInfo(){
    const info = this.httpFetcherService.get(`pecasetting/environmentalproject`).subscribe(data =>{
        if (!isNullOrUndefined(data)){
            console.log("proyecto ambiental", data);
            this.topics= data.lapse1.topics
            this.setEnviromentalProjectData();
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
        }
    },
    error => console.log(error), ()=>{
        info.unsubscribe();
    })
}



setEnviromentalProjectData() {
    this.enviromentalInfo = {
      topics: this.topics,
    };
  }

  updateDataToBlocks() {
    this.setBlockData("lapse1Enviromental", this.enviromentalInfo);
  }

  updateMethods() {
    this.updateDataToBlocks();
  }


    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
            this.isInstanciated = true;

        });
    }

    ngOnDestroy() {
        this.isInstanciated = false;
        this.loadedData = false;
       // this.infoDataSubscription.unsubscribe();
      //  this.routerSubscription.unsubscribe();
      }
}
