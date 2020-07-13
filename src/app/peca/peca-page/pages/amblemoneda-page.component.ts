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

  amblemonedaData: any
  text: string;

  pruebaData: any;

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

        this.setBlockData("amblemonedaCharla", this.amblemonedaData);

        this.setAmblemonedasMapper(data.activePecaContent.lapse1.ambleCoins.sections[0], amblemonedasTableMapper);
      }, er => { console.log(er) })
  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
  }
  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("amblemonedaTable", this.pruebaData);
    }
  }

  setAmblemonedasMapper(dataAmblema, _mapper?: Function) {
    if (_mapper) {
      console.log(dataAmblema,'asdasdasdasdasdasd')
      this.pruebaData = {
        data: _mapper(dataAmblema),
        isEditable: true,
      };
      console.log("este es el mapper de amblemoneda", this.pruebaData);
    } else {
      this.pruebaData = dataAmblema;
      console.log("este NO es el mapper de lectura", this.pruebaData);
    }
  }

  setAmblemonedasCharla(data) {
    this.text = data.activePecaContent.lapse1.ambleCoins.teachersMeetingDescription;
    console.log(this.text, "charla")
  }

  setAmblemonedasCharlaData() {
    this.amblemonedaData = {
      subtitles: {
        text: this.text
      }
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }

  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe();
  }
}
