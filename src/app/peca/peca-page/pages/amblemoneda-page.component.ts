import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { AMBLEMONEDA_CONFIG as config } from './amblemoneda-config';
import { Router, NavigationEnd, Event } from "@angular/router";
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
  routerSubscription: Subscription;
  //charla
  amblemonedaData: any
  text: string;
  url: string;
  name: string;
  date: any;
  //tabla
  pruebaData: any;

  //slider
  sliderData: any;
  img: string;
  descripcion: string;

  response1: any;
  response2: any;
  response3: any;
  UrlLapse = "";
  peca_id: string;
  lapse_n: string;
  file: any;


  isInstanciated: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    globals: GlobalService,
    private httpFetcherService: HttpFetcherService, ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe(data => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );

      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);
    // TODO: change for a code that must reload only this page component
    // It reloads all components including PecaComponent, and it generates some bugs
    // router.routeReuseStrategy.shouldReuseRoute = () => false;
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
            console.log(data, "data amblemonedas")
          }

          this.setAmblemonedasCharla(data);
          this.setAmblemonedasCharlaData();

          this.setAmblemonedasSlider(data);
          this.setAmblemonedasSliderData();

          if (this.UrlLapse === "1") {
            this.setAmblemonedasMapper(data.activePecaContent.lapse1.ambleCoins.sections, amblemonedasTableMapper);
          }
          else if (this.UrlLapse === "2") {
            this.setAmblemonedasMapper(data.activePecaContent.lapse2.ambleCoins.sections, amblemonedasTableMapper);
          }
          else {
            this.setAmblemonedasMapper(data.activePecaContent.lapse3.ambleCoins.sections, amblemonedasTableMapper);
          }


          this.loadedData = true;
          if (this.isInstanciated) this.updateMethods();
        }

      }, er => { console.log(er) })

  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateDynamicFetchers();
    this.updateStaticFetchers();
  }
  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("amblemonedaTable", this.pruebaData);
    }
    
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
    if (this.UrlLapse === "1") {
      this.text = data.activePecaContent.lapse1.ambleCoins.teachersMeetingDescription;
      this.file = data.activePecaContent.lapse1.ambleCoins.teachersMeetingFile;
      this.date = data.activePecaContent.lapse1.ambleCoins.meetingDate;
    } else if (this.UrlLapse === "2") {
      this.text = data.activePecaContent.lapse2.ambleCoins.teachersMeetingDescription;
      this.file = data.activePecaContent.lapse2.ambleCoins.teachersMeetingFile;
      this.date = data.activePecaContent.lapse2.ambleCoins.meetingDate;
    } else {
      this.text = data.activePecaContent.lapse3.ambleCoins.teachersMeetingDescription;
      this.file = data.activePecaContent.lapse3.ambleCoins.teachersMeetingFile;
      this.date = data.activePecaContent.lapse3.ambleCoins.meetingDate;
    }
    console.log(this.date, "CHARLAAAAAAAAAAAA")
  }

  setAmblemonedasCharlaData() {
    this.amblemonedaData = {
     /*  dateOrtext: {
        fields: this.date
    }, */
      subtitles: [
        {
          text: this.text
        }
      ],
      download:
      {
        url: this.file.url,
        name: this.file.name,
      }
    }
    //console.log(this.amblemonedaData.download.url,this.amblemonedaData.download.name, "locoooooooooooo");
  }

  setAmblemonedasSlider(data) {
    if (this.UrlLapse === "1") {
      this.response1 = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider;
      //console.log(this.response1, "slideeeeeeeeeer111")
    } else if (this.UrlLapse === "2") {
      this.response2 = data.activePecaContent.lapse2.ambleCoins.piggyBankSlider;
      //console.log(this.response2, "slideeeeeeeeeer2222")
    } else {
      this.response3 = data.activePecaContent.lapse3.ambleCoins.piggyBankSlider;
      //console.log(this.response3, "slideeeeeeeeeer3333")
    }
    //this.descripcion = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider;
    //this.img = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider;

  }

  setAmblemonedasSliderData() {
    if (this.UrlLapse === "1") {
      this.sliderData = {
        sliderImage: {
          description: this.response1,
          //image: this.img
        }
      }
    } else if (this.UrlLapse === "2") {
      this.sliderData = {
        sliderImage: {
          description: this.response2,
          //image: this.img
        }
      }
    } else {
      this.sliderData = {
        sliderImage: {
          description: this.response3,
          //image: this.img
        }
      }
    }

  }

  updateDynamicFetchers() {
    //update
    //pecaprojects/amblecoins/<string:pecaId>/<string:lapse>
    this.createAndSetBlockFetcherUrls(
      "confirmacionDocenteModal",
      {
        put: () =>
          `pecaprojects/amblecoins/${this.peca_id}/${this.UrlLapse}`,
      },
    );


    // enviar solicitud
    ///pecaprojects/amblecoins/<string:pecaId>/<string:lapse>
    
  }

  updateStaticFetchers(){
    this.setBlockFetcherUrls(
      "btnEnviarSolicitud", 
      {
      put:`pecaprojects/amblecoins/${this.peca_id}/${this.UrlLapse}`,
    });
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
