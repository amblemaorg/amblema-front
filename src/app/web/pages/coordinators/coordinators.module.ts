import { NgModule } from '@angular/core';
//Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoordinatorsRoutingModule } from './coordinators-routing.module';
// Components
import { CoordinatorsComponent } from './coordinators.component';

@NgModule({
  declarations: [
    CoordinatorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    CoordinatorsRoutingModule
  ]
})
export class CoordinatorsModule { }
