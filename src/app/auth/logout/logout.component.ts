import { Component, Inject, OnInit } from "@angular/core";
import { NbLogoutComponent, NbAuthService, NB_AUTH_OPTIONS } from "@nebular/auth";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { ClearPecaState } from "src/app/store/actions/peca/peca.actions";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
})
export class LogoutComponent extends NbLogoutComponent implements OnInit {
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected router: Router,
    private store: Store
  ) {
    super(service, options, router);
  }

  ngOnInit() {
    this.logout(this.strategy);
    this.store.dispatch([new ClearPecaState()]);
  }
}
