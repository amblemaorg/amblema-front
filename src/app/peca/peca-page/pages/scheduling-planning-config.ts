const controlProps = {
    dateAndRequired: {
        type: "date",
        validations: { required: true }
    },
    date: {
        type: "date",
        validations: { required: false }
    },
    selectAndRequired: {
        type: 'select',
        options: [],
        validations: { required: true }
    },
    select: {
        type: 'select',
        options: [],
        validations: { required: false }
    },
}

const reunionAprobacionSet = {
    component: 'textsbuttons',
    name: 'reunionAmblema',
    settings: {
        dateOrtext: {
            text: 'Fecha de la reunión:',
            fields: [{ label: "Input date", placeholder: "Fecha de la reunión", fullwidth: false, ...controlProps.dateAndRequired }],
        },
        selectGeneralStatus:
        {
            text: 'Modificar estatus:',
            lista: [
                { id: 1, name: 'Pendiente' },
                { id: 2, name: 'Aprobado' },
                { id: 3, name: 'Rechazado' },
            ],
            placeholder: "Pendiente"
        },
        subtitles: [
            {
                text: ''
            },
        ]
    }
}

const propuestaAmblema = {
    component: 'textsbuttons',
    name: 'propuestaAmblema',
    settings: {
        dateOrtext: {

        },
        status: {
            text: 'Estatus',
            subText: 1
        },
        subtitles:  [
            {
                text: '',
            },
        ],        
        action: [{
            type: 3,
            name: 'Enviar',
        }],
        upload: {
            /* url: "#",
            name: 'Adjuntar archivo',
            file: null, */
        },
    }
}

export const SCHEDULING_PLANNING_CONFIG = {
    header: {
        title: "Planificación del lapso"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Propuesta a fundación AmbLeMa",
                        childBlocks: [
                            { ...propuestaAmblema }
                        ]
                    },
                    {
                        title: "Reunión y aprobación de la escuela",
                        childBlocks: [
                            { ...reunionAprobacionSet }
                        ]
                    },
                    
                ],
            },
        },
    ]
}