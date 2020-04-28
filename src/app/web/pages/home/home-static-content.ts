export const HOME_CONTENT = {
  homePage: {
    slider: [
      {
        image: {
          desktop: "./assets/images/banner-1.jpg",
          tablet: "./assets/images/banner-movil-1.jpg",
          movil: "./assets/images/banner-movil-1.jpg",
        },
        description: "La misión de facilitar la calidad de vida",
      },
      {
        image: {
          desktop: "./assets/images/banner-2.jpg",
          tablet: "./assets/images/banner-movil-2.jpg",
          movil: "./assets/images/banner-movil-2.jpg",
        },
        description: "La misión de facilitar la calidad de vida",
      },
    ],
    aboutUsText:
      "Amblema es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad. Con aportes de empresas y particulares que asumen una eficaz inversión social.",
    environmentText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    readingText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus.",
    mathText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vehicula commodo. Etiam sed efficitur lacus. Vivamus sit amet maximus ipsum. Vivamus eget dolor ut lectus faucibus tempus a sit amet lectus. Nam vel felis et nisi suscipit varius. Ut hendrerit ligula ac tristique faucibus",
    statistics: {
      totalSchools: 44,
      totalTeachers: 300,
      totalStudents: 1200,
      totalSponsors: 22,
      charts: [
        {
          title: "Diagnóstico de lectura",
          description:
            "Medimos trimestralmente el número de palabras leidas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo.",
          type: "bar",
          data: [
            { label: "2015-2016", serie: "Lapso1", value: 40 },
            { label: "2015-2016", serie: "Lapso2", value: 10 },
            { label: "2015-2016", serie: "Lapso3", value: 20 },
            { label: "2016-2017", serie: "Lapso1", value: 40 },
            { label: "2016-2017", serie: "Lapso2", value: 30 },
            { label: "2016-2017", serie: "Lapso3", value: 20 },
            { label: "2017-2018", serie: "Lapso1", value: 30 },
            { label: "2017-2018", serie: "Lapso2", value: 50 },
            { label: "2017-2018", serie: "Lapso3", value: 20 },
            { label: "2018-2019", serie: "Lapso1", value: 40 },
            { label: "2018-2019", serie: "Lapso2", value: 10 },
            { label: "2018-2019", serie: "Lapso3", value: 20 },
            { label: "2019-2020", serie: "Lapso1", value: 30 },
            { label: "2019-2020", serie: "Lapso2", value: 30 },
            { label: "2019-2020", serie: "Lapso3", value: 10 },
          ],
          goals: [{ label: "Valor esperado: 50", value: 50 }],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
          },
        },
        {
          title: "Diagnóstico de multiplicación",
          description:
            "Medimos cada trimestre cuantas multiplicaciones de una cifra son contestadas correctamente en 2 minutos. La gráfica muestra el índice de resultados en base a la meta por grado. M2M. Multiplicaciónes en 2 minutos",
          type: "bar",
          data: [
            { label: "2015-2016", serie: "Lapso1", value: 20 * 4 },
            { label: "2015-2016", serie: "Lapso2", value: 15 * 4 },
            { label: "2015-2016", serie: "Lapso3", value: 40 * 4 },
            { label: "2016-2017", serie: "Lapso1", value: 30 * 4 },
            { label: "2016-2017", serie: "Lapso2", value: 40 * 4 },
            { label: "2016-2017", serie: "Lapso3", value: 30 * 4 },
            { label: "2017-2018", serie: "Lapso1", value: 25 * 4 },
            { label: "2017-2018", serie: "Lapso2", value: 30 * 4 },
            { label: "2017-2018", serie: "Lapso3", value: 35 * 4 },
            { label: "2018-2019", serie: "Lapso1", value: 30 * 4 },
            { label: "2018-2019", serie: "Lapso2", value: 20 * 4 },
            { label: "2018-2019", serie: "Lapso3", value: 25 * 4 },
            { label: "2019-2020", serie: "Lapso1", value: 30 * 4 },
            { label: "2019-2020", serie: "Lapso2", value: 40 * 4 },
            { label: "2019-2020", serie: "Lapso3", value: 50 * 4 },
          ],
          goals: [{ label: "Valor esperado: 160", value: 160 }],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
          },
        },
        {
          title: "Diagnóstico de razonamiento Lógico - Matemático",
          description:
            "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo.",
          type: "bar",
          data: [
            { label: "2015-2016", serie: "Lapso1", value: 30 },
            { label: "2015-2016", serie: "Lapso2", value: 15 },
            { label: "2015-2016", serie: "Lapso3", value: 30 },
            { label: "2016-2017", serie: "Lapso1", value: 20 },
            { label: "2016-2017", serie: "Lapso2", value: 40 },
            { label: "2016-2017", serie: "Lapso3", value: 35 },
            { label: "2017-2018", serie: "Lapso1", value: 25 },
            { label: "2017-2018", serie: "Lapso2", value: 30 },
            { label: "2017-2018", serie: "Lapso3", value: 50 },
            { label: "2018-2019", serie: "Lapso1", value: 30 },
            { label: "2018-2019", serie: "Lapso2", value: 20 },
            { label: "2018-2019", serie: "Lapso3", value: 40 },
            { label: "2019-2020", serie: "Lapso1", value: 30 },
            { label: "2019-2020", serie: "Lapso2", value: 40 },
            { label: "2019-2020", serie: "Lapso3", value: 25 },
          ],
          goals: [{ label: "Valor esperado: 50", value: 50 }],
          testimonial: {
            firstName: "Oscar A.",
            lastName: "Pietri Pacheco",
            image: "./assets/images/profile-oscar.jpg",
            function: "Docente de Matemática",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
          },
        },
      ],
    },
    testimonials: [
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Presidente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Presidente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Presidente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Presidente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
      {
        firstName: "Oscar A.",
        lastName: "Pietri Pacheco",
        image: "./assets/images/profile-oscar.jpg",
        function: "Presidente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
      },
    ],
  },
};
