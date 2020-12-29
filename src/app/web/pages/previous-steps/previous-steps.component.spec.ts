import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EheaderComponent } from '../../layout/eheader/eheader.component';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../store/states/e-learning/user.state';
import { StepsState } from '../../../store/states/steps/project.state';
import { PreviousStepsComponent } from './previous-steps.component';
import { ResidenceInfoState } from '../../../store/states/steps/residence-info.state';

describe('PreviousStepsComponent', () => {
  let component: PreviousStepsComponent;
  let fixture: ComponentFixture<PreviousStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousStepsComponent, EheaderComponent ],
      imports: [
        RouterTestingModule,
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

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
