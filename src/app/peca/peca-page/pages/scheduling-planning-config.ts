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
    settings: {
        dateOrtext: {
            text: 'Fecha de la reunión:',
            fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired },
        },
        selectStatus:
        {
            text: 'Modificar estatus:',
            lista: [
                { id: 1, name: 'Pendiente' },
                { id: 2, name: 'Aprobado' },
                { id: 3, name: 'Rechazado' },
            ]
        },
        subtitles: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
        ],
    }
}

const propuestaAmblema = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {

        },
        status: 'pendiente',
        subtitles: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
        action: [{
            type: 1,
            name: 'Enviar',
        }],
        upload: {
            url: null,
            name: 'Adjuntar archivo',
            file: null,
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
                        title: "Reunión y aprobación de la escuela",
                        childBlocks: [
                            { ...reunionAprobacionSet }
                        ]
                    },
                    {
                        title: "Propuesta a fundación AmbLeMa",
                        childBlocks: [
                            { ...propuestaAmblema }
                        ]
                    }
                ],
            },
        },
    ]
}