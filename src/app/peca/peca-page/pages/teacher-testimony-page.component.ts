import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { TEACHER_TESTIMONY_CONFIG as config } from './teacher-testimony-config';
import { Observable, Subscription } from 'rxjs';
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { HttpFetcherService } from 'src/app/services/peca/http-fetcher.service';
import { isNullOrUndefined } from "util";
import { teacherTestimonyMapper } from "../mappers/teacher-testimony-mappers";
@Component({
    selector: 'peca-teacher-testimony',
    templateUrl: '../peca-page.component.html',
})
export class TeacherTestimonyPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    //Selectores
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

    //subscripciones
    infoDataSubscription: Subscription;

    //testimonio
    testimonyTeacherData: any;

    isInstanciated: boolean;
    loadedData: boolean;

    constructor(factoryResolver: ComponentFactoryResolver, router: Router, globals: GlobalService, private httpFetcherService: HttpFetcherService) {
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
                if (data.activePecaContent) {
                    if (!isNullOrUndefined(data)) {
                        console.log(data, "data testimonio")
                    }

                    this.setTestimonyTeacherDataMapper(data.activePecaContent.school.teachersTestimonials.testimonials, teacherTestimonyMapper);

                    this.loadedData = true;
                    if (this.isInstanciated) this.updateMethods();
                }

            }, er => { console.log(er) })

    }

    updateMethods() {
        this.updateDataToBlocks();
    }
    updateDataToBlocks() {
        this.setBlockData("testimonyTable", this.testimonyTeacherData);
    }

    setTestimonyTeacherDataMapper(dataTestimony, _mapper?: Function) {
        if (_mapper) {
            console.log(dataTestimony, 'asdasdasdasdasdasd')
            this.testimonyTeacherData = {
                data: _mapper(dataTestimony),
                isEditable: true,
            };
            console.log("este es el mapper de testimonio", this.testimonyTeacherData);
        } else {
            this.testimonyTeacherData = dataTestimony;
            //console.log("este NO es el mapper de amblemoneda", this.pruebaData);
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instantiateBlocks(this.container);
        });
    }
}