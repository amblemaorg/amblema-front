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
import { Subscription, Observable } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { EnviromentalMapper} from '../mappers/enviromental-mapper';
import { PecaState } from 'src/app/store/states/peca/peca.state';
import { Select } from '@ngxs/store';

@Component({
  selector: "peca-environmental-project",
  templateUrl: "../peca-page.component.html",
})
export class EnvironmentalProjectPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  isInstanciated: boolean;
  isInstantiating: boolean;
  loadedData: boolean;
  UrlLapse = "";

  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService,
  ) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (!this.isInstantiating) {
          if (data.activePecaContent) {
            /*  data.activePecaContent.environmentalProject.lapse1.topics.levels.week.forEach((schedule) => {
              schedule.StartTime = this.pipe.transform(Date.parse( schedule.StartTime), 'yyyy/MM/dd , h:mm');
              schedule.EndTime = this.pipe.transform(Date.parse(schedule.EndTime), 'yyyy/MM/dd , h:mm');
            });  */
            //console.log("proyecto ambiental", data.activePecaContent.environmentalProject)
            //console.log("active", data.activePecaContent)
            const configVista = EnviromentalMapper(data.activePecaContent.environmentalProject); //variable_que_almacenara_el_config_para_la_vista
            this.instantiateComponent(configVista);
            console.log('mapper', configVista)
            this.doInstantiateBlocks();
          }
        }
        
      },

      (error) => console.error(error)
    );
  }

  
  
  ngAfterViewInit(): void {        
    this.doInstantiateBlocks();
}

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
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
