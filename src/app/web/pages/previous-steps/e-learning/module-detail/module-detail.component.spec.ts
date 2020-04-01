import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleDetailComponent } from './module-detail.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EheaderComponent } from '../../../../layout/eheader/eheader.component';
import { Module } from '../../../../../models/steps/learning-modules.model';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../../../store/states/e-learning/coordinator-user.state';

describe('ModuleDetailComponent', () => {
  let component: ModuleDetailComponent;
  let fixture: ComponentFixture<ModuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDetailComponent, EheaderComponent ],
      imports: [OwlModule, FontAwesomeModule,HttpClientModule,RouterTestingModule,
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDetailComponent);
    component = fixture.componentInstance;
    fixture.nativeElement.querySelectorAll('.module-title h1').item(0).style.fontFamily='Montserrat';

    component.isTesting = true;
    component.testingModule = MODULETEST;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('font family should be Montserrat', () => { 
    let fontStyle = fixture.nativeElement.querySelectorAll('.module-title h1').item(0).style.fontFamily;
    expect(fontStyle).toContain('Montserrat');
  });

  it('should validate quizz only when all questions are answered', () => { 
    let allQselected = true;
    
    for (let i = 0; i < component.selectedQuestions.length; i++) {
      component.selectAnswer(i,0);
      if (component.selectedQuestions[i] == -1) {
        allQselected = false;
        break;
      }
    }
    
    expect(allQselected).toBeTruthy();
  });

  it("'Estimación de tiempo' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.estimate h4').item(0).textContent.toLowerCase();
    expect(word).toContain('estimación de tiempo');
  });

  it("'Quizz' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.quizz .top-title h2').item(0).textContent.toLowerCase();
    expect(word).toBe('quizz');
  });

  it("'Seleccione la respuesta correcta' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.quizz .top-title h4').item(0).textContent.toLowerCase();
    expect(word).toBe('seleccione la respuesta correcta');
  });

  it("'Validar' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.validate-btn button').item(0).textContent.toLowerCase();
    expect(word).toContain('validar');
  });

});


export const MODULETEST: Module = {
  id: "1111",
  name: "some name",
  title: "title",
  description: "subtitle",
  secondaryTitle: "bla bla",
  secondaryDescription: "bla bla",
  objectives: [
    "first one",
    "second one",
    "lastOne"
  ],
  slider: [
    {
      url: "../../../../../../assets/images/icn-amblemoneda-blue.png",
      description: "some image description",
      type: "1"
    }
  ],
  images: [
    {
      image: "../../../../../../assets/images/icn-amblemoneda-blue.png",
      description: "some description"
    }
  ],
  duration: "0100",
  quizzes: [
    {
      id: "1111",
      question: "de que color es el caballo blanco?",
      optionA: "Blanco",
      optionB: "Amarillo",
      optionC: "Verde",
      optionD: "Azul",
      correctOption: "optionA",
      createdAt: "",
      updatedAt: ""
    }
  ],
  createdAt: "",
  updatedAt: ""
};
