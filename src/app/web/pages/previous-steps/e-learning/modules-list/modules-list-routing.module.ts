import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesListComponent } from './modules-list.component';


const routes: Routes = [
  {
    path: '',
    component: ModulesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesListRoutingModule { }
