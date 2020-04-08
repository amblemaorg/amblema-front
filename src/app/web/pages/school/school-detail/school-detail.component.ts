import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { SchoolService } from 'src/app/services/web/school.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ChartService } from 'src/app/services/web/chart.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('schoolDetails', { static: false }) schoolSection: ElementRef;
  @ViewChild('activitiesCarousel', { static: true }) activitiesCarousel: OwlCarousel;
  @ViewChild('otherSchoolsCarousel', { static: true }) otherSchoolsCarousel: OwlCarousel;
  lineChartOptions: object;

  landscape = window.innerWidth > window.innerHeight;

  chartSwitcherOptions = {
    direction: 'column',
    charts: []
  }

  carouselOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000,
  }

  schoolImagesOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  teachersOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: 2
      },
      [768 * 1.3]: {
        items: 3
      }
    }
  }

  activitiesOptions: OwlOptions = {
    ...this.carouselOptions,
    responsive: {
      0: {
        items: this.landscape ? 3 : 1
      },
      [767 * 0.84]: {
        items: 3
      },
      [1024 * 0.84]: {
        items: 4
      }
    }
  }

  otherSchoolsOptions: OwlOptions = {
    ...this.carouselOptions,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    nav: false,
    responsive: {
      0: {
        items: this.landscape ? 3 : 1
      },
      [768 * 0.8]: {
        items: 3
      }
    }
  }

  school;
  activeChartIndex: number = 0;
  isBrowser: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private schoolService: SchoolService,
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    this.route.paramMap.subscribe(params => {
      this.getSchoolBySlug(params.get('schoolSlug'));

    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToPage();
        this.reinitCarousels();
      }
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
    this.schoolService.getSchoolBySlugJSON(slug)
    .subscribe(data => {
      // console.log(data)
      this.school = data;
      this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(data.charts);
    })
  }

  setActiveChart(index: number) {
    this.activeChartIndex = index;
  }

  @HostListener('window:resize', [''])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
    if (this.landscape) {
      this.activitiesCarousel.options.responsive[0].items = 3;
      this.otherSchoolsCarousel.options.responsive[0].items = 3;
      this.refreshCarousels();
    }
    else {
      this.activitiesCarousel.options.responsive[0].items = 1;
      this.otherSchoolsCarousel.options.responsive[0].items = 1;
      this.refreshCarousels();
    }
  }

  reinitCarousels() {
    this.activitiesCarousel.reInit();
    this.otherSchoolsCarousel.reInit();
  }

  refreshCarousels() {
    this.activitiesCarousel.refresh();
    this.otherSchoolsCarousel.refresh();
  }
}
