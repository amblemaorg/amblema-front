import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { JwPaginationComponent } from '../../../../shared/jw-angular-pagination'; //! SOLVENTANDO PROBLEMA DE COMPILADO AOT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModulesListComponent } from './modules-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../../store/states/e-learning/learning-modules.state';
import { UserState } from '../../../../../store/states/e-learning/user.state';
import { StepsState } from '../../../../../store/states/steps/project.state';
import { ResidenceInfoState } from '../../../../../store/states/steps/residence-info.state';

describe('ModulesListComponent', () => {
  let component: ModulesListComponent;
  let fixture: ComponentFixture<ModulesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesListComponent, JwPaginationComponent ],
      imports: [
        FontAwesomeModule, 
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesListComponent);
    component = fixture.componentInstance;

    component.pageOfItems = MODULESARRAYTEST;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("'¡Bienvenidx (Nombre del coordinador), que comience el aprendizaje!' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.welcome-message h1').item(0).textContent.toLowerCase();
    let validator1 = word.includes('¡bienvenid');
    let validator2 = word.includes(', que comience el aprendizaje!');
    expect(validator1 && validator2).toBeTruthy();
  });

  it("'Volver a los pasos' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.welcome-message button').item(0).textContent.toLowerCase();
    expect(word).toBe('volver a los pasos');
  });
  
  it("'Iniciar' word must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.modules-list button').item(0).textContent.toLowerCase();
    expect(word).toContain('iniciar');
  });

  it("'Módulo' word must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.modules-list h2').item(0).textContent.toLowerCase();
    expect(word).toContain('módulo');
  });

});


export const MODULESARRAYTEST = [
  {
    id: "1111",
    name: "some name",
    title: "blah blah blah",
    description: "blah blah blah",
    secondaryTitle: "blah blah blah",
    secondaryDescription: "blah blah blah",
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
    },
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
    id: "5e62a1083d84c94795757634",
    question: "de que color es el caballo blanco?",
    optionA: "Blanco",
    optionB: "Amarillo",
    optionC: "Verde",
    optionD: "Azul",
    correctOption: "optionA",
    createdAt: "2020-03-06T19:14:16.812000",
    updatedAt: "2020-03-06T19:14:16.816000"
    },
    ],
    createdAt: "2020-03-06T19:14:16.813000",
    updatedAt: "2020-03-06T19:14:16.816000"
    },
];