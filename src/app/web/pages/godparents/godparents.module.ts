import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodparentsRoutingModule } from './godparents-routing.module';
import { GodparentsComponent } from './godparents.component';


@NgModule({
  declarations: [GodparentsComponent],
  imports: [
    CommonModule,
    GodparentsRoutingModule
  ]
})
export class GodparentsModule { }
