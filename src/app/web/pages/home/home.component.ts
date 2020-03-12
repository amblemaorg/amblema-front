import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../../services/web/home.service';
import { HomePage } from 'src/app/models/web/web-home.model';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('pillarsCarousel', { static: true }) pillarsCarousel: OwlCarousel;
  landscape = window.innerWidth > window.innerHeight;

  coverData = {
    coverImage: './assets/images/cover-simbolos.png'
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
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getHomePageData();
  }

  getHomePageData() {
    // this.homeService.getHomeData()
    this.homeService.getHomeJSON()
        .subscribe(data => {
          // console.log(data);
          this.homePageData = data.homePage;
        });
  }

  @HostListener('window:resize', [''])
  onResize() {
    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight)
      this.pillarsCarousel.refresh();
  }

}
