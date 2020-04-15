import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBlockComponent } from './table-block.component';
import { ComponentFactoryResolver } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('TableBlockComponent', () => {
  let factoryResolver: ComponentFactoryResolver;
  let fixture: ComponentFixture<TableBlockComponent>;
  let component: TableBlockComponent;

  let tableSettings = {
    component: 'table',
    settings: {
      columns: {
        grade: {
          title: "Grados"
        },
        section: {
          title: 'Sección'
        },
        multipĺication: {
          title: 'Multiplicación'
        },
        mathLogic: {
          title: 'Lógica Matemática'
        }
      }
    }
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        TableBlockComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        Ng2SmartTableModule
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TableBlockComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(tableSettings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    const tableComponent = fixture.nativeElement.querySelector('ng2-smart-table');
    expect(component).toBeTruthy();
    expect(tableComponent).toBeTruthy();
  });
});
