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

    g_a_text: any;

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
                    this.changeComponentHeader(activity.name); 

                    console.log("Datos de la actividad",activity);
                    this.setGenericActivityData(activity);
                    
                    this.loadedData = true;
                    if (this.isInstanciated) this.updateMethods();
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
        if (this.g_a_text) this.setBlockData("genericActivityText", { isGenericActivity: true, ...this.g_a_text } );
    }

    setGenericActivityData(data: GenericActivity) {
        this.g_a_text = data.hasText 
            ? {                
                subtitles: [{ text: data.text }]
            } : null;
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
