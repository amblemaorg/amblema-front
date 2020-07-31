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

    propuestaAmblemaData: any;
    text: string;
    upFile: any;
    url: string;
    name: string;
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
        if(this.UrlLapse === "1"){
            this.text = data.activePecaContent.lapse1.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse1.lapsePlanning.attachedFile;
            //console.log(this.upFile, "descricion propuesta fundacion")
        }
        else if (this.UrlLapse === "2"){
            this.text = data.activePecaContent.lapse2.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse1.lapsePlanning.attachedFile;
            //console.log(this.text, "descricion propuesta fundacion")
        }
        else {
            this.text = data.activePecaContent.lapse3.lapsePlanning.proposalFundationDescription;
            this.upFile = data.activePecaContent.lapse1.lapsePlanning.attachedFile;
            //console.log(this.text, "descricion propuesta fundacion")
        }
       
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
        }
    }

    setReunionText(data) {
        if(this.UrlLapse === "1"){
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