import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RequestPasswordComponent } from "./request-password/request-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { AuthComponent } from "./auth.component";
import { DenyAuthenticatedGuard } from "../guards/deny-authenticated.guard";
import { AllowAuthenticatedGuard } from "../guards/allow-authenticated.guard";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
      },
      {
        path: "login",
        canActivate: [DenyAuthenticatedGuard],
        component: LoginComponent,
      },
      {
        path: "logout",
        canActivate: [AllowAuthenticatedGuard],
        component: LogoutComponent,
      },
      {
        path: "request-password",
        canActivate: [DenyAuthenticatedGuard],
        component: RequestPasswordComponent,
      },
      {
        path: "reset-password",
        canActivate: [DenyAuthenticatedGuard],
        component: ResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
