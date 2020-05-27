import { sampleFormData,formRegistroInicial, formPreparacionTallerInicial } from '../blocks/form-block/all-forms'

const textsAndButtons = {
  component: 'textsbuttons',
  settings: {
    title: {
      text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
      aligning: 'center',
    },
    action: [{
      type: 1,
      name: 'Enviar Solicitud',
    }],
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
    tableCode: 'dataRegistroTallerInicial',
  }
}

// ! FOR TABLE COMPONENT TESTING----------
const registroTallerInicial = {
  component: 'table',
  settings: {
    columns: {
      image: {
        title: "Imágen",
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
    tableCode: 'dataRegistroTallerInicial',
    dataRegistroTallerInicial: [
      {
        image: 'imagen1.png',
        description: 'descripcion 1',
        state: 'Visible',
        status: 'Aprobado'
      },
      {
        image: 'imagen2.png',
        description: 'descripcion 2',
        state: 'No visible',
        status: 'Aprobado'
      },
      {
        image: 'imagen3.png',
        description: 'descripcion 3',
        state: 'Visible',
        status: 'Aprobado'
      },
      {
        image: 'imagen4.png',
        description: 'descripcion 4',
        state: 'No visible',
        status: 'Aprobado'
      },
    ],
    classes: {
      hideView: true,
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
