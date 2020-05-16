import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { SchoolService } from "src/app/services/web/school.service";
import { METADATA } from "../../web-pages-metadata";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.scss"],
})
export class SchoolComponent implements AfterViewInit, OnInit {
  constructor(private globalService: GlobalService, private schoolService: SchoolService) {
    this.globalService.setTitle(METADATA.schoolsPage.title);
    this.globalService.setMetaTags(METADATA.schoolsPage.metatags);
  }

  ngAfterViewInit() {}

  ngOnInit() {}
}
