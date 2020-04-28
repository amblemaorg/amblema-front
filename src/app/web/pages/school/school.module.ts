import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolsMapComponent } from './schools-map/schools-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SchoolComponent,
    SchoolsMapComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    // NgbModule
  ]
})
export class SchoolModule { }
