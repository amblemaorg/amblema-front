import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../../services/web/home.service';
import { HomePage } from 'src/app/models/web/web-home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coverData = {
    coverImage: './assets/images/cover-simbolos.png'
  }

  pillarsOptions: OwlOptions = {
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

}
