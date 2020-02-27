import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningRoutingModule } from './e-learning-routing.module';
import { ELearningComponent } from './e-learning.component';
import { EheaderComponent } from '../../layout/eheader/eheader.component';


@NgModule({
  declarations: [
    ELearningComponent,
    EheaderComponent,
  ],
  imports: [
    CommonModule,
    ELearningRoutingModule
  ]
})
export class ELearningModule { }
