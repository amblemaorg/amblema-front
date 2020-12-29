import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BlogComponent } from "./blog.component";
import { SharedModule } from "../../shared/shared.module";
import { CoverComponent } from "../../shared/cover/cover.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("BlogComponent", () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent],
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.isBlogArchive = true;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create at less and only one h1 tag", () => {
    const h1Count = fixture.nativeElement.querySelectorAll("h1").length;
    expect(h1Count).toBe(1);
  });

  it('should create a h1 tag in cover section with content "Bienvenidos"', () => {
    const h1Tag = fixture.nativeElement.querySelector("section.cover h1");
    expect(h1Tag).toBeTruthy();
    expect(h1Tag.textContent).toBe("Bienvenidos");
  });
});
