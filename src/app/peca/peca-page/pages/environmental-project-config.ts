const infoGeneral = {
    component: 'checkList',
    settings: {
        infoContainer: [
            {
                principal:
                {
                    tema: 'Geografia de Venezuela',
                    objetivo: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ],
                    estrategia: [
                        { id: 1, name: 'plastilina' },
                        { id: 2, name: 'tijera' },
                        { id: 3, name: 'pega' },
                    ],
                    contenido: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ]
                },
                datosNivel:
                {
                    nivel: 'Primer grado',
                    week: '1 al 6 - 05 - 2020',
                    time: '45 min',
                    tecnica: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ],
                    recurso: [
                        { id: 1, name: 'plastilina' },
                        { id: 2, name: 'tijera' },
                        { id: 3, name: 'pega' },
                    ],
                    evaluacion: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ]
                },
                title: 'Convención anual',
                checkList: [
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                ],
                material: 'https://binauraldev.com/ecommerce/',
                button: {
                    name: 'Guardar'
                },
                line: true
            },
            {
                datosNivel:
                {
                    nivel: 'segundo grado',
                    week: '1 al 6 - 05 - 2020',
                    time: '60 min',
                    tecnica: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ],
                    recurso: [
                        { id: 1, name: 'plastilina' },
                        { id: 2, name: 'tijera' },
                        { id: 3, name: 'pega' },
                    ],
                    evaluacion: [
                        { id: 1, name: 'Pendiente' },
                        { id: 2, name: 'Aprobado' },
                        { id: 3, name: 'Rechazado' },
                    ]
                },
                title: 'Convención anual',
                checkList: [
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                    { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                ],
                material: 'https://binauraldev.com/ecommerce/',
                button: {
                    name: 'Guardar'
                },
                line: true
            }
        ]
    }
}

export const ENVIRONMENTAL_PROJECT_CONFIG = {
    header: {
        title: "Proyecto ambiental",
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "tabs 1",
                        childBlocks: [
                            {
                                component: 'accordion',
                                settings: {
                                    items: [
                                        {
                                            title: "Geografia de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Ecositemas de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Parque nacionales y monumentos naturales",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "tabs 2",
                        childBlocks: [
                            {
                                component: 'accordion',
                                settings: {
                                    items: [
                                        {
                                            title: "Geografia de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Ecositemas de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Parque nacionales y monumentos naturales",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "tabs 3",
                        childBlocks: [
                            {
                                component: 'accordion',
                                settings: {
                                    items: [
                                        {
                                            title: "Geografia de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Ecositemas de Venezuela",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                        {
                                            title: "Parque nacionales y monumentos naturales",
                                            childBlocks: [
                                                { ...infoGeneral }
                                            ]
                                        },
                                    ]
                                }
                            }
                        ]
                    },
                ]
            }
        },
    ],
}
