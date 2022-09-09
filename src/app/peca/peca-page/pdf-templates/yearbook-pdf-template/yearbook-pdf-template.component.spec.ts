import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbookPdfTemplateComponent } from './yearbook-pdf-template.component';

describe('YearbookPdfTemplateComponent', () => {
  let component: YearbookPdfTemplateComponent;
  let fixture: ComponentFixture<YearbookPdfTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbookPdfTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbookPdfTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
