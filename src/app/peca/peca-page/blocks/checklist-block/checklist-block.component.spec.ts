import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistBlockComponent } from './checklist-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NbCheckboxModule } from '@nebular/theme';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

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
            title: 'Convención anual',
            checkList: [
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
                { description: 'Lorem, ipsum dolor.' },
            ],
            button: {
                name: 'Guardar'
            }

        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChecklistBlockComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                NbCheckboxModule,
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
