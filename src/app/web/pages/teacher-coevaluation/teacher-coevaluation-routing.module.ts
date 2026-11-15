import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherCoevaluationComponent } from './teacher-coevaluation.component';

const routes: Routes = [{ path: '', component: TeacherCoevaluationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherCoevaluationRoutingModule {}
