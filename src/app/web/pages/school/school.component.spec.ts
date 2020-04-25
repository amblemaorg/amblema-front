import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SchoolComponent } from "./school.component";
import { SchoolsMapComponent } from "./schools-map/schools-map.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModalBackdrop } from "@ng-bootstrap/ng-bootstrap/modal/modal-backdrop";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

describe("SchoolComponent", () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolComponent, SchoolsMapComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule,
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
