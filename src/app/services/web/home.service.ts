import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WebHome } from '../../models/web/web-home.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const homePage = {
  "homePage":{
    "slider": [
      {
        "image": {
          "desktop": "./assets/images/banner-1.jpg",
          "tablet": "./assets/images/banner-movil-1.jpg",
          "movil": "./assets/images/banner-movil-1.jpg",
        },
        "description": "La misión de facilitar la calidad de vida"
      },
      {
        "image": {
          "desktop": "./assets/images/banner-2.jpg",
          "tablet": "./assets/images/banner-movil-2.jpg",
          "movil": "./assets/images/banner-movil-2.jpg",
        },
        "description": "La misión de facilitar la calidad de vida"
      }
    ],
     "aboutUsText": "Amblema es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad. Con aportes de empresas y particulares que asumen una eficaz inversión social.",
     "environmentText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
     "readingText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
     "mathText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus",
     "testimonials":[
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Presidente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Presidente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Presidente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Presidente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Presidente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        }
    ]
  }
}


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getHomeData(): Observable<any> {
    //console.log(endpoints);
    return this.http.get<any>("http://testing.binaural.com.ve:10506/webcontent?page=homePage");
    // console.log(homePageData);
    // return homePageData;
  }

  getHomeJSON(): Observable<WebHome> {
    return of<WebHome>(homePage);
  }
}
