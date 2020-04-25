import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    OwlModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
