import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-godparents',
  templateUrl: './godparents.component.html',
  styleUrls: ['./godparents.component.scss']
})

export class GodparentsComponent implements OnInit {
  coverData = {
    slides: [
      {
        images: {
          desktop: './assets/images/banner-1.jpg',
          tablet: './assets/images/banner-movil-1.jpg',
          movil: './assets/images/banner-movil-1.jpg',
        }
      }
    ]
  }

  godparentsData = [
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Padrino',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Padrino',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Fernanda A. Pietri Perez',
      pageUrl: 'https://google.com',
      image: './assets/images/profile-leena.jpg',
      role: 'Padrino',
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
    navSpeed: 2000,
  }

  constructor() { }

  ngOnInit() {
  }

}
