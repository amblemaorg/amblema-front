import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const diagnosticText = {
  lecture:
    'Medimos cada trimestre el número de palabras leídas por minuto (PPM). La gráfica muestra el porcentaje alcanzado de PPM frente a la meta del grado que sería el 100 %.',
  math:
    'Medimos cada trimestre la cantidad de multiplicaciones de una cifra resueltas de forma correcta en 2 minutos (M2M). La gráfica muestra el porcentaje alcanzado de M2M frente a la meta del grado que sería el 100 %.',
  logicMath:
    'Medimos cada trimestre la cantidad de problemas de razonamiento lógico-matemático, adecuados a cada nivel, resueltos de forma correcta en 60 minutos (60LM). La gráfica muestra el porcentaje alcanzado de 60LM frente a la meta del grado que sería el 100 %.',
};

const charts = [
  {
    title: 'Diagnóstico de Lectura',
    id: 'wordsPerMinIndex',
    description: diagnosticText.lecture,
    type: 'bar',
    data: [],
    goals: [{ label: 'Valor esperado', value: 100 }],
    testimonial: {
      firstName: 'Óscar A.',
      lastName: 'Pietri P.',
      image: './assets/images/profile-oscar.jpg',
      function: 'Presidente y Co-Fundador',
      description:
        '¿Tienen lectura fluida? Primer paso para facilitar la compresión lectora. Hacemos el diagnóstico del número de palabras leídas por minuto y presentamos el promedio del curso, obteniendo el índice con base a la meta de cada nivel, según estándares internacionales.',
    },
  },
  {
    title: 'Diagnóstico de Multiplicación',
    id: 'multiplicationsPerMinIndex',
    description: diagnosticText.math,
    type: 'bar',
    data: [],
    goals: [{ label: 'Valor esperado', value: 100 }],
    testimonial: {
      firstName: 'Tomás J.',
      lastName: 'Linares B.',
      image: './assets/images/profile-tomas.jpg',
      function: 'Vice-Presidente y Co-Fundador',
      description:
        '¿Cuántas multiplicaciones de una cifra responden correctamente en dos minutos? ¿La meta?: 30 en esos 2 minutos. Dominar las operaciones básicas ayudan a tener mayor agilidad y facilidad para afrontar problemas de razonamiento y lógica. Con la práctica diaria y  juegos creativos de sus docentes se puede lograr el objetivo.',
    },
  },
  {
    title: 'Diagnóstico de Razonamiento Lógico - Matemático',
    id: 'operationsPerMinIndex',
    description: diagnosticText.logicMath,
    type: 'bar',
    data: [],
    goals: [{ label: 'Valor esperado', value: 100 }],
    testimonial: {
      firstName: 'Óscar A.',
      lastName: 'Pietri P.',
      image: './assets/images/profile-oscar.jpg',
      function: 'Presidente y Co-Fundador',
      description:
        'Es todo un reto lograr resolver correctamente problemas de razonamiento lógico-matemáticas en 60 minutos. ¿Cuántos de esos problemas, adecuados a sus edades, pueden resolver los niños? La meta es llegar al menos a 15. Con el apoyo de sus docentes lo podrán lograr.',
    },
  },
];

