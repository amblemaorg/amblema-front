import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule),
  },
  {
    path: 'previous-steps',
    loadChildren: () => import('./web/pages/previous-steps/previous-steps.module').then( m => m.PreviousStepsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
