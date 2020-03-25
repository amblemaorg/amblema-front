import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { GeneralStepsComponent } from './general-steps/general-steps.component';
import { SponsorStepsComponent } from './sponsor-steps/sponsor-steps.component';
import { CoordinatorStepsComponent } from './coordinator-steps/coordinator-steps.component';
import { SchoolStepsComponent } from './school-steps/school-steps.component';
import { StepsFormsComponent } from './steps-forms/steps-forms.component';


@NgModule({
  declarations: [
    StepsComponent,
    GeneralStepsComponent,
    SponsorStepsComponent,
    CoordinatorStepsComponent,
    SchoolStepsComponent,
    StepsFormsComponent,
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    FontAwesomeModule,
  ]
})
export class StepsModule { }
