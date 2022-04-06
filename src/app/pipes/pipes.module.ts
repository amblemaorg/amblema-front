import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filtro.pipe";
import { Excerpt } from "./length-max-characther.pipe";

const pipes = [FilterPipe, Excerpt];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipesModule {}
