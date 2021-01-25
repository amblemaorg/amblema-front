import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TextsButtonsSetBlockComponent } from './texts-buttons-set-block.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PageBlockFactory } from '../page-block-factory';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { PageBlockComponent } from '../page-block.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../store/states/steps/residence-info.state';
import { EmbedVideoService } from 'ngx-embed-video';
import { NgDatepickerModule } from 'ng2-datepicker';

describe('TextsButtonsSetBlockComponent', () => {
  let component: TextsButtonsSetBlockComponent;
  let fixture: ComponentFixture<TextsButtonsSetBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let textsAndButtonsSettings = {
    component: 'buttons',
    settings: {
      dateOrtext: {
        text: 'texto fecha',
        date: '12/12/12',
      },
      status: 'pendiente',
      // texts: {
      title: {
        aligning: 'center', // 'center' for center aligning, 'left' otherwise
        text: 'texto alineado',
      },
      subtitles: [
        {
          title: 'subtitulo', // subtitle
          text: 'parrafo', // paragraph
        },
      ],
      // }[];
      action: [
        {
          type: 1, // 1 send, 2 save
          name: 'Enviar', // text in the button
        },
      ],
      // upload: any;
      //   download: any;
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextsButtonsSetBlockComponent],
      imports: [
        NgSelectModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        HttpClientModule,
        NgDatepickerModule,
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
      providers: [{ provide: ToastrService, useClass: ToastrService },EmbedVideoService],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextsButtonsSetBlockComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsButtonsSetBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(textsAndButtonsSettings.settings);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
