import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GodparentsComponent } from './godparents.component';

const routes: Routes = [
  {
    path: '',
    component: GodparentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GodparentsRoutingModule { }
