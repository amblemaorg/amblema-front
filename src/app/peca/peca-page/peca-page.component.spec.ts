import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { PecaPageComponent } from './peca-page.component';
import { NbCardModule, NbTabsetModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TabsBlockComponent } from './blocks/tabs-block/tabs-block.component';
import { TableBlockComponent } from './blocks/table-block/table-block.component';
import { ComponentFactoryResolver } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

describe('PecaPageComponent', () => {
  let component: PecaPageComponent;
  let fixture: ComponentFixture<PecaPageComponent>;
  let factoryResolver: ComponentFactoryResolver;
  const pageConfig = {
    header: {
      title: "Diagnóstico inicial"
    },
    blocks: [
      {
        component: 'tabs',
        settings: {
          items: [
            {
              title: "Lectura",
              childBlocks: []
            },
            {
              title: "Matemática",
              childBlocks: []
            }
          ],
        },
      },
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PecaPageComponent,
        TabsBlockComponent,
        TableBlockComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        NbCardModule,
        NbTabsetModule,
        Ng2SmartTableModule
      ],
      providers: [{ provide: ToastrService, useClass: ToastrService }],
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TabsBlockComponent,
          TableBlockComponent
        ]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaPageComponent);
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component = fixture.componentInstance;
    component.instantiateComponent(pageConfig);
    fixture.detectChanges();
  });

  it('should create page component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with only one h1 tag', () => {
    const h1 = fixture.nativeElement.querySelectorAll('h1');
    expect(h1.length).toBe(1);
    expect(h1[0].textContent).toBe(pageConfig.header.title);
  });
});
