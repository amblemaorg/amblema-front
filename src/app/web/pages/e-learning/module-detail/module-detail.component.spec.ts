import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleDetailComponent } from './module-detail.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModuleDetailComponent', () => {
  let component: ModuleDetailComponent;
  let fixture: ComponentFixture<ModuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDetailComponent ],
      imports: [OwlModule, FontAwesomeModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDetailComponent);
    component = fixture.componentInstance;
    fixture.nativeElement.querySelectorAll('.module-title h1').item(0).style.fontFamily='Montserrat';
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

});
