import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { AMBLEMONEDA_CONFIG as config, amblecoinsConfigMapper } from "./amblemoneda-config";
import { Router, NavigationEnd, Event } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { Select, Store } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { amblemonedasTableMapper } from "../mappers/amblemoneda-mappers";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { scan } from "rxjs/internal/operators/scan";

@Component({
  selector: "peca-amblemoneda",
  templateUrl: "../peca-page.component.html",
})
export class AmblemonedaPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  //charla
  amblemonedaData: any;
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
  isInstantiating: boolean;
  loadedData: boolean;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    globals: GlobalService,
    private store: Store
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));

      if (this.loadedData) this.updateMethods();
    });

    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent[`lapse${this.UrlLapse}`].ambleCoins) ===
            JSON.stringify(curr.activePecaContent[`lapse${this.UrlLapse}`].ambleCoins)
        ),
        scan(
          (prev, curr) => {
            let updatedSections = false;
            let updatedElaborationDate = false;
            const lapseName = `lapse${this.UrlLapse}`;
            if (prev.activePecaContent) {
              const prevSections = prev.activePecaContent[lapseName]["ambleCoins"]["sections"];
              const currSections = curr.activePecaContent[lapseName]["ambleCoins"]["sections"];
              const prevElaborationDate =
                prev.activePecaContent[lapseName]["ambleCoins"]["elaborationDate"];
              const currElaborationDate =
                curr.activePecaContent[lapseName]["ambleCoins"]["elaborationDate"];
              updatedSections = JSON.stringify(prevSections) !== JSON.stringify(currSections);
              updatedElaborationDate = prevElaborationDate !== currElaborationDate;
            }
            return {
              ...curr,
              updatedSections,
              updatedElaborationDate,
            };
          },
          {
            activePecaContent: null,
            user: null,
            updatedSections: false,
            updatedElaborationDate: false,
          }
        )
      )
      .subscribe(
        (data) => {
          if (data.activePecaContent) {
            this.peca_id = data.activePecaContent.id;
            const config = amblecoinsConfigMapper(
              data.activePecaContent,
              this.UrlLapse,
              data.updatedElaborationDate,
              data.updatedSections,
              this.store
            );
            this.instantiateComponent(config);
            this.doInstantiateBlocks();
          }
        },
        (er) => {
          console.log(er);
        }
      );
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
      this.pruebaData = {
        data: _mapper(dataAmblema),
        isEditable: true,
      };
    } else {
      this.pruebaData = dataAmblema;
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
  }

  setAmblemonedasCharlaData() {
    this.amblemonedaData = {
      /*  dateOrtext: {
        fields: this.date
    }, */
      subtitles: [
        {
          text: this.text,
        },
      ],
      download: {
        url: this.file ? this.file.url : "",
        name: this.file ? this.file.name : "",
      },
    };
  }

  setAmblemonedasSlider(data) {
    if (this.UrlLapse === "1") {
      this.response1 = data.activePecaContent.lapse1.ambleCoins.piggyBankSlider;
    } else if (this.UrlLapse === "2") {
      this.response2 = data.activePecaContent.lapse2.ambleCoins.piggyBankSlider;
    } else {
      this.response3 = data.activePecaContent.lapse3.ambleCoins.piggyBankSlider;
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
        },
      };
    } else if (this.UrlLapse === "2") {
      this.sliderData = {
        sliderImage: {
          description: this.response2,
          //image: this.img
        },
      };
    } else {
      this.sliderData = {
        sliderImage: {
          description: this.response3,
          //image: this.img
        },
      };
    }
  }

  updateDynamicFetchers() {
    //update
    this.createAndSetBlockFetcherUrls("confirmacionDocenteModal", {
      put: () =>
        //pecaprojects/amblecoins/section/<pecaId>/<lapse>
        `pecaprojects/amblecoins/section/${this.peca_id}/${this.UrlLapse}`,
    });
  }

  updateStaticFetchers() {
    this.setBlockFetcherUrls("btnEnviarSolicitud", {
      put: `pecaprojects/amblecoins/${this.peca_id}/${this.UrlLapse}`,
    });

    this.setBlockFetcherUrls("amblemonedaCharla", {
      put: `pecaprojects/amblecoins/${this.peca_id}/${this.UrlLapse}`,
    });
  }

  ngAfterViewInit(): void {
    //setTimeout(() => {
    //  this.instantiateBlocks(this.container);
    //  this.isInstanciated = true;
    //});
  }

  doInstantiateBlocks() {
    this.isInstantiating = true;
    this.isInstanciated = false;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstantiating = false;
      this.isInstanciated = true;
    });
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
