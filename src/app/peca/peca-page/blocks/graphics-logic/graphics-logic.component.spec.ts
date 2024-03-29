import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { GraphicsLogicComponent } from "./graphics-logic.component";
import { RouterTestingModule } from "@angular/router/testing";
import { PageBlockFactory } from "../page-block-factory";
import { ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { PageBlockComponent } from "../page-block.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxsModule } from "@ngxs/store";
import { HttpClientModule } from "@angular/common/http";
import { PecaState } from "src/app/store/states/peca/peca.state";

xdescribe("GraphicsLogicComponent", () => {
  let component: GraphicsLogicComponent;
  let fixture: ComponentFixture<GraphicsLogicComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let graphicsSettings = {
    component: "graphics-logic",
    settings: {
      items: [],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicsLogicComponent],
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
        entryComponents: [GraphicsLogicComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsLogicComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(graphicsSettings);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
