import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutUsService } from 'src/app/services/web/about-us.service';
import { AboutUsPage } from 'src/app/models/web/web-about-us.model';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('awardsCarousel', { static: true }) awardsCarousel: OwlCarousel;
  landscape = window.innerWidth > window.innerHeight;

  coverData = {
    coverImage: './assets/images/cover-simbolos.png'
  }

  pillarsOptions: OwlOptions = {
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
        items: 1,
        touchDrag: true,
      },
      [767 * 0.8]: {
        items: 2,
        touchDrag: true,
      },
    }
  }

  carouselOptions = {
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
        items: this.landscape ? 3 : 1
      },
      767: {
        items: this.landscape ? 3 : 1
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

  @HostListener('window:resize', [''])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
    if (this.landscape) {
      this.awardsCarousel.options.responsive[0].items = 3;
      this.awardsCarousel.options.responsive[767].items = 3;
      this.awardsCarousel.refresh();
    }
    else {
      this.awardsCarousel.options.responsive[0].items = 1;
      this.awardsCarousel.options.responsive[767].items = 1;
      this.awardsCarousel.refresh();
    }
  }

  onAwardClick(award) {
    console.log(award);
  }

}
