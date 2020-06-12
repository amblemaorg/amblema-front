// MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbToastrModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbTabsetModule,
  NbCardModule,
  NbAccordionModule,
  NbIconModule,
  NbActionsModule,
  NbUserModule,
  NbStepperModule,
  NbButtonModule,
  NbCheckboxModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { PecaRoutingModule } from "./peca-routing.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgSelectModule } from "@ng-select/ng-select";
import { CarouselModule } from "ngx-owl-carousel-o";
import { OwlModule } from "ngx-owl-carousel";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// COMPONENTS
import { PecaComponent } from "./peca.component";
import { PecaPageComponent } from "./peca-page/peca-page.component";
// Page Components
import { InitialDiagnosticPageComponent } from "./peca-page/pages/initial-diagnostic-page.component";
import { SchoolDataPageComponent } from "./peca-page/pages/school-data-page.component";
import { InitialWorkshopPageComponent } from "./peca-page/pages/initial-workshop-page.component";
import { ProfilePageComponent } from "./peca-page/pages/profile-page.component";
import { SchedulingPlanningPageComponent } from "./peca-page/pages/scheduling-planning-page.component";
import { AmblemonedaPageComponent } from "./peca-page/pages/amblemoneda-page.component";
import { AnnualConventionPageComponent } from "./peca-page/pages/annual-convention-page.component";
import { AnnualConventionPreparationPageComponent } from "./peca-page/pages/annual-convention-preparation-page.component";
import { SpecialActivityPageComponent } from "./peca-page/pages/special-activity-page.component";
import { MathOlympicsPageComponent } from "./peca-page/pages/math-olympics-page.component";
import { TeacherTestimonyPageComponent } from "./peca-page/pages/teacher-testimony-page.component";
import { EnvironmentalProjectPageComponent } from "./peca-page/pages/environmental-project-page.component";
// Block Components
import { TabsBlockComponent } from "./peca-page/blocks/tabs-block/tabs-block.component";
import { TableBlockComponent } from "./peca-page/blocks/table-block/table-block.component";
import { AccordionBlockComponent } from "./peca-page/blocks/accordion-block/accordion-block.component";
import { TextsButtonsSetBlockComponent } from "./peca-page/blocks/texts-buttons-set-block/texts-buttons-set-block.component";
import { FormBlockComponent } from "./peca-page/blocks/form-block/form-block.component";
import { ProfileBlockComponent } from "./peca-page/blocks/profile-block/profile-block.component";
import { SliderBlockComponent } from "./peca-page/blocks/slider-block/slider-block.component";
import { StepperBlockComponent } from "./peca-page/blocks/stepper-block/stepper-block.component";
import { ChecklistBlockComponent } from "./peca-page/blocks/checklist-block/checklist-block.component";
import { ModalBlockComponent } from "./peca-page/blocks/modal-block/modal-block.component";
import { NbTokenStorage, NbTokenLocalStorage } from "@nebular/auth";

@NgModule({
  declarations: [
    PecaComponent,
    // Page Components
    PecaPageComponent,
    InitialWorkshopPageComponent,
    SchoolDataPageComponent,
    InitialDiagnosticPageComponent,
    ProfilePageComponent,
    SchedulingPlanningPageComponent,
    AmblemonedaPageComponent,
    AnnualConventionPageComponent,
    AnnualConventionPreparationPageComponent,
    SpecialActivityPageComponent,
    MathOlympicsPageComponent,
    TeacherTestimonyPageComponent,
    EnvironmentalProjectPageComponent,
    // Block Components
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
    TextsButtonsSetBlockComponent,
    FormBlockComponent,
    ProfileBlockComponent,
    SliderBlockComponent,
    StepperBlockComponent,
    ChecklistBlockComponent,
    ModalBlockComponent,
  ],
  imports: [
    CommonModule,
    PecaRoutingModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbContextMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbAccordionModule,
    NbMenuModule.forRoot(),
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NbActionsModule,
    NbUserModule,
    NbStepperModule,
    NbButtonModule,
    CarouselModule,
    OwlModule,
    NbCheckboxModule,
    FontAwesomeModule,
  ],
  entryComponents: [
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
    TextsButtonsSetBlockComponent,
    FormBlockComponent,
    ProfileBlockComponent,
    SliderBlockComponent,
    StepperBlockComponent,
    ChecklistBlockComponent,
    ModalBlockComponent,
  ],
  providers: [{ provide: NbTokenStorage, useClass: NbTokenLocalStorage }],
})
export class PecaModule {}
