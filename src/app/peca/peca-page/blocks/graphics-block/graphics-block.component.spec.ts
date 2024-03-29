import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { GraphicsBlockComponent } from "./graphics-block.component";
import { RouterTestingModule } from "@angular/router/testing";
import { PageBlockFactory } from "../page-block-factory";
import { ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { PageBlockComponent } from "../page-block.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { PecaState } from "src/app/store/states/peca/peca.state";

xdescribe("GraphicsBlockComponent", () => {
  let component: GraphicsBlockComponent;
  let fixture: ComponentFixture<GraphicsBlockComponent>;

  let factoryResolver: ComponentFactoryResolver;
  let pageBlockFactory: ComponentFactory<PageBlockComponent>;
  //factoryResolver.resolveComponentFactory.and.returnValue(pageBlockFactory)

  let factory: PageBlockFactory = new PageBlockFactory(factoryResolver);
  let graphicsSettings = {
    component: "graphics",
    settings: {
      items: [],
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicsBlockComponent],
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
        entryComponents: [GraphicsBlockComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(ComponentFactoryResolver);
    component.setSettings(graphicsSettings);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
