import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnvironmentalEvaluationRoutingModule } from './environmental-evaluation-routing.module';
import { EnvironmentalEvaluationComponent } from './environmental-evaluation.component';

@NgModule({
  declarations: [
    EnvironmentalEvaluationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EnvironmentalEvaluationRoutingModule
  ]
})
export class EnvironmentalEvaluationModule { }
