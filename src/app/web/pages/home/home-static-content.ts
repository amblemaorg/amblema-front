const diagnosticText = {
  lecture:
    'Medimos cada trimestre el número de palabras leídas por minuto (PPM). La gráfica muestra el porcentaje alcanzado de PPM frente a la meta del grado que sería el 100 %.',
  math:
    'Medimos cada trimestre la cantidad de multiplicaciones de una cifra resueltas de forma correcta en 2 minutos (M2M). La gráfica muestra el porcentaje alcanzado de M2M frente a la meta del grado que sería el 100 %.',
  logicMath:
    'Medimos cada trimestre la cantidad de problemas de razonamiento lógico-matemático, adecuados a cada nivel, resueltos de forma correcta en 60 minutos (60LM). La gráfica muestra el porcentaje alcanzado de 60LM frente a la meta del grado que sería el 100 %.',
  mathOlympics:
    'Resultados históricos de las Olimpíadas de Matemáticas (Fase Regional y Nacional).',
  readingOlympics:
    'Resultados históricos de las Olimpíadas de Lengua (Fase Regional y Nacional).',
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
          data: [],
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
          id: 'multiplicationsPerMinIndex',
          title: 'Diagnóstico de Multiplicación',
          description: diagnosticText.math,
          type: 'bar',
          data: [],
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
          id: 'operationsPerMinIndex',
          title: 'Diagnóstico de Razonamiento Lógico Matemático',
          description: diagnosticText.logicMath,
          type: 'bar',
          data: [],
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
          id: 'mathOlympics',
          title: 'Olimpíada de Matemáticas',
          description: diagnosticText.mathOlympics,
          type: 'bar',
          data: [],
          goals: [],
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
          id: 'readingOlympics',
          title: 'Olimpíada de Lengua',
          description: diagnosticText.readingOlympics,
          type: 'bar',
          data: [],
          goals: [],
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