const schoolsList = {
  schools: [
    {
      lat: 8.60123,
      lng: -67.831185,
      name: 'U.E.E Santo Ángel',
      slug: '001 Escuela_Santa_Maria',
      sponsor: 'Proter & Gamble',
      direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
      staff: 'Información del personal docente, obrero y administrativo',
      coordinator: 'Información del coordinador general',
      enrollment: 'Matrícula estudiantil',
      images: [
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
      ],
      charts: [
        {
          title: 'Diagnóstico de Lectura',
          description: diagnosticText.lecture,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso 1', value: 0.8 },
            { label: '2015-2016', serie: 'Lapso 2', value: 1 },
            { label: '2015-2016', serie: 'Lapso 3', value: 0.8 },
            { label: '2016-2017', serie: 'Lapso 1', value: 0.4 },
            { label: '2016-2017', serie: 'Lapso 2', value: 0.6 },
            { label: '2016-2017', serie: 'Lapso 3', value: 0.4 },
            { label: '2017-2018', serie: 'Lapso 1', value: 0.6 },
            { label: '2017-2018', serie: 'Lapso 2', value: 0.5 },
            { label: '2017-2018', serie: 'Lapso 3', value: 0.2 },
            { label: '2018-2019', serie: 'Lapso 1', value: 0.4 },
            { label: '2018-2019', serie: 'Lapso 2', value: 1 },
            { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
            { label: '2019-2020', serie: 'Lapso 1', value: 0.6 },
            { label: '2019-2020', serie: 'Lapso 2', value: 0.6 },
            { label: '2019-2020', serie: 'Lapso 3', value: 1 },
          ],
          goals: [{ label: 'Valor esperado', value: 100 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso 1', value: 0.3 },
            { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
            { label: '2015-2016', serie: 'Lapso 3', value: 0.3 },
            { label: '2016-2017', serie: 'Lapso 1', value: 0.2 },
            { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
            { label: '2016-2017', serie: 'Lapso 3', value: 0.35 },
            { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
            { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
            { label: '2017-2018', serie: 'Lapso 3', value: 0.5 },
            { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
            { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
            { label: '2018-2019', serie: 'Lapso 3', value: 0.4 },
            { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
            { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
            { label: '2019-2020', serie: 'Lapso 3', value: 0.25 },
          ],
          goals: [{ label: 'Valor esperado', value: 100 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Razonamiento Lógico - Matemático',
          description: diagnosticText.logicMath,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso 1', value: 0.2 },
            { label: '2015-2016', serie: 'Lapso 2', value: 0.15 },
            { label: '2015-2016', serie: 'Lapso 3', value: 0.4 },
            { label: '2016-2017', serie: 'Lapso 1', value: 0.3 },
            { label: '2016-2017', serie: 'Lapso 2', value: 0.4 },
            { label: '2016-2017', serie: 'Lapso 3', value: 0.3 },
            { label: '2017-2018', serie: 'Lapso 1', value: 0.25 },
            { label: '2017-2018', serie: 'Lapso 2', value: 0.3 },
            { label: '2017-2018', serie: 'Lapso 3', value: 0.35 },
            { label: '2018-2019', serie: 'Lapso 1', value: 0.3 },
            { label: '2018-2019', serie: 'Lapso 2', value: 0.2 },
            { label: '2018-2019', serie: 'Lapso 3', value: 0.25 },
            { label: '2019-2020', serie: 'Lapso 1', value: 0.3 },
            { label: '2019-2020', serie: 'Lapso 2', value: 0.4 },
            { label: '2019-2020', serie: 'Lapso 3', value: 0.5 },
          ],
          goals: [{ label: 'Valor esperado', value: 100 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 10,
        silverMedal: 15,
        bronzeMedal: 5,
      },
      activities: {
        withTeachers: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
        specials: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 4',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 5',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 6',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Matemática',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Lectura',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Ambiente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
      ],
      nextActivities: [
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
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
        },
      ],
    },
    {
      lat: 9.20123,
      lng: -70.21063,
      name: 'U.E.E Arturo Michelena',
      slug: 'escuela-arturo-michelena',
      sponsor: 'Proter & Gamble',
      direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
      staff: 'Información del personal docente, obrero y administrativo',
      coordinator: 'Información del coordinador general',
      enrollment: 'Matrícula estudiantil',
      images: [
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
      ],
      charts: [
        {
          title: 'Diagnóstico de Lectura',
          description: diagnosticText.lecture,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 40 },
            { label: '2015-2016', serie: 'Lapso2', value: 10 },
            { label: '2015-2016', serie: 'Lapso3', value: 20 },
            { label: '2016-2017', serie: 'Lapso1', value: 40 },
            { label: '2016-2017', serie: 'Lapso2', value: 30 },
            { label: '2016-2017', serie: 'Lapso3', value: 20 },
            { label: '2017-2018', serie: 'Lapso1', value: 30 },
            { label: '2017-2018', serie: 'Lapso2', value: 50 },
            { label: '2017-2018', serie: 'Lapso3', value: 20 },
            { label: '2018-2019', serie: 'Lapso1', value: 40 },
            { label: '2018-2019', serie: 'Lapso2', value: 10 },
            { label: '2018-2019', serie: 'Lapso3', value: 20 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 30 },
            { label: '2019-2020', serie: 'Lapso3', value: 10 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
            { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
            { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
            { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
          ],
          goals: [{ label: 'Valor esperado: 160', value: 160 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Razonamiento Lógico - Matemático',
          description: diagnosticText.logicMath,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 30 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 },
            { label: '2015-2016', serie: 'Lapso3', value: 30 },
            { label: '2016-2017', serie: 'Lapso1', value: 20 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 },
            { label: '2016-2017', serie: 'Lapso3', value: 35 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 },
            { label: '2017-2018', serie: 'Lapso3', value: 50 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 },
            { label: '2018-2019', serie: 'Lapso3', value: 40 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 },
            { label: '2019-2020', serie: 'Lapso3', value: 25 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 10,
        silverMedal: 15,
        bronzeMedal: 5,
      },
      activities: {
        withTeachers: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
        specials: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 4',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 5',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 6',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Matemática',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Lectura',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Ambiente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
      ],
      nextActivities: [
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
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
        },
      ],
    },
    {
      lat: 9.76432,
      lng: -69.831185,
      name: 'U.E.E Los próceres',
      slug: 'escuela-los-proceres',
      sponsor: 'Proter & Gamble',
      direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
      staff: 'Información del personal docente, obrero y administrativo',
      coordinator: 'Información del coordinador general',
      enrollment: 'Matrícula estudiantil',
      images: [
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
      ],
      charts: [
        {
          title: 'Diagnóstico de Lectura',
          description: diagnosticText.lecture,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 40 },
            { label: '2015-2016', serie: 'Lapso2', value: 10 },
            { label: '2015-2016', serie: 'Lapso3', value: 20 },
            { label: '2016-2017', serie: 'Lapso1', value: 40 },
            { label: '2016-2017', serie: 'Lapso2', value: 30 },
            { label: '2016-2017', serie: 'Lapso3', value: 20 },
            { label: '2017-2018', serie: 'Lapso1', value: 30 },
            { label: '2017-2018', serie: 'Lapso2', value: 50 },
            { label: '2017-2018', serie: 'Lapso3', value: 20 },
            { label: '2018-2019', serie: 'Lapso1', value: 40 },
            { label: '2018-2019', serie: 'Lapso2', value: 10 },
            { label: '2018-2019', serie: 'Lapso3', value: 20 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 30 },
            { label: '2019-2020', serie: 'Lapso3', value: 10 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
            { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
            { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
            { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
          ],
          goals: [{ label: 'Valor esperado: 160', value: 160 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Razonamiento Lógico - Matemático',
          description: diagnosticText.logicMath,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 30 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 },
            { label: '2015-2016', serie: 'Lapso3', value: 30 },
            { label: '2016-2017', serie: 'Lapso1', value: 20 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 },
            { label: '2016-2017', serie: 'Lapso3', value: 35 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 },
            { label: '2017-2018', serie: 'Lapso3', value: 50 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 },
            { label: '2018-2019', serie: 'Lapso3', value: 40 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 },
            { label: '2019-2020', serie: 'Lapso3', value: 25 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 10,
        silverMedal: 15,
        bronzeMedal: 5,
      },
      activities: {
        withTeachers: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
        specials: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 4',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 5',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 6',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Matemática',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Lectura',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Ambiente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
      ],
      nextActivities: [
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
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
        },
      ],
    },
    {
      lat: 9.23953,
      lng: -71.032155,
      name: 'E.P.B Francisco Tovar',
      slug: 'escuela-francisco-tovar',
      sponsor: 'Proter & Gamble',
      direction: 'Aragua, Lara, Carabobo, Yaracuy, Venezuela',
      staff: 'Información del personal docente, obrero y administrativo',
      coordinator: 'Información del coordinador general',
      enrollment: 'Matrícula estudiantil',
      images: [
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
        './assets/images/banner-1.jpg',
        './assets/images/banner-2.jpg',
      ],
      charts: [
        {
          title: 'Diagnóstico de Lectura',
          description: diagnosticText.lecture,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 40 },
            { label: '2015-2016', serie: 'Lapso2', value: 10 },
            { label: '2015-2016', serie: 'Lapso3', value: 20 },
            { label: '2016-2017', serie: 'Lapso1', value: 40 },
            { label: '2016-2017', serie: 'Lapso2', value: 30 },
            { label: '2016-2017', serie: 'Lapso3', value: 20 },
            { label: '2017-2018', serie: 'Lapso1', value: 30 },
            { label: '2017-2018', serie: 'Lapso2', value: 50 },
            { label: '2017-2018', serie: 'Lapso3', value: 20 },
            { label: '2018-2019', serie: 'Lapso1', value: 40 },
            { label: '2018-2019', serie: 'Lapso2', value: 10 },
            { label: '2018-2019', serie: 'Lapso3', value: 20 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 30 },
            { label: '2019-2020', serie: 'Lapso3', value: 10 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 20 * 4 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 * 4 },
            { label: '2015-2016', serie: 'Lapso3', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso1', value: 30 * 4 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 * 4 },
            { label: '2016-2017', serie: 'Lapso3', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 * 4 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 * 4 },
            { label: '2017-2018', serie: 'Lapso3', value: 35 * 4 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 * 4 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 * 4 },
            { label: '2018-2019', serie: 'Lapso3', value: 25 * 4 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 * 4 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 * 4 },
            { label: '2019-2020', serie: 'Lapso3', value: 50 * 4 },
          ],
          goals: [{ label: 'Valor esperado: 160', value: 160 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
        {
          title: 'Diagnóstico de Razonamiento Lógico - Matemático',
          description: diagnosticText.logicMath,
          type: 'bar',
          data: [
            { label: '2015-2016', serie: 'Lapso1', value: 30 },
            { label: '2015-2016', serie: 'Lapso2', value: 15 },
            { label: '2015-2016', serie: 'Lapso3', value: 30 },
            { label: '2016-2017', serie: 'Lapso1', value: 20 },
            { label: '2016-2017', serie: 'Lapso2', value: 40 },
            { label: '2016-2017', serie: 'Lapso3', value: 35 },
            { label: '2017-2018', serie: 'Lapso1', value: 25 },
            { label: '2017-2018', serie: 'Lapso2', value: 30 },
            { label: '2017-2018', serie: 'Lapso3', value: 50 },
            { label: '2018-2019', serie: 'Lapso1', value: 30 },
            { label: '2018-2019', serie: 'Lapso2', value: 20 },
            { label: '2018-2019', serie: 'Lapso3', value: 40 },
            { label: '2019-2020', serie: 'Lapso1', value: 30 },
            { label: '2019-2020', serie: 'Lapso2', value: 40 },
            { label: '2019-2020', serie: 'Lapso3', value: 25 },
          ],
          goals: [{ label: 'Valor esperado: 50', value: 50 }],
          testimonial: {
            firstName: 'Oscar A.',
            lastName: 'Pietri Pacheco',
            image: './assets/images/profile-oscar.jpg',
            function: 'Docente de Matemática',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
          },
        },
      ],
      mathOlympics: {
        enrolled: 145,
        classified: 30,
        goldMedal: 10,
        silverMedal: 15,
        bronzeMedal: 5,
      },
      activities: {
        withTeachers: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
        specials: [
          {
            name: 'Actividad 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 2',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/background-pillar-lectura.jpg',
              './assets/images/background-pillar-ambiente.jpg',
              './assets/images/background-pillar-matematica.jpg',
            ],
          },
          {
            name: 'Actividad 3',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 4',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 5',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
          {
            name: 'Actividad 6',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.',
            images: [
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
              './assets/images/banner-1.jpg',
              './assets/images/banner-2.jpg',
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Matemática',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Lectura',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          firstName: 'Oscar A.',
          lastName: 'Pietri Pacheco',
          image: './assets/images/profile-oscar.jpg',
          function: 'Docente de Ambiente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
      ],
      nextActivities: [
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
        },
        {
          title: 'Título de la actividad',
          date: '20/03/2020',
          place: 'Barquisimeto',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
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
        },
      ],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor() {}

  getSchoolsJSON(): Observable<any> {
    return of<any>(schoolsList);
  }

  getSchoolBySlugJSON(slug): Observable<any> {
    let school;
    school = schoolsList.schools.filter((item) => item.slug === slug)[0];
    return of<any>(school);
  }

  getChartsTemplateJSON(): Observable<any> {
    return of<any>(charts);
  }
}
