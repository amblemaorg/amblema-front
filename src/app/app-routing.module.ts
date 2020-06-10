import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./web/web.module").then(m => m.WebModule)
  },
  {
    path: "previous-steps",
    loadChildren: () =>
      import("./web/pages/previous-steps/previous-steps.module").then(
        m => m.PreviousStepsModule
      )
  },
  {
    path: "peca",
    canActivate: [AuthGuard],
    loadChildren: () => import("./peca/peca.module").then(m => m.PecaModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "seleccion-escuela",
    loadChildren: () =>
      import("./peca/school-selection/school-selection.module").then(
        m => m.SchoolSelectionModule
      )
  },
  {
    path: "**",
    loadChildren: () =>
      import("./web/pages/error404/error404.module").then(m => m.Error404Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
