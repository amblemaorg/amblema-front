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
import { Router, NavigationEnd, Event } from "@angular/router";

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
    routerSubscription: Subscription;

    peca_id: any;
    propuestaAmblemaData: any;
    text: string;
    upFile: any;
    url: string;
    name: string;
    statusPropuestaAmblema: number;// 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado

    /////////////////
    UrlLapse = "";
    reunionAmblemaData: any;
    reunion: string;
    //controla cuando la data es cargada
    isInstanciated: boolean;
    loadedData: boolean;

    constructor(
        factoryResolver: ComponentFactoryResolver,
        private router: Router,
        globals: GlobalService) {
        super(factoryResolver);

        globals.blockIntancesEmitter.subscribe(data => {
            data.blocks.forEach((block, name) =>
                this.blockInstances.set(name, block)
            );
            console.log(this.blockInstances, "bloques");
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
                this.peca_id = data.activePecaContent.id;
                if (data.activePecaContent) {
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
            }, er => { console.log(er) })
    }

    updateMethods() {
        this.updateDataToBlocks();
    }
    updateDataToBlocks() {
        this.setBlockData("propuestaAmblema", this.propuestaAmblemaData);
        this.setBlockData("reunionAmblema", this.reunionAmblemaData);

    }

    setPropuestaText(data) {
        if (this.UrlLapse === "1") {
            this.text = data.activePecaContent.lapse1.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse1.lapsePlanning.attachedFile;
            //status lapso1
            this.statusPropuestaAmblema = data.activePecaContent.lapse1.lapsePlanning.approvalHistory ? 1
                : data.activePecaContent.lapse1.lapsePlanning.approvalHistory.length > 0
                    ? data.activePecaContent.lapse1.lapsePlanning.approvalHistory[data.activePecaContent.lapse1.lapsePlanning.approvalHistory.length - 1].status === "2" || data.activePecaContent.lapse1.lapsePlanning.approvalHistory[data.activePecaContent.lapse1.lapsePlanning.approvalHistory.length - 1].status === "3" ? +data.activePecaContent.lapse1.lapsePlanning.approvalHistory[data.activePecaContent.lapse1.lapsePlanning.approvalHistory - 1].status : 0 : 0;
        }
        else if (this.UrlLapse === "2") {
            this.text = data.activePecaContent.lapse2.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse2.lapsePlanning.attachedFile;
            //status lapso 2
            this.statusPropuestaAmblema = data.activePecaContent.lapse2.lapsePlanning.approvalHistory ? 1
                : data.activePecaContent.lapse2.lapsePlanning.approvalHistory.length > 0
                    ? data.activePecaContent.lapse2.lapsePlanning.approvalHistory[data.activePecaContent.lapse2.lapsePlanning.approvalHistory.length - 1].status === "2" || data.activePecaContent.lapse2.lapsePlanning.approvalHistory[data.activePecaContent.lapse2.lapsePlanning.approvalHistory.length - 1].status === "3" ? +data.activePecaContent.lapse2.lapsePlanning.approvalHistory[data.activePecaContent.lapse2.lapsePlanning.approvalHistory - 1].status : 0 : 0;
        }
        else {
            this.text = data.activePecaContent.lapse3.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse3.lapsePlanning.attachedFile;
            //status lapso 3
            this.statusPropuestaAmblema = data.activePecaContent.lapse3.lapsePlanning.approvalHistory ? 1
                : data.activePecaContent.lapse3.lapsePlanning.approvalHistory.length > 0
                    ? data.activePecaContent.lapse3.lapsePlanning.approvalHistory[data.activePecaContent.lapse3.lapsePlanning.approvalHistory.length - 1].status === "2" || data.activePecaContent.lapse3.lapsePlanning.approvalHistory[data.activePecaContent.lapse3.lapsePlanning.approvalHistory.length - 1].status === "3" ? +data.activePecaContent.lapse3.lapsePlanning.approvalHistory[data.activePecaContent.lapse3.lapsePlanning.approvalHistory - 1].status : 0 : 0;
        }
        console.log(this.statusPropuestaAmblema, "estatus propuesta fundacion x lapso")
    }

    setPropuestaTextData() {
        this.propuestaAmblemaData = {
            subtitles: [
                {
                    text: this.text
                }
            ],
            upload: this.upFile ? {
                uploadEmpty: false,
                url: this.upFile.url,
                name: this.upFile.name,
            } : { uploadEmpty: true },
            status: {
                subText: this.statusPropuestaAmblema
            }
        }
        //console.log(this.propuestaAmblemaData.status.subText, "estatusssss")
    }

    setReunionText(data) {
        if (this.UrlLapse === "1") {
            this.reunion = data.activePecaContent.lapse1.lapsePlanning.meetingDescription;
            //console.log(this.reunion, "descricion reunioon fundacion")
        }
        else if (this.UrlLapse === "2") {
            this.reunion = data.activePecaContent.lapse2.lapsePlanning.meetingDescription;
            //console.log(this.reunion, "descricion reunioon fundacion")
        }
        else {
            this.reunion = data.activePecaContent.lapse3.lapsePlanning.meetingDescription;
            //console.log(this.reunion, "descricion reunioon fundacion")
        }

    }

    setReunionTextData() {
        this.reunionAmblemaData = {
            subtitles: [
                {
                    text: this.reunion
                }
            ]
        }
    }

    updateStaticFetchers() {
        //pecaprojects/lapseplanning/<string:pecaId>/<string:lapse> | POST - contentType: formData - Actualizar
        this.setBlockFetcherUrls("propuestaAmblema", {
            post: `pecaprojects/lapseplanning/${this.peca_id}/1`,
        });
        console.log(this.UrlLapse, "lapso")
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