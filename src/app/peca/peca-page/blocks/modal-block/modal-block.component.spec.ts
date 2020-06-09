import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ModalBlockComponent } from './modal-block.component';

describe('ModalBlockComponent', () => {
  let component: ModalBlockComponent;
  let fixture: ComponentFixture<ModalBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let modalSettings = {
    component: 'modal',
    settings: {
      modalCode: 'codigodelmodal',
      items: [
        { childBlocks: [] },
      ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalBlockComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ModalBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(modalSettings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
