import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coverData = {
    tagline: 'La misión de facilitar la calidad de vida',
    coverImage: './assets/images/cover-simbolos.png',
    slides: [
      {
        images: {
          desktop: './assets/images/banner-1.jpg',
          tablet: './assets/images/banner-movil-1.jpg',
          movil: './assets/images/banner-movil-1.jpg',
        }
      },
      {
        images: {
          desktop: './assets/images/banner-2.jpg',
          tablet: './assets/images/banner-movil-2.jpg',
          movil: './assets/images/banner-movil-2.jpg',
        }
      }
    ]
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

  foundersData = [
    {
      name: 'Oscar A. Pietri Pacheco',
      //pageUrl: 'https://google.com',
      image: './assets/images/profile-oscar.jpg',
      role: 'Presidente',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Oscar A. Pietri Pacheco',
      //pageUrl: 'https://google.com',
      image: './assets/images/profile-oscar.jpg',
      role: 'Presidente',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Oscar A. Pietri Pacheco',
      //pageUrl: 'https://google.com',
      image: './assets/images/profile-oscar.jpg',
      role: 'Presidente',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Oscar A. Pietri Pacheco',
      //pageUrl: 'https://google.com',
      image: './assets/images/profile-oscar.jpg',
      role: 'Presidente',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Oscar A. Pietri Pacheco',
      //pageUrl: 'https://google.com',
      image: './assets/images/profile-oscar.jpg',
      role: 'Presidente',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    }
  ]

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
      [767 * 0.8]: {
        items: 3
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
