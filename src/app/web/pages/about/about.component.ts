import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  Inject,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
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
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild("awardsCarousel", { static: false }) awardsCarousel: OwlCarousel;
  @ViewChildren("awardModal", { read: ElementRef })
  awardModal: QueryList<ElementRef>;

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
    items: 3,
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
    private iconService: SvgIconRegistryService,
    private store: Store,
    @Inject(DOCUMENT) private document: any
  ) {
    this.globalService.setTitle(METADATA.aboutUsPage.title);
    this.globalService.setMetaTags(METADATA.aboutUsPage.metatags);
    this.iconService.loadSvg(
      "../../../assets/icons/environment-icon.svg",
      "environment-icon"
    );
    this.iconService.loadSvg(
      "../../../assets/icons/reading-icon.svg",
      "reading-icon"
    );
    this.iconService.loadSvg(
      "../../../assets/icons/math-icon.svg",
      "math-icon"
    );
    this.modalService.defaultOptions = {
      ...this.modalService.defaultOptions,
      size: "lg",
    };
  }

  ngOnInit() {
    // this.setStaticService();
    this.setApiService();
    this.getAboutUsData();
    this.injectSchema();
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
      this.coverData.slider = data.aboutUsPage.slider.map((slide) => {
        return {
          image: slide.image,
          title: slide.description,
        };
      });
      this.aboutUsPageData = data.aboutUsPage;
      if (this.aboutUsPageData.awards && this.aboutUsPageData.awards.length > 0) {
        this.aboutUsPageData.awards = this.aboutUsPageData.awards.reverse();
      }
      const coverImages = (data.aboutUsPage.slider || []).map((slide) => slide.image);
      this.preloadImages(coverImages).then(() => {
        this.store.dispatch([new SetIsLoadingPage(false)]);
      });
    }, (error) => {
      this.store.dispatch([new SetIsLoadingPage(false)]);
    });
  }

  preloadImages(images: any, timeoutMs: number = 3000): Promise<any> {
    if (typeof window === 'undefined' || typeof Image === 'undefined') {
      return Promise.resolve();
    }
    const flatList: string[] = Array.isArray(images) ? images.reduce((acc, val) => acc.concat(val), []) : [images];
    const validImages = flatList.filter((src) => typeof src === 'string' && !!src);
    if (validImages.length === 0) {
      return Promise.resolve();
    }
    const loadPromise = Promise.all(
      validImages.map((src: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
          img.src = src;
        });
      })
    );
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, timeoutMs));
    return Promise.race([loadPromise, timeoutPromise]);
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

  injectSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "AmbLeMa",
        "url": "https://amblema.org"
      },
      "description": "Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores clave de gestión docente.",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "AmbLeMa",
        "url": "https://amblema.org"
      }
    };

    let script = this.document.getElementById('json-ld-about-schema');
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'json-ld-about-schema';
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  ngOnDestroy() {
    const script = this.document.getElementById('json-ld-about-schema');
    if (script) {
      script.remove();
    }
  }
}
