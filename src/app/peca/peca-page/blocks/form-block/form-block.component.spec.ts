import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBlockComponent } from './form-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { requiredAndNormalText } from '../../../../web/shared/forms/custom-validators';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbIconModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../store/states/steps/residence-info.state';

describe('FormBlockComponent', () => {
  let component: FormBlockComponent;
  let fixture: ComponentFixture<FormBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let formSettings = {
    component: 'form',
    settings: {
      formsContent: {
        name: {
          label: 'Nombre del campo',
          placeholder: 'Nombre del campo',
          fullwidth: false,
          type: 'text',
          validations: requiredAndNormalText,
          messages: { pattern: MESSAGES.TEXT_MESSAGE },
        },
      },
      buttons: ['guardar'],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        NbIconModule,
        ToastrModule.forRoot(),
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
      ],
      providers: [{ provide: ToastrService, useClass: ToastrService }],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [FormBlockComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(formSettings.settings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
