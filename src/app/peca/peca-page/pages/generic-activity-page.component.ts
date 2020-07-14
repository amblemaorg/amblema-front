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

    constructor(factoryResolver: ComponentFactoryResolver, private router: Router) {
        super(factoryResolver);
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
                    const activity = data.activePecaContent[`lapse${lapse_id}`].activities[index];
                    this.changeComponentHeader(activity.name);   
                }                
            },
            error => console.error(error)
        );
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
            this.isInstanciated = true;
        });
    }

    ngOnDestroy() {
        this.pecaDataSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
    }
}
