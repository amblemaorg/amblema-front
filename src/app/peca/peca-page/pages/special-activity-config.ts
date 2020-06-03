import { formParaPruebaModal } from '../blocks/form-block/all-forms'

const controlProps = {
    dateAndRequired: {
        type: "date",
        validations: { required: true }
    },
    date: {
        type: "date",
        validations: { required: false }
    },
}

const textsAndButtons = {
    component: 'textsbuttons',
    settings: {
        action: [{
            type: 3,
            name: 'Enviar Solicitud',
        }],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataSpecialActivityTable',
    }
}


const dateAndStatus = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {
            text: 'Fecha de la actividad especial:',
            fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired },
        },
        status: 'pendiente',
        action: [
            {
                type: 6,
                name: 'Agregar Nuevo',
            }
        ],
        modalCode: 'dataSpecialActivityTable',
    }
}
const specialActivityTable = {
    component: 'table',
    settings: {
        columns: {
            item: {
                title: "Item",
            },
            description: {
                title: "Descripción"
            },
            cantidad: {
                title: 'cantidad'
            },
            price: {
                title: 'Precio unitario'
            },
            impuesto: {
                title: 'impuesto'
            },
            subtotal: {
                title: 'subtotal'
            },
        },
        buttonCode: 'dataSpecialActivityTable',
        tableCode: 'dataSpecialActivityTable',
        dataSpecialActivityTable: [
            {
                item: '1',
                description: 'cosa',
                cantidad: '34',
                price: '444',
                impuesto: '20%',
                subtotal: '500',
            },
            {
                item: '1',
                description: 'cosa',
                cantidad: '34',
                price: '444',
                impuesto: '20%',
                subtotal: '500',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

//! PRUEBAS ----------------------------------
const formPrueba = {
    component: 'form',
    settings: {
        formsContent: formParaPruebaModal,
        buttons: ['guardar'],
        formType: 'pruebaaaaaaaa',
        tableCode: 'dataSpecialActivityTable',
        modalCode: 'dataSpecialActivityTable',
    }
}
const modalPrueba = {
    component: 'modal',
    settings: {
        modalCode: 'dataSpecialActivityTable',
        items: [
        {
            childBlocks: [
            { ...formPrueba }
            ]
        }
        ]
    }
}
//! ------------------------------------------

export const SPECIAL_ACTIVITY_CONFIG = {
    header: {
        title: "Actividad especial"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {                
                items: [
                    {     
                        childBlocks: [
                            { ...dateAndStatus },                            
                            { ...specialActivityTable },
                            { ...textsAndButtons },
                            { ...modalPrueba },
                        ]
                    },
                ],
            },
        },
    ]
}
