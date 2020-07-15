import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { MATH_OLYMPICS_CONFIG as config } from './math-olympics-config';
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { GlobalService } from "../../../services/global.service";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'peca-maths-olympics',
    templateUrl: '../peca-page.component.html',
})
export class MathOlympicsPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    //Selectores
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

    //subscripciones
    infoDataSubscription: Subscription;

    omlimpiadasData: any;
    text: string;
    date: Date;

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
                    console.log(data, "data olimpiadas")
                }

                this.setOlimpiadas(data);
                this.setOLimpiadasData();

                this.loadedData = true;
              if (this.isInstanciated) this.updateMethods();
            }
        )
    }

    setOlimpiadas(data) {
        this.text = data.activePecaContent.lapse1.olympics.description;
        console.log(this.text, "descricion olimpiadas")
        this.date = data.activePecaContent.lapse1.olympics.date;
        console.log(this.date, "datos olimpiadas")
    }

    setOLimpiadasData() {
        this.omlimpiadasData = {
            dateOrtext: {
                date: this.date
            },
            subtitles: {
                text: this.text
            }
        }
    }

    updateMethods() {
        this.updateDataToBlocks();
        //this.updateStaticFetchers();
        //this.updateDynamicFetchers();
    }

    updateDataToBlocks() {
        this.setBlockData("olimpiadasDateText", this.omlimpiadasData);
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