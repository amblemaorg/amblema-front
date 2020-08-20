import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SchoolSelectionComponent } from "./school-selection.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NbAuthService, NbTokenService, NbAuthModule } from "@nebular/auth";
import { Store, NgxsModule } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { HttpClientModule } from "@angular/common/http";

xdescribe("SchoolSelectionComponent", () => {
  let component: SchoolSelectionComponent;
  let fixture: ComponentFixture<SchoolSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolSelectionComponent],
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
        HttpClientModule,
        NbAuthModule.forRoot(),
        NgxsModule.forRoot([PecaState]),
      ],
      providers: [NbAuthService, NbTokenService],
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
