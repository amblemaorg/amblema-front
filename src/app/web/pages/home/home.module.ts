import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { OwlModule } from "ngx-owl-carousel";
import { ChartsSwitcherModule } from "../../shared/charts-switcher/charts-switcher.module";
import { CountoModule } from "angular2-counto";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    OwlModule,
    ChartsSwitcherModule,
    AngularSvgIconModule,
    CountoModule,
  ],
})
export class HomeModule {}
