import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StepsComponent } from './steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeneralStepsComponent, StatusSelectorComponent } from './general-steps/general-steps.component';
import { StepsFormsComponent } from './steps-forms/steps-forms.component';
import { EmbedVideoService } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../store/states/steps/residence-info.state';
import { NgDatepickerModule } from 'ng2-datepicker';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent,GeneralStepsComponent,StepsFormsComponent,StatusSelectorComponent ],
      imports: [
        FontAwesomeModule,RouterTestingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
        NgDatepickerModule,

        NgSelectModule,
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
      providers: [EmbedVideoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    component.isTest = true;
    fixture.nativeElement.querySelectorAll('.description-info h1').item(0).style.fontFamily='Montserrat';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('font family should be Montserrat', () => {
    let fontStyle = fixture.nativeElement.querySelectorAll('.description-info h1').item(0).style.fontFamily;
    expect(fontStyle).toContain('Montserrat');
  });

  it("'AmbLeMa' word must be well-written", () => {
    let word = fixture.nativeElement.querySelectorAll('.description-info h1').item(0).textContent;
    expect(word).toContain('AmbLeMa');
  });

  it("'Generales' word must be well-written", () => {
    let word = fixture.nativeElement.querySelectorAll('.tabs-container .nav-tabs .nav-item:first-child a').item(0).textContent.toLowerCase();
    expect(word).toBe('generales');
  });

  it("'Padrino' word must be well-written", () => {
    let word = fixture.nativeElement.querySelectorAll('.tabs-container .nav-tabs .nav-item:nth-child(2) a').item(0).textContent.toLowerCase();
    expect(word).toBe('padrino');
  });

  it("'Coordinador' word must be well-written", () => {
    let word = fixture.nativeElement.querySelectorAll('.tabs-container .nav-tabs .nav-item:nth-child(3) a').item(0).textContent.toLowerCase();
    expect(word).toBe('coordinador');
  });

  it("'Escuela' word must be well-written", () => {
    let word = fixture.nativeElement.querySelectorAll('.tabs-container .nav-tabs .nav-item:last-child a').item(0).textContent.toLowerCase();
    expect(word).toBe('escuela');
  });
});
