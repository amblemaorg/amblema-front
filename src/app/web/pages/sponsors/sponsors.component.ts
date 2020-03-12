import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SponsorService } from '../../../services/web/sponsors.service';
import { SponsorPage } from '../../../models/web/web-sponsor.model';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})

export class SponsorsComponent implements OnInit {
  @ViewChild('sponsorsCarousel', { static: true }) sponsorsCarousel: OwlCarousel;
  landscape = window.innerWidth > window.innerHeight;
  coverData = {
    slides: [
      {
        image: {
          desktop: './assets/images/banner-1.jpg',
          tablet: './assets/images/banner-movil-1.jpg',
          movil: './assets/images/banner-movil-1.jpg',
        }
      }
    ]
  }

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
        items: 1
      }
    }
  }

  sponsorsOptions: OwlOptions = {
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
        items: 2
      },
      [767 * 0.8]: {
        items: 3,
      },
      [1279 * 0.8]: {
        items: 4
      }
    }
  }

  sponsorsPageData: SponsorPage;

  constructor(
    private http: HttpClient,
    private sponsorService: SponsorService
  ) { }

  ngOnInit() {
    this.getSponsorsData();
  }

  getSponsorsData() {
    //this.sponsorService.getSponsorsData()
    this.sponsorService.getSponsorsJSON()
        .subscribe(data => {
          // console.log(data)
          this.sponsorsPageData = data.sponsorPage;
        });
  }

  onSponsorClick(url) {
    window.open(url);
  }

  @HostListener('window:resize', [''])
  onResize() {
    this.landscape = window.innerWidth > window.innerHeight;
    if (this.landscape) {
      this.sponsorsCarousel.options.responsive[0].items = 3;
      this.sponsorsCarousel.refresh();
    }
    else {
      this.sponsorsCarousel.options.responsive[0].items = 2;
      this.sponsorsCarousel.refresh();
    }
  }
}
