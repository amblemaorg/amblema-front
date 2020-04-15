import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PecaComponent } from './peca.component';
import { InitialDiagnosticPageComponent } from './peca-page/pages/initial-diagnostic-page.component';
import { InitialWorkshopPageComponent } from './peca-page/pages/initial-workshop-page.component';
import { SchoolDataPageComponent } from './peca-page/pages/school-data-page.component';

const routes: Routes = [
  {
    path: '',
    component: PecaComponent,
    children: [
      {
        path: 'taller-inicial',
        component: InitialWorkshopPageComponent
      },
      {
        path: 'datos-escuela',
        component: SchoolDataPageComponent
      },
      {
        path: 'diagnostico-inicial',
        component: InitialDiagnosticPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecaRoutingModule { }
