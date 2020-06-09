import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SchoolSelectionComponent } from "./school-selection.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NbAuthService, NbTokenService, NbAuthModule } from "@nebular/auth";

describe("SchoolSelectionComponent", () => {
  let component: SchoolSelectionComponent;
  let fixture: ComponentFixture<SchoolSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolSelectionComponent],
      imports: [FontAwesomeModule, RouterTestingModule, NbAuthModule.forRoot()],
      providers: [NbAuthService, NbTokenService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
