import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TableBlockComponent } from "./table-block.component";
import { ComponentFactoryResolver } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";
import { ToastrService, ToastrModule } from "ngx-toastr";
import { NgxsModule } from "@ngxs/store";
import { ModulesState } from "../../../../store/states/e-learning/learning-modules.state";
import { UserState } from "../../../../store/states/e-learning/user.state";
import { StepsState } from "../../../../store/states/steps/project.state";
import { ResidenceInfoState } from "../../../../store/states/steps/residence-info.state";

describe("TableBlockComponent", () => {
  let factoryResolver: ComponentFactoryResolver;
  let fixture: ComponentFixture<TableBlockComponent>;
  let component: TableBlockComponent;

  let tableSettings = {
    component: "table",
    settings: {
      isMulti: false,
      columns: {
        column1: {
          title: "Column 1",
        },
        column2: {
          title: "Column 2",
        },
        column3: {
          title: "Column 3",
        },
        column4: {
          title: "Column 4",
        },
      },
      tableCode: "data",
      data: [
        {
          column1: "Item 1 column1",
          column2: "Item 1 column2",
          column3: "Item 1 column3",
          column4: "Item 1 column4",
        },
      ],
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBlockComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        Ng2SmartTableModule,
        NgxsModule.forRoot(
          [ModulesState, UserState, StepsState, ResidenceInfoState],
          {
            compatibility: {
              strictContentSecurityPolicy: true,
            },
            developmentMode: false,
          }
        ),
      ],
      providers: [{ provide: ToastrService, useClass: ToastrService }],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TableBlockComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBlockComponent);
    component = fixture.componentInstance;
    factoryResolver = fixture.debugElement.injector.get(
      ComponentFactoryResolver
    );
    component.setSettings(tableSettings.settings);
    component.setFormG(null);
    fixture.detectChanges();
  });

  it("should create component", () => {
    const tableComponent = fixture.nativeElement.querySelector(
      "ng2-smart-table"
    );
    expect(component).toBeTruthy();
    expect(tableComponent).toBeTruthy();
  });
});
