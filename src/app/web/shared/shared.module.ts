import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
// Components
import { BgHeadingComponent } from './bg-heading/bg-heading.component';
import { CoverComponent } from './cover/cover.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    BgHeadingComponent,
    CoverComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    BgHeadingComponent,
    CoverComponent
  ]
})
export class SharedModule { }
