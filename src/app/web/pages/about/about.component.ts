import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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

  about = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Sed rhoncus tempus nunc, ut mollis nunc vestibulum nec. Duis sit amet turpis pulvinar erat dictum luctus quis eu leo. Etiam pellentesque elementum laoreet. Aenean neque quam, sodales id mattis quis, venenatis ut orci.",
    "Vivamus facilisis, nulla vitae mollis dignissim, urna metus mollis lorem, quis ullamcorper elit metus ac lectus. Cras non neque ullamcorper, euismod nisl vel, pellentesque leo. Proin non ante pharetra, efficitur tellus eget, aliquet orci. Praesent tincidunt arcu ac lacus gravida sodales. Nulla nec augue ac ex semper vulputate in et metus. Morbi aliquet pellentesque auctor. Nulla facilisi. Nam tellus augue, rutrum quis luctus at, laoreet non massa. Praesent a justo id libero laoreet volutpat. Curabitur dictum imperdiet vehicula."
  ]

  pillars = {
    ambiente: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    lectura: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    matematica: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus."
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

  awardsList = [
    {
      name: 'Carora',
      pageUrl: 'https://google.com',
      image: './assets/images/padrinos/carora.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Tarikan',
      pageUrl: 'https://google.com',
      image: './assets/images/padrinos/tarikan.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Familia Gonzalez Bergoderi',
      pageUrl: 'https://google.com',
      image: './assets/images/padrinos/familia-gonzalez-bergoderi.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    },
    {
      name: 'Fundación la Pastora',
      pageUrl: 'https://google.com',
      image: './assets/images/padrinos/fundacion-pastora.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
    }
  ]

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

  constructor() { }

  ngOnInit() {
  }

}
