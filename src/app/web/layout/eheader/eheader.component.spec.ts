import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EheaderComponent } from './eheader.component';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../store/states/e-learning/coordinator-user.state';
import { HttpClientModule } from '@angular/common/http';

describe('EheaderComponent', () => {
  let component: EheaderComponent;
  let fixture: ComponentFixture<EheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EheaderComponent ],
      imports: [
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("'AmbLeMa' word must be well-written", () => { 
    let organization_name = fixture.nativeElement.querySelectorAll('.main-name').item(0).textContent;
    expect(organization_name).toBe('AmbLeMa');
  });

  it("'Módulos aprobados' sentence must be well-written", () => { 
    let word = fixture.nativeElement.querySelectorAll('.user-info').item(0).textContent.toLowerCase();
    expect(word).toContain('módulos aprobado');
  });  

});
