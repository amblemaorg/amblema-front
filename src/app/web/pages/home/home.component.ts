import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OwlOptions } from "ngx-owl-carousel-o";
import { OwlCarousel } from "ngx-owl-carousel";
import { ChartService } from "src/app/services/web/chart.service";
import { GlobalService } from "src/app/services/global.service";
import { ModalService } from "src/app/services/modal.service";
import { WebContentService } from "src/app/services/web/web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { HomePage } from "src/app/models/web/web-home.model";
import { HOME_CONTENT } from "./home-static-content";
import { environment } from "src/environments/environment";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("pillarsCarousel", { static: true }) pillarsCarousel: OwlCarousel;
  landscape = window.innerWidth > window.innerHeight;

  coverData = {
    coverImage: "./assets/images/cover-simbolos.png",
  };

  chartSwitcherOptions = {
    direction: "row",
    charts: [],
  };

  pillarsOptions = {
    autoplay: false,
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ["", ""],
    navSpeed: 1000,
  };

  carouselOptions: OwlOptions = {
    autoplay: false,
    items: 3,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ["", ""],
    navSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      [767 * 1.3]: {
        items: 3,
      },
    },
  };

  homePageData: HomePage = {
    slider: [],
    aboutUsText: "",
    environmentText: "",
    readingText: "",
    mathText: "",
    statistics: {
      charts: [],
    },
    testimonials: [],
  };
  isBrowser: boolean;
  selectedPillar: any = {};
  homeService: WebContentService;
  HOME_PATH = "webcontent?page=homePage";

  constructor(
    private globalService: GlobalService,
    private chartService: ChartService,
    private modalService: ModalService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    //this.setStaticService();
    this.setApiService();
    this.getHomePageData();
  }

  setStaticService() {
    this.homeService = new StaticWebContentService();
    this.homeService.setWebContent(HOME_CONTENT);
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.HOME_PATH);
    this.homeService = service;
  }

  getHomePageData() {
    this.homeService.getWebContent().subscribe((data) => {
      //console.log(data);
      this.homePageData = data.homePage;
      this.homePageData.statistics = HOME_CONTENT.homePage.statistics;
      const chartsData = HOME_CONTENT.homePage.statistics.charts;
      this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(
        chartsData
      );
    });
  }

  @HostListener("window:resize", [""])
  onResize() {
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.pillarsCarousel.refresh();
  }

  openModal(pillar, content) {
    this.selectedPillar = this.getPillar(pillar);
    this.modalService.openModal(content);
  }

  getPillar(pillarName: string): any {
    switch (pillarName) {
      case "environment":
        return {
          title: "Ambiente",
          description: this.homePageData.environmentText,
        };
      case "math":
        return { title: "Matemática", description: this.homePageData.mathText };
      case "reading":
        return { title: "Lectura", description: this.homePageData.readingText };
      default:
        throw Error("Invalid pillar error");
    }
  }
}
