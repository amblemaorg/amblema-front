import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SponsorService } from '../../../services/web/sponsors.service';
import { SponsorPage } from '../../../models/web/web-sponsor.model';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})

export class SponsorsComponent implements OnInit {
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
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 1000,
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
    // const pop = window.open(url); // opens in new tab on most browsers
    // window.opener.focus(); // no longer works in most modern browsers
    // pop.focus();
  }
}
