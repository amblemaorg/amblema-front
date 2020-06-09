import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PecaComponent } from "./peca.component";
import {
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule,
  NbThemeModule,
  NbIconLibraries,
  NbThemeService,
  NbActionsModule,
  NbUserModule,
  NbSidebarService
} from "@nebular/theme";
import { RouterTestingModule } from "@angular/router/testing";

xdescribe("PecaComponent", () => {
  let component: PecaComponent;
  let fixture: ComponentFixture<PecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PecaComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        NbThemeModule,
        NbLayoutModule,
        NbMenuModule,
        NbCardModule,
        NbSidebarModule,
        NbActionsModule,
        NbUserModule,
        NbSidebarService
      ],
      providers: [NbIconLibraries, NbThemeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
