import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleDetailComponent } from './module-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ModuleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleDetailRoutingModule { }
