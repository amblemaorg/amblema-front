export const METADATA = {
  homePage: {
    path: "/",
    title: "AmbLeMa | Ambiente, Lectura y Matemática en escuelas de Venezuela",
    metatags: [
      {
        name: "description",
        content:
          "AmbLeMa es una herramienta socio-educativa, que busca motivar a muchos docentes para alcanzar una educación de calidad en toda Venezuela con aportes de empresas y particulares que asumen una eficaz inversión social.",
      },
    ],
  },
  aboutUsPage: {
    path: "/nosotros",
    title: "Nosotros | AmbLeMa",
    metatags: [
      {
        name: "description",
        content:
          "Damos herramientas eficaces que motivan a los docentes de calidad para mejorar los indicadores clave de gestión docente con actividades diarias y actividades especiales, a lo largo del año escolar.",
      },
    ],
  },
  sponsorsPage: {
    path: "/padrinos",
    title: "Padrinos | AmbLeMa",
    metatags: [
      {
        name: "description",
        content:
          "El padrino es una empresa, finca o familia que patrocina AmbLeMa en una escuela pública de su comunidad. Esta inversión social rinde beneficios tangibles e intangibles como las mejoras en la calidad de su comunidad y a la vez el país.",
      },
    ],
  },
  coordinatorsPage: {
    path: "/coordinadores",
    title: "Coordinadores | AmbLeMa",
    metatags: [
      {
        name: "description",
        content:
          "El coordinador AmbLeMa es una persona de la comunidad donde se encuentra la escuela y desea aportar su valioso grano de arena para ayudar a implementar AmbLeMa en una escuela. ¿Estás interesado en transformar tu comunidad?",
      },
    ],
  },
  schoolsPage: {
    path: "/escuelas",
    title: "Escuelas | AmbLeMa",
    metatags: [
      {
        name: "description",
        content:
          "Para formar parte de la red AmbLeMa de escuelas, la fundación AmbLeMa te ayuda y orienta para identificar un posible padrino en tu comunidad, hacer el primer contacto y presentación, para comenzar a aplicar la herramienta al inicio del año escolar.",
      },
    ],
  },
  blogPage: {
    path: "/blog",
    title: "Blog | AmbLeMa",
    metatags: [
      {
        name: "description",
        content:
          "Conoce los detalles de todas nuestras actividades en Ambiente, Lectura y Matemática a través de las noticias de nuestro blog.",
      },
    ],
  },
};

export interface PageMetadata {
  path: string;
  title: string;
  metatags: { name?: string; property?: string; content: string }[];
}

/** Convierte una entrada de METADATA en los datos que espera SeoService.setPage */
export function toSeoPage(page: PageMetadata) {
  const description = page.metatags.find((tag) => tag.name === "description");
  return {
    title: page.title,
    description: description ? description.content : "",
    path: page.path,
  };
}
