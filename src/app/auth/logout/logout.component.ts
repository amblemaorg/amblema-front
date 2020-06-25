import { Component, Inject, OnInit } from "@angular/core";
import { NbLogoutComponent, NbAuthService, NB_AUTH_OPTIONS } from "@nebular/auth";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { ClearPecaState } from "../../store/actions/peca/peca.actions";
import { ClearUserInfo } from '../../store/actions/e-learning/user.actions';
import { ClearStepsProgress } from '../../store/actions/steps/project.actions';
import { ClearModulesTotal } from '../../store/actions/e-learning/learning-modules.actions';

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
    this.clearStepsData();
  }

  clearStepsData() {
    this.store.dispatch([new ClearUserInfo()]);
    this.store.dispatch([new ClearStepsProgress()]);
    this.store.dispatch([new ClearModulesTotal()]);
  }
}
