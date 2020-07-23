import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { ENVIRONMENTAL_PROJECT_CONFIG as config } from "./environmental-project-config";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { Subscription } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { isNullOrUndefined } from "util";
import { EnviromentalMapper } from '../mappers/enviromental-mapper';

@Component({
  selector: "peca-environmental-project",
  templateUrl: "../peca-page.component.html",
})
export class EnvironmentalProjectPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  enviromentalInfo1lapse: any;
  enviromentalInfo2lapse: any;
  enviromentalInfo3lapse: any;
  objectiveLapse1Data: any;
  objectiveLapse2Data: any;
  objectiveLapse3Data: any;
  isInstanciated: boolean;
  isInstantiating: boolean;
  topics1lapse = [];
  topics2lapse = [];
  topics3lapse = [];
  objetiveLapse1= "";
  objetiveLapse2= "";
  objetiveLapse3= "";
  loadedData: boolean;
  UrlLapse = "";
  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService,
    private httpFetcherService: HttpFetcherService
  ) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {

   
    const info = this.httpFetcherService
      .get(`pecasetting/environmentalproject`)
      .subscribe(
        (data) => {
           if (!this.isInstantiating) {
             console.log("proyecto ambiental", data);
             data.lapse1.topics.forEach((topic) => {
              topic.nameTopic = topic.name;
            });
            this.topics1lapse = data.lapse1.topics;
            this.topics2lapse = data.lapse2.topics;
            this.topics3lapse = data.lapse3.topics;
            this.objetiveLapse1=data.lapse1.generalObjective;
            this.objetiveLapse2=data.lapse2.generalObjective;
            this.objetiveLapse3=data.lapse3.generalObjective;
            const configVista = EnviromentalMapper(data); //variable_que_almacenara_el_config_para_la_vista
            this.instantiateComponent(configVista);
            this.doInstantiateBlocks();
            console.log("ajaja", configVista)

          }
        },
        (error) => console.log(error),
        () => {
          info.unsubscribe();
        }
      );
  }
  objectiveLapse4Data:any;
  setEnviromentalProjectData() {

    this.enviromentalInfo1lapse = {
    topics1: this.topics1lapse

    };
    this.enviromentalInfo2lapse = {
      topics2: this.topics2lapse,
    };
    this.enviromentalInfo3lapse = {
      topics3: this.topics3lapse,
    };
    this.objectiveLapse1Data = {
      enviromentTitleLapse1: this.objetiveLapse1
    }
    this.objectiveLapse2Data = {
      enviromentTitleLapse1: this.objetiveLapse2
    }
    this.objectiveLapse3Data = {
      enviromentTitleLapse3: this.objetiveLapse3
    }
  
  }

  updateDataToBlocks() {
    this.setBlockData("lapse1Enviromental", this.enviromentalInfo1lapse);
     this.setBlockData("lapse2Enviromental", this.enviromentalInfo2lapse);
     this.setBlockData("lapse3Enviromental", this.enviromentalInfo3lapse);
     this.setBlockData("objetivoProyectoAmbiental1", this.objectiveLapse1Data);
     this.setBlockData("objetivoProyectoAmbiental2", this.objectiveLapse2Data);
     this.setBlockData("objetivoProyectoAmbiental3", this.objectiveLapse3Data);


  }

  updateMethods() {
    this.updateDataToBlocks();
  }

  ngAfterViewInit(): void {        
    this.doInstantiateBlocks();
}

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    //this.infoDataSubscription.unsubscribe();
  }
  doInstantiateBlocks() {
    this.isInstanciated = false;
    this.isInstantiating = true;
    setTimeout(() => {
        this.instantiateBlocks(this.container, true);
        this.isInstanciated = true;
        this.isInstantiating = false;
    });
}
}
