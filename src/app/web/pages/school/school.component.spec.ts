import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SchoolComponent } from "./school.component";
import { SchoolsMapComponent } from "./schools-map/schools-map.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModalBackdrop } from "@ng-bootstrap/ng-bootstrap/modal/modal-backdrop";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { WebPageTestHelpers } from "src/assets/tests/page-testing-helpers";
import { Title, Meta } from "@angular/platform-browser";
import { METADATA } from "../../web-pages-metadata";

describe("SchoolComponent", () => {
  const testHelpers = new WebPageTestHelpers();
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
      providers: [
        { provide: Title, useClass: Title },
        { provide: Meta, useClass: Meta },
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

  it(`should have meta title tag with content ${METADATA.schoolsPage.title}`, () => {
    testHelpers.testMetaTitle(TestBed.get(Title), METADATA.schoolsPage.title);
  });

  METADATA.schoolsPage.metatags.map((metatag) => {
    it(`should have meta ${metatag.name} with content`, () => {
      testHelpers.testMetaTag(TestBed.get(Meta), `name="${metatag.name}"`, metatag.content);
    });
  });
});
