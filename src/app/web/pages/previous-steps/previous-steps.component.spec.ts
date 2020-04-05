import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EheaderComponent } from '../../layout/eheader/eheader.component';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../store/states/e-learning/coordinator-user.state';
import { StepsState } from '../../../store/states/steps/project.state';
import { PreviousStepsComponent } from './previous-steps.component';

describe('PreviousStepsComponent', () => {
  let component: PreviousStepsComponent;
  let fixture: ComponentFixture<PreviousStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousStepsComponent, EheaderComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxsModule.forRoot( [
          ModulesState,
          CoordinatorState,
          StepsState,
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
