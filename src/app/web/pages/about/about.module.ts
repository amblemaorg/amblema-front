import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { OwlModule } from "ngx-owl-carousel";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    OwlModule,
    AboutRoutingModule,
    AngularSvgIconModule,
  ],
})
export class AboutModule {}
