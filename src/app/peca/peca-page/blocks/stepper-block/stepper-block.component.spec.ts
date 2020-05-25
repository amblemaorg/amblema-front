import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBlockComponent } from './stepper-block.component';

describe('StepperBlockComponent', () => {
  let component: StepperBlockComponent;
  let fixture: ComponentFixture<StepperBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
