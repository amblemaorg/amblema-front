import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutUsService } from 'src/app/services/web/about-us.service';
import { AboutUsPage } from 'src/app/models/web/web-about-us.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  coverData = {
    coverImage: './assets/images/cover-simbolos.png'
  }

  pillarsOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: false,
    //touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        touchDrag: true,
      },
      [767 * 0.8]: {
        items: 2,
        touchDrag: true,
      },
    }
  }

  carouselOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2,
      },
      1279: {
        items: 3
      }
    }
  }

  aboutUsPageData: AboutUsPage;

  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit() {
    this.getAboutUsData();
  }

  getAboutUsData() {
    //this.aboutUsService.getAboutUsData()
    this.aboutUsService.getAboutUsJSON()
        .subscribe(data => {
          // console.log(data)
          this.aboutUsPageData = data.aboutUsPage;
        });
  }

  onAwardClick(award) {
    console.log(award)
  }

}
