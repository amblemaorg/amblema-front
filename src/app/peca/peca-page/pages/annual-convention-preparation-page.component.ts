import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { ANNUAL_CONVENTION_PREPARATION_CONFIG as config } from './annual-convention-preparation-config';
import { Subscription, Observable } from 'rxjs';
import { PecaState } from 'src/app/store/states/peca/peca.state';
import { Select } from '@ngxs/store';
import { GlobalService } from 'src/app/services/global.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'peca-annual-convention',
    templateUrl: '../peca-page.component.html',
})
export class AnnualConventionPreparationPageComponent extends PecaPageComponent implements AfterViewInit {
    isInstanciated: boolean;
    loadedData: boolean;
    description1="";
    description2="";
    description3="";
    description4="";

    preparationInfo: any;
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;
    infoDataSubscription: Subscription;
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
    constructor(factoryResolver: ComponentFactoryResolver, globals: GlobalService) {
        super(factoryResolver);
        //this.instantiateComponent(config);

        globals.blockIntancesEmitter.subscribe(data => {
            data.blocks.forEach((block, name) =>
                this.blockInstances.set(name, block)
            );
            console.log(this.blockInstances, "bloques");
        });
    }
    ngOnInit() {
        this.getInfo();
        this.instantiateComponent(config);
      }
      getInfo() {
        /* this.infoDataSubscription = this.infoData$.subscribe(
            data => {
                if (!isNullOrUndefined(data)) {
                    console.log(data, "mostrando data de planificacion")
                }

                this.setPropuestaText(data);
                this.setPropuestaTextData();

                this.setBlockData("propuestaAmblema", this.propuestaAmblemaData);

            }
        ) */
        this.infoDataSubscription = this.infoData$.subscribe(
          (data) => {
            if (!isNullOrUndefined(data)) {
                this.description1= data.activePecaContent.lapse1.annualPreparation.step1Description;
                this.description2= data.activePecaContent.lapse1.annualPreparation.step2Description;
                this.description3= data.activePecaContent.lapse1.annualPreparation.step3Description;
                this.description4= data.activePecaContent.lapse1.annualPreparation.step4Description;

                this.setPreparationData();
                this.setBlockData("stepperAnnual", this.preparationInfo);

            }
           
          },
    
          (error) => console.error(error)
        );
      }

      /* setPropuestaText(data) {
        this.descriptions = data.activePecaContent.lapse1.lapsePlanning.proposalFundationDescription;
        console.log(this.text, "descricion propuesta fundacion")
    } */

    setPreparationData() {
        this.preparationInfo = {
            text1: {
                content:this.description1
            },
            text2: {
                content:this.description2
            },
            text3: {
                content:this.description3
            },
            text4: {
                content:this.description4
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