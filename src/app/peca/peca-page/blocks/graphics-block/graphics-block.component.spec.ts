import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsBlockComponent } from './graphics-block.component';

describe('GraphicsBlockComponent', () => {
  let component: GraphicsBlockComponent;
  let fixture: ComponentFixture<GraphicsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
