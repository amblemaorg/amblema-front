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
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';

@Component({
  selector: 'peca-amblemoneda',
  templateUrl: '../peca-page.component.html',
})
export class AmblemonedaPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //subscripciones
  infoDataSubscription: Subscription;

  amblemonedaData: any
  text: string;

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
    this.infoDataSubscription = this.httpFetcherService.get(`pecasetting/amblecoins/1`).subscribe(
      data => {
        console.log(data, 'datos amblemoneda')

        this.setAmblemonedasCharla(data);
        this.setAmblemonedasCharlaData();

        this.setBlockData("amblemonedaCharla", this.amblemonedaData);


      }, er => { console.log(er) })
  }

  setAmblemonedasCharla(data) {
    this.text = data.teachersMeetingDescription;
    console.log(this.text, "charla")
  }

  setAmblemonedasCharlaData() {
    this.amblemonedaData = {
      subtitles: {
        text: this.text
      }
    }
  }

  updateMethods(){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }

  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe();
  }
}
