import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { GeneralStepsComponent, StatusSelectorComponent } from './general-steps/general-steps.component';
import { StepsFormsComponent } from './steps-forms/steps-forms.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    StepsComponent,
    GeneralStepsComponent,
    StatusSelectorComponent,
    StepsFormsComponent,
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ]
})
export class StepsModule { }
