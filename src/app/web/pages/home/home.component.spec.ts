import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from "ngx-owl-carousel";
import { ChartsSwitcherModule } from "../../shared/charts-switcher/charts-switcher.module";
import { GlobalService } from "src/app/services/global.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(() => {
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
      ],
      providers: [GlobalService],
    });
  });

  beforeEach(inject([GlobalService], (globalService: GlobalService) => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.setStaticService();
    fixture.detectChanges();
  }));

  it("should create home page", () => {
    expect(component).toBeTruthy();
  });

  it("should have at less and only one h1 tag", () => {
    testIsUniqueTag(fixture.nativeElement, "h1");
  });

  it('should have a h1 tag in about us section with content "Acerca de nosotros"', () => {
    const selector = "section.about-us";
    const tag = "h1";

    testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Acerca de nosotros"
    );
  });

  it('should have a h2 tag in three pillars section with content "Tenemos tres pilares fundamentales"', () => {
    const selector = "section.pillars";
    const tag = "h2";

    testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Tenemos tres pilares fundamentales"
    );
  });

  it('should have a h2 tag in social impact section with content "Impacto social"', () => {
    const selector = "section.social-impact";
    const tag = "h2";

    testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Indicadores clave"
    );
  });

  it('should have a h2 tag in founders section with content "Fundadores"', () => {
    const selector = "section.founders";
    const tag = "h2";

    testIsUniqueTagInSelector(fixture.nativeElement, selector, tag);
    testSelectorHasContent(
      fixture.nativeElement,
      selector + " " + tag,
      "Fundadores"
    );
  });

  const testIsUniqueTag = (nativeElement: any, tag: string) => {
    testIsUniqueTagInSelector(nativeElement, "", tag);
  };

  const testIsUniqueTagInSelector = (
    nativeElement: any,
    cssSelector: string,
    tag: string
  ) => {
    const elements: HTMLElement[] = nativeElement.querySelectorAll(
      cssSelector + " " + tag
    );
    expect(elements.length).toBe(1);

    const el: HTMLElement = elements[0];
    expect(el.tagName).toBe(tag.toUpperCase());
  };

  const testSelectorHasContent = (
    nativeElement: any,
    cssSelector: string,
    content: string
  ) => {
    el = nativeElement.querySelector(cssSelector);
    expect(el.textContent).toBe(content);
  };
});
