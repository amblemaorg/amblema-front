import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleDetailComponent } from './module-detail.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

describe('ModuleDetailComponent', () => {
  let component: ModuleDetailComponent;
  let fixture: ComponentFixture<ModuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDetailComponent ],
      imports: [OwlModule, FontAwesomeModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
