import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WebCoordinator } from '../../models/web/web-coordinator.model';

const coordinatorPage = {
  "coordinatorPage": {
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
        "function": "Coordinador Principal",
        "image": "http://localhost:10505/resources/images/5e30fad45d82a93ec2cf34cb.png",
        // "image": "./assets/images/profile-leena.jpg",
        "lastName": "Soteldo"
      },
      {
        "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        "firstName": "Greudys",
        "function": "Coordinador Principal",
        "image": "http://localhost:10505/resources/images/5e30fad45d82a93ec2cf34cc.png",
        // "image": "./assets/images/profile-leena.jpg",
        "lastName": "Godoy"
      },
      {
        "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        "firstName": "Franklin",
        "function": "Coordinador principal",
        "image": "http://157.245.131.248:10506//resources/images/webcontent/5e591b0d9d2b5c3b662bb341.jpg",
        // "image": "./assets/images/profile-leena.jpg",
        "lastName": "Perdomo"
      },
      {
        "description": "Quiero agradecer a los maestros su compromiso, su coraje, la pasión; con la que están educando a nuestros niños.... Nunca olviden que ustedes son agentes de cambio",
        "firstName": "José Alberto",
        "function": "Coordinador Principal",
        "image": "http://157.245.131.248:10506//resources/images/webcontent/5e591b0d9d2b5c3b662bb342.jpg",
        // "image": "./assets/images/profile-leena.jpg",
        "lastName": "Guerrero"
      }
    ]
  }
}

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinatorsJSON(): Observable<WebCoordinator> {
    return of<WebCoordinator>(coordinatorPage);
  }
}
