import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JwPaginationComponent } from '../../../shared/jw-angular-pagination'; //! SOLVENTANDO PROBLEMA DE COMPILADO AOT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModulesListComponent } from './modules-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ModulesState } from '../../../../store/states/e-learning/learning-modules.state';
import { CoordinatorState } from '../../../../store/states/e-learning/coordinator-user.state';

describe('ModulesListComponent', () => {
  let component: ModulesListComponent;
  let fixture: ComponentFixture<ModulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesListComponent, JwPaginationComponent ],
      imports: [
        FontAwesomeModule, 
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
