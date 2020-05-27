import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { METADATA } from "../../web-pages-metadata";
import { GlobalService } from "src/app/services/global.service";
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.scss"],
})
export class SchoolComponent implements OnInit, AfterViewInit {
  constructor(public globalService: GlobalService, private store: Store) {
    this.globalService.setTitle(METADATA.schoolsPage.title);
    this.globalService.setMetaTags(METADATA.schoolsPage.metatags);
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
