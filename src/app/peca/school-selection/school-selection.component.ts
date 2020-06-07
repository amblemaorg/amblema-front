import { Component, OnInit } from "@angular/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { Location } from "@angular/common";
@Component({
  selector: "app-school-selection",
  templateUrl: "./school-selection.component.html",
  styleUrls: ["./school-selection.component.scss"]
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
  //userType: string;
  projects: any;

  //schools = [this.escuela1, this.escuela2, this.escuela3];

  constructor(
    private router: Router,
    private authService: NbAuthService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTokenInfo();
  }
  goTo(phase) {
    let phaseProject = phase;
    if (phaseProject == 1) {
      this.router.navigate(["previous-steps"]);
    } else {
      this.router.navigate(["peca"]);
    }
  }
  getTokenInfo() {
    let response;
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        response = token.getPayload();
        //localStorage.setItem("payload", response);
        //this.userType = response.identity.userType;
        this.projects = response.identity.projects;
        console.log(token);
        //console.log(this.userType);
        //console.log(this.projects);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
