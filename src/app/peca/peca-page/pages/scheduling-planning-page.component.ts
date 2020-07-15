import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { SCHEDULING_PLANNING_CONFIG as config } from './scheduling-planning-config';
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { GlobalService } from "../../../services/global.service";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'peca-scheduling-planning',
    templateUrl: '../peca-page.component.html',
})
export class SchedulingPlanningPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    //Selectores
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

    //subscripciones
    infoDataSubscription: Subscription;

    propuestaAmblemaData: any;
    text: string;
    /////////////////
    reunionAmblemaData: any;
    reunion: string;
    //controla cuando la data es cargada
    isInstanciated: boolean;
    loadedData: boolean;

    constructor(factoryResolver: ComponentFactoryResolver, globals: GlobalService) {
        super(factoryResolver);

        globals.blockIntancesEmitter.subscribe(data => {
            data.blocks.forEach((block, name) =>
                this.blockInstances.set(name, block)
            );
            console.log(this.blockInstances, "bloques");
            if (this.loadedData) this.updateMethods();
        });

        this.instantiateComponent(config);
    }

    ngOnInit() {
        this.infoDataSubscription = this.infoData$.subscribe(
            data => {
                if (!isNullOrUndefined(data)) {
                    console.log(data, "mostrando data de planificacion")
                }

                this.setPropuestaText(data);
                this.setPropuestaTextData();

                this.setReunionText(data);
                this.setReunionTextData();


                this.loadedData = true;
                if (this.isInstanciated) this.updateMethods();
            }
        )
    }

    updateMethods() {
        this.updateDataToBlocks();
    }
    updateDataToBlocks() {
        this.setBlockData("propuestaAmblema", this.propuestaAmblemaData);
        this.setBlockData("reunionAmblema", this.reunionAmblemaData);

    }

    setPropuestaText(data) {
        this.text = data.activePecaContent.lapse1.lapsePlanning.proposalFundationDescription;
        console.log(this.text, "descricion propuesta fundacion")
    }

    setPropuestaTextData() {
        this.propuestaAmblemaData = {
            subtitles: {
                text: this.text
            }
        }
    }

    setReunionText(data) {
        this.reunion = data.activePecaContent.lapse1.lapsePlanning.meetingDescription;
        console.log(this.reunion, "descricion reunioon fundacion")
    }

    setReunionTextData() {
        this.reunionAmblemaData = {
            subtitles: {
                text: this.reunion
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