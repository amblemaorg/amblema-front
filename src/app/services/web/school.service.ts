import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const schoolsList = {
  schools: [
    {
      lat: 8.60123,
      lng: -67.831185,
      name: 'U.E.E Santo Ángel',
      slug: 'escuela-santo-angel',
      sponsor: "Proter & Gamble",
      direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
      staff: "Información del personal docente, obrero y administrativo",
      coordinator: "Información del coordinador general",
      enrollment: "Matrícula estudiantil",
      activities: [
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        }
      ],
      "testimonials": [
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Matemática",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Lectura",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Ambiente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
      otherSchools: [
        {
          name: 'U.E.E Arturo Michelena',
          slug: 'escuela-arturo-michelena',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'U.E.E Los próceres',
          slug: 'escuela-los-proceres',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'E.P.B Francisco Tovar',
          slug: 'escuela-francisco-tovar',
          image: './assets/images/background-pillar-ambiente.jpg',
        }
      ]
    },
    {
      lat: 9.20123,
      lng: -70.210630,
      name: 'U.E.E Arturo Michelena',
      slug: 'escuela-arturo-michelena',
      sponsor: "Proter & Gamble",
      direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
      staff: "Información del personal docente, obrero y administrativo",
      coordinator: "Información del coordinador general",
      enrollment: "Matrícula estudiantil",
      activities: [],
      "testimonials":[
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Matemática",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Lectura",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Ambiente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
      otherSchools: [
        {
          name: 'U.E.E Santo Ángel',
          slug: 'escuela-santo-angel',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'U.E.E Los próceres',
          slug: 'escuela-los-proceres',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'E.P.B Francisco Tovar',
          slug: 'escuela-francisco-tovar',
          image: './assets/images/background-pillar-ambiente.jpg',
        }
      ]
    },
    {
      lat: 9.76432,
      lng: -69.831185,
      name: 'U.E.E Los próceres',
      slug: 'escuela-los-proceres',
      sponsor: "Proter & Gamble",
      direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
      staff: "Información del personal docente, obrero y administrativo",
      coordinator: "Información del coordinador general",
      enrollment: "Matrícula estudiantil",
      activities: [],
      "testimonials":[
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Matemática",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Lectura",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Ambiente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
      otherSchools: [
        {
          name: 'U.E.E Arturo Michelena',
          slug: 'escuela-arturo-michelena',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'U.E.E Santo Ángel ',
          slug: 'escuela-santo-angel',
          image: './assets/images/background-pillar-ambiente.jpg',
        },
        {
          name: 'E.P.B Francisco Tovar',
          slug: 'escuela-francisco-tovar',
          image: './assets/images/background-pillar-ambiente.jpg',
        }
      ]
    },
    {
      lat: 9.23953,
      lng: -71.032155,
      name: 'E.P.B Francisco Tovar',
      slug: 'escuela-francisco-tovar',
      sponsor: "Proter & Gamble",
      direction: "Aragua, Lara, Carabobo, Yaracuy, Venezuela",
      staff: "Información del personal docente, obrero y administrativo",
      coordinator: "Información del coordinador general",
      enrollment: "Matrícula estudiantil",
      activities: [],
      "testimonials":[
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Matemática",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Lectura",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          "firstName": "Oscar A.",
          "lastName": "Pietri Pacheco",
          "image": "./assets/images/profile-oscar.jpg",
          "function": "Docente de Ambiente",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
      otherSchools: [
        {
          name: 'U.E.E Arturo Michelena',
          slug: 'escuela-arturo-michelena',
          image: './assets/images/background-pillar-ambiente.jpg'
        },
        {
          name: 'U.E.E Los próceres',
          slug: 'escuela-los-proceres',
          image: './assets/images/background-pillar-ambiente.jpg'
        },
        {
          name: 'U.E.E Santo Ángel ',
          slug: 'escuela-santo-angel',
          image: './assets/images/background-pillar-ambiente.jpg'
        }
      ]
    },
  ],
}


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchoolsJSON(): Observable<any> {
    return of<any>(schoolsList);
  }

  getSchoolBySlugJSON(slug): Observable<any> {
    let school;
    school = schoolsList.schools.filter(item => item.slug === slug)[0];
    return of<any>(school);
  }
}
