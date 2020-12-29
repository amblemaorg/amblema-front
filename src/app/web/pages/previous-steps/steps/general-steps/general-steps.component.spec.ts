import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GeneralStepsComponent, StatusSelectorComponent } from './general-steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepsFormsComponent } from '../steps-forms/steps-forms.component';
import { EmbedVideoService } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgDatepickerModule } from 'ng2-datepicker';

describe('GeneralStepsComponent', () => {
  let component: GeneralStepsComponent;
  let fixture: ComponentFixture<GeneralStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStepsComponent,StepsFormsComponent, StatusSelectorComponent ],
      imports: [RouterTestingModule, FontAwesomeModule, HttpClientModule, FormsModule,
        NgDatepickerModule,
        ReactiveFormsModule, NgSelectModule],
      providers: [EmbedVideoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
