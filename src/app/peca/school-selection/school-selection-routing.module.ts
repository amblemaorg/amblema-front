import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SchoolSelectionComponent } from "./school-selection.component";

const routes: Routes = [
  {
    path: "",
    component: SchoolSelectionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolSelectionRoutingModule {}
