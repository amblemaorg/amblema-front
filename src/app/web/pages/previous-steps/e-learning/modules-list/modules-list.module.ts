import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesListRoutingModule } from './modules-list-routing.module';
import { ModulesListComponent } from './modules-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwPaginationComponent } from '../../../../shared/jw-angular-pagination'; //! SOLVENTANDO PROBLEMA DE COMPILADO AOT

import { BrowserTransferStateModule } from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';


@NgModule({
  declarations: [
    ModulesListComponent,
    JwPaginationComponent,
  ],
  imports: [
    CommonModule,
    ModulesListRoutingModule,
    FontAwesomeModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ]
})
export class ModulesListModule { }