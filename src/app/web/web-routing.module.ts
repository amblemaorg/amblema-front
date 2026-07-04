import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  NavigationEnd,
  Router,
  ActivatedRoute
} from "@angular/router";
import { WebComponent } from "./web.component";
import { Title, Meta } from "@angular/platform-browser";
import { filter, map, mergeMap } from "rxjs/operators";
import { METADATA } from "./web-pages-metadata";

const routes: Routes = [
  {
    path: "",
    component: WebComponent,
    children: [
      {
        path: "",
        loadChildren: "./pages/home/home.module#HomeModule"
      },
      {
        path: "nosotros",
        loadChildren: "./pages/about/about.module#AboutModule"
      },
      {
        path: "padrinos",
        loadChildren: "./pages/sponsors/sponsors.module#SponsorsModule"
      },
      {
        path: "coordinadores",
        loadChildren: "./pages/coordinators/coordinators.module#CoordinatorsModule"
      },
      {
        path: "escuelas",
        loadChildren: "./pages/school/school.module#SchoolModule"
      },
      {
        path: "blog",
        loadChildren: "./pages/blog/blog.module#BlogModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {
  constructor() {}
}
