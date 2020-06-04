import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SchoolSelectionRoutingModule } from "./school-selection-routing.module";
import { SchoolSelectionComponent } from "./school-selection.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [SchoolSelectionComponent],
  imports: [CommonModule, SchoolSelectionRoutingModule, FontAwesomeModule]
})
export class SchoolSelectionModule {}
