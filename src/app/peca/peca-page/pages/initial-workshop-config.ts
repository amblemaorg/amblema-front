import { sampleFormData,formRegistroInicial, formPreparacionTallerInicial } from '../blocks/form-block/all-forms'

const textsAndButtons = {
  component: 'textsbuttons',
  settings: {
    title: {
      text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
      aligning: 'center',
    },
    action: {
      type: 1,
      name: 'Enviar Solicitud',
    },
  }
}

const formTaller1 = {
  component: 'form',
  settings: {
    formsContent: formPreparacionTallerInicial,
    buttons: ['guardar'],
  }
}

const formTaller2 = {
  component: 'form',
  settings:{
    formsContent: formRegistroInicial,
  }
}

// ! FOR TABLE COMPONENT TESTING----------
const registroTallerInicial = {
  component: 'table',
  settings: {
    columns: {
      image: {
        title: "Imágenes",
      },
      description: {
        title: "Descripción"
      },
      state: {
        title: 'Estado'
      },
      status: {
        title: 'Estatus'
      }
    },
    data: [
      {
        image: '5to Grado',
        description: 'B',
        state: '30 operaciones/min',
        status: '30 operaciones/min'
      },
      {
        image: '6to Grado',
        description: 'A',
        state: '30 operaciones/min',
        status: '30 operaciones/min'
      },
      {
        image: '4to Grado',
        description: 'A',
        state: '30 operaciones/min',
        status: '30 operaciones/min'
      },
      {
        image: '2do Grado',
        description: 'C',
        state: '30 operaciones/min',
        status: '30 operaciones/min'
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
            title: "Preparación del taller",
            icon: "taller-inicial",
            childBlocks: [
              { ...formTaller1 }
            ]
          },
          {
            title: "Registros inicial",
            icon: "planificacion",
            childBlocks: [   
              { ...formTaller2 },           
              { ...registroTallerInicial },
              { ...textsAndButtons }
            ]
          },
        ]
      }
    }
  ]
}
