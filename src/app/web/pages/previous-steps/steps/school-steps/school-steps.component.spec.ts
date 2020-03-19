import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStepsComponent } from './school-steps.component';

describe('SchoolStepsComponent', () => {
  let component: SchoolStepsComponent;
  let fixture: ComponentFixture<SchoolStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
