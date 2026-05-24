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
        loadChildren: "./steps/steps.module#StepsModule",
      },
      // modules list view
      {
        path: 'modules',
        loadChildren: "./e-learning/modules-list/modules-list.module#ModulesListModule",
      },
      // module detail view
      {
        path: 'module-detail/:id',
        loadChildren: "./e-learning/module-detail/module-detail.module#ModuleDetailModule",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousStepsRoutingModule { }
