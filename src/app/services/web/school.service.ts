import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const schoolsList = {
  schools: [
    {
      lat: 8.60123,
      lng: -67.831185,
      name: "U.E.E Santo Ángel",
      slug: "escuela-santo-angel",
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
          title: "Diagnóstico de lectura",
          description:
            "Diagnóstico de lectura fluida: Medimos trimestralmente el número de palabras leidas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo. PPM. Palabras por minuto.",
          type: "bar",
          data: [
            { label: "2015-2016", serie: "Lapso 1", value: 0.8 },
            { label: "2015-2016", serie: "Lapso 2", value: 1 },
            { label: "2015-2016", serie: "Lapso 3", value: 0.8 },
            { label: "2016-2017", serie: "Lapso 1", value: 0.4 },
            { label: "2016-2017", serie: "Lapso 2", value: 0.6 },
            { label: "2016-2017", serie: "Lapso 3", value: 0.4 },
            { label: "2017-2018", serie: "Lapso 1", value: 0.6 },
            { label: "2017-2018", serie: "Lapso 2", value: 0.5 },
            { label: "2017-2018", serie: "Lapso 3", value: 0.2 },
            { label: "2018-2019", serie: "Lapso 1", value: 0.4 },
            { label: "2018-2019", serie: "Lapso 2", value: 1 },
            { label: "2018-2019", serie: "Lapso 3", value: 0.4 },
            { label: "2019-2020", serie: "Lapso 1", value: 0.6 },
            { label: "2019-2020", serie: "Lapso 2", value: 0.6 },
            { label: "2019-2020", serie: "Lapso 3", value: 1 },
          ],
          goals: [{ label: "Valor esperado", value: 1 }],
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
            { label: "2015-2016", serie: "Lapso 1", value: 0.3 },
            { label: "2015-2016", serie: "Lapso 2", value: 0.15 },
            { label: "2015-2016", serie: "Lapso 3", value: 0.3 },
            { label: "2016-2017", serie: "Lapso 1", value: 0.2 },
            { label: "2016-2017", serie: "Lapso 2", value: 0.4 },
            { label: "2016-2017", serie: "Lapso 3", value: 0.35 },
            { label: "2017-2018", serie: "Lapso 1", value: 0.25 },
            { label: "2017-2018", serie: "Lapso 2", value: 0.3 },
            { label: "2017-2018", serie: "Lapso 3", value: 0.5 },
            { label: "2018-2019", serie: "Lapso 1", value: 0.3 },
            { label: "2018-2019", serie: "Lapso 2", value: 0.2 },
            { label: "2018-2019", serie: "Lapso 3", value: 0.4 },
            { label: "2019-2020", serie: "Lapso 1", value: 0.3 },
            { label: "2019-2020", serie: "Lapso 2", value: 0.4 },
            { label: "2019-2020", serie: "Lapso 3", value: 0.25 },
          ],
          goals: [{ label: "Valor esperado", value: 1 }],
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
            "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo. LM30: Lógica - Matemática en 30 minutos.",
          type: "bar",
          data: [
            { label: "2015-2016", serie: "Lapso 1", value: 0.2 },
            { label: "2015-2016", serie: "Lapso 2", value: 0.15 },
            { label: "2015-2016", serie: "Lapso 3", value: 0.4 },
            { label: "2016-2017", serie: "Lapso 1", value: 0.3 },
            { label: "2016-2017", serie: "Lapso 2", value: 0.4 },
            { label: "2016-2017", serie: "Lapso 3", value: 0.3 },
            { label: "2017-2018", serie: "Lapso 1", value: 0.25 },
            { label: "2017-2018", serie: "Lapso 2", value: 0.3 },
            { label: "2017-2018", serie: "Lapso 3", value: 0.35 },
            { label: "2018-2019", serie: "Lapso 1", value: 0.3 },
            { label: "2018-2019", serie: "Lapso 2", value: 0.2 },
            { label: "2018-2019", serie: "Lapso 3", value: 0.25 },
            { label: "2019-2020", serie: "Lapso 1", value: 0.3 },
            { label: "2019-2020", serie: "Lapso 2", value: 0.4 },
            { label: "2019-2020", serie: "Lapso 3", value: 0.5 },
          ],
          goals: [{ label: "Valor esperado", value: 1 }],
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
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
        specials: [
          {
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 4",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 5",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 6",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      nextActivities: [
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      otherSchools: [
        {
          name: "U.E.E Arturo Michelena",
          slug: "escuela-arturo-michelena",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "U.E.E Los próceres",
          slug: "escuela-los-proceres",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "E.P.B Francisco Tovar",
          slug: "escuela-francisco-tovar",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
      ],
    },
    {
      lat: 9.20123,
      lng: -70.21063,
      name: "U.E.E Arturo Michelena",
      slug: "escuela-arturo-michelena",
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
          title: "Diagnóstico de lectura",
          description:
            "Diagnóstico de lectura fluida: Medimos trimestralmente el número de palabras leidas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo. PPM. Palabras por minuto.",
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
            "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo. LM30: Lógica - Matemática en 30 minutos.",
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
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
        specials: [
          {
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 4",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 5",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 6",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      nextActivities: [
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      otherSchools: [
        {
          name: "U.E.E Arturo Michelena",
          slug: "escuela-arturo-michelena",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "U.E.E Los próceres",
          slug: "escuela-los-proceres",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "E.P.B Francisco Tovar",
          slug: "escuela-francisco-tovar",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
      ],
    },
    {
      lat: 9.76432,
      lng: -69.831185,
      name: "U.E.E Los próceres",
      slug: "escuela-los-proceres",
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
          title: "Diagnóstico de lectura",
          description:
            "Diagnóstico de lectura fluida: Medimos trimestralmente el número de palabras leidas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo. PPM. Palabras por minuto.",
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
            "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo. LM30: Lógica - Matemática en 30 minutos.",
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
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
        specials: [
          {
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 4",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 5",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 6",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      nextActivities: [
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      otherSchools: [
        {
          name: "U.E.E Arturo Michelena",
          slug: "escuela-arturo-michelena",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "U.E.E Los próceres",
          slug: "escuela-los-proceres",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "E.P.B Francisco Tovar",
          slug: "escuela-francisco-tovar",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
      ],
    },
    {
      lat: 9.23953,
      lng: -71.032155,
      name: "E.P.B Francisco Tovar",
      slug: "escuela-francisco-tovar",
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
          title: "Diagnóstico de lectura",
          description:
            "Diagnóstico de lectura fluida: Medimos trimestralmente el número de palabras leidas por minuto. La grágica muestra el índice de resultados, en comparación con las metas por nivel en el tiempo. PPM. Palabras por minuto.",
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
            "Medimos trimestralmente la cantidad de problemas lógico matemáticos, adecuados a cada nivel, resuelto en 30 minutos.  La gráfica muestra el índice de resultados en comparación con la meta por grado en el tiempo. LM30: Lógica - Matemática en 30 minutos.",
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
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
        specials: [
          {
            name: "Actividad 1",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/background-pillar-lectura.jpg",
              "./assets/images/background-pillar-ambiente.jpg",
              "./assets/images/background-pillar-matematica.jpg",
            ],
          },
          {
            name: "Actividad 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 4",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 5",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
          {
            name: "Actividad 6",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus laudantium quibusdam. Voluptate quis non quos dolores iure officia, nobis vel necessitatibus labore voluptas nam? Cumque quisquam vel debitis cum.",
            images: [
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
              "./assets/images/banner-1.jpg",
              "./assets/images/banner-2.jpg",
            ],
          },
        ],
      },
      testimonials: [
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Matemática",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Lectura",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          firstName: "Oscar A.",
          lastName: "Pietri Pacheco",
          image: "./assets/images/profile-oscar.jpg",
          function: "Docente de Ambiente",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      nextActivities: [
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
        {
          title: "Título de la actividad",
          date: "20/03/2020",
          place: "Barquisimeto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt eros ac erat interdum placerat. Quisque gravida diam id tincidunt elementum.",
        },
      ],
      otherSchools: [
        {
          name: "U.E.E Arturo Michelena",
          slug: "escuela-arturo-michelena",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "U.E.E Los próceres",
          slug: "escuela-los-proceres",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
        {
          name: "E.P.B Francisco Tovar",
          slug: "escuela-francisco-tovar",
          image: "./assets/images/background-pillar-ambiente.jpg",
        },
      ],
    },
  ],
};

@Injectable({
  providedIn: "root",
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
}
