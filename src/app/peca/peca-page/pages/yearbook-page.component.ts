import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Inject,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { DOCUMENT } from "@angular/common";
import { PecaPageComponent } from "../peca-page.component";
import { MapperYearBookWeb } from "./yearbook-config";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import { GlobalService } from "../../../services/global.service";
import { amblemarioMapper } from "../mappers/amblemario-mapper";
import { PdfYearbookService } from "src/app/services/peca/pdf-yearbook.service";
import { SetYearBook } from "src/app/store/yearbook/yearbook.action";

@Component({
  selector: "peca-yearbook",
  templateUrl: "../peca-page.component.html",
})
export class YearbookPageComponent extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getActivePecaContent) pecaData$: Observable<any>;

  subscription: Subscription = new Subscription();

  pecaData: any;

  isInstanciated: boolean;
  loadedData: boolean;

  yearbookData: any;
  title: string;

  constructor(
    private store: Store,
    factoryResolver: ComponentFactoryResolver,
    pdfYearbookService: PdfYearbookService,
    globals: GlobalService
  ) {
    super(factoryResolver, null, null, pdfYearbookService);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );

      if (this.loadedData) this.updateMethods();
    });

    //this.instantiateComponent(config);
  }

  ngOnInit() {
    this.subscription.add(
      this.pecaData$.subscribe(
        (data) => {
          if (data && data.activePecaContent) {
            this.setAmblemarioData(data.activePecaContent, amblemarioMapper);
            this.setPdfData(this.pecaData);

            this.setYearbook(data);
            this.setYearbookData();

            /**
             * @author Franklin Perdomo
             */

            // -- Save Year Book State
            this.store.dispatch(
              new SetYearBook(data.activePecaContent.yearbook)
            );

            this.instantiateComponent(
              MapperYearBookWeb(data.activePecaContent.yearbook)
            );

            // -- End Franklin's code
            // =============================================

            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        },
        (error) => console.error(error)
      )
    );
  }

  updateMethods() {
    this.updateDataToBlocks();
    // this.updateStaticFetchers();
    // this.updateDynamicFetchers();
  }

  updateDataToBlocks() {
    // this.setBlockData("schoolForm", this.schoolFormData);
    this.setBlockData("titleYearbook", this.yearbookData);
  }

  updateStaticFetchers() {
    //
  }

  updateDynamicFetchers() {
    //
  }

  setYearbook(data) {
    this.title = data.activePecaContent.yearbook.lapse1.activities[0].name;
    console.log(this.title, "nombre");
  }

  setYearbookData() {
    this.yearbookData = {
      inputAndBtns: [
        {
          titleInput: this.title,
        },
      ],
    };
    console.log(this.yearbookData, "aqui titulo");
  }

  setAmblemarioData(pecaData, _mapper?: Function) {
    if (_mapper) {
      this.pecaData = _mapper(pecaData);
    } else {
      this.pecaData = pecaData;
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
    this.subscription.unsubscribe();
  }
}
