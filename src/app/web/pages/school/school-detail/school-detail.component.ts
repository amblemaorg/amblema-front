import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { SchoolService } from "src/app/services/web/school.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { OwlCarousel } from "ngx-owl-carousel";
import { ChartService } from "src/app/services/web/chart.service";
import { GlobalService } from "src/app/services/global.service";
import { ApiWebContentService } from "src/app/services/web/api-web-content.service";
import { WebContentService } from "src/app/services/web/web-content.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Subscription, fromEvent } from "rxjs";
import { Store } from "@ngxs/store";
import { SetIsLoadingPage } from "src/app/store/actions/web/web.actions";
import { ChartsSwitcherComponent } from "src/app/web/shared/charts-switcher/charts-switcher.component";
import {
  faTwitter as twitterIcon,
  faInstagram as instagramIcon,
  faFacebook as facebookIcon,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-school-detail",
  templateUrl: "./school-detail.component.html",
  styleUrls: ["./school-detail.component.scss"],
})
export class SchoolDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("schoolDetails", { static: false }) schoolSection: ElementRef;
  @ViewChild("symbols", { static: true }) symbols: ElementRef;
  @ViewChild("activitiesIndexCarousel", { static: true }) activitiesIndexCarousel: OwlCarousel;
  @ViewChild("activityImageCarousel", { static: false }) activityImageCarousel: OwlCarousel;
  @ViewChild("activitiesCarousel", { static: true }) activitiesCarousel: OwlCarousel;
  @ViewChild("otherSchoolsCarousel", { static: true }) otherSchoolsCarousel: OwlCarousel;
  @ViewChild("charts", { static: false }) charts: ElementRef;
  @ViewChild("chartTestimonial", { static: false }) chartTestimonial: ElementRef;
  @ViewChild("chartSwitcher", { static: false }) chartSwitcher: ChartsSwitcherComponent;
  instagramIcon = instagramIcon;
  twitterIcon = twitterIcon;
  facebookIcon = facebookIcon;

  scrollSubscription: Subscription;
  routerSubscription: Subscription;
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
      "Medimos el impacto de la aplicación de la Herramienta Educativa en cada escuela",
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
        items: 1,
      },
      [768]: {
        items: 3,
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
    loop: false,
    responsive: {
      0: {
        items: this.landscape ? 3 : 1,
      },
      [768]: {
        items: 3,
      },
      [1024]: {
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
        nav: !this.landscape,
        items: this.landscape ? 3 : 1,
      },
      [768]: {
        items: 3,
      },
    },
  };

  school: any = {
    name: "",
    sponsor: "",
    direction: "",
    staff: "",
    coordinator: "",
    enrollment: "",
    images: [],
    mathOlympics: {
      enrolled: 0,
      classified: 0,
      goldMedal: 0,
      silverMedal: 0,
      bronzeMedal: 0,
    },
    activities: {
      [this.ACTIVITIES.WITH_TEACHERS]: [],
      [this.ACTIVITIES.SPECIALS]: [],
    },
    activitiesSlider: [],
    testimonials: [],
    nextActivities: [],
    otherSchools: [],
    charts: [],
  };

  SCHOOLS_PATH = "schoolspage";
  schoolService: WebContentService;
  activeChartIndex: number = 0;
  isBrowser: boolean;
  slug: string;
  pipe = new DatePipe("en-US");
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private staticSchoolService: SchoolService,
    private chartService: ChartService,
    private zone: NgZone,
    private store: Store,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get("schoolSlug");
      if (this.school && this.school.charts) this.school.charts = [];
      this.setApiService(params.get("schoolSlug"));
      this.getSchoolDetail();
    });

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.renavigateToTop();
        this.reinitCarousels();
        this.chartSwitcher.switchChart(1);
      }
    });
  }

  ngAfterViewInit() {
    this.scrollToPage();
    this.subscribeScrollEvent();
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  getSchoolDetail() {
    this.schoolService.getWebContent().subscribe((data) => {
      this.school = {
        name: data.name,
        sponsor: data.sponsor,
        direction: data.address,
        staff: (data.nAdministrativeStaff ? data.nAdministrativeStaff : 0) + (data.nLaborStaff ? data.nLaborStaff : 0),
        coordinator: data.coordinator,
        enrollment: data.nStudents,
        images: data.slider,
        mathOlympics: {
          enrolled: data.olympicsSummary.inscribed,
          classified: data.olympicsSummary.classified,
          goldMedal: data.olympicsSummary.medalsGold,
          silverMedal: data.olympicsSummary.medalsSilver,
          bronzeMedal: data.olympicsSummary.medalsBronze,
        },
        activities: {
          [this.ACTIVITIES.WITH_TEACHERS]: [],
          [this.ACTIVITIES.SPECIALS]: data.activities,
        },
        activitiesSlider: data.activitiesSlider,
        testimonials: data.teachersTestimonials.testimonials.map((testimonial) => {
          testimonial.function = testimonial.position;
          return testimonial;
        }),
        nextActivities: data.nextActivities.map((activity) => {
          activity.title = activity.name;
          activity.date = this.pipe.transform(Date.parse(activity.date), "d/M/y");
          return activity;
        }),
        otherSchools: data.nearbySchools.map((school)=> {
          school.image = school.image ? school.image : './assets/images/profile2.png';
          return school;
        }),
        facebook: data.facebook,
        twitter: data.twitter,
        instagram: data.instagram,
      };

      this.staticSchoolService.getChartsTemplateJSON().subscribe((charts) => {
        this.school.charts = charts.map((chart) => {
          chart.data = data.diagnostics[chart.id];
          return chart;
        });
        this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(
          this.school.charts
        );
      });
      this.reinitCarousels();
      this.chartSwitcher && this.chartSwitcher.switchChart(0);
      this.setActiveChart(0);
      this.store.dispatch([new SetIsLoadingPage(false)]);
    });
  }

  scrollToPage() {
    const schoolTopPos = this.schoolSection.nativeElement.offsetTop;
    window.scrollTo(0, schoolTopPos);
  }

  renavigateToTop() {
    this.symbols.nativeElement.classList.remove("animation-finish");
    this.chartTestimonial.nativeElement.classList.remove("animation-finish");
    this.symbols.nativeElement.classList.add("animation-init");
    this.chartTestimonial.nativeElement.classList.add("animation-init");
    this.scrollToPage();
    if (this.isBrowser) {
      setTimeout(() => {
        this.subscribeScrollEvent();
      }, 2100);
    }
  }

  subscribeScrollEvent() {
    this.zone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, "scroll").subscribe((event) => {
        this.onScroll(event);
      });
    });
  }

  onScroll($event) {
    let scrollPosition = $event.srcElement.children[0].scrollTop + window.innerHeight;
    let symbolsPosition = this.symbols.nativeElement.offsetTop;
    let chartsPosition = this.charts.nativeElement.offsetTop;

    if (symbolsPosition / scrollPosition <= 1) {
      this.symbols.nativeElement.classList.add("animation-finish");
      this.symbols.nativeElement.classList.remove("animation-init");
    }

    if (chartsPosition / scrollPosition <= 0.8) {
      if (this.scrollSubscription) {
        if (this.chartTestimonial) this.scrollSubscription.unsubscribe();
      }
      if (this.chartTestimonial) {
        this.chartTestimonial.nativeElement.classList.add("animation-finish");
        this.chartTestimonial.nativeElement.classList.remove("animation-init");
      }
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
    try {
      this.activeActivityIndex = index;
      //this.activityImageCarousel.reInit();
    } catch (error) {
      console.log(error);
    }
  }

  setApiService(slug) {
    const service = new ApiWebContentService(this.http);
    service.setBaseUrl(environment.baseUrl);
    service.setResourcePath(`${this.SCHOOLS_PATH}/${slug}`);
    this.schoolService = service;
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
    //this.activityImageCarousel.reInit();
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
