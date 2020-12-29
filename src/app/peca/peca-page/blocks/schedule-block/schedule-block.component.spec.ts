import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { ScheduleBlockComponent } from './schedule-block.component';
import { PageBlockFactory } from '../page-block-factory';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../store/states/steps/residence-info.state';

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
        HttpClientModule,
        NgxsModule.forRoot( [
          ModulesState,
          UserState,
          StepsState,
          ResidenceInfoState,
        ],
        {
          compatibility: {
            strictContentSecurityPolicy: true
          },
          developmentMode: false
        })
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
