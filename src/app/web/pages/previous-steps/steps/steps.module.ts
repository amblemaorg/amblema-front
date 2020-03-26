import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { GeneralStepsComponent } from './general-steps/general-steps.component';
import { StepsFormsComponent } from './steps-forms/steps-forms.component';


@NgModule({
  declarations: [
    StepsComponent,
    GeneralStepsComponent,
    StepsFormsComponent,
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    FontAwesomeModule,
  ]
})
export class StepsModule { }
