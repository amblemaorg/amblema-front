import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsMatheBlockComponent } from './graphics-mathe-block.component';

describe('GraphicsMatheBlockComponent', () => {
  let component: GraphicsMatheBlockComponent;
  let fixture: ComponentFixture<GraphicsMatheBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsMatheBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsMatheBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
