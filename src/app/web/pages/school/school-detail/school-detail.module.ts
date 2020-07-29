import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDetailRoutingModule } from './school-detail-routing.module';
//Components
import { SchoolDetailComponent } from './school-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/web/shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ChartsSwitcherModule } from 'src/app/web/shared/charts-switcher/charts-switcher.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [SchoolDetailComponent],
  imports: [
    CommonModule,
    SchoolDetailRoutingModule,
    CarouselModule,
    OwlModule,
    SharedModule,
    ChartsSwitcherModule,
    FontAwesomeModule
  ]
})
export class SchoolDetailModule { }
