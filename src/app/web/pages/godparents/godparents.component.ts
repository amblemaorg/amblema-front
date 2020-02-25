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

  testimonialsData = [
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

  coverCarouselOptions: OwlOptions = {
    autoplay: true,
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 3000,
  }

  godparentsData = [
    {
      name: 'Guaquira',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/guaquira.webp',
    },
    {
      name: 'Hacienda Sicarigua',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/hacienda-sicarigua.webp',
    },
    {
      name: 'LAPL',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/lapl.webp',
    },
    {
      name: 'Global CyD',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/global-cyd.webp',
    },
    {
      name: 'Fundación la Pastora',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/fundacion-pastora.webp',
    },
    {
      name: 'Tarikan',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/tarikan.webp',
    },
    {
      name: 'Vagos',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/vagos.webp',
    },
    {
      name: 'Carora',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/carora.webp',
    },
    {
      name: 'Familia Gonzalez Bergoderi',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/familia-gonzalez-bergoderi.webp',
    },
    {
      name: 'Familia Malela',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/familia-malela.webp',
    },
    {
      name: 'Granja Boraure',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/granja-boraure.webp',
    },
    {
      name: 'Pinturas',
      // pageUrl: 'https://google.com',
      image: './assets/images/padrinos/pinturas.webp',
    }
  ]

  godparentsOptions: OwlOptions = {
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

  constructor() { }

  ngOnInit() {
  }

}
