import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OwlModule } from 'ngx-owl-carousel';
import { SliderBlockComponent } from './slider-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ComponentFactoryResolver } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('SliderBlockComponent', () => {
  let factoryResolver: ComponentFactoryResolver;
  let fixture: ComponentFixture<SliderBlockComponent>;
  let component: SliderBlockComponent;

  let sliderSettings = {
    component: 'slider',
    settings: {
      sliderImage: [{
        image:'string',
        description: 'string'
      }],
      dateOrtext: {
        text: 'string',
        fields: ['string']
      }
    }
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBlockComponent ],
      imports: [OwlModule, RouterTestingModule]
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
