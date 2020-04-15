import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { StepsFormsComponent } from './steps-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../../store/states/steps/residence-info.state';

describe('StepsFormsComponent', () => {
  let component: StepsFormsComponent;
  let fixture: ComponentFixture<StepsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsFormsComponent ],
      imports: [FormsModule,ReactiveFormsModule,NgSelectModule,HttpClientModule,RouterTestingModule,
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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
