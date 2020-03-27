import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StepsComponent } from './steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeneralStepsComponent } from './general-steps/general-steps.component';
import { StepsFormsComponent } from './steps-forms/steps-forms.component';
import { EmbedVideoService } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent,GeneralStepsComponent,StepsFormsComponent ],
      imports: [FontAwesomeModule,RouterTestingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
        NgSelectModule],
      providers: [EmbedVideoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
