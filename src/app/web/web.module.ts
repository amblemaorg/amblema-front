import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';


@NgModule({
  declarations: [
    WebComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
