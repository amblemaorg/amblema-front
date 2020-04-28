import { sampleFormData } from '../blocks/form-block/all-forms'

const buttonsSet = {
  component: 'buttons',
  settings: {
    dateOrtext: {
      text: 'Fecha actividad',
      date: '22/12/12',
    },
    status: 'pendiente',
    download: {
      url: '#',
      name: 'hola.png',
    },
    // texts: [
      /* { */
        title: {
          text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
          aligning: 'center',
          // text: '(A la izquierda) Solicitud de asesoria a AmbLeMa: Licencia para operar',
          // aligning: 'left',
        },
        subtitles: [
          {
            title: 'Carta convenio con la escuela',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
          {
            title: 'Otro parrafo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      /* }, */
      /* {
        title: {
          // text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
          // aligning: 'center',
          text: '(A la izquierda) Solicitud de asesoria a AmbLeMa: Licencia para operar',
          aligning: 'left',
        },
        subtitles: [
          {
            title: 'Tres',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
          {
            // title: 'Otro parrafo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      }, */
    // ],
    action: {
      type: 1,
      name: 'Enviar',
    },
    // upload: {
    //   url: null,
    //   name: 'hola.png',
    //   file: null,
    // },    
  }
}

const formSet = {
  component: 'form',
  settings: {
    formsContent: sampleFormData,
  }
}

export const INITIAL_WORKSHOP_CONFIG = {
  header: {
    title: "Taller inicial"
  },
  blocks: [
    {
      component: 'accordion',
      settings: {
        items: [
          {
            title: "Reunión para Planificación del taller inicial",
            icon: "planificacion",
            childBlocks: [
              { ...buttonsSet }
            ]
          },
          {
            title: "Registro del taller inicial",
            icon: "planificacion",
            childBlocks: [
              { ...formSet }
            ]
          }
        ]
      }
    }
  ]
}
