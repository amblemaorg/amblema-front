import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProfileBlockComponent } from "./profile-block.component";
import { NbAccordionModule, NbIconModule } from "@nebular/theme";
import { RouterTestingModule } from "@angular/router/testing";
import { PageBlockFactory } from "../page-block-factory";
import { ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { PageBlockComponent } from "../page-block.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { HttpClientModule } from "@angular/common/http";

xdescribe("ProfileBlockComponent", () => {
  let component: ProfileBlockComponent;
  let fixture: ComponentFixture<ProfileBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let profileSettings = {
    component: "profiles",
    settings: {
      items: [
        // { title: 'Carta convenio',   childBlocks: [] },
        { title: "Nombre de la persona", childBlocks: [] },
        { description: "Descripcion", childBlocks: [] }
        // { title: 'Preparación del taller inicial', childBlocks: [] },
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileBlockComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        NbAccordionModule,
        NbIconModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([PecaState], {
          compatibility: {
            strictContentSecurityPolicy: true
          },
          developmentMode: false
        })
      ]
    }).compileComponents();
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ProfileBlockComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(
      ComponentFactoryResolver
    );
    component.setSettings(profileSettings);
    fixture.detectChanges();
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });
});
