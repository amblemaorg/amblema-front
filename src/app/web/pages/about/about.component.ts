import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OwlCarousel } from "ngx-owl-carousel";
import { OwlOptions } from "ngx-owl-carousel-o";
import { AboutUsPage } from "src/app/models/web/web-about-us.model";
import { WebContentService } from "src/app/services/web/web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { environment } from "src/environments/environment";
import { ABOUT_US_CONTENT } from "./about-us-static-content";
import { ModalService } from "src/app/services/modal.service";
import { SvgIconRegistryService } from "angular-svg-icon";
import { GlobalService } from "src/app/services/global.service";
import { METADATA } from "../../web-pages-metadata";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @ViewChild("awardsCarousel", { static: false }) awardsCarousel: OwlCarousel;
  @ViewChildren("awardModal", { read: ElementRef }) awardModal: QueryList<ElementRef>;

  coverData = {
    overlayImage: "./assets/images/cover-simbolos.png",
    slider: [],
  };

  pillarsOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ["", ""],
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        touchDrag: true,
      },
      [768]: {
        items: 2,
        touchDrag: true,
      },
    },
  };

  carouselOptions = {
    autoplay: false,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ["", ""],
    navSpeed: 1000,
    responsive: {
      0: {
        items: this.isMobile() && this.isPortrait() ? 1 : 2,
      },
      767: {
        items: this.isMobile() && this.isPortrait() ? 1 : 2,
      },
      1279: {
        items: 3,
      },
    },
  };

  awardImagesCarouselOptions: OwlOptions = {
    autoplay: false,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  aboutUsPageData: AboutUsPage = {
    slider: [],
    aboutUsText: "",
    environmentText: "",
    readingText: "",
    mathText: "",
    awards: [],
  };
  selectedAward = {};
  aboutUsService: WebContentService;
  ABOUT_US_PATH = "webcontent?page=aboutUsPage";

  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
    private modalService: ModalService,
    private iconService: SvgIconRegistryService
  ) {
    this.globalService.setTitle(METADATA.aboutUsPage.title);
    this.globalService.setMetaTags(METADATA.aboutUsPage.metatags);
    this.iconService.loadSvg("../../../assets/icons/environment-icon.svg", "environment-icon");
    this.iconService.loadSvg("../../../assets/icons/reading-icon.svg", "reading-icon");
    this.iconService.loadSvg("../../../assets/icons/math-icon.svg", "math-icon");
    this.modalService.defaultOptions = {
      ...this.modalService.defaultOptions,
      size: "lg",
    };
  }

  ngOnInit() {
    // this.setStaticService();
    this.setApiService();
    this.getAboutUsData();
  }

  setStaticService() {
    this.aboutUsService = new StaticWebContentService();
    this.aboutUsService.setWebContent(ABOUT_US_CONTENT);
  }

  setApiService() {
    const service: ApiWebContentService = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.ABOUT_US_PATH);
    this.aboutUsService = service;
  }

  getAboutUsData() {
    this.aboutUsService.getWebContent().subscribe((data) => {
      // console.log(data)
      this.coverData.slider = data.aboutUsPage.slider.map((slide) => {
        return {
          image: slide.image,
          title: slide.description,
        };
      });
      this.aboutUsPageData = data.aboutUsPage;
    });
  }

  refreshCarousels() {
    this.awardsCarousel.refresh();
  }

  @HostListener("window:resize", [""])
  onResize() {
    if (this.isMobile() && this.isPortrait()) {
      this.awardsCarousel.options.responsive[0].items = 1;
      this.awardsCarousel.options.responsive[767].items = 1;
      this.awardsCarousel.refresh();
    } else {
      this.awardsCarousel.options.responsive[0].items = 2;
      this.awardsCarousel.options.responsive[767].items = 2;
      this.awardsCarousel.refresh();
    }
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }

  isPortrait(): boolean {
    return window.innerWidth < window.innerHeight;
  }

  isLandscape(): boolean {
    return window.innerWidth > window.innerHeight;
  }

  onAwardClick(index: number) {
    const awardModalEl = this.awardModal.toArray()[index];
    this.modalService.openStaticModal(awardModalEl);
  }

  onCloseAwardModal(index: number) {
    const awardModalEl = this.awardModal.toArray()[index];
    this.modalService.closeStaticModal(awardModalEl);
  }
}
