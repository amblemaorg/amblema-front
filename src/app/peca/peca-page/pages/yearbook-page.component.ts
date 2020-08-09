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
import { PecaPageComponent } from '../peca-page.component';
import { YEARBOOK_CONFIG as config } from './yearbook-config';
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from "../../../services/global.service";
import { amblemarioMapper } from '../mappers/amblemario-mapper';
import { PdfYearbookService } from '../../../services/peca/pdf-yearbook.service';

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

    constructor(
        factoryResolver: ComponentFactoryResolver,
        pdfYearbookService: PdfYearbookService,
        globals: GlobalService
    ) {
        super(factoryResolver,null,null,pdfYearbookService);

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

                        this.setPdfData(this.pecaData);

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
    }

    updateStaticFetchers() {
        //
    }
    
    updateDynamicFetchers() {
        //
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
