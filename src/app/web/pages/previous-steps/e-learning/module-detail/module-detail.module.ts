import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDetailRoutingModule } from './module-detail-routing.module';
import { ModuleDetailComponent } from './module-detail.component';

import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';


@NgModule({
  declarations: [ModuleDetailComponent],
  imports: [
    CommonModule,
    ModuleDetailRoutingModule,
    OwlModule,
    FontAwesomeModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ]
})
export class ModuleDetailModule { }