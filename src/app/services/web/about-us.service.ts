import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WebAboutUs } from '../../models/web/web-about-us.model';

const aboutUsPage = {
  "aboutUsPage":{
    "slider": [
      {
        "image": {
          "desktop": './assets/images/banner-1.jpg',
          "tablet": './assets/images/banner-movil-1.jpg',
          "movil": './assets/images/banner-movil-1.jpg',
        },
        "description": "La misión de facilitar la calidad de vida"
      },
      {
        "image": {
          "desktop": './assets/images/banner-2.jpg',
          "tablet": './assets/images/banner-movil-2.jpg',
          "movil": './assets/images/banner-movil-2.jpg',
        },
        "description": "La misión de facilitar la calidad de vida"
      }
    ],
    "aboutUsText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    "environmentText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    "readingText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    "mathText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus",
    "awards": [
      {
        "title": 'Carora',
        "image": './assets/images/padrinos/carora.png',
        "image2": './assets/images/padrinos/carora.png',
        "image3": './assets/images/padrinos/carora.png',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        "description2": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
      },
      {
        "title": 'Tarikan',
        "image": './assets/images/padrinos/tarikan.png',
        "image2": './assets/images/padrinos/tarikan.png',
        "image3": './assets/images/padrinos/tarikan.png',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        "description2": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
      },
      {
        "title": 'Familia Gonzalez Bergoderi',
        "image": './assets/images/padrinos/familia-gonzalez-bergoderi.png',
        "image2": './assets/images/padrinos/familia-gonzalez-bergoderi.png',
        "image3": './assets/images/padrinos/familia-gonzalez-bergoderi.png',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        "description2": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
      },
      {
        "title": 'Fundación la Pastora',
        "image": './assets/images/padrinos/fundacion-pastora.png',
        "image2": './assets/images/padrinos/fundacion-pastora.png',
        "image3": './assets/images/padrinos/fundacion-pastora.png',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        "description2": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.'
      }
    ]
  }
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http: HttpClient) { }

  getAboutUsJSON(): Observable<WebAboutUs> {
    return of<WebAboutUs>(aboutUsPage);
  }
}
