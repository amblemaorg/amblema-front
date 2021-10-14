import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router, NavigationStart } from "@angular/router";
import { AllowAuthenticatedGuard } from "./guards/allow-authenticated.guard";
import { decodeJwtPayload } from "@nebular/auth";
import { Store, Select } from "@ngxs/store";
import { StepsService } from "./services/steps/steps.service";
import {
  SetCurrentUser,
  UpdateUserInfo,
} from "./store/actions/e-learning/user.actions";
import {
  SetUserPermissions,
  SetUser,
  FetchProject,
} from "./store/actions/peca/peca.actions";
import { UpdateStepsSelectedProject } from "./store/actions/steps/project.actions";
import {
  UpdateStates,
  UpdateMunicipalities,
} from "./store/actions/steps/residence-info.actions";
import { PecaState } from "./store/states/peca/peca.state";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RedirectionComponent } from "./web/pages/redirection/redirection.component";
import { tap } from "rxjs/internal/operators/tap";
import { environment } from "src/environments/environment";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./web/web.module").then((m) => m.WebModule),
  },
  {
    path: "previous-steps",
    canActivateChild: [AllowAuthenticatedGuard],
    loadChildren: () =>
      import("./web/pages/previous-steps/previous-steps.module").then(
        (m) => m.PreviousStepsModule
      ),
  },
  {
    path: "peca",
    canActivateChild: [AllowAuthenticatedGuard],
    loadChildren: () => import("./peca/peca.module").then((m) => m.PecaModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "seleccion-escuela",
    canActivate: [AllowAuthenticatedGuard],
    loadChildren: () =>
      import("./peca/school-selection/school-selection.module").then(
        (m) => m.SchoolSelectionModule
      ),
  },
  {
    path: "historical/:userId/:projectId/:token/:schoolYearId/:phase",
    component: RedirectionComponent,
  },
  {
    path: "**",
    loadChildren: () =>
      import("./web/pages/error404/error404.module").then(
        (m) => m.Error404Module
      ),
  },
];

@NgModule({
  declarations: [RedirectionComponent],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  @Select(PecaState.getActivePeca) activePeca$: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store,
    private stepsService: StepsService
  ) {
    this.router.events.pipe(tap()).subscribe(async (event) => {
      if (event instanceof NavigationStart) {
        const urlArrayPath = event.url.split("/");
        if (urlArrayPath[1] === "historical") {
          const userId = urlArrayPath[2];
          const projectId = urlArrayPath[3];
          const refreshToken = urlArrayPath[4];
          const schoolYearId = urlArrayPath[5];
          const projectStep = urlArrayPath[6];

          const authAppToken = {
            createdAt: new Date(),
            name: "nb:auth:oauth2:token",
            ownerStrategyName: "email",
            value: JSON.stringify({
              refresh_token: refreshToken,
              access_token: "",
            }),
          };

          localStorage.setItem("auth_app_token", JSON.stringify(authAppToken));
          const response = await this.http
            .post<any>(`${environment.baseUrl}auth/refresh`, {}, {})
            .toPromise();
          const newTokens = {
            access_token: response.access_token,
            refresh_token: refreshToken,
          };
          const newAuthAppToken = {
            ...authAppToken,
            value: JSON.stringify(newTokens),
          };
          localStorage.setItem(
            "auth_app_token",
            JSON.stringify(newAuthAppToken)
          );
          const decodedAccessToken = decodeJwtPayload(response.access_token);
          const permissions = decodedAccessToken.identity.permissions;
          const userType = decodedAccessToken.identity.userType;
          const userName = decodedAccessToken.identity.name;

          // Whether enters to peca or phas to be called
          const user = {
            id: userId,
            userType,
            name: userName,
            activeSchoolYear: {
              id: schoolYearId,
            },
            permissions,
          };
          this.store.dispatch(new SetUser(user));
          this.store.dispatch(new SetUserPermissions(permissions));
          this.store.dispatch(new UpdateUserInfo(userId, +userType));
          this.store.dispatch(new UpdateStepsSelectedProject(projectId));
          this.store.dispatch(new UpdateStates());
          this.store.dispatch(new UpdateMunicipalities());
          const state = await this.store
            .dispatch(new FetchProject({ projectId, schoolYearId }))
            .toPromise();

          if (projectStep === "1") {
            this.router.navigate(["previous-steps"]);
            this.stepsService.callSteps(false);
          } else {
            const activePecaId = state.peca.content.id;
            if (activePecaId) {
              this.router.navigate(["peca"]);
              this.store.dispatch(new SetCurrentUser(userId, +userType));
            } else {
              this.router.navigate(["404"]);
            }
          }
        }
      }
    });
  }
}
