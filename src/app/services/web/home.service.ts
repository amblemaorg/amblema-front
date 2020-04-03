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
    aboutUsText: "Amblema es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad. Con aportes de empresas y particulares que asumen una eficaz inversión social.",
    environmentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    readingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    mathText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus",
    statistics: {
      totalSchools: 28,
      totalChildren: 4800,
      totalTeachers: 300,
      charts: [
        {
          title: 'Diagnóstico de lectura',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 10 },
            { label: 'Lapso 3 (2017-2018)', value: 20 },
            { label: 'Lapso 1 (2018-2019)', value: 40 },
            { label: 'Lapso 2 (2018-2019)', value: 30 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 50 },
            { label: 'Lapso 2 (2017-2018)', value: 10 },
            { label: 'Lapso 3 (2017-2018)', value: 20 },
            { label: 'Lapso 1 (2018-2019)', value: 40 },
            { label: 'Lapso 2 (2018-2019)', value: 30 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 50 },
            { label: 'Lapso 2 (2017-2018)', value: 10 },
          ],
          goals: [
            { label: 'Valor esperado: 50', value: 50 }
          ],
        },
        {
          title: 'Palabras por minuto',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 100 },
            { label: 'Lapso 3 (2017-2018)', value: 90  },
            { label: 'Lapso 1 (2018-2019)', value: 120 },
            { label: 'Lapso 2 (2018-2019)', value: 120 },
            { label: 'Lapso 3 (2018-2019)', value: 110 },
            { label: 'Lapso 1 (2019-2020)', value: 130 },
            { label: 'Lapso 2 (2019-2020)', value: 150 },
          ],
          goals: [
            { label: 'Valor esperado: 160', value: 160 }
          ],
        },
        {
          title: 'Diagnóstico de matemática',
          type: 'line',
          data: [
            { label: 'Lapso 2 (2017-2018)', value: 20 },
            { label: 'Lapso 3 (2017-2018)', value: 30 },
            { label: 'Lapso 1 (2018-2019)', value: 15 },
            { label: 'Lapso 2 (2018-2019)', value: 20 },
            { label: 'Lapso 3 (2018-2019)', value: 20 },
            { label: 'Lapso 1 (2019-2020)', value: 30 },
            { label: 'Lapso 2 (2019-2020)', value: 40 },
          ],
          goals: [
            { label: 'Valor esperado: 50', value: 50 }
          ]
        },
      ]
    },
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
