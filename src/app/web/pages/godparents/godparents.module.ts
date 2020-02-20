import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { GodparentsRoutingModule } from './godparents-routing.module';
import { GodparentsComponent } from './godparents.component';

@NgModule({
  declarations: [
    GodparentsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GodparentsRoutingModule
  ]
})
export class GodparentsModule { }
