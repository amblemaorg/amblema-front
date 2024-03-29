import { PipesModule } from 'src/app/pipes/pipes.module'
// MODULES
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
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
  NbAlertModule,
} from '@nebular/theme'
import { NgDatepickerModule } from 'ng2-datepicker'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { PecaRoutingModule } from './peca-routing.module'
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { NgSelectModule } from '@ng-select/ng-select'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { OwlModule } from 'ngx-owl-carousel'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgxImageCompressService } from 'ngx-image-compress'
// COMPONENTS
import { PecaComponent } from './peca.component'
import { PecaPageComponent } from './peca-page/peca-page.component'
// Page Components
import { InitialDiagnosticPageComponent } from './peca-page/pages/initial-diagnostic-page.component'
import { SchoolDataPageComponent } from './peca-page/pages/school-data-page.component'
import { InitialWorkshopPageComponent } from './peca-page/pages/initial-workshop-page.component'
import { ProfilePageComponent } from './peca-page/pages/profile-page.component'
import { SchedulingPlanningPageComponent } from './peca-page/pages/scheduling-planning-page.component'
import { AmblemonedaPageComponent } from './peca-page/pages/amblemoneda-page.component'
import { AnnualConventionPageComponent } from './peca-page/pages/annual-convention-page.component'
import { AnnualConventionPreparationPageComponent } from './peca-page/pages/annual-convention-preparation-page.component'
import { SpecialActivityPageComponent } from './peca-page/pages/special-activity-page.component'
import { MathOlympicsPageComponent } from './peca-page/pages/math-olympics-page.component'
import { TeacherTestimonyPageComponent } from './peca-page/pages/teacher-testimony-page.component'
import { EnvironmentalProjectPageComponent } from './peca-page/pages/environmental-project-page.component'
import { MonitoringStrategyPageComponent } from './peca-page/pages/monitoring-strategy-page.component'
import { SchedulePageComponent } from './peca-page/pages/schedule-page.component'
import { SchoolPicturesPageComponent } from './peca-page/pages/school-pictures-page.component'
import { YearbookPageComponent } from './peca-page/pages/yearbook-page.component'
import { GenericActivityPageComponent } from './peca-page/pages/generic-activity-page.component'
import { FormatoRegistroComponent } from './peca-page/pages/formato-registro-estudiantes-page.component'
// Block Components
import { TabsBlockComponent } from './peca-page/blocks/tabs-block/tabs-block.component'
import { TableBlockComponent } from './peca-page/blocks/table-block/table-block.component'
import { AccordionBlockComponent } from './peca-page/blocks/accordion-block/accordion-block.component'
import { TextsButtonsSetBlockComponent } from './peca-page/blocks/texts-buttons-set-block/texts-buttons-set-block.component'
import { ProfileBlockComponent } from './peca-page/blocks/profile-block/profile-block.component'
import { SliderBlockComponent } from './peca-page/blocks/slider-block/slider-block.component'
import { StepperBlockComponent } from './peca-page/blocks/stepper-block/stepper-block.component'
import { ChecklistBlockComponent } from './peca-page/blocks/checklist-block/checklist-block.component'
import { ModalBlockComponent } from './peca-page/blocks/modal-block/modal-block.component'
import { NbTokenStorage, NbTokenLocalStorage } from '@nebular/auth'
import { ScheduleBlockComponent } from './peca-page/blocks/schedule-block/schedule-block.component'
import { GraphicsBlockComponent } from './peca-page/blocks/graphics-block/graphics-block.component'
import { GenericActivityBlockComponent } from './peca-page/blocks/generic-activity-block/generic-activity-block.component'
import { GraphicsMatheBlockComponent } from './peca-page/blocks/graphics-mathe-block/graphics-mathe-block.component'
import { GraphicsLogicComponent } from './peca-page/blocks/graphics-logic/graphics-logic.component'
import { SummaryBlockComponent } from './peca-page/blocks/franklin-dev-component/summary-block/summary-block.component'
import { FormReviewComponent } from './peca-page/blocks/franklin-dev-component/form-review/form-review.component'
import { FormTableComponent } from './peca-page/blocks/form-table-previous-students/form-table.component'
import { PreviousScholarYearEnrollmentPageComponent } from './peca-page/pages/previous-scholar-year-enrollment-page.component'
import { FormBlockComponent } from './peca-page/blocks/form-block/form-block.component'
import { FormatDownloadBlock } from './peca-page/blocks/format-block/format-block.component'
import { StoreLineOptionsBlockComponent } from './peca-page/blocks/store-line-options-block/store-line-options-block.component'
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
    MonitoringStrategyPageComponent,
    SchedulePageComponent,
    SchoolPicturesPageComponent,
    YearbookPageComponent,
    GenericActivityPageComponent,
    PreviousScholarYearEnrollmentPageComponent,
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
    ScheduleBlockComponent,
    ModalBlockComponent,
    GraphicsBlockComponent,
    GenericActivityBlockComponent,
    GraphicsMatheBlockComponent,
    GraphicsLogicComponent,
    SummaryBlockComponent,
    FormReviewComponent,
    FormTableComponent,
    FormatoRegistroComponent,
    FormatDownloadBlock,
    StoreLineOptionsBlockComponent,
  ],
  imports: [
    CommonModule,
    PecaRoutingModule,
    NbAlertModule,
    NbThemeModule.forRoot({ name: 'default' }),
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
    ScheduleModule,
    FontAwesomeModule,
    NgDatepickerModule,
    PipesModule,
  ],
  entryComponents: [
    TabsBlockComponent,
    TableBlockComponent,
    AccordionBlockComponent,
    TextsButtonsSetBlockComponent,
    FormBlockComponent,
    ProfileBlockComponent,
    SliderBlockComponent,
    FormReviewComponent,
    StepperBlockComponent,
    ChecklistBlockComponent,
    ScheduleBlockComponent,
    ModalBlockComponent,
    GraphicsBlockComponent,
    GenericActivityBlockComponent,
    GraphicsMatheBlockComponent,
    GraphicsLogicComponent,
    SummaryBlockComponent,
    FormTableComponent,
    FormatoRegistroComponent,
    FormatDownloadBlock,
    StoreLineOptionsBlockComponent,
  ],
  exports: [GraphicsBlockComponent],
  providers: [
    { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
    NgxImageCompressService,
  ],
})
export class PecaModule {}
