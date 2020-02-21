import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { GodparentsRoutingModule } from './godparents-routing.module';
import { GodparentsComponent } from './godparents.component';

@NgModule({
  declarations: [
    GodparentsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    GodparentsRoutingModule
  ]
})
export class GodparentsModule { }
