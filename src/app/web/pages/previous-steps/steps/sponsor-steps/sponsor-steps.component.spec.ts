import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorStepsComponent } from './sponsor-steps.component';

describe('SponsorStepsComponent', () => {
  let component: SponsorStepsComponent;
  let fixture: ComponentFixture<SponsorStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
