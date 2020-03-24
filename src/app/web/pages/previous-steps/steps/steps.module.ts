import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { GeneralStepsComponent } from './general-steps/general-steps.component';
import { SponsorStepsComponent } from './sponsor-steps/sponsor-steps.component';
import { CoordinatorStepsComponent } from './coordinator-steps/coordinator-steps.component';
import { SchoolStepsComponent } from './school-steps/school-steps.component';


@NgModule({
  declarations: [
    StepsComponent,
    GeneralStepsComponent,
    SponsorStepsComponent,
    CoordinatorStepsComponent,
    SchoolStepsComponent,
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
  ]
})
export class StepsModule { }
