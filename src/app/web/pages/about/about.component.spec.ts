import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from "ngx-owl-carousel";
import { AngularSvgIconModule } from "angular-svg-icon";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        OwlModule,
        CarouselModule,
        HttpClientModule,
        AngularSvgIconModule,
      ],
      providers: [],
    });
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
    expect(h2Text).toBe("Tenemos tres pilares fundamentales");
  });

  it("should have a h2 tag in awards section", () => {
    let h2Count = fixture.nativeElement.querySelectorAll("section.awards h2").length;
    expect(h2Count).toBe(1);
  });

  it('should have a h2 tag in awards section with content "Premios y reconocimientos"', () => {
    el = fixture.nativeElement.querySelector("section.awards h2");
    const h2Text = el.textContent;
    expect(h2Text).toBe("Premios y reconocimientos");
  });
});
