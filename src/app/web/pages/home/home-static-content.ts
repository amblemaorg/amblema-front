const diagnosticText = {
  lecture:
    'Medimos cada trimestre el número de palabras leídas por minuto (PPM). La gráfica muestra el promedio del índice del número de PPM frente a la meta por grado. Ejemplo: 0.45 significa que se está al 45 % respecto a la meta.',
  math:
    'Medimos cada trimestre la cantidad de multiplicaciones de una cifra resueltas de forma correcta en 2 minutos (M2M). La gráfica muestra el promedio del índice del número de M2M frente a la meta por grado. Ejemplo: 0.33 significa que se está al 33 % respecto a la meta.',
  logicMath:
    'Medimos cada trimestre la cantidad de problemas de razonamiento lógico-matemático, adecuados a cada nivel, resueltos de forma correcta en 60 minutos (60LM). La gráfica muestra el promedio del índice del número de 60LM frente a la meta por grado. Ejemplo: 0.63 significa que se está al 63 % respecto a la meta.',
};
export const HOME_CONTENT = {
  homePage: {
    slider: [
      {
        image: './assets/images/banner-1.jpg',
        description: 'La misión de facilitar la calidad de vida',
      },
      {
        image: './assets/images/banner-2.jpg',
        description: 'La misión de facilitar la calidad de vida',
      },
    ],
    aboutUsText:
      'Amblema es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad. Con aportes de empresas y particulares que asumen una eficaz inversión social.',
    environmentText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.',
    readingText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.',
    mathText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus',
    statistics: {
      totalSchools: 44,
      totalTeachers: 300,
      totalStudents: 1200,
      totalSponsors: 22,
      charts: [
        {
          id: 'wordsPerMinIndex',
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
          goals: [{ label: 'Valor esperado', value: 1 }],
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
          id: 'multiplicationsPerMinIndex',
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
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
          goals: [{ label: 'Valor esperado', value: 1 }],
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
          id: 'operationsPerMinIndex',
          title: 'Diagnóstico de Razonamiento Lógico - Matemático',
          description: diagnosticText.logicMath,
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
          goals: [{ label: 'Valor esperado', value: 1 }],
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
    },
    testimonials: [
      {
        firstName: 'Oscar A.',
        lastName: 'Pietri Pacheco',
        image: './assets/images/profile-oscar.jpg',
        function: 'Presidente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
      },
      {
        firstName: 'Oscar A.',
        lastName: 'Pietri Pacheco',
        image: './assets/images/profile-oscar.jpg',
        function: 'Presidente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
      },
      {
        firstName: 'Oscar A.',
        lastName: 'Pietri Pacheco',
        image: './assets/images/profile-oscar.jpg',
        function: 'Presidente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
      },
      {
        firstName: 'Oscar A.',
        lastName: 'Pietri Pacheco',
        image: './assets/images/profile-oscar.jpg',
        function: 'Presidente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
      },
      {
        firstName: 'Oscar A.',
        lastName: 'Pietri Pacheco',
        image: './assets/images/profile-oscar.jpg',
        function: 'Presidente',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.',
      },
    ],
  },
};
