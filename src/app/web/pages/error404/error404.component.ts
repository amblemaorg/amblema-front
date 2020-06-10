import { Component, OnInit } from "@angular/core";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
import { GlobalService } from "src/app/services/global.service";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-error404",
  templateUrl: "./error404.component.html",
  styleUrls: ["./error404.component.scss"]
})
export class Error404Component implements OnInit {
  content = {
    error: "404",
    title: "¡Página no encontrada!",
    text: [
      "La página que estabas buscando no se pudo encontrar, es posible que no exista. Prueba dirigirte a"
    ]
  };
  textLocation = "";
  buttonText = "";
  buttonTextCapital = "";
  constructor(
    private globalService: GlobalService,
    private store: Store,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.stopLoading();
    this.changeButtonText();
  }
  stopLoading() {
    if (this.globalService.isBrowser) {
      setTimeout(() => {
        this.store.dispatch([new SetIsLoadingPage(false)]);
      });
    }
  }
  changeButtonText() {
    if (this.router.url.substr(0, 5) == "/peca") {
      this.textLocation = "la página anterior haciendo clic en el botón";
      this.buttonText = "atrás";
      this.buttonTextCapital = "Atrás";
    } else {
      this.textLocation = "nuestra página principal haciendo clic en el botón";
      this.buttonText = "inicio";
      this.buttonTextCapital = "Inicio";
    }
  }
  goTo() {
    if (this.router.url.substr(0, 5) == "/peca") {
      this.location.back();
    } else {
      this.router.navigate(["/"]);
    }
  }
}
