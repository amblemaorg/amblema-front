import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../../services/web/home.service';
import { HomePage } from 'src/app/models/web/web-home.model';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ChartService } from 'src/app/services/web/chart.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('pillarsCarousel', { static: true }) pillarsCarousel: OwlCarousel;
  landscape = window.innerWidth > window.innerHeight;
  isBrowser: boolean;

  coverData = {
    coverImage: './assets/images/cover-simbolos.png'
  }

  chartSwitcherOptions = {
    direction: 'row',
    charts: []
  }

  pillarsOptions = {
    autoplay: false,
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000
  }

  carouselOptions: OwlOptions = {
    autoplay: false,
    items: 3,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      [767 * 1.3]: {
        items: 3
      }
    }
  }

  homePageData: HomePage;
  constructor(
    private globalService: GlobalService,
    private homeService: HomeService,
    private chartService: ChartService
  ) {}

  ngOnInit() {
    this.isBrowser = this.globalService.isBrowser;
    this.getHomePageData();
  }

  getHomePageData() {
    // this.homeService.getHomeData()
    this.homeService.getHomeJSON()
        .subscribe(data => {
          // console.log(data);
          this.homePageData = data.homePage;
          const chartsData = data.homePage.statistics.charts;
          this.chartSwitcherOptions.charts = this.chartService.formatChartDataToDrawComponent(chartsData);
        });
  }

  @HostListener('window:resize', [''])
  onResize() {
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.pillarsCarousel.refresh();
  }

}
