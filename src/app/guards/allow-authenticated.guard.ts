import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  CanActivate,
} from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AllowAuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.IfNoAuthenticatedRedirectsToLogin(state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.IfNoAuthenticatedRedirectsToLogin(state);
  }

  private IfNoAuthenticatedRedirectsToLogin(state: RouterStateSnapshot) {
    return this.authService.isAuthenticated().pipe(
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigate(["auth/login"], {
            queryParams: {
              returnUrl: state.url,
            },
          });
        }
        return authenticated;
      })
    );
  }
}
