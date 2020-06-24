import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PecaComponent } from './peca.component';
import { InitialDiagnosticPageComponent } from './peca-page/pages/initial-diagnostic-page.component';
import { InitialWorkshopPageComponent } from './peca-page/pages/initial-workshop-page.component';
import { SchoolDataPageComponent } from './peca-page/pages/school-data-page.component';
import { ProfilePageComponent } from './peca-page/pages/profile-page.component';
import { SchedulingPlanningPageComponent } from './peca-page/pages/scheduling-planning-page.component';
import { AmblemonedaPageComponent } from './peca-page/pages/amblemoneda-page.component';
import { AnnualConventionPageComponent } from './peca-page/pages/annual-convention-page.component';
import { AnnualConventionPreparationPageComponent } from './peca-page/pages/annual-convention-preparation-page.component';
import { SpecialActivityPageComponent } from './peca-page/pages/special-activity-page.component';
import { MathOlympicsPageComponent } from './peca-page/pages/math-olympics-page.component';
import { TeacherTestimonyPageComponent } from './peca-page/pages/teacher-testimony-page.component';
import { EnvironmentalProjectPageComponent } from './peca-page/pages/environmental-project-page.component';
import { MonitoringStrategyPageComponent } from './peca-page/pages/monitoring-strategy-page.component';
import { SchedulePageComponent } from './peca-page/pages/schedule-page.component';
import { SchoolPicturesPageComponent } from './peca-page/pages/school-pictures-page.component';
import { YearbookPageComponent } from './peca-page/pages/yearbook-page.component';
const routes: Routes = [
  {
    path: '',
    component: PecaComponent,
    children: [
      {
        path: 'lapso/:lapsoNumber/taller-inicial',
        component: InitialWorkshopPageComponent,
      },
      {
        path: 'datos-escuela',
        component: SchoolDataPageComponent,
      },
      {
        path: 'diagnostico-inicial',
        component: InitialDiagnosticPageComponent,
      },
      {
        path: 'perfil-usuario',
        component: ProfilePageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/planificacion-lapso',
        component: SchedulingPlanningPageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/amblemoneda-page',
        component: AmblemonedaPageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/convencion-anual',
        component: AnnualConventionPageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/preparacion-convencion-anual',
        component: AnnualConventionPreparationPageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/actividad-especial',
        component: SpecialActivityPageComponent,
      },
      {
        path: 'lapso/:lapsoNumber/olimpiadas-matematicas',
        component: MathOlympicsPageComponent,
      },
      {
        path: 'testimonio-docentes',
        component: TeacherTestimonyPageComponent,
      },
      {
        path: 'proyecto-ambiental',
        component: EnvironmentalProjectPageComponent,
      },
      {
        path: 'estrategia-seguimiento',
        component: MonitoringStrategyPageComponent,
      },
      {
        path: 'agenda-page',
        component: SchedulePageComponent,
      },
      {
        path: 'imagenes-escuela',
        component: SchoolPicturesPageComponent,
      },
      {
        path: 'anuario-page',
        component: YearbookPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PecaRoutingModule {}
