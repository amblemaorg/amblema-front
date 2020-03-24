import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from './shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
// Components
import { WebComponent } from './web.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularSvgIconModule,
    CarouselModule,
  ],
  exports: [
  ]
})
export class WebModule { }
