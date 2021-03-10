import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { MONITORING_STRATEGY_CONFIG as config } from "./monitoring-strategy-config";
import { Observable, Subscription } from "rxjs";
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html",
})
export class MonitoringStrategyPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;

  //slider ambiente
  sliderSeguimientoAmbiente: any;
  responseAmbiente: any;

  //slider Lectura
  sliderSeguimientoLectura: any;
  responseLectura: any;

  //slider Matematica
  sliderSeguimientoMatematica: any;
  responseMatematica: any;

  isInstanciated: boolean;
  loadedData: boolean;

  constructor(factoryResolver: ComponentFactoryResolver, globals: GlobalService) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);
  }

  ngOnInit() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          if (!isNullOrUndefined(data)) {
            // console.log(data, "data seguimiento actividades");
          }
          this.setAmbienteSlider(data);
          this.setAmbienteSliderData();

          this.setLecturaSlider(data);
          this.setLecturaSliderData();

          this.setMatematicaSlider(data);
          this.setMatematicaSliderData();

          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }
      },
      (er) => {
        console.log(er);
      }
    );
  }

  updateMethods() {
    this.updateDataToBlocks();
  }
  updateDataToBlocks() {
    this.setBlockData("sliderAmbienteData", this.sliderSeguimientoAmbiente);
    this.setBlockData("sliderLecturaData", this.sliderSeguimientoLectura);
    this.setBlockData("sliderMatematicaData", this.sliderSeguimientoMatematica);
  }

  //slider ambiente
  setAmbienteSlider(data) {
    this.responseAmbiente = data.activePecaContent.monitoringActivities.environmentActivities;
    // console.log(this.responseAmbiente, "slider ambiente");
  }

  setAmbienteSliderData() {
    this.sliderSeguimientoAmbiente = {
      sliderImage: this.responseAmbiente,
      sliderName: "1"
    };
  }

  //slider lectura
  setLecturaSlider(data) {
    this.responseLectura = data.activePecaContent.monitoringActivities.readingActivities;
    // console.log(this.responseLectura, "slider Lectura");
  }

  setLecturaSliderData() {
    this.sliderSeguimientoLectura = {
      sliderImage: this.responseLectura,
      sliderName: "2"
    };
  }

  //slider matematica
  setMatematicaSlider(data) {
    this.responseMatematica = data.activePecaContent.monitoringActivities.mathActivities;
    // console.log(this.responseMatematica, "slider Matematica");
  }

  setMatematicaSliderData() {
    this.sliderSeguimientoMatematica = {
      sliderImage: this.responseMatematica,
      sliderName: "3"
    };
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
    this.infoDataSubscription.unsubscribe();
  }
}
