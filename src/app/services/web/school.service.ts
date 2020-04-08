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
      images: [
        "./assets/images/banner-1.jpg",
        "./assets/images/banner-2.jpg",
        "./assets/images/banner-1.jpg",
        "./assets/images/banner-2.jpg",
      ],
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          ],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 10,
        silverMedal: 15,
        bronzeMedal: 5
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          ],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
        },
      ],
      mathOlympics: {
        enrolled: 105,
        classified: 40,
        goldMedal: 0,
        silverMedal: 10,
        bronzeMedal: 5
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
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
      images: [
        "./assets/images/banner-1.jpg",
        "./assets/images/banner-2.jpg",
        "./assets/images/banner-1.jpg",
        "./assets/images/banner-2.jpg",
      ],
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          ],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
        },
      ],
      mathOlympics: {
        enrolled: 85,
        classified: 20,
        goldMedal: 0,
        silverMedal: 1,
        bronzeMedal: 8
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
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
      images: [],
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
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
          ],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 0,
        silverMedal: 0,
        bronzeMedal: 0
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum."
        },
      ],
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
