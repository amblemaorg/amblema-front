import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    SponsorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    OwlModule,
    SponsorsRoutingModule
  ]
})
export class SponsorsModule { }
