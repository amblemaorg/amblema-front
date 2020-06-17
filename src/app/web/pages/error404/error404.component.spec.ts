import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Error404Component } from "./error404.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { WebState } from "src/app/store/states/web/web.state";

describe("Error404Component", () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Error404Component],
      imports: [
        RouterTestingModule.withRoutes([]),
        NgxsModule.forRoot([WebState])
      ],
      providers: [{ provide: Store, useClass: Store }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
