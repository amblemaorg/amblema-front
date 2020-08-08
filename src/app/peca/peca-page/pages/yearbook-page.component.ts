import {
    Component,
    AfterViewInit,
    Injector,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
    Inject,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Select } from "@ngxs/store";
import { DOCUMENT } from "@angular/common";
import { PecaPageComponent } from '../peca-page.component';
import { YEARBOOK_CONFIG as config } from './yearbook-config';
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from "../../../services/global.service";
import { amblemarioMapper } from '../mappers/amblemario-mapper';

@Component({
    selector: 'peca-yearbook',
    templateUrl: '../peca-page.component.html',
})
export class YearbookPageComponent extends PecaPageComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    @Select(PecaState.getActivePecaContent) pecaData$: Observable<any>;

    subscription: Subscription = new Subscription();

    pecaData: any;

    isInstanciated: boolean;
    loadedData: boolean;

    yearbookData: any;
    title: string;

    constructor(
        factoryResolver: ComponentFactoryResolver, 
        @Inject(DOCUMENT) document: Document,
        globals: GlobalService
    ) {
        super(factoryResolver,null,null,document);

        globals.blockIntancesEmitter.subscribe(data => {
            data.blocks.forEach((block, name) =>
              this.blockInstances.set(name, block)
            );

            if (this.loadedData) this.updateMethods();
        });

        this.instantiateComponent(config);             
    }

    ngOnInit() {
        this.subscription.add(
            this.pecaData$.subscribe(
                data => {                    
                    if (data && data.activePecaContent) {    
                        this.setAmblemarioData(data.activePecaContent, amblemarioMapper);
                        console.log(data, "ANUARIO")
                        this.setPdfData(this.pecaData);

                        this.setYearbook(data);
                        this.setYearbookData();

                        this.loadedData = true;
                        if (this.isInstanciated) this.updateMethods();
                    }
                },
                error => console.error(error)
            )
        );
    }

    updateMethods() {
        this.updateDataToBlocks();
        // this.updateStaticFetchers();
        // this.updateDynamicFetchers();
    }

    updateDataToBlocks() {
        // this.setBlockData("schoolForm", this.schoolFormData);
        this.setBlockData("titleYearbook", this.yearbookData);
    }

    updateStaticFetchers() {
        //
    }
    
    updateDynamicFetchers() {
        //
    }

    setYearbook(data) {
        this.title = data.activePecaContent.yearbook.lapse1.activities[0].name;
        console.log(this.title, "nombre")
    }

    setYearbookData() {
        this.yearbookData = {
            inputAndBtns: [
                {
                    titleInput: this.title
                },

            ],
        }
        console.log(this.yearbookData, "aqui titulo")
    }

    setAmblemarioData(pecaData, _mapper?: Function) {
        if (_mapper) {
            this.pecaData = _mapper(pecaData);
        } else {
            this.pecaData = pecaData;
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
        this.subscription.unsubscribe();
    }
}
