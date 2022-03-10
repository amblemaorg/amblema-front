import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomBlockComponent } from './table-custom-block.component';

describe('TableCustomBlockComponent', () => {
  let component: TableCustomBlockComponent;
  let fixture: ComponentFixture<TableCustomBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
