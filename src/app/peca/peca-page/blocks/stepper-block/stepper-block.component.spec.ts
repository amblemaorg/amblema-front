import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBlockComponent } from './stepper-block.component';
import { NbStepperModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StepperBlockComponent', () => {
  let component: StepperBlockComponent;
  let fixture: ComponentFixture<StepperBlockComponent>;



  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)


  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let stepperSettings = {
    component: 'stepper',
    settings: {
      titles: [
        { id: 1,
          text: 'Paso 1 ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          aligning: 'center',
        },
        {
          id: 2,
          text: 'Paso 2 ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          aligning: 'center',
      },
      ]
      
    }
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperBlockComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NbStepperModule
      ]
    })
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [StepperBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(stepperSettings);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
