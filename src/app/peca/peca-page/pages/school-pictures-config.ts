import { tablaImagenesEscuelaModal } from '../blocks/form-block/all-forms'

const selectEstatus = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {

        },
        selectGeneralStatus:
        {
            placeholder: 'Pendiente',
            lista: [
                { id: 1, name: 'Activo' },
                { id: 2, name: 'En proceso' },
            ]
        },
        btnGeneral:
        {
            addToTable: true,
            name: 'Adjuntar foto',           
        },
        modalCode: 'dataTablaImagenesEscuela',
    }
}
const botonAprobacion = {
    component: 'textsbuttons',
    settings: {
        action: [
            {
                type: 3,
                name: 'Enviar solicitud',
            }
        ],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataTablaImagenesEscuela',
    }
}

const tablaImagenesEscuela = {
    component: 'table',
    settings: {
        columns: {
            image: {
                title: "Imagen",
            },
            description: {
                title: "Descripcion"
            },
        },
        isFromImgContainer: true,
        modalCode: 'dataTablaImagenesEscuela',
        buttonCode: 'dataTablaImagenesEscuela',
        tableCode: 'dataTablaImagenesEscuela',
        dataTablaImagenesEscuela: [
            {
                id: '1efwef',
                image: 'imagen',
                description: 'loremp',
                source: null,
                imageSelected: null,
            },
            {
                id: '2efwef',
                image: 'imagen',
                description: 'loremp',
                source: null,
                imageSelected: null,
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}


const selectStatusActivity = { component: 'textsbuttons', settings: { ...selectEstatus.settings } };
selectStatusActivity.settings.modalCode = 'dataTablaImagenesActividad';
const botonAprobacionActivity = { component: 'textsbuttons', settings: { ...botonAprobacion.settings } };
botonAprobacionActivity.settings.buttonCode = 'dataTablaImagenesActividad';
const tablaImagenesActividad = { component: 'table', settings: { ...tablaImagenesEscuela.settings } };
['modalCode','buttonCode','tableCode'].map(el => {
    tablaImagenesActividad.settings[el] = 'dataTablaImagenesActividad';
});
tablaImagenesActividad.settings['dataTablaImagenesActividad'] = [ ...tablaImagenesActividad.settings['dataTablaImagenesEscuela'] ];
tablaImagenesActividad.settings['dataTablaImagenesEscuela'] = null;


//* MODAL FOTOS DE LA ESCUELA ----------------------------------
const formTablaImagenesEscuela = {
    component: 'form',
    viewMode: 'both',
    settings: {
      formsContent: tablaImagenesEscuelaModal,
      buttons: ['guardar'],
      formType: 'agregarImagenEscuela',
      tableCode: 'dataTablaImagenesEscuela',
      modalCode: 'dataTablaImagenesEscuela',
      isFromCustomTableActions: true,
    }
}
const textsAndButtonsTablaImagenesEscuela = {
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
      modalCode: 'dataTablaImagenesEscuela',
      isFromCustomTableActions: true,
    }
}
const modalTablaImagenesEscuela = {
    component: 'modal',
    settings: {
      modalCode: 'dataTablaImagenesEscuela',
      isFromImgContainer: true,
      items: [
        {        
          childBlocks: [
            { ...formTablaImagenesEscuela },
            { ...textsAndButtonsTablaImagenesEscuela },
          ]
        }
      ]
    }
}

const formTablaImagenesActividad = { component: 'form', viewMode: 'both', settings: { ...formTablaImagenesEscuela.settings } };
['modalCode','tableCode'].map(el => {
    formTablaImagenesActividad.settings[el] = 'dataTablaImagenesActividad';
});
const textsAndButtonsTablaImagenesActividad = { component: 'textsbuttons', settings: { ...textsAndButtonsTablaImagenesEscuela.settings } };
textsAndButtonsTablaImagenesActividad.settings.modalCode = 'dataTablaImagenesActividad';
const modalTablaImagenesActividad = {
    component: 'modal',
    settings: {
      modalCode: 'dataTablaImagenesActividad',
      isFromImgContainer: true,
      items: [
        {        
          childBlocks: [
            { ...formTablaImagenesActividad },
            { ...textsAndButtonsTablaImagenesActividad },
          ]
        }
      ]
    }
}
//* ------------------------------------------

export const SCHOOL_PICTURES_CONFIG = {
    header: {
        title: "Fotos de la escuela"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Escuela",
                        childBlocks: [
                            { ...selectEstatus },
                            { ...tablaImagenesEscuela },
                            { ...botonAprobacion },
                            { ...modalTablaImagenesEscuela },
                        ]
                    },
                    {
                        title: "Actividades",
                        childBlocks: [
                            { ...selectStatusActivity },
                            { ...tablaImagenesActividad },
                            { ...botonAprobacionActivity },
                            { ...modalTablaImagenesActividad },
                        ]
                    }
                ],
            },
        },
    ]
}
