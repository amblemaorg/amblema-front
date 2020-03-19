import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviousStepsComponent } from './previous-steps.component';


const routes: Routes = [
  {
    path: '',
    component: PreviousStepsComponent,
    children: [      
      // Steps view
      {
        path: '',
        loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule),
      },
      // modules list view
      {
        path: 'modules',
        loadChildren: () => import('./e-learning/modules-list/modules-list.module').then(m => m.ModulesListModule),
      },
      // module detail view
      {
        path: 'module-detail/:id',
        loadChildren: () => import('./e-learning/module-detail/module-detail.module').then(m => m.ModuleDetailModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousStepsRoutingModule { }
