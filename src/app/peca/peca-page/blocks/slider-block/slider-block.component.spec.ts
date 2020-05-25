import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBlockComponent } from './slider-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ComponentFactoryResolver } from '@angular/core';

describe('SliderBlockComponent', () => {
  let factoryResolver: ComponentFactoryResolver;
  let fixture: ComponentFixture<SliderBlockComponent>;
  let component: SliderBlockComponent;

  let sliderSettings = {
    component: 'slider',
    settings: {
      sliderImage: {title: 'title'}
    }
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBlockComponent ]
    })
    
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [SliderBlockComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(sliderSettings.settings);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
