import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDetailRoutingModule } from './module-detail-routing.module';
import { ModuleDetailComponent } from './module-detail.component';

import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ModuleDetailComponent],
  imports: [
    CommonModule,
    ModuleDetailRoutingModule,
    OwlModule,
    FontAwesomeModule,
  ]
})
export class ModuleDetailModule { }