import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OwlModule } from 'ngx-owl-carousel';
import { SliderBlockComponent } from './slider-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CarouselModule } from "ngx-owl-carousel-o";
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgDatepickerModule } from 'ng2-datepicker';


describe('SliderBlockComponent', () => {
  let fixture: ComponentFixture<SliderBlockComponent>;
  let component: SliderBlockComponent;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let sliderSettings = {
    component: 'slider',
    settings: {
        sliderImage: [
            {
                image: "../../../../../assets/images/profile-leena.jpg",
                description: "foto numero 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                image: "../../../../../assets/images/profile-oscar.jpg",
                description: "foto numero 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
        ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [SliderBlockComponent],
        imports: [
            RouterTestingModule.withRoutes([]),
            OwlModule,
            CarouselModule,
        NgDatepickerModule,

        ]
    })
    TestBed.overrideModule(BrowserDynamicTestingModule, {
        set: {
            entryComponents: [SliderBlockComponent]
        }
    });
});

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
