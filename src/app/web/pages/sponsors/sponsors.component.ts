import { Component, OnInit, HostListener, ViewChild, NgZone, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OwlOptions } from "ngx-owl-carousel-o";
import { OwlCarousel } from "ngx-owl-carousel";
import { WebContentService } from "src/app/services/web/web-content.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { StaticWebContentService } from "src/app/services/web/static-web-content.service";
import { SponsorPage } from "../../../models/web/web-sponsor.model";
import { environment } from "src/environments/environment";
import { SPONSOR_CONTENT } from "./sponsor-static-content";
import { Subscription, fromEvent } from "rxjs";

@Component({
  selector: "app-sponsors",
  templateUrl: "./sponsors.component.html",
  styleUrls: ["./sponsors.component.scss"],
})
export class SponsorsComponent implements OnInit {
  @ViewChild("sponsorsCarousel", { static: true }) sponsorsCarousel: OwlCarousel;
  @ViewChild("listSteps", { static: true }) listSteps: ElementRef;
  scrollSubscription: Subscription;
  landscape = window.innerWidth > window.innerHeight;

  coverCarouselOptions: OwlOptions = {
    autoplay: true,
    loop: true,
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

  sponsorsOptions: OwlOptions = {
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
        items: 2,
      },
      [767 * 0.8]: {
        items: 3,
      },
      [1279 * 0.8]: {
        items: 4,
      },
    },
  };

  coverData = {
    slides: [],
  };
  sponsorsPageData: SponsorPage = {
    backgroundImage: "",
    testimonials: [],
    steps: [],
    sponsors: [],
  };
  sponsorService: WebContentService;
  SPONSOR_PATH = "webcontent?page=sponsorPage";

  constructor(private http: HttpClient, private zone: NgZone) {}

  ngOnInit() {
    //this.setStaticService();
    this.setApiService();
    this.getSponsorsData();
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe((event) => {
        this.onScroll(event);
      });
    });
  }

  setStaticService() {
    this.sponsorService = new StaticWebContentService();
    this.sponsorService.setWebContent(SPONSOR_CONTENT);
  }

  setApiService() {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(this.SPONSOR_PATH);
    this.sponsorService = service;
  }

  getSponsorsData() {
    console.log(SPONSOR_CONTENT);
    this.sponsorService.getWebContent().subscribe((data) => {
      data.sponsorPage.sponsors = SPONSOR_CONTENT.sponsorPage.sponsors;
      console.log(data);
      this.sponsorsPageData = data.sponsorPage;
      this.coverData.slides.push({
        image: this.sponsorsPageData.backgroundImage,
      });
    });
  }

  onSponsorClick(url) {
    window.open(url);
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop; // ScrollTop of HTML element
    let listElementPosition = this.listSteps.nativeElement.offsetTop;
    if (listElementPosition / scrollPosition <= 1.5) {
      if (this.scrollSubscription) {
        this.scrollSubscription.unsubscribe();
      }
      this.listSteps.nativeElement.classList.add("animation-finish");
      this.listSteps.nativeElement.classList.remove("animation-init");
    }
  }

  @HostListener("window:resize", [""])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
    if (this.landscape) {
      this.sponsorsCarousel.options.responsive[0].items = 3;
      this.sponsorsCarousel.refresh();
    } else {
      this.sponsorsCarousel.options.responsive[0].items = 2;
      this.sponsorsCarousel.refresh();
    }
  }
}
