import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.scss']
})
export class CoordinatorsComponent implements OnInit {
  coverData = {
    slides: [
      {
        images: {
          desktop: './assets/images/banner-2.jpg',
          tablet: './assets/images/banner-movil-2.jpg',
          movil: './assets/images/banner-movil-2.jpg',
        }
      }
    ]
  }

  coordinatorsData = [
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Coordinador',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Coordinador',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Coordinador',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    }
  ]

  customOptions: OwlOptions = {
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

  constructor() { }

  ngOnInit() {
  }

}
