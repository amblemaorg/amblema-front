import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from "@angular/core/testing";

import { CoordinatorsComponent } from "./coordinators.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HttpClientModule } from "@angular/common/http";

describe("CoordinatorsComponent", () => {
  let component: CoordinatorsComponent;
  let fixture: ComponentFixture<CoordinatorsComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorsComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        CarouselModule,
        HttpClientModule,
      ],
      providers: [],
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
    let h2Count = fixture.nativeElement.querySelectorAll("section.steps h2")
      .length;
    expect(h2Count).toBe(1);
  });

  it('should have a h2 tag in steps section with content "¿Cómo ser un coordinador?"', () => {
    el = fixture.nativeElement.querySelector("section.steps h2");
    const h2Text = el.textContent;
    expect(h2Text).toBe("¿Cómo ser un coordinador?");
  });
});
