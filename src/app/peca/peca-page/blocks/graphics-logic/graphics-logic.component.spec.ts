import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsLogicComponent } from './graphics-logic.component';

describe('GraphicsLogicComponent', () => {
  let component: GraphicsLogicComponent;
  let fixture: ComponentFixture<GraphicsLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
