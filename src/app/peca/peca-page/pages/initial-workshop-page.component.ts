import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { INITIAL_WORKSHOP_CONFIG as config } from './initial-workshop-config';
import { Router, NavigationEnd, Event } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
@Component({
  selector: 'peca-initial-workshop',
  templateUrl: '../peca-page.component.html',
})
export class InitialWorkshopPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  //variables
  UrlLapse = "";
  peca_id: string;

  isInstanciated: boolean;
  loadedData: boolean;

  constructor(factoryResolver: ComponentFactoryResolver,
    private router: Router,
    globals: GlobalService, ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );

      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);

    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
        console.log("el ev", this.UrlLapse);
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      data => {
        if (data.activePecaContent) {
          this.peca_id = data.activePecaContent.id;
          if (!isNullOrUndefined(data)) {
            console.log(data, "data taller inicial")
          }
        }
      }
    )
  }

  updateMethods(){
    this.updateDataToBlocks();
    this.updateDynamicFetchers();
    this.updateStaticFetchers();
  }

  updateDataToBlocks() {
  }

  updateDynamicFetchers() {
    this.createAndSetBlockFetcherUrls(
      "tallerInicialForm",
      {
        post: () =>
        `pecaprojects/initialworkshop/${this.peca_id}/${this.UrlLapse}`,
      }
    );
  }

  updateStaticFetchers(){
    //pecaprojects/initialworkshop/<string:pecaId>/<string:lapse>
    //POST - contentType: application/json - Actualizar
    this.setBlockFetcherUrls(
      "btnRegistroEnviarSolicitud",{
        post: `pecaprojects/initialworkshop/${this.peca_id}/${this.UrlLapse}`
      }
    )
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
