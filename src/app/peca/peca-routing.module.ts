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

const routes: Routes = [
  {
    path: "",
    component: PecaComponent,
    children: [
      {
        path: "taller-inicial",
        component: InitialWorkshopPageComponent
      },
      {
        path: "datos-escuela",
        component: SchoolDataPageComponent
      },
      {
        path: "diagnostico-inicial",
        component: InitialDiagnosticPageComponent
      },
      {
        path: "perfil-usuario",
        component: ProfilePageComponent
      },
      {
        path: "planificacion-lapso",
        component: SchedulingPlanningPageComponent
      },
      {
        path: "amblemoneda-page",
        component: AmblemonedaPageComponent
      },
      {
        path: "convencion-anual",
        component: AnnualConventionPageComponent
      },
      {
        path: "preparacion-convencion-anual",
        component: AnnualConventionPreparationPageComponent
      },
      {
        path: "actividad-especial",
        component: SpecialActivityPageComponent
      },
      {
        path: 'olimpiadas-matematicas',
        component: MathOlympicsPageComponent
      },
      {
        path: 'testimonio-docentes',
        component: TeacherTestimonyPageComponent
      },
      {
        path: 'proyecto-ambiental',
        component: EnvironmentalProjectPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecaRoutingModule {}
