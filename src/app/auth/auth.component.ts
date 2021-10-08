import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { NbAuthComponent, NbAuthService } from "@nebular/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-auth",
  styleUrls: ["./auth.component.scss"],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a
                href="#"
                (click)="back()"
                class="link arrow-back"
                aria-label="Back"
              >
                <nb-icon icon="arrow-ios-back-outline"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
  activatedRout: Subscription;

  constructor(
    authService: NbAuthService,
    location: Location,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    super(authService, location);
  }

  ngOnInit() {
    this.activatedRout = this.activatedRoute.queryParams.subscribe((params) => {
      const reload = +params.reload;

      if (reload)
        this.router
          .navigate([], {
            queryParams: { reload: null },
            queryParamsHandling: "merge",
          })
          .then(() => {
            window.location.reload();
          });
    });
  }

  ngOnDestroy() {
    this.activatedRout.unsubscribe();
  }
}
