import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStepsComponent } from './general-steps.component';

describe('GeneralStepsComponent', () => {
  let component: GeneralStepsComponent;
  let fixture: ComponentFixture<GeneralStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStepsComponent ]
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
