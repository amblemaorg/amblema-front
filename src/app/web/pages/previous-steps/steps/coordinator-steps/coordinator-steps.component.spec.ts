import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorStepsComponent } from './coordinator-steps.component';

describe('CoordinatorStepsComponent', () => {
  let component: CoordinatorStepsComponent;
  let fixture: ComponentFixture<CoordinatorStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
