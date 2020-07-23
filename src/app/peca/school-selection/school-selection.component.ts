import { Component, OnInit } from "@angular/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { NbAuthService, decodeJwtPayload, NbAuthOAuth2Token } from "@nebular/auth";
import { Location } from "@angular/common";
import { Store } from "@ngxs/store";
import { SetUser, SetSelectedProject } from "src/app/store/actions/peca/peca.actions";
import { UpdateModulesTotal } from 'src/app/store/actions/e-learning/learning-modules.actions';
import { UpdateUserInfo, SetCurrentUser } from 'src/app/store/actions/e-learning/user.actions';
import { UpdateStepsProgress, UpdateStepsSelectedProject } from 'src/app/store/actions/steps/project.actions';
import { StepsService } from 'src/app/services/steps/steps.service';
import { UpdateStates, UpdateMunicipalities } from 'src/app/store/actions/steps/residence-info.actions';

@Component({
  selector: "app-school-selection",
  templateUrl: "./school-selection.component.html",
  styleUrls: ["./school-selection.component.scss"],
})
export class SchoolSelectionComponent implements OnInit {
  backIcon = faArrowLeft;
  title = "Bienvenido a AmbleMa";
  description =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quam pariatur hic dignissimos nam laborum expedita nostrum temporibus adipisci, amet quos neque animi, obcaecati, quisquam officia dolorum inventore deserunt! Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente placeat veritatis, reprehenderit accusantium, illo aspernatur qui, cupiditate magni quis provident! Quibusdam fugiat voluptatum doloribus fugit? Illum dolores dicta eveniet quos neque animi, illo aspernatur qui.";
 /*  escuela1 = {
    name: "Escuela 1",
    addres: "",
    phase: "1"
  };
  escuela2 = {
    name: "Escuela 2",
    phase: "1"
  };
  escuela3 = {
    name: "Escuela 3",
    phase: "2"
  };
  escuela4 = {
    name: "Escuela 1",
    addres: "",
    phase: "1"
  };
  escuela5 = {
    name: "Escuela 2",
    phase: "1"
  };
  escuela6 = {
    name: "Escuela 3",
    phase: "2"
  };
  escuela7 = {
    name: "Escuela 1",
    addres: "",
    phase: "1"
  };
  escuela8 = {
    name: "Escuela 2",
    phase: "1"
  };
  escuela10 = {
    name: "Escuela 3",
    phase: "2"
  };
  escuela11 = {
    name: "Escuela 3",
    phase: "2"
  };
  escuela12 = {
    name: "Escuela 3",
    phase: "2"
  };
  escuela9 = {
    name: "Escuela 3",
    phase: "2"
  }; */
  userType: string;
  projects: any;
  idUser: string;
  nameUser: string;
  emailUser: string;

/*   schools = [this.escuela1, this.escuela2, this.escuela3, this.escuela4, this.escuela5, this.escuela5, this.escuela6, this.escuela7, this.escuela8, this.escuela10, this.escuela11, this.escuela12, this.escuela9];
 */
  constructor(
    private router: Router,
    private authService: NbAuthService,
    private store: Store,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.getTokenInfo();
  }

  getTokenInfo() {
    let response;
    this.authService.getToken().subscribe((token: NbAuthOAuth2Token) => {
      if (token.isValid()) {
        let tokens = JSON.parse(token.getValue());
        response = decodeJwtPayload(tokens.access_token);
        this.store.dispatch([new SetUser(response.identity)]);
        this.projects = response.identity.projects;
        this.userType = response.identity.userType;
        this.idUser = response.identity.id;
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
    this.store.dispatch( new UpdateUserInfo( this.idUser, (+this.userType) ) );
    this.store.dispatch( new UpdateStepsSelectedProject(idProject) );

    this.getResidenceInfo();
  }

  getResidenceInfo() {
    this.store.dispatch(new UpdateStates);
    this.store.dispatch(new UpdateMunicipalities);
  }
  
}
