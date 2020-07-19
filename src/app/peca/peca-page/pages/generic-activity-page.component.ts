import {
    Component,
    OnInit,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
    OnDestroy,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { GENERIC_ACTIVITY_CONFIG as config } from './generic-activity-config';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Select } from "@ngxs/store";
import { PecaState } from '../../../store/states/peca/peca.state';
import { Observable, Subscription } from "rxjs";
import cloneDeep from "lodash/cloneDeep";
import { GenericActivity } from '../../../models/peca/generic-activity.model';
import { GlobalService } from '../../../services/global.service';

@Component({
    selector: 'peca-generic-activity',
    templateUrl: '../peca-page.component.html',
})
export class GenericActivityPageComponent extends PecaPageComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    @Select(PecaState.getActivePecaContent) pecaContentData$: Observable<any>;

    pecaDataSubscription: Subscription;
    routerSubscription: Subscription;
    isInstanciated: boolean;
    loadedData: boolean;

    // generic activity content variables
    g_a_text: any;
    g_a_date: any;
    g_a_download: any;
    g_a_video: any;
    g_a_addMT: any;
    g_a_checklist: any;

    constructor(
        factoryResolver: ComponentFactoryResolver, 
        private router: Router,
        globals: GlobalService
    ) {
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
                const lapse_number = event.url.substring(1).split("/")[2];
                const activity_id = event.url.substring(1).split("/").pop();
                this.setActivity(lapse_number, activity_id);
            }
        });
    }

    ngOnInit() {
        this.setActivity(
            this.router.url.substring(1).split("/")[2],
            this.router.url.substring(1).split("/").pop()
        );
    }

    setActivity(lapseId, activityId) {
        this.pecaDataSubscription = this.pecaContentData$.subscribe(
            (data) => {
                if (data.activePecaContent) {
                    const lapse_id = lapseId;
                    const activity_id = activityId;
                    const index = data.activePecaContent[`lapse${lapse_id}`].activities.findIndex((activity) => {
                        return activity.id === activity_id;
                    });
                    const activity: GenericActivity =  cloneDeep(data.activePecaContent[`lapse${lapse_id}`].activities[index]);
                    
                    if (activity) {
                        this.changeComponentHeader(activity.name); 

                        console.log("Datos de la actividad",activity);
                        this.setGenericActivityData(activity);
                        
                        this.loadedData = true;
                        if (this.isInstanciated) this.updateMethods();   
                    }                    
                }                
            },
            error => console.error(error)
        );
    }

    updateMethods() {
        this.updateDataToBlocks();
        // this.updateStaticFetchers();
        // this.updateDynamicFetchers();
    }

    updateDataToBlocks() {
        let genericActivityObj = { isGenericActivity: true };
        if (this.g_a_text) genericActivityObj = { ...genericActivityObj, ...this.g_a_text };
        if (this.g_a_date) genericActivityObj = { ...genericActivityObj, ...this.g_a_date };
        if (this.g_a_download) genericActivityObj = { ...genericActivityObj, ...this.g_a_download };
        if (this.g_a_video) genericActivityObj = { ...genericActivityObj, ...this.g_a_video };
        if (this.g_a_addMT) genericActivityObj = { ...genericActivityObj, ...this.g_a_addMT };
        this.setBlockData("genericActivityFields", genericActivityObj );
        this.setBlockData("genericActivityChecklist", this.g_a_checklist);
    }

    setGenericActivityData(data: GenericActivity) {
        // "approvalType": "str (1=solo aproeba el admin, 2=al rellenar, 3=genera solicitud de aprobacion, 4=aprobacion interna, 5=sin aprobacion)",
        // "status": "str (1=activo 2=inactivo)"
        const at = "2"; // approval type

        this.g_a_text = data.hasText && data.approvalType !== at
            ? {                
                subtitles: [{ text: data.text }]
            } : null;
        this.g_a_date = data.hasDate && data.approvalType !== at
            ? {
                dateOrtext: {
                    text: "Fecha de la actividad:",
                    ...[data.date ? true : false].reduce((dateOtherData,isThereDate) => {
                        dateOtherData[isThereDate ? "date" : "fields"] = isThereDate 
                        ? data.date 
                        : [{ 
                            placeholder: "Fecha de la actividad", 
                            fullwidth: false, 
                            type: "date",
                            validations: { 
                                required: true, 
                            }, 
                          }];

                        return dateOtherData;
                    },{})
                }
            } : null;
        this.g_a_download = data.hasFile && data.approvalType !== at
            ? {
                download: {
                    url: data.file.url,
                    name: data.file.name,
                }
            } : null;
        this.g_a_video = data.hasVideo && data.approvalType !== at
            ? {
                video: {
                    url: data.video.url,
                    name: data.video.name,
                }
            } : null;
        this.g_a_addMT = data.hasText && 
            (data.hasDate || data.hasFile) && 
            data.approvalType !== at
            ? {
                addMT: {                    
                    ...Object.keys(data).reduce((items,checker) => {
                        if (checker.includes("has")) {
                            const name = checker === "hasText" ? "subtitles" : null; 
                            if (name) items[name] = true;
                        }
                        return items;
                    },{}),
                }
            } : null;
        
        // CHECKLIST
        this.g_a_checklist = [data.hasChecklist].reduce((checklistObj,hasChecklist) => {
                checklistObj["isGenericActivity"] = true;
                if (hasChecklist) {
                    checklistObj = {
                        ...checklistObj,
                        title: 'Los checklists',
                        checkList: data.checklist
                    }
                }
                return checklistObj;
            },{});
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
        this.pecaDataSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
    }
}
