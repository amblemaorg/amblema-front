import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolsMapComponent } from './schools-map/schools-map.component';

@NgModule({
  declarations: [
    SchoolComponent,
    SchoolsMapComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
  ]
})
export class SchoolModule { }
