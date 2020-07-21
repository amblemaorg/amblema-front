import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistBlockComponent } from './checklist-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NbCheckboxModule } from '@nebular/theme';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgSelectModule } from '@ng-select/ng-select';

describe('ChecklistBlockComponent', () => {
    let component: ChecklistBlockComponent;
    let fixture: ComponentFixture<ChecklistBlockComponent>;

    let factoryResolver: ComponentFactoryResolver;
    let pageBlockFactory: ComponentFactory<PageBlockComponent>;
    //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

    let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
    let checkListSettings = {
        component: 'checkList',
        settings: {
            infoContainer: [
                {
                    principal:
                    {
                        tema: 'Geografia de Venezuela',
                        objetivo: [
                            { id: 1, name: 'Pendiente' },
                            { id: 2, name: 'Aprobado' },
                            { id: 3, name: 'Rechazado' },
                        ],
                        estrategia: [
                            { id: 1, name: 'plastilina' },
                            { id: 2, name: 'tijera' },
                            { id: 3, name: 'pega' },
                        ],
                        contenido: [
                            { id: 1, name: 'Pendiente' },
                            { id: 2, name: 'Aprobado' },
                            { id: 3, name: 'Rechazado' },
                        ]
                    },
                    datosNivel:
                    {
                        nivel: 'Primer grado',
                        week: '1 al 6 - 05 - 2020',
                        time: '45 min',
                        tecnica: [
                            { id: 1, name: 'Pendiente' },
                            { id: 2, name: 'Aprobado' },
                            { id: 3, name: 'Rechazado' },
                        ],
                        recurso: [
                            { id: 1, name: 'plastilina' },
                            { id: 2, name: 'tijera' },
                            { id: 3, name: 'pega' },
                        ],
                        evaluacion: [
                            { id: 1, name: 'Pendiente' },
                            { id: 2, name: 'Aprobado' },
                            { id: 3, name: 'Rechazado' },
                        ]
                    },
                    title: 'Convención anual',
                    checkList: [
                        { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                        { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                        { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                        { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    ],
                    material: 'https://binauraldev.com/ecommerce/',
                    button: {
                        name: 'Guardar'
                    },
                    line: true
                },
            ]
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChecklistBlockComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                NbCheckboxModule,
                NgSelectModule
            ]
        })
        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ChecklistBlockComponent]
            }
        });
    });


    beforeEach(() => {
        fixture = TestBed.createComponent(ChecklistBlockComponent);
        component = fixture.componentInstance;
        factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
        component.setSettings(checkListSettings);
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
