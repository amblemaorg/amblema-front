import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { METADATA, toSeoPage } from "../../web-pages-metadata";
import { SeoService } from "src/app/services/seo.service";
import { GlobalService } from "src/app/services/global.service";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.scss"],
})
export class SchoolComponent implements OnInit, AfterViewInit {
  constructor(public globalService: GlobalService, private seo: SeoService, private store: Store, private router: Router) {
    this.seo.setPage(toSeoPage(METADATA.schoolsPage));
  }

  // /escuelas/:schoolSlug renderiza la ficha dentro de este componente
  get isDetail(): boolean {
    return this.router.url.split(/[?#]/)[0].split("/").filter(Boolean).length > 1;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.globalService.isBrowser) {
      setTimeout(() => {
        this.store.dispatch([new SetIsLoadingPage(false)]);
      });
    }
  }
}
