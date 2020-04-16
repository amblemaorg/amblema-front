import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousStepsRoutingModule } from './previous-steps-routing.module';

import { PreviousStepsComponent } from './previous-steps.component';
import { EheaderComponent } from '../../layout/eheader/eheader.component';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    PreviousStepsComponent,
    EheaderComponent
  ],
  imports: [
    CommonModule,
    PreviousStepsRoutingModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ]
})
export class PreviousStepsModule { }
