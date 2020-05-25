import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBlockComponent } from './stepper-block.component';
import { NbStepperModule } from '@nebular/theme';
import { ComponentFactoryResolver } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('StepperBlockComponent', () => {
  let factoryResolver: ComponentFactoryResolver;
  let fixture: ComponentFixture<StepperBlockComponent>;
  let component: StepperBlockComponent;

  let stepperSettings = {
    component: 'stepper',
    settings: {
      titles: [{
        id: '0',
        text: 'string',
        content: 'string',
        aligning: 'center',
      }]
    }
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ StepperBlockComponent ],
      imports: [NbStepperModule]
    })
    
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [StepperBlockComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(stepperSettings.settings);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
