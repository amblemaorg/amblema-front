import { Component, OnInit } from "@angular/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { NbAuthJWTToken, NbAuthService, decodeJwtPayload } from "@nebular/auth";
import { Location } from "@angular/common";
import { Store } from "@ngxs/store";
import { SetUser, SetSelectedProject } from "src/app/store/actions/peca/peca.actions";

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
  /*escuela1 = {
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
  };*/
  userType: string;
  projects: any;
  idUser: string;
  nameUser: string;
  emailUser: string;

  //schools = [this.escuela1, this.escuela2, this.escuela3];

  constructor(
    private router: Router,
    private authService: NbAuthService,
    private location: Location,
    private store: Store
  ) {}

  ngOnInit() {
    this.getTokenInfo();
  }

  getTokenInfo() {
    let response;
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        response = decodeJwtPayload(token.getValue());
        //console.log(response);
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
      this.router.navigate([
        "previous-steps",
        { idProject: idProject, userType: this.userType, idUser: this.idUser },
      ]);
      this.store.dispatch([new SetSelectedProject(this.projects[index])]);
    } else {
      this.router.navigate(["peca"]);
      //{
      //  nameUser: this.nameUser,
      //  idUser: this.idUser,
      //  userType: this.userType,
      //  emailUser: this.emailUser,
      //},
      this.store.dispatch([new SetSelectedProject(this.projects[index])]);
    }
  }

  goBack() {
    this.location.back();
  }
}