import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDetailRoutingModule } from './school-detail-routing.module';
//Components
import { SchoolDetailComponent } from './school-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/web/shared/shared.module';

@NgModule({
  declarations: [SchoolDetailComponent],
  imports: [
    CommonModule,
    SchoolDetailRoutingModule,
    CarouselModule,
    SharedModule
  ]
})
export class SchoolDetailModule { }
