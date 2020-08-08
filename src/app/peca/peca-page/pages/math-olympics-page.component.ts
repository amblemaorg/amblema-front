import {
    Component,
    AfterViewInit,
    Injector,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';
import { PecaPageComponent } from '../peca-page.component';
import { MATH_OLYMPICS_CONFIG as config } from './math-olympics-config';
import { Observable, Subscription } from "rxjs";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { GlobalService } from "../../../services/global.service";
import { isNullOrUndefined } from "util";
import { DatePipe } from "@angular/common";
import { studentsOlympicMapper } from '../mappers/students-olym-mappers';
import { Router, NavigationEnd, Event } from "@angular/router";
//import { sectionsAndStudentsDataToSectionsFormMapper } from '../mappers/sections-and-students-form-mappers';
@Component({
    selector: 'peca-maths-olympics',
    templateUrl: '../peca-page.component.html',
})
export class MathOlympicsPageComponent extends PecaPageComponent implements AfterViewInit {
    @ViewChild('blocksContainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

    //Selectores
    @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
    //@Select(PecaState.getPecaSchoolData) schoolData$: Observable<any>;
    //subscripciones
    infoDataSubscription: Subscription;
    routerSubscription: Subscription;

    omlimpiadasData: any;
    text: string;
    date: string;
    url: string;
    name: string;
    file: any;

    studentsTableData: any;
    //studentsSelectData: any;

    prueba: any;

    UrlLapse = "";
    peca_id: any;

    isInstanciated: boolean;
    loadedData: boolean;
    pipe = new DatePipe('en-US');
    constructor(factoryResolver: ComponentFactoryResolver,
        globals: GlobalService,
        private router: Router) {
        super(factoryResolver);

        globals.blockIntancesEmitter.subscribe(data => {
            data.blocks.forEach((block, name) =>
                this.blockInstances.set(name, block)
            );
            console.log(this.blockInstances, "bloques");
            if (this.loadedData) this.updateMethods();
        });

        this.instantiateComponent(config);

        //To know if the url change
        this.routerSubscription = this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.UrlLapse = event.url;
                this.UrlLapse = this.router.url.substr(12, 1);
                // console.log("el ev", this.UrlLapse);
                this.getInfo();
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
                        console.log(data, "data olimpiadas")
                    }
                    //data de las olimpiadas
                    this.setOlimpiadas(data);
                    this.setOLimpiadasData();

                    //data para llenar la tabla
                    if (this.UrlLapse === "1") {
                        if (data.activePecaContent.lapse1.olympics.students !=null){
                            let auxName = [];
                            data.activePecaContent.lapse1.olympics.students.forEach((students) => {
                                students.fisrtName = students.name.split(' ').slice(0, -1).join(' '),
                                    students.lastName = students.name.split(' ').slice(-1).join(' ');
                            });
    
                            auxName = auxName.concat(data.activePecaContent.lapse1.olympics.students)
    
                            this.prueba = auxName;
    
                            this.setStudentTableData(this.prueba, studentsOlympicMapper);
                        }
                        else {
                            this.prueba = "";
                        }
                        
                    } else if (this.UrlLapse === "2") {
                        if (data.activePecaContent.lapse2.olympics.students !=null){
                            let auxName = [];
                            data.activePecaContent.lapse2.olympics.students.forEach((students) => {
                                students.fisrtName = students.name.split(' ').slice(0, -1).join(' '),
                                    students.lastName = students.name.split(' ').slice(-1).join(' ');
                            });
    
                            auxName = auxName.concat(data.activePecaContent.lapse2.olympics.students)
    
                            this.prueba = auxName;
    
                            this.setStudentTableData(this.prueba, studentsOlympicMapper);
                        }
                        else {
                            this.prueba = "";
                        }
                        
                    } else {
                        if (data.activePecaContent.lapse2.olympics.students !=null){
                            let auxName = [];
                            data.activePecaContent.lapse3.olympics.students.forEach((students) => {
                                students.fisrtName = students.name.split(' ').slice(0, -1).join(' '),
                                    students.lastName = students.name.split(' ').slice(-1).join(' ');
                            });
    
                            auxName = auxName.concat(data.activePecaContent.lapse3.olympics.students)
    
                            this.prueba = auxName;
    
                            this.setStudentTableData(this.prueba, studentsOlympicMapper);
                        }
                        else {
                            this.prueba = "";
                        }
                    }
                    //data para llenar el select con estudiantes
                    //this.setStudentsSelectData(data.school, sectionsAndStudentsDataToSectionsFormMapper)

                    this.loadedData = true;
                    if (this.isInstanciated) this.updateMethods();
                }
            }, er => { console.log(er) })
    }

    /*  setStudentsSelectData(gradesAdnSectionsData, _mapper?: Function) {
         if (_mapper) {
             const mapper = _mapper(gradesAdnSectionsData);
             this.studentsSelectData = {
                 setContent: true,
                 contentToSet: ["docente"],
                 data: {
                     docente: mapper.teachers,
                 }
             };
             this.studentsSelectData = {
                 data: mapper.sections,
                 isEditable: true,
             };
         } else {
             this.studentsSelectData = gradesAdnSectionsData.teachers;
         }
     } */

    setStudentTableData(studentsData, _mapper?: Function) {
        if (_mapper) {
            this.studentsTableData = {
                data: _mapper(studentsData),
                isEditable: true
            };
            console.log(this.studentsTableData, "Datos de la tabla")
        } else {
            this.studentsTableData = studentsData;
        }
    }

    setOlimpiadas(data) {
        if (this.UrlLapse === "1") {
            if (data.activePecaContent.lapse1.olympics !=null) {
                this.text = data.activePecaContent.lapse1.olympics.description;
                //console.log(this.text, "descricion olimpiadas 1 ")
                this.date = this.pipe.transform(Date.parse(data.activePecaContent.lapse1.olympics.date), 'dd/MM/yyyy , h:mm');
                this.file = data.activePecaContent.lapse1.olympics.file;
            }
            else {
                this.text = "";
                this.date = "";
                this.file = "";
            }
        }
        else if (this.UrlLapse === "2") {
            if (data.activePecaContent.lapse2.olympics !=null) {
                this.text = data.activePecaContent.lapse2.olympics.description;
                console.log(this.text, "descricion olimpiadas 2 ")
                this.date = this.pipe.transform(Date.parse(data.activePecaContent.lapse2.olympics.date), 'dd/MM/yyyy , h:mm');
                this.file = data.activePecaContent.lapse1.olympics.file;
            }
            else {
                this.text = "";
                this.date = "";
                this.file = "";
            }
            
        } else {
            if (data.activePecaContent.lapse3.olympics !=null) {
                this.text = data.activePecaContent.lapse3.olympics.description;
                console.log(this.text, "descricion olimpiadas 3 ")
                this.date = this.pipe.transform(Date.parse(data.activePecaContent.lapse3.olympics.date), 'dd/MM/yyyy , h:mm');
                this.file = data.activePecaContent.lapse1.olympics.file;
            }
            else {
                this.text = "";
                this.date = "";
                this.file = "";
            }
            
        }
        //console.log(this.date, 'fileeeeeeeeeeeeeeeee')
    }

    setOLimpiadasData() {
        this.omlimpiadasData = {
            dateOrtext: {
                date: this.date
            },
            subtitles: [
                {
                    text: this.text
                }
            ],
            download:
            {
                url: this.file.url,
                name: this.file.name,
            }
        }
    }

    updateMethods() {
        this.updateDataToBlocks();
        //this.updateStaticFetchers();
        this.updateDynamicFetchers();
    }

    updateDynamicFetchers() {
        //update
        //pecaprojects/olympics/<string:pecaId>/<string:lapse>/<string:studentId> | PUT Actualizar
        this.createAndSetBlockFetcherUrls(
            "resultadoEstudianteModal",
            {
                put: (id_studente) =>
                    `pecaprojects/olympics/${this.peca_id}/${this.UrlLapse}/${id_studente}`,
            },
            "settings.data.id",
        );
    }

    updateDataToBlocks() {
        this.setBlockData("olimpiadasDateText", this.omlimpiadasData);
        // Students data
        this.setBlockData("resultadoTabla", this.studentsTableData);
        //select de estudiantes
        //this.setBlockData("selectStudents", this.studentsSelectData);
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