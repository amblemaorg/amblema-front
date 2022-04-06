import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SchoolRoutingModule } from "./school-routing.module";
import { SchoolComponent } from "./school.component";
import { SchoolsMapComponent } from "./schools-map/schools-map.component";
import { NbIconModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { PipesModule } from "src/app/pipes/pipes.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SchoolComponent, SchoolsMapComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    PipesModule,
    FormsModule,
  ],
  // providers: [NbFocusMonitor],
})
export class SchoolModule {}
