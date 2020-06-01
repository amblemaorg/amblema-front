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
            type: 1,
            name: 'Enviar Solicitud',
        }],
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
                type: 1,
                name: 'Agregar Nuevo',
            }
        ],
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
        tableCode: 'dataSpecialActivity',
        dataSpecialActivity: [
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
                            { ...textsAndButtons }
                        ]
                    },
                ],
            },
        },
    ]
}
