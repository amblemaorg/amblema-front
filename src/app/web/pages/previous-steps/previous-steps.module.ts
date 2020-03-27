import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousStepsRoutingModule } from './previous-steps-routing.module';

import { PreviousStepsComponent } from './previous-steps.component';
import { EheaderComponent } from '../../layout/eheader/eheader.component';

@NgModule({
  declarations: [
    PreviousStepsComponent,
    EheaderComponent
  ],
  imports: [
    CommonModule,
    PreviousStepsRoutingModule
  ]
})
export class PreviousStepsModule { }
