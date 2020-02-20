import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { CoordinatorsRoutingModule } from './coordinators-routing.module';
import { CoordinatorsComponent } from './coordinators.component';

@NgModule({
  declarations: [
    CoordinatorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoordinatorsRoutingModule
  ]
})
export class CoordinatorsModule { }
