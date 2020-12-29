import { ComponentFixture, TestBed, inject, waitForAsync } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from "ngx-owl-carousel";
import { AngularSvgIconModule } from "angular-svg-icon";
import { WebPageTestHelpers } from "src/assets/tests/page-testing-helpers";
import { METADATA } from "../../web-pages-metadata";
import { Title, Meta } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Store, NgxsModule } from "@ngxs/store";
import { WebState } from "src/app/store/states/web/web.state";

describe("AboutComponent", () => {
  const testHelpers = new WebPageTestHelpers();
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        OwlModule,
        CarouselModule,
        HttpClientModule,
        AngularSvgIconModule,
        NgxsModule.forRoot([WebState]),
      ],
      providers: [
        { provide: Title, useClass: Title },
        { provide: Meta, useClass: Meta },
        { provide: Store, useClass: Store },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.setStaticService();
    fixture.detectChanges();
  });

  it("should create about us page", () => {
    expect(component).toBeTruthy();
  });

  it("should have at less and only one h1 tag", () => {
    let h1Count = fixture.nativeElement.querySelectorAll("h1").length;
    expect(h1Count).toBe(1);
  });

  it("should have a h1 tag in about us section", () => {
    el = fixture.nativeElement.querySelector("section.about-us");
    const h1Tag = el.children[0].tagName;
    expect(h1Tag).toBe("H1");
  });

  it('should have a h1 tag in about us section with content "Acerca de nosotros"', () => {
    el = fixture.nativeElement.querySelector("section.about-us h1");
    const h1Text = el.textContent;
    expect(h1Text).toBe("Nosotros");
  });

  it("should have a h2 tag in three pillars section", () => {
    let h2Count = fixture.nativeElement.querySelectorAll("section.pillars h2").length;
    expect(h2Count).toBe(1);
  });

  it('should have a h2 tag in three pillars section with content "Tenemos tres pilares fundamentales"', () => {
    el = fixture.nativeElement.querySelector("section.pillars h2");
    const h2Text = el.textContent;
    expect(h2Text).toBe("Tenemos Tres Pilares Fundamentales");
  });

  it("should have a h2 tag in awards section", () => {
    let h2Count = fixture.nativeElement.querySelectorAll("section.awards h2").length;
    expect(h2Count).toBe(1);
  });

  it('should have a h2 tag in awards section with content "Premios y reconocimientos"', () => {
    el = fixture.nativeElement.querySelector("section.awards h2");
    const h2Text = el.textContent;
    expect(h2Text).toBe("Premios y Reconocimientos");
  });

  it(`should have meta title tag with content ${METADATA.aboutUsPage.title}`, () => {
    testHelpers.testMetaTitle(TestBed.get(Title), METADATA.aboutUsPage.title);
  });

  METADATA.aboutUsPage.metatags.map((metatag) => {
    it(`should have meta ${metatag.name} with content`, () => {
      testHelpers.testMetaTag(TestBed.get(Meta), `name="${metatag.name}"`, metatag.content);
    });
  });
});
