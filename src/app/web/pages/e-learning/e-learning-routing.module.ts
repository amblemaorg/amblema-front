import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningComponent } from './e-learning.component';

const routes: Routes = [
  {
    path: '',
    component: ELearningComponent,
    children: [      
      // MODULES LIST
      {
        path: '',
        loadChildren: () => import('./modules-list/modules-list.module').then(m => m.ModulesListModule),
      },
      // MODULE DETAIL
      {
        path: 'module-detail',
        // loadChildren: './pages/module-detail/module-detail.module#ModuleDetailModule'  // for angular <=7
        loadChildren: () => import('./module-detail/module-detail.module').then(m => m.ModuleDetailModule), // for angular 8+
      },
      //
      // { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningRoutingModule { }
