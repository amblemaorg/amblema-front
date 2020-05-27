const preinscripcionDocente = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {

        },
        selectStatus:
        {
            placeholder: 'Selecciona el docente',
            lista: [
                { id: '1', name: 'ALfredo' },
                { id: '2', name: 'Yanior' },
                { id: '3', name: 'Jose' },
            ]
        },
        btnGeneral:
        {
            name: 'Agregar docente'
        },
        buttonType: 'agregarDocentePreinscripcion',
        tableCode: 'annualConventionPreinscripcionDocente',
    }
}

const btnGuardar = {
    component: 'textsbuttons',
    settings: {
        action: [{
            type: 2,
            name: 'Guardar',
        }]
    }
}

const stepperPrueba = {
    component: 'stepper',
    settings: {
        titles: [
            {
                id: 1,
                text: 'Paso 1 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },
            {
                id: 2,
                text: 'Paso 2 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },
            { 
                id: 3,
                text: 'Paso 3 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },{
                id: 4,
                text: 'Paso 4 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            }
        ]
    }

}

const tablaPreinscripcionDocente = {
    component: 'table',
    settings: {
        columns: {
            name: {
                title: "Nombre",
            },
            lastName: {
                title: "Apellido"
            },
            phone: {
                title: 'Teléfono'
            },
            email: {
                title: 'Correo'
            }
        },
        tableCode: 'annualConventionPreinscripcionDocente',
        annualConventionPreinscripcionDocente: [
            {
                name: 'ALfredo',
                lastName: 'Valbuena',
                phone: '1511555415',
                email: 'almavalo@hotmail.com'
            },
            {
                name: 'Luis',
                lastName: 'Valbuena',
                phone: '0416958745',
                email: 'lu.valbuena@hotmail.com'
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

export const ANNUAL_CONVENTION_CONFIG = {
    header: {
        title: "Preparación de la convención anual"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Proceso de inscripción",
                        childBlocks: [
                            { ...stepperPrueba }
                        ]
                    },
                    {
                        title: "Preinscripción de docentes",
                        childBlocks: [
                            { ...preinscripcionDocente },
                            { ...tablaPreinscripcionDocente },
                            { ...btnGuardar }
                        ]
                    },
                ]
            }
        }
    ]
}
