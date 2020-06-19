import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  CanActivateChild,
} from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DenyAuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.IfAuthenticatedRedirectsToPeca(state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.IfAuthenticatedRedirectsToPeca(state);
  }

  private IfAuthenticatedRedirectsToPeca(state: RouterStateSnapshot) {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        if (authenticated) {
          this.router.navigate(["seleccion-escuela"], {
            queryParams: {
              returnUrl: state.url,
            },
          });
        }
        return !authenticated;
      })
    );
  }
}
