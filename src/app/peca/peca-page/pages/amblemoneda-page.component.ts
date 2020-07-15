import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { AMBLEMONEDA_CONFIG as config } from './amblemoneda-config';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { amblemonedasTableMapper } from '../mappers/amblemoneda-mappers';

@Component({
  selector: 'peca-amblemoneda',
  templateUrl: '../peca-page.component.html',
})
export class AmblemonedaPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;

  //charla
  amblemonedaData: any
  text: string;

  //tabla
  pruebaData: any;

  //slider
  sliderData: any;
  img: string;
  descripcion: string;

  isInstanciated: boolean;
  loadedData: boolean;

  constructor(factoryResolver: ComponentFactoryResolver, router: Router, globals: GlobalService, private httpFetcherService: HttpFetcherService) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
      console.log(this.blockInstances, "bloques");
      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);
    // TODO: change for a code that must reload only this page component
    // It reloads all components including PecaComponent, and it generates some bugs
    // router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    this.infoDataSubscription = this.infoData$.subscribe(
      data => {
        if (!isNullOrUndefined(data)) {
          console.log(data, "data amblemonedas")
        }

        this.setAmblemonedasCharla(data);
        this.setAmblemonedasCharlaData();

        this.setAmblemonedasSlider(data);
        this.setAmblemonedasSliderData();

        this.setAmblemonedasMapper(data.activePecaContent.lapse1.ambleCoins.sections, amblemonedasTableMapper);

        this.loadedData = true;
        if (this.isInstanciated) this.updateMethods();
      }, er => { console.log(er) })


  }

  updateMethods() {
    this.updateDataToBlocks();
  }
  updateDataToBlocks() {
    this.setBlockData("amblemonedaTable", this.pruebaData);
    this.setBlockData("amblemonedaCharla", this.amblemonedaData);
    this.setBlockData("sliderAmblemaData", this.sliderData);

  }

  setAmblemonedasMapper(dataAmblema, _mapper?: Function) {
    if (_mapper) {
      //console.log(dataAmblema, 'asdasdasdasdasdasd')
      this.pruebaData = {
        data: _mapper(dataAmblema),
        isEditable: true,
      };
      //console.log("este es el mapper de amblemoneda", this.pruebaData);
    } else {
      this.pruebaData = dataAmblema;
      //console.log("este NO es el mapper de amblemoneda", this.pruebaData);
    }
  }

  setAmblemonedasCharla(data) {
    this.text = data.activePecaContent.lapse1.ambleCoins.teachersMeetingDescription;
    //console.log(this.text, "charla")
  }

  setAmblemonedasCharlaData() {
    this.amblemonedaData = {
      subtitles: {
        text: this.text
      }
    }
  }

  setAmblemonedasSlider(data) {
    this.descripcion = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider[0].description;
    this.img = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider[0].image;
    console.log(this.descripcion, this.img, "slideeeeeeeeeer")
  }

  setAmblemonedasSliderData() {
    this.sliderData = {
      sliderImage: {
        description: this.descripcion,
        image: this.img
      }
    }
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
