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
        title: "Imágen"
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
  settings: {
    formsContent: formRegistroInicialModal,
    buttons: ['guardar'],
    formType: 'imageContainerFormType',
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
    isDeleting: true,
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
