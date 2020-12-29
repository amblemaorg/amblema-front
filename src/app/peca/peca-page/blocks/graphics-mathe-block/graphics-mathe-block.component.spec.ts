import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { GraphicsMatheBlockComponent } from "./graphics-mathe-block.component";
import { RouterTestingModule } from "@angular/router/testing";
import { PageBlockFactory } from "../page-block-factory";
import { ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { PageBlockComponent } from "../page-block.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { NgxsModule } from "@ngxs/store";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";

xdescribe("GraphicsMatheBlockComponent", () => {
  let component: GraphicsMatheBlockComponent;
  let fixture: ComponentFixture<GraphicsMatheBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let graphicsSettings = {
    component: "graphics-mathe",
    settings: {
      items: [],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicsMatheBlockComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        NgSelectModule,
        HttpClientModule,
        NgxsModule.forRoot([PecaState], {
          compatibility: {
            strictContentSecurityPolicy: true,
          },
          developmentMode: false,
        }),
      ],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [GraphicsMatheBlockComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsMatheBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(graphicsSettings);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
