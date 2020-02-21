import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from './shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
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
    SharedModule,
    AngularSvgIconModule
  ],
  exports: [
  ]
})
export class WebModule { }
