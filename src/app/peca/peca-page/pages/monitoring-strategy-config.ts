const sliderAmbiente = {
  component: 'slider',
  name: 'sliderAmbienteData',
  settings: {
    sliderImage: [],
  }
}
const sliderLectura = {
  component: 'slider',
  name: 'sliderLecturaData',
  settings: {
    sliderImage: [],
  }
}

const sliderMatematica = {
  component: 'slider',
  name: 'sliderMatematicaData',
  settings: {
    sliderImage: [],
  }
}

export const MONITORING_STRATEGY_CONFIG = {
  header: {
    title: "Estrategias para seguimiento de actividades ordinarias"
  },
  blocks: [
    {
      component: 'tabs',
      settings: {
        items: [
          {
            title: "Ambiente",
            childBlocks: [sliderAmbiente]
          },
          {
            title: "Lectura",
            childBlocks: [sliderLectura]
          },
          {
            title: "Matemática",
            childBlocks: [sliderMatematica]
          }
        ],
      },
    },
  ]
}
