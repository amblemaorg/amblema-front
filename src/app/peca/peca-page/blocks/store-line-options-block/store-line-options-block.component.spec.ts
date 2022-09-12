import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLineOptionsBlockComponent } from './store-line-options-block.component';

describe('StoreLineOptionsBlockComponent', () => {
  let component: StoreLineOptionsBlockComponent;
  let fixture: ComponentFixture<StoreLineOptionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLineOptionsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLineOptionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
