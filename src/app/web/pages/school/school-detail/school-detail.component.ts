import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  NgZone,
} from "@angular/core";
import { SchoolService } from "src/app/services/web/school.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { OwlCarousel } from "ngx-owl-carousel";
import { ChartService } from "src/app/services/web/chart.service";
import { GlobalService } from "src/app/services/global.service";
import { Subscription, fromEvent } from "rxjs";

@Component({
  selector: "app-school-detail",
  templateUrl: "./school-detail.component.html",
  styleUrls: ["./school-detail.component.scss"],
})
export class SchoolDetailComponent implements OnInit, AfterViewInit {
  @ViewChild("schoolDetails", { static: false }) schoolSection: ElementRef;
  @ViewChild("activitiesIndexCarousel", { static: true }) activitiesIndexCarousel: OwlCarousel;
  @ViewChild("activityImageCarousel", { static: false }) activityImageCarousel: OwlCarousel;
  @ViewChild("activitiesCarousel", { static: true }) activitiesCarousel: OwlCarousel;
  @ViewChild("otherSchoolsCarousel", { static: true }) otherSchoolsCarousel: OwlCarousel;
  @ViewChild("charts", { static: false }) charts: ElementRef;
  @ViewChild("chartTestimonial", { static: false }) chartTestimonial: ElementRef;
  scrollSubscription: Subscription;
  landscape = window.innerWidth > window.innerHeight;

  ACTIVITIES = {
    WITH_TEACHERS: "withTeachers",
    SPECIALS: "specials",
  };
  selectedActivitiesType = this.ACTIVITIES.SPECIALS;
  activeActivityIndex = 0;

  chartSwitcherOptions = {
    direction: "column",
    buttonsDescription:
      "Medimos el impacto de la aplicación de la herramienta educativa en cada escuela",
    charts: [],
  };

  carouselOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ["", ""],
    navSpeed: 1000,
  };

  schoolImagesOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  activitiesIndexOptions: OwlOptions = {
    ...this.carouselOptions,
    loop: false,
    responsive: {
      0: {
        items: 2,
      },
      [768]: {
        items: 5,
      },
    },
  };

  activityImagesOptions: OwlOptions = {
    ...this.carouselOptions,
    center: true,
    loop: true,
    nav: false,
    //autoWidth:true,
    responsive: {
      0: {
        items: 3,
      },
      [768]: {
        items: 5,
      },
    },
  };

  teachersOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 2,
      },
      [768 * 1.3]: {
        items: 3,
      },
    },
  };

  activitiesOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: this.landscape ? 3 : 1,
      },
      [767 * 0.84]: {
        items: 3,
      },
      [1024 * 0.84]: {
        items: 4,
      },
    },
  };

  otherSchoolsOptions: OwlOptions = {
    ...this.carouselOptions,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    nav: false,
    responsive: {
      0: {
        items: this.landscape ? 3 : 1,
      },
      [768 * 0.8]: {
        items: 3,
      },
    },
  };

  school;
  activeChartIndex: number = 0;
  isBrowser: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private schoolService: SchoolService,
    private chartService: ChartService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    this.route.paramMap.subscribe((params) => {
      this.getSchoolBySlug(params.get("schoolSlug"));
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToPage();
        this.reinitCarousels();
      }
    });

    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe((event) => {
        this.onScroll(event);
      });
    });
  }

  ngAfterViewInit() {
    this.scrollToPage();
  }

  scrollToPage() {
    const schoolTopPos = this.schoolSection.nativeElement.offsetTop;
    window.scrollTo(0, schoolTopPos);
  }

  getSchoolBySlug(slug) {
    this.schoolService.getSchoolBySlugJSON(slug).subscribe((data) => {
      // console.log(data)
      this.school = data;
      this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(
        data.charts
      );
    });
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop;
    //let chartsPosition = this.charts.nativeElement.offsetTop;
    let chartTestimonialPosition = this.chartTestimonial.nativeElement.offsetTop;
    //let elementPosition = chartsPosition + chartTestimonialPosition;

    if (chartTestimonialPosition / scrollPosition <= 1.5) {
      if (this.scrollSubscription) {
        this.scrollSubscription.unsubscribe();
      }
      this.chartTestimonial.nativeElement.classList.add("animation-finish");
      this.chartTestimonial.nativeElement.classList.remove("animation-init");
    }
  }

  setActiveChart(index: number) {
    this.activeChartIndex = index;
  }

  setActivitiesType(type: string) {
    if (this.selectedActivitiesType !== type) {
      this.selectedActivitiesType = type;
      this.setActiveActivity(0);
      this.activitiesIndexCarousel.reInit();
    }
  }

  setActiveActivity(index: number) {
    this.activeActivityIndex = index;
    this.activityImageCarousel.reInit();
  }

  @HostListener("window:resize", [""])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
    if (this.landscape) {
      this.activitiesIndexCarousel.options.responsive[0].items = 5;
      this.activityImageCarousel.options.responsive[0].items = 5;
      this.activitiesCarousel.options.responsive[0].items = 3;
      this.otherSchoolsCarousel.options.responsive[0].items = 3;
      this.refreshCarousels();
    } else {
      this.activitiesIndexCarousel.options.responsive[0].items = 2;
      this.activityImageCarousel.options.responsive[0].items = 3;
      this.activitiesCarousel.options.responsive[0].items = 1;
      this.otherSchoolsCarousel.options.responsive[0].items = 1;
      this.refreshCarousels();
    }
  }

  reinitCarousels() {
    this.activitiesIndexCarousel.reInit();
    this.activityImageCarousel.reInit();
    this.activitiesCarousel.reInit();
    this.otherSchoolsCarousel.reInit();
  }

  refreshCarousels() {
    this.activitiesIndexCarousel.refresh();
    this.activityImageCarousel.refresh();
    this.activitiesCarousel.refresh();
    this.otherSchoolsCarousel.refresh();
  }
}
