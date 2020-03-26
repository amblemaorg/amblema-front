import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GeneralStepsComponent } from './general-steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepsFormsComponent } from '../steps-forms/steps-forms.component';
import { EmbedVideoService } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';

describe('GeneralStepsComponent', () => {
  let component: GeneralStepsComponent;
  let fixture: ComponentFixture<GeneralStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStepsComponent,StepsFormsComponent ],
      imports: [RouterTestingModule, FontAwesomeModule, HttpClientModule],
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
