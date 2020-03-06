import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Components
import { BgHeadingComponent } from './bg-heading/bg-heading.component';
import { CoverComponent } from './cover/cover.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    BgHeadingComponent,
    CoverComponent,
    TestimonialCardComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    BgHeadingComponent,
    CoverComponent,
    TestimonialCardComponent,
  ]
})
export class SharedModule { }
