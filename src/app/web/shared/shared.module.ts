import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Components
import { BgHeadingComponent } from './bg-heading/bg-heading.component';
import { CoverComponent } from './cover/cover.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [
    BgHeadingComponent,
    CoverComponent,
    PersonCardComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    //BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    BgHeadingComponent,
    CoverComponent,
    PersonCardComponent,
    PersonListComponent
  ]
})
export class SharedModule { }
