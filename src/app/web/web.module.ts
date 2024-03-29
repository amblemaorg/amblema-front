import { NbIconModule, NbInputModule, NbThemeModule } from "@nebular/theme";
import { NgModule } from "@angular/core";
// Modules
import { CommonModule } from "@angular/common";
import { WebRoutingModule } from "./web-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarouselModule } from "ngx-owl-carousel-o";
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
  RECAPTCHA_NONCE,
} from "ng-recaptcha";
// Components
import { WebComponent } from "./web.component";
import { HeaderComponent } from "./layout/header/header.component";
import { MenuComponent } from "./layout/menu/menu.component";
import { FooterComponent } from "./layout/footer/footer.component";
// Enviroment
import { environment } from "src/environments/environment";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [WebComponent, HeaderComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularSvgIconModule,
    CarouselModule,
    RecaptchaV3Module,
    FontAwesomeModule,
    NbThemeModule,
    NbInputModule,
    NbIconModule,
    PipesModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaKey },
    { provide: RECAPTCHA_NONCE, useValue: environment.recaptchaNonce },
  ],
})
export class WebModule {}
