import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvironmentalEvaluationComponent } from './environmental-evaluation.component';

const routes: Routes = [
  {
    path: '',
    component: EnvironmentalEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironmentalEvaluationRoutingModule { }
