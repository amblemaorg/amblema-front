import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { faArrowLeft, faSignOutAlt  } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { NbAuthService, decodeJwtPayload, NbAuthOAuth2Token } from "@nebular/auth";
import { Location } from "@angular/common";
import { Store } from "@ngxs/store";
import { SetUser, SetSelectedProject, SetUserPermissions } from "../../store/actions/peca/peca.actions";
import { UpdateModulesTotal } from '../../store/actions/e-learning/learning-modules.actions';
import { UpdateUserInfo, SetCurrentUser } from '../../store/actions/e-learning/user.actions';
import { UpdateStepsProgress, UpdateStepsSelectedProject } from '../../store/actions/steps/project.actions';
import { StepsService } from '../../services/steps/steps.service';
import { UpdateStates, UpdateMunicipalities } from '../../store/actions/steps/residence-info.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-school-selection",
  templateUrl: "./school-selection.component.html",
  styleUrls: ["./school-selection.component.scss"],
})
export class SchoolSelectionComponent implements OnInit {
  backIcon = faArrowLeft;
  closeIcon = faSignOutAlt;
  title = "Bienvenido a AmbLeMa";
  description =
    "AmbLeMa es la conjunción de tres actores esenciales: Coordinadores, Escuelas y Padrinos; que le dan vida a un sistema armónico para alcanzar la meta de una educación de calidad que queremos aportar a miles de niños en Venezuela. Bienvenidos a esta maravillosa aventura donde el aporte de cada uno suma para lograr lo que nos mueve en AmbLeMa: el HQS (Hagamos que Suceda).";

  userType: string;
  projects: any;
  permissions: any;
  idUser: string;
  nameUser: string;
  emailUser: string;

  constructor(
    private router: Router,
    private authService: NbAuthService,
    private store: Store,
    private stepsService: StepsService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.getTokenInfo();
  }

  getTokenInfo() {
    let response;
    this.authService.getToken().subscribe(async (token: NbAuthOAuth2Token) => {
      if (token.isValid()) {
        let tokens = JSON.parse(token.getValue());
        response = decodeJwtPayload(tokens.access_token);
        const res = await this.http
            .post<any>(`${environment.baseUrl}auth/me`, {email:response.identity.email}, {})
            .toPromise()
        const {data} = res
        this.store.dispatch([new SetUser(data)]);
        this.projects = data.projects;
        this.permissions = data.permissions;
        this.userType = data.userType;
        this.idUser = data.id;
        this.emailUser = response.identity.email;
        this.nameUser = response.identity.name;

        if (this.projects.length === 1) {
          const projectPhase = parseInt(this.projects[0].phase);
          const projectId = this.projects[0].id;
          this.goTo(projectPhase, projectId, 0);
        }
      }
    });
  }

  goTo(phase, id, index) {
    let phaseProject = phase;
    let idProject = id;
    if (phaseProject == 1) {
      this.router.navigate(["previous-steps"]);
      this.stepsService.callSteps(false);

    } else {
      this.router.navigate(["peca"]);
      this.store.dispatch( new SetCurrentUser( this.idUser, (+this.userType) ) );
    }

    // Whether enters to peca or previous steps this has to be called
    this.store.dispatch([new SetSelectedProject(this.projects[index])]);
    this.store.dispatch([new SetUserPermissions(this.permissions)]);
    this.store.dispatch( new UpdateUserInfo( this.idUser, (+this.userType) ) );
    this.store.dispatch( new UpdateStepsSelectedProject(idProject) );

    this.getResidenceInfo();
  }

  getResidenceInfo() {
    this.store.dispatch(new UpdateStates);
    this.store.dispatch(new UpdateMunicipalities);
  }

}
