import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WebSponsor} from '../../models/web/web-sponsor.model';

const sponsorPage = {
  "sponsorPage": {
      "backgroundImage": "http://157.245.131.248:10506//resources/images/webcontent/5e591b0d9d2b5c3b662bb343.jpg",
      "steps": [
        "Tener interés por aportar recursos a la formación de nuestros niños venezolanos.",
        "Estén dispuestos a seguir los lineamientos de aplicación de Amb-Le-Ma.",
        "Requieran poner en práctica la responsabilidad social de la empresa que representan.",
        "Estén dispuestos a ubicar escuelas en su rango de alcance en la que pueda aplicarse la herramienta Amb-Le-Ma.",
        "Estén dispuestos a invertir mínimo tiempo en hacer enlace con las autoridades educativas y directivos de las escuelas que deseen intervenir.",
        "Dispongan los recursos y tiempo necesarios.",
        "Tengan la disposición de aumentar su grado de satisfacción personal, familiar y/o empresarial, al ver resultados positivos en la mejora de la calidad educativa de muchos docentes y niños en escuelas con escasos recursos económicos."
      ],
      "testimonials": [
        {
          "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
          "firstName": "Stephanie",
          "function": "Padrino Principal",
          // "image": "http://localhost:10505/resources/images/5e30fad45d82a93ec2cf34cb.png",
          "image": "./assets/images/profile-leena.jpg",
          "lastName": "Soteldo"
        },
        {
          "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
          "firstName": "Greudys",
          "function": "Padrino Principal",
          //"image": "http://localhost:10505/resources/images/5e30fad45d82a93ec2cf34cc.png",
          "image": "./assets/images/profile-oscar.jpg",
          "lastName": "Godoy"
        },
        {
          "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
          "firstName": "Franklin",
          "function": "Padrino principal",
          // "image": "http://157.245.131.248:10506//resources/images/webcontent/5e591b0d9d2b5c3b662bb341.jpg",
          "image": "./assets/images/profile-oscar.jpg",
          "lastName": "Perdomo"
        },
        {
          "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
          "firstName": "José Alberto",
          "function": "Padrino Principal",
          //"image": "http://157.245.131.248:10506//resources/images/webcontent/5e591b0d9d2b5c3b662bb342.jpg",
          "image": "./assets/images/profile-oscar.jpg",
          "lastName": "Guerrero"
        }
      ],
      sponsors: [
        {
          fullName: 'Guaquira',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/guaquira.png',
        },
        {
          fullName: 'Hacienda Sicarigua',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/hacienda-sicarigua.png',
        },
        {
          fullName: 'LAPL',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/lapl.png',
        },
        {
          fullName: 'Global CyD',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/global-cyd.png',
        },
        {
          fullName: 'Fundación la Pastora',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/fundacion-pastora.png',
        },
        {
          fullName: 'Tarikan',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/tarikan.png',
        },
        {
          fullName: 'Vagos',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/vagos.png',
        },
        {
          fullName: 'Carora',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/carora.png',
        },
        {
          fullName: 'Familia Gonzalez Bergoderi',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/familia-gonzalez-bergoderi.png',
        },
        {
          fullName: 'Familia Malela',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/familia-malela.png',
        },
        {
          fullName: 'Granja Boraure',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/granja-boraure.png',
        },
        {
          fullName: 'Pinturas',
          pageUrl: 'https://google.com',
          image: './assets/images/padrinos/pinturas.png',
        }
      ]
  }
}


@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private http: HttpClient) { }

  getSponsorsJSON(): Observable<WebSponsor> {
    return of<WebSponsor>(sponsorPage);
  }
}
