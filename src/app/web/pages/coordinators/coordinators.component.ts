import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OwlOptions } from "ngx-owl-carousel-o";
import { WebContentService } from "src/app/services/web/web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { CoordinatorPage } from "../../../models/web/web-coordinator.model";
import { COORDINATOR_CONTENT } from "./coordinators-static-content";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-coordinators",
  templateUrl: "./coordinators.component.html",
  styleUrls: ["./coordinators.component.scss"],
})
export class CoordinatorsComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  coverData = {
    slides: [],
  };
  coordinatorsPageData: CoordinatorPage = {
    backgroundImage: "",
    testimonials: [],
    steps: [],
  };
  coordinatorService: WebContentService;
  SPONSOR_PATH = "webcontent?page=coordinatorPage";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.setStaticService();
    this.setApiService();
    this.getCoordinatorsData();
  }

  setStaticService() {
    this.coordinatorService = new StaticWebContentService();
    this.coordinatorService.setWebContent(COORDINATOR_CONTENT);
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.SPONSOR_PATH);
    this.coordinatorService = service;
  }

  getCoordinatorsData() {
    this.coordinatorService.getWebContent().subscribe((data) => {
      // console.log(data)
      this.coordinatorsPageData = data.coordinatorPage;
      this.coverData.slides.push({
        image: this.coordinatorsPageData.backgroundImage,
      });
    });
  }
}
