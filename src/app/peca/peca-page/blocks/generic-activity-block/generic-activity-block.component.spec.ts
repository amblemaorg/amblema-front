import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { GenericActivityBlockComponent } from './generic-activity-block.component';

describe('GenericActivityBlockComponent', () => {
  let component: GenericActivityBlockComponent;
  let fixture: ComponentFixture<GenericActivityBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let genericActivitySettings = {
    component: 'genericactivity',
    settings: {
      items: [
        { childBlocks: [] },
      ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GenericActivityBlockComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    })

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [GenericActivityBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericActivityBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(genericActivitySettings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
});