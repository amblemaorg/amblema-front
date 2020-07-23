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
    @Select(PecaState.getUserResume) userData$: Observable<any>;

    pecaDataSubscription: Subscription;
    userDataSubscription: Subscription;
    routerSubscription: Subscription;
    isInstanciated: boolean;
    loadedData: boolean;
    user_type: string = "0";

    // generic activity content variables
    g_a_id: string;
    g_a_text: any;
    g_a_date: any;
    g_a_download: any;
    g_a_video: any;
    g_a_addMT: any;
    g_a_checklist: any;
    g_a_upload: any;
    g_a_action_btn: any;
    g_a_activity_uneditable: boolean;
    g_a_status_selector: any;
    g_a_action_btn_validators: any;

    constructor(
        factoryResolver: ComponentFactoryResolver, 
        private router: Router,
        private globals: GlobalService
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
        this.userDataSubscription = this.userData$.subscribe(user => {
            this.user_type = user.type;
        });

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
        const genericActivity = { 
            isGenericActivity: true, 
            genericActivityId: this.g_a_id, 
            activityUneditable: this.g_a_activity_uneditable 
        };

        let genericActivityObj = { ...genericActivity };

        if (this.g_a_text) genericActivityObj = { ...genericActivityObj, ...this.g_a_text };
        if (this.g_a_date) genericActivityObj = { ...genericActivityObj, ...this.g_a_date };
        if (this.g_a_download) genericActivityObj = { ...genericActivityObj, ...this.g_a_download };
        if (this.g_a_video) genericActivityObj = { ...genericActivityObj, ...this.g_a_video };
        if (this.g_a_addMT) genericActivityObj = { ...genericActivityObj, ...this.g_a_addMT };
        if (this.g_a_upload) genericActivityObj = { ...genericActivityObj, ...this.g_a_upload };
        if (this.g_a_status_selector) genericActivityObj = { ...genericActivityObj, ...this.g_a_status_selector, ...this.g_a_action_btn_validators };

        this.setBlockData("genericActivityFields", genericActivityObj );
        this.setBlockData("genericActivityChecklist", { ...genericActivity, ...this.g_a_checklist });
        this.setBlockData("genericActivityActionButton", { ...genericActivity, ...this.g_a_action_btn, ...this.g_a_action_btn_validators });
    }

    setGenericActivityData(data: GenericActivity) {
        // "approvalType": "str (1=solo aproeba el admin, 2=al rellenar, 3=genera solicitud de aprobacion, 4=aprobacion interna, 5=sin aprobacion)",
        // "status": ("1", "2", "3"), ("pending", "in_approval", "approved")
        const at = "2"; // approval type, at '2' means Only Checklist is in the view   
        const detail = data.approvalHistory.length > 0 ? data.approvalHistory[data.approvalHistory.length-1].detail : null; 

        this.g_a_id = `g-a-${data.id}`;
        this.g_a_activity_uneditable = data.status === "1" ? false : true;
        
        const {
            date,
            file,
            text,
            uploadedFile,
            video,
            checklist
        } = data.approvalHistory.length > 0 && 
        data.approvalHistory[data.approvalHistory.length-1].status === "1" 
        ? {
            date: detail.date ? detail.date : data.date,
            file: detail.file ? detail.file : data.file,
            text: detail.text ? detail.text : data.text,
            uploadedFile: detail.uploadedFile ? detail.uploadedFile : data.uploadedFile,
            video: detail.video ? detail.video : data.video,
            checklist: detail.checklist ? detail.checklist : data.checklist
        } 
        : {
            date: data.date,
            file: data.file,
            text: data.text,
            uploadedFile: data.uploadedFile,
            video: data.video,
            checklist: data.checklist
        };

        // console.log(
        //     "date",date,
        //     "file",file,
        //     "text",text,
        //     "uploadedFile",uploadedFile,
        //     "video",video,
        //     "checklist",checklist
        // );

        this.g_a_status_selector = data.approvalType === "4" 
            ? {
                statusSelectorData: {
                    genActSelectStatus: true,
                    status: data.status !== "1" ? "2" : "1",
                }
            } : null;
        this.g_a_text = data.hasText && data.approvalType !== at
            ? {                
                subtitles: [{ text: text }]
            } : null;
        this.g_a_date = data.hasDate && data.approvalType !== at
            ? {
                dateOrtext: {
                    text: "Fecha de la actividad:",
                    ...[date ? true : false].reduce((dateOtherData,isThereDate) => {
                        dateOtherData["fields"] = [{ 
                            placeholder: "Fecha de la actividad", 
                            fullwidth: false, 
                            type: "date",
                            value: isThereDate ? this.globals.getDateFormat( new Date(date) ) : null,
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
                download: file ? {
                    url: file.url,
                    name: file.name,
                } : null,
            } : null;
        this.g_a_video = data.hasVideo && data.approvalType !== at
            ? {
                video: video ? {
                    url: video.url,
                    name: video.name,
                } : null,
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
        this.g_a_upload = data.hasUpload && data.approvalType !== at
            ? {
                upload: uploadedFile ? {
                    uploadEmpty: false,
                    url: uploadedFile.url,
                    name: uploadedFile.name,
                } : { uploadEmpty: true },
            } : null;
        
        // CHECKLIST
        this.g_a_checklist = [data.hasChecklist].reduce((checklistObj,hasChecklist) => {
                if (hasChecklist) {
                    checklistObj = {
                        ...checklistObj,
                        title: 'Los checklists',
                        checkList: checklist
                    }
                }
                return checklistObj;
            },{});
        
        this.g_a_action_btn = {
            isGenericActivityBtnReceptor: true,
            btnApprovalType: +data.approvalType,
            action: (data.status === "1" || data.status === "2") &&
                (data.hasDate || data.hasUpload || data.hasChecklist)
                // && +data.approvalType > 1 && +data.approvalType < 4 
                ? ( 
                    +data.approvalType === 1 && this.user_type && +this.user_type > 1 
                        ? null : [data.approvalType].reduce((btns,approvalType) => {
                            if (approvalType === "3" && data.status === "1") 
                                btns.push({ type: 8, name: 'Guardar' });
                            btns.push({
                                type: data.status === "1" ? (data.approvalType === "3" ? 7 : 8) : 9,
                                name: data.status === "1" 
                                    ? (data.approvalType === "3" 
                                        ? 'Enviar' 
                                        : 'Guardar'
                                    ) 
                                    : 'Cancelar solicitud'
                            });
                            return btns;
                        },[]) 
                  ) 
                : null,
            };

        this.g_a_action_btn_validators = {
                genActSavingTypes: data.hasDate || data.hasUpload || data.hasChecklist ? {
                    hasDate: data.hasDate,
                    hasUpload: data.hasUpload,
                    hasChecklist: data.hasChecklist
                } : null
            };
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
        this.userDataSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
    }
}
