import { Component, OnInit, HostListener, ViewChild, ElementRef, NgZone } from "@angular/core";
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
import { Subscription, fromEvent } from "rxjs";
import { SvgIconRegistryService } from "angular-svg-icon";
import { METADATA } from "../../web-pages-metadata";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("pillarsCarousel", { static: true }) pillarsCarousel: OwlCarousel;
  @ViewChild("leaf", { static: true }) leaf: ElementRef;
  @ViewChild("pillarsList", { static: true }) pillarsList: ElementRef;
  @ViewChild("statistics", { static: true }) statistics: ElementRef;
  scrollSubscription: Subscription;
  landscape = window.innerWidth > window.innerHeight;

  coverData = {
    overlayImage: "./assets/images/cover-simbolos.png",
    slider: [],
  };

  chartSwitcherOptions = {
    direction: "row",
    buttonsDescription:
      "Medimos el impacto de la aplicación de la Herramienta Educativa en cada escuela",
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
      totalSchools: 0,
      totalTeachers: 0,
      totalStudents: 0,
      totalSponsors: 0,
      totalCoordinators: 0,
      charts: [],
    },
    testimonials: [],
  };
  isBrowser: boolean;
  selectedPillar: any = {};
  finalStatistics: any = {};
  homeService: WebContentService;

  HOME_PATH = "webcontent?page=homePage";

  constructor(
    private globalService: GlobalService,
    private chartService: ChartService,
    private modalService: ModalService,
    private http: HttpClient,
    private zone: NgZone,
    private iconService: SvgIconRegistryService,
    private store: Store
  ) {
    this.globalService.setTitle(METADATA.homePage.title);
    this.globalService.setMetaTags(METADATA.homePage.metatags);
    this.iconService.loadSvg("../../../assets/icons/environment-icon.svg", "environment-icon");
    this.iconService.loadSvg("../../../assets/icons/reading-icon.svg", "reading-icon");
    this.iconService.loadSvg("../../../assets/icons/math-icon.svg", "math-icon");
  }

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    //this.setStaticService();
    this.setApiService();
    this.getHomePageData();
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe((event) => {
        this.onScroll(event);
      });
    });
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
      data.homePage.statistics = {
        totalSchools: 0,
        totalTeachers: 0,
        totalStudents: 0,
        totalSponsors: 0,
        totalCoordinators: 0,
      };
      this.coverData.slider = data.homePage.slider.map((slide) => {
        return {
          image: slide.image,
          title: slide.description,
        };
      });
      this.finalStatistics = {
        totalSchools: String(data.homePage.nSchools),
        totalSponsors: String(data.homePage.nSponsors),
        totalStudents: String(data.homePage.nStudents),
        totalTeachers: String(data.homePage.nTeachers),
        totalCoordinators: String(data.homePage.nCoordinators),
      };
      let chartsData = HOME_CONTENT.homePage.statistics.charts;
      chartsData.map((chart) => {
        chart.data = data.homePage.diagnostics[chart.id].map((lapse) => {
          if (lapse.value == 0) lapse.value = 0.01;
          return lapse;
        });
        return chart.data;
      });

      this.homePageData = data.homePage;
      this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(
        chartsData
      );
      this.store.dispatch([new SetIsLoadingPage(false)]);
    });
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop;
    let leafPosition = this.leaf.nativeElement.offsetTop;
    let listElementPosition = this.pillarsList.nativeElement.offsetTop;
    let statisticsPosition = this.statistics.nativeElement.offsetTop;

    if (leafPosition / scrollPosition <= 1.5) {
      this.leaf.nativeElement.classList.remove("animation-init");
      this.leaf.nativeElement.classList.add("animation-finish");
    }

    if (listElementPosition / scrollPosition <= 1.5) {
      this.pillarsList.nativeElement.classList.add("animation-finish");
      this.pillarsList.nativeElement.classList.remove("animation-init");
    }

    if (statisticsPosition / scrollPosition <= 1.5) {
      if (this.scrollSubscription) {
        this.scrollSubscription.unsubscribe();
      }
      this.homePageData.statistics.totalSchools = this.finalStatistics.totalSchools;
      this.homePageData.statistics.totalSponsors = this.finalStatistics.totalSponsors;
      this.homePageData.statistics.totalStudents = this.finalStatistics.totalStudents;
      this.homePageData.statistics.totalTeachers = this.finalStatistics.totalTeachers;
      this.homePageData.statistics.totalCoordinators = this.finalStatistics.totalCoordinators;
    }
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

  @HostListener("window:resize", [""])
  onResize() {
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.pillarsCarousel.refresh();
  }
}
