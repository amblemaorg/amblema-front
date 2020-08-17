import { sampleFormData,formRegistroInicial, formPreparacionTallerInicial, formRegistroInicialModal } from '../blocks/form-block/all-forms'

const textsAndButtons = {
  component: 'textsbuttons',
  name: 'btnRegistroEnviarSolicitud',
  settings: {
    action: [{
      type: 1,
      name: 'Enviar Solicitud',
    }],    
    receivesFromTableOrForm: 'both',
    buttonCode: 'initialWorkshopConfigRegistroTallerInicial',
    fetcherMethod: 'post',
  }
}

const formTaller1 = {
  component: 'form',
  name: 'btnSolicitudPreparacionTallerInicial',
  settings: {
    formsContent: formPreparacionTallerInicial,
    buttons: ['guardar'],
    formType: 'initialWorkshopConfigPreparacionTaller',
    fetcherMethod: 'post',
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
        title: "Imagen"
      },
      description: {
        title: "Descripción"
      },
      // state: {
      //   title: 'Estado',
      //   valuePrepareFunction: ( row: any ) => {
      //     if (row) return row == "1" ? 'Visible':'No visible';
      //     else return '';
      //   },
      //   filterFunction: (cell?: any, search?: string) => {
      //       let value: string = cell == "1" ? 'Visible':'No visible';
      //       value = value.toUpperCase();
            
      //       if (value.includes(search.toUpperCase()) || search === '') return true;
      //       else return false;
      //   }
      // },
      // status: {
      //   title: 'Estatus'
      // }
    },
    isFromImgContainer: true,
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    buttonCode: 'initialWorkshopConfigRegistroTallerInicial',
    tableCode: 'initialWorkshopConfigRegistroTallerInicial',
    initialWorkshopConfigRegistroTallerInicial: [
      {
        id: '1abcdefghijk',
        image: 'imagen1.png',
        description: 'descripcion 1',
        // state: '1',
        // status: 'Aprobado',
        source: 'https://us.123rf.com/450wm/kchung/kchung1610/kchung161001155/64507708-futura-prueba-escrita-a-mano-escritura-de-la-mano-a-bordo-transparente-foto.jpg?ver=6',
        imageSelected: { name: 'imagen prueba' },
      },
      {
        id: '2abcdefghijk',
        image: 'imagen2.png',
        description: 'descripcion 2',
        // state: '2',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: '3abcdefghijk',
        image: 'imagen3.png',
        description: 'descripcion 3',
        // state: '1',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: '4abcdefghijk',
        image: 'imagen4.png',
        description: 'descripcion 4',
        // state: '2',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
    ],
    makesNoRequest: true,
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
// !---------------------------------------------

//* MODAL ----------------------------------
const formRegistroTallerInicial = {
  component: 'form',
  name:'tallerInicialForm',
  settings: {
    formsContent: formRegistroInicialModal,
    buttons: ['guardar'],
    formType: 'imageContainerFormType',
    tableCode: 'initialWorkshopConfigRegistroTallerInicial',
    modalCode: 'initialWorkshopConfigRegistroTallerInicial',
    isFromCustomTableActions: true,
    makesNoRequest: true,
    fetcherMethod: 'post',
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
    isDeleting: true,
    makesNoRequest: true,
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
//* ------------------------------------------

export const INITIAL_WORKSHOP_CONFIG = {
  header: {
    title: "Taller inicial"
  },
  blocks: [
    {
      component: 'tabs',
      settings: {
        items: [
          {
            title: "Preparación del taller",
            childBlocks: [
              { ...formTaller1 }
            ]
          },
          {
            title: "Registro inicial",
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
