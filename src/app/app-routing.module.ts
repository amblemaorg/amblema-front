import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule),
  },
  {
    path: 'e-learning',
    loadChildren: () => import('./web/pages/e-learning/e-learning.module').then( m => m.ELearningModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
