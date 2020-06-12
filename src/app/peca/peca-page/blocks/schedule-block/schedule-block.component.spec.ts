import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { ScheduleBlockComponent } from './schedule-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

describe('ScheduleBlockComponent', () => {
  let component: ScheduleBlockComponent;
  let fixture: ComponentFixture<ScheduleBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let scheduleSettings = {
    component: 'agendas',
    settings: {
      items: [
        {}
      ],
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleBlockComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ScheduleModule,
      ]
    })
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ScheduleBlockComponent]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(scheduleSettings);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
