import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ELearningComponent } from './e-learning.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EheaderComponent } from '../../layout/eheader/eheader.component';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../store/states/e-learning/coordinator-user.state';

describe('ELearningComponent', () => {
  let component: ELearningComponent;
  let fixture: ComponentFixture<ELearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxsModule.forRoot( [
          ModulesState,
          CoordinatorState
        ],
        {
          compatibility: {
            strictContentSecurityPolicy: true
          },
          developmentMode: false
        })
      ],
      declarations: [
        ELearningComponent,
        EheaderComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
