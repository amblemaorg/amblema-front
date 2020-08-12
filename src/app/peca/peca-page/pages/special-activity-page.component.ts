import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { SPECIAL_ACTIVITY_CONFIG as config } from './special-activity-config';

import { Router, NavigationEnd, Event } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { isNullOrUndefined } from "util";
import { specialActivityTableMapper } from "../mappers/special-activity-mapper";
@Component({
    selector: 'peca-special-activity',
    templateUrl: '../peca-page.component.html',
})
export class SpecialActivityPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;


    //Selectores
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

    //subscripciones
    infoDataSubscription: Subscription;
    routerSubscription: Subscription;

    UrlLapse = "";
    peca_id: string;

    //tabla
    datosTablaActividad: any;

    //variable
    status: any;
    datosStatus: any;
    date: any;

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
                        console.log(data, "actividad especial")
                    }

                    this.setActividadEspecialStatus(data);
                    this.setActividadEspecialStatusData();

                    if (this.UrlLapse === "1") {
                        this.setSpecialActivityMapper(data.activePecaContent.lapse1.specialActivity.approvalHistory[0].detail.itemsActivities, specialActivityTableMapper);
                    }
                    else if (this.UrlLapse === "2") {
                        this.setSpecialActivityMapper(data.activePecaContent.lapse2.specialActivity.approvalHistory[0].detail.itemsActivities, specialActivityTableMapper);
                    }
                    else {
                        this.setSpecialActivityMapper(data.activePecaContent.lapse3.specialActivity.approvalHistory[0].detail.itemsActivities, specialActivityTableMapper);
                    }
                    this.loadedData = true;
                    if (this.isInstanciated) this.updateMethods();
                }
            }
        )
    }

    setActividadEspecialStatus(data) {
        if (this.UrlLapse === "1") {
            this.status = data.activePecaContent.lapse1.specialActivity.approvalHistory[0].status;
            this.date = data.activePecaContent.lapse1.specialActivity.approvalHistory[0].createdAt;
        }
        else if (this.UrlLapse === "2") {
            this.status = data.activePecaContent.lapse2.specialActivity.approvalHistory[0].status;
        }
        else {
            this.status = data.activePecaContent.lapse3.specialActivity.approvalHistory[0].status;
        }
    }

    setActividadEspecialStatusData() {
        this.datosStatus = {
            status: {
                subText: this.status
            },
        }
    }

    updateMethods() {
        this.updateDataToBlocks();
        this.updateDynamicFetchers();
    }


    updateDataToBlocks() {
        this.setBlockData("tableActividadEspecial", this.datosTablaActividad);
        this.setBlockData("statusYDate", this.datosStatus);
    }

    updateDynamicFetchers() {
        this.createAndSetBlockFetcherUrls(
            "modalActividadEspecial",
            {
                put: () =>
                    //pecaprojects/lapses/specialsactivities/<string:pecaId>/<string:lapse>
                    `pecaprojects/lapses/specialsactivities/${this.peca_id}/${this.UrlLapse}`
            },
        );

        this.createAndSetBlockFetcherUrls(
            "specialDeleteModal",
            {
                delete: () =>
                    `pecaprojects/lapses/specialsactivities/${this.peca_id}/${this.UrlLapse}`
            },
        );
    }


    setSpecialActivityMapper(dataSpecialActivity, _mapper?: Function) {
        if (_mapper) {
            console.log(dataSpecialActivity, 'ACTIVIDAD ESPECIAL')
            this.datosTablaActividad = {
                data: _mapper(dataSpecialActivity),
                isEditable: true,
            };
            console.log("este es el mapper de ACTIVIDAD ESPECIAL", this.datosTablaActividad);
        } else {
            this.datosTablaActividad = dataSpecialActivity;
            console.log("este NO es el mapper de ACTIVIDAD ESPECIAL", this.datosTablaActividad);
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
