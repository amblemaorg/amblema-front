import { sampleFormData,formRegistroInicial, formPreparacionTallerInicial, formRegistroInicialModal } from '../blocks/form-block/all-forms'

const textsAndButtons = {
  component: 'textsbuttons',
  settings: {
    action: [{
      type: 3,
      name: 'Enviar Solicitud',
    }],    
    receivesFromTableOrForm: 'both',
    buttonCode: 'initialWorkshopConfigRegistroTallerInicial',
  }
}

const formTaller1 = {
  component: 'form',
  settings: {
    formsContent: formPreparacionTallerInicial,
    buttons: ['guardar'],
    formType: 'initialWorkshopConfigPreparacionTaller',
  }
}

const formTaller2 = {
  component: 'form',
  settings:{
    formsContent: formRegistroInicial,
    tableCode: 'initialWorkshopConfigRegistroTallerInicial',
    buttonCode: 'initialWorkshopConfigRegistroTallerInicial',
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
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    buttonCode: 'initialWorkshopConfigRegistroTallerInicial',
    tableCode: 'initialWorkshopConfigRegistroTallerInicial',
    initialWorkshopConfigRegistroTallerInicial: [
      {
        id: 'wfwfwfwfwfwfwfw',
        image: 'imagen1.png',
        description: 'descripcion 1',
        state: 'Visible',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: 'egrwegefwgwegfwqg',
        image: 'imagen2.png',
        description: 'descripcion 2',
        state: 'No visible',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: 'dwfswafsfwafa',
        image: 'imagen3.png',
        description: 'descripcion 3',
        state: 'Visible',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: 'hwegsgseges',
        image: 'imagen4.png',
        description: 'descripcion 4',
        state: 'No visible',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
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

//! PRUEBAS ----------------------------------
const formRegistroTallerInicial = {
  component: 'form',
  settings: {
    formsContent: formRegistroInicialModal,
    buttons: ['guardar'],
    formType: 'initialWorkshopConfigRegistroTallerInicial',
    tableCode: 'initialWorkshopConfigRegistroTallerInicial',
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    isFromCustomTableActions: true,
  }
}
const textsAndButtonsRegistroTallerInicial = {
  component: 'textsbuttons',
  settings: {
    subtitles: [{
      text: '¿Desea eliminar este ítem?',
    }],
    action: [
      {
          type: 1,
          name: 'Si',
      },
      {
          type: 2,
          name: 'No',
      },
    ],
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    isFromCustomTableActions: true,
  }
}
const modalRegistroTallerInicial = {
  component: 'modal',
  settings: {
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    isFromImgContainer: true,
    items: [
      {        
        childBlocks: [
          { ...formRegistroTallerInicial },
          { ...textsAndButtonsRegistroTallerInicial },
        ]
      }
    ]
  }
}
//! ------------------------------------------

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
              { ...textsAndButtons },
              { ...modalRegistroTallerInicial },
            ]
          },
        ]
      }
    }
  ]
}
