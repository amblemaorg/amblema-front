import { tablaImagenesActividadModal } from '../blocks/form-block/all-forms'

const selectEstatusActivity = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {},
        status: {
            text: 'Estatus',
            subText: 1
        },
        btnGeneral:
        {
            addToTable: true,
            name: 'Adjuntar foto',
        },
        modalCode: 'dataTablaImagenesActividad',
    }
}
const botonAprobacionActivity = {
    component: 'textsbuttons',
    settings: {
        action: [
            {
                type: 3,
                name: 'Enviar solicitud',
            }
        ],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataTablaImagenesActividad',
    }
}

const tablaImagenesActivity = {
    component: 'table',
    settings: {
        columns: {
            image: {
                title: "Imagen",
            },
        },
        isFromImgContainer: true,
        modalCode: 'dataTablaImagenesActividad',
        buttonCode: 'dataTablaImagenesActividad',
        tableCode: 'dataTablaImagenesActividad',
        dataTablaImagenesActividad: [
            {
                id: '1efwef',
                image: 'imagen',
                source: null,
                imageSelected: null,
            },
            {
                id: '2efwef',
                image: 'imagen',
                source: null,
                imageSelected: null,
            },
        ],
        makesNoRequest: true,
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

//* MODAL FOTOS DE LA Activiadad ----------------------------------
const formTablaImagenesActivity = {
    component: 'form',
    viewMode: 'both',
    settings: {
        formsContent: tablaImagenesActividadModal,
        buttons: ['guardar'],
        formType: 'agregarImagenActividad',
        tableCode: 'dataTablaImagenesActividad',
        modalCode: 'dataTablaImagenesActividad',
        isFromCustomTableActions: true,
        makesNoRequest: true,
    }
}
const textsAndButtonsTablaImagenesActivity = {
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
        modalCode: 'dataTablaImagenesActividad',
        isFromCustomTableActions: true,
        isDeleting: true,
        makesNoRequest: true,
    }
}
const modalTablaImagenesActivity = {
    component: 'modal',
    settings: {
        modalCode: 'dataTablaImagenesActividad',
        isFromImgContainer: true,
        items: [
            {
                childBlocks: [
                    { ...formTablaImagenesActivity },
                    { ...textsAndButtonsTablaImagenesActivity },
                ]
            }
        ]
    }
}
//* ------------------------------------------

export const SCHOOL_PICTURES_CONFIG = {
    header: {
        title: "Fotos de las actividades"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {
                items: [
                    {
                        childBlocks: [
                            { ...selectEstatusActivity },
                            { ...tablaImagenesActivity },
                            { ...botonAprobacionActivity },
                            { ...modalTablaImagenesActivity },
                        ]
                    }
                ],
            },
        },
    ]
}
