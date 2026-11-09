import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherCoevaluationRoutingModule } from './teacher-coevaluation-routing.module';
import { TeacherCoevaluationComponent } from './teacher-coevaluation.component';

@NgModule({
  declarations: [TeacherCoevaluationComponent],
  imports: [CommonModule, TeacherCoevaluationRoutingModule],
})
export class TeacherCoevaluationModule {}
