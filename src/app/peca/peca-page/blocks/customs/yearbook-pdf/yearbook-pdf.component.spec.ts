import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbookPdfComponent } from './yearbook-pdf.component';

describe('YearbookPdfComponent', () => {
  let component: YearbookPdfComponent;
  let fixture: ComponentFixture<YearbookPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbookPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbookPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
