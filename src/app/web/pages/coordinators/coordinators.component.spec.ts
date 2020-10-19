import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";

import { CoordinatorsComponent } from "./coordinators.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";
import { WebPageTestHelpers } from "src/assets/tests/page-testing-helpers";
import { Title, Meta } from "@angular/platform-browser";
import { METADATA } from "../../web-pages-metadata";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { WebState } from "src/app/store/states/web/web.state";

describe("CoordinatorsComponent", () => {
  const testHelpers = new WebPageTestHelpers();
  let component: CoordinatorsComponent;
  let fixture: ComponentFixture<CoordinatorsComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorsComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        CarouselModule,
        HttpClientModule,
        NgxsModule.forRoot([WebState]),
      ],
      providers: [
        { provide: Title, useClass: Title },
        { provide: Meta, useClass: Meta },
        { provide: Store, useClass: Store },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorsComponent);
    component = fixture.componentInstance;
    component.setStaticService();

    fixture.detectChanges();
  });

  it("should create coordinators page", () => {
    expect(component).toBeTruthy();
  });

  it("should have at less and only one h1 tag", () => {
    let h1Count = fixture.nativeElement.querySelectorAll("h1").length;
    expect(h1Count).toBe(1);
  });

  it("should have a h1 tag in cover section", () => {
    el = fixture.nativeElement.querySelector("section.cover");
    const h1Tag = el.children[1].tagName;
    expect(h1Tag).toBe("H1");
  });

  it('should have a h1 tag in cover section with content "Coordinadores"', () => {
    el = fixture.nativeElement.querySelector("section.cover h1");
    const h1Text = el.textContent;
    expect(h1Text).toBe("Coordinadores");
  });

  it("should have a h2 tag in steps section", () => {
    let h2Count = fixture.nativeElement.querySelectorAll("section.steps h2").length;
    expect(h2Count).toBe(1);
  });

  it('should have a h2 tag in steps section with content "¿Cómo ser un coordinador?"', () => {
    el = fixture.nativeElement.querySelector("section.steps h2");
    const h2Text = el.textContent;
    expect(h2Text).toBe("¿Cómo ser un Coordinador?");
  });

  it(`should have meta title tag with content ${METADATA.coordinatorsPage.title}`, () => {
    testHelpers.testMetaTitle(TestBed.get(Title), METADATA.coordinatorsPage.title);
  });

  METADATA.coordinatorsPage.metatags.map((metatag) => {
    it(`should have meta ${metatag.name} with content`, () => {
      testHelpers.testMetaTag(TestBed.get(Meta), `name="${metatag.name}"`, metatag.content);
    });
  });
});
