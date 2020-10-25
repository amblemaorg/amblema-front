import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from "ngx-owl-carousel";
import { ChartsSwitcherModule } from "../../shared/charts-switcher/charts-switcher.module";
import { RouterTestingModule } from "@angular/router/testing";
import { CountoModule } from "angular2-counto";
import { AngularSvgIconModule } from "angular-svg-icon";
import { WebPageTestHelpers } from "src/assets/tests/page-testing-helpers";
import { Meta, Title } from "@angular/platform-browser";
import { METADATA } from "../../web-pages-metadata";
import { NgxsModule, Store } from "@ngxs/store";
import { WebState } from "src/app/store/states/web/web.state";

describe("HomeComponent", () => {
  const testHelpers = new WebPageTestHelpers();
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        SharedModule,
        CarouselModule,
        OwlModule,
        ChartsSwitcherModule,
        HttpClientModule,
        CountoModule,
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
    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance;

    component.setStaticService();
    fixture.detectChanges();
  });

  it("should create home page", () => {
    expect(component).toBeTruthy();
  });

  it("should have at less and only one h1 tag", () => {
    testHelpers.testIsUniqueTag(fixture.nativeElement, "h1");
  });

  it('should have a h1 tag in about us section with content "Acerca de nosotros"', () => {
    const selector = "section.about-us";
    const tag = "h1";

    testHelpers.testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testHelpers.testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Acerca de nosotros"
    );
  });

  it('should have a h2 tag in three pillars section with content "Tenemos tres pilares fundamentales"', () => {
    const selector = "section.pillars";
    const tag = "h2";

    testHelpers.testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testHelpers.testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Tenemos Tres Pilares Fundamentales"
    );
  });

  it('should have a h2 tag in social impact section with content "Impacto social"', () => {
    const selector = "section.social-impact";
    const tag = "h2";

    testHelpers.testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testHelpers.testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Indicadores Claves"
    );
  });

  it('should have a h2 tag in founders section with content "Fundadores"', () => {
    const selector = "section.founders";
    const tag = "h2";

    testHelpers.testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testHelpers.testSelectorHasContent(fixture.nativeElement, selector + " " + tag, "Testimonio de los Fundadores");
  });

  it(`should have meta title tag with content ${METADATA.homePage.title}`, () => {
    testHelpers.testMetaTitle(TestBed.get(Title), METADATA.homePage.title);
  });

  METADATA.homePage.metatags.map((metatag) => {
    it(`should have meta ${metatag.name} with content`, () => {
      testHelpers.testMetaTag(TestBed.get(Meta), `name="${metatag.name}"`, metatag.content);
    });
  });
});
