import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFormsComponent } from './steps-forms.component';

describe('StepsFormsComponent', () => {
  let component: StepsFormsComponent;
  let fixture: ComponentFixture<StepsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
