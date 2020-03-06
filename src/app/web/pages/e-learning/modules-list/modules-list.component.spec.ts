import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JwPaginationComponent } from '../../../shared/jw-angular-pagination'; //! SOLVENTANDO PROBLEMA DE COMPILADO AOT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModulesListComponent } from './modules-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ModulesListComponent', () => {
  let component: ModulesListComponent;
  let fixture: ComponentFixture<ModulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesListComponent, JwPaginationComponent ],
      imports: [FontAwesomeModule, RouterTestingModule, HttpClientModule]
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
