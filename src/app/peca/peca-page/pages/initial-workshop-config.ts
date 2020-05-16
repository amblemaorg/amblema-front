import { sampleFormData } from '../blocks/form-block/all-forms'

const textsbuttonsSet = {
  component: 'textsbuttons',
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
    buttons: ['guardar'],
  }
}

// ! FOR TABLE COMPONENT TESTING----------
const testingTable = {
  component: 'table',
  settings: {
    columns: {
      column1: {
        title: "Column 1",
      },
      column2: {
        title: "Column 2"
      },
      column3: {
        title: 'Column 3'
      },
      column4: {
        title: 'Column 4'
      }
    },
    data: [
      {
        column1: 'Item 1 column1',
        column2: 'Item 1 column2',
        column3: 'Item 1 column3',
        column4: 'Item 1 column4'
      },
      {
        column1: 'Item 2 column1',
        column2: 'Item 2 column2',
        column3: 'Item 2 column3',
        column4: 'Item 2 column4'
      },
      {
        column1: 'Item 3 column1',
        column2: 'Item 3 column2',
        column3: 'Item 3 column3',
        column4: 'Item 3 column4'
      },
      {
        column1: 'Item 4 column1',
        column2: 'Item 4 column2',
        column3: 'Item 4 column3',
        column4: 'Item 4 column4'
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
// !---------------------------------------------

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
            title: "Prueba de componente tabla",
            icon: "planificacion",
            childBlocks: [
              { ...testingTable }
            ]
          },
          {
            title: "Reunión para Planificación del taller inicial",
            icon: "planificacion",
            childBlocks: [
              { ...textsbuttonsSet }
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
