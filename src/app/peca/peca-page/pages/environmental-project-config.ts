const infoGeneral = {
    component: 'checkList',
    settings: {
        infoContainer: [
            {
                principal:
                    [
                        {
                            tema: 'Geografia de Venezuela',
                            objetivo: [
                                { conObjetivo: 'Conocer Veneuzela' },
                                { conObjetivo: 'Conocer Lara' },
                                { conObjetivo: 'Conocer Barquisimeto' }
                            ],
                            estrategia: [
                                { contEstrategia: 'estrategia 1' },
                                { contEstrategia: 'estrategia 2' },
                                { contEstrategia: 'estrategia 3' },
                            ],
                            contenido: [
                                { contContenido: 'Prueba' },
                                { contContenido: 'Probando' },
                                { contContenido: 'Pruebita' },
                            ],
                        },
                    ],
                datosNivel:
                    [
                        {
                            nivel: 'Primer grado',
                            week: [
                                { contWeek: '"2020-07-18T15:27:23"' },
                                { contWeek: '"2020-07-18T15:27:23"' },
                                { contWeek: '"2020-07-18T15:27:23"' },
                            ],
                            time: '45 min',
                            tecnica: [
                                { contTecnica: 'Juego didactico' },
                                { contTecnica: 'Sopa de letra' }
                            ],
                            recurso: [
                                { contRecurso: 'plastilina' },
                                { contRecurso: 'tijera' },
                                { contRecurso: 'lapiz' },
                                { contRecurso: 'borrador' },
                            ],
                            evaluacion: [
                                { contEvaluacion: 'participar en el juego "Conoce las capitales' },
                                { contEvaluacion: 'examen' },
                                { contEvaluacion: 'examen-oral' },
                            ],
                            title: 'Actividades',
                            checkList: [
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                            ],
                            material: [
                                { link: 'https://binauraldev.com/ecommerce/' },
                                { link: 'https://binauraldev.com' }
                            ]
                        },
                    ],
                button: {
                    name: 'Guardar'
                },
                line: true
            },
            {
                datosNivel:
                    [
                        {
                            nivel: 'Primer grado',
                            week: [
                                { contWeek: '"2020-07-18T15:27:23"' },
                                { contWeek: '"2020-07-18T15:27:23"' },
                                { contWeek: '"2020-07-18T15:27:23"' },
                            ],
                            time: '45 min',
                            tecnica: [
                                { contTecnica: 'Juego didactico' },
                                { contTecnica: 'Sopa de letra' }
                            ],
                            recurso: [
                                { contRecurso: 'plastilina' },
                                { contRecurso: 'tijera' },
                                { contRecurso: 'lapiz' },
                                { contRecurso: 'borrador' },
                            ],
                            evaluacion: [
                                { contEvaluacion: 'participar en el juego "Conoce las capitales' },
                                { contEvaluacion: 'examen' },
                                { contEvaluacion: 'examen-oral' },
                            ],
                            title: 'Actividades',
                            checkList: [
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                { description: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                            ],
                            material: [
                                { link: 'https://binauraldev.com/ecommerce/' },
                                { link: 'https://binauraldev.com' }
                            ]
                        },
                    ],
                button: {
                    name: 'Guardar'
                },
                line: true
            }
        ]
    }
}

const tituloObjetivoGeneral = {
    component: 'textsbuttons',
    settings: {
        title: {
            aligning: 'left', // 'center' for center aligning, 'left' otherwise
            text: 'Geografia y Areas Naturales',
          }
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
                        title: "Lapso 1",
                        childBlocks: [
                            {
                                component: 'profiles',
                                settings: {
                                    items: [
                                        {
                                            childBlocks: [
                                                { ...tituloObjetivoGeneral }
                                            ]
                                        },
                                        {
                                            childBlocks: [
                                                {
                                                    component: 'accordion',
                                                    name: "lapse1Enviromental",
                                                    settings: {
                                                        items: [
                                                            {
                                                                title: "(estatico)Geografia de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Ecositemas de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Parque nacionales y monumentos naturales",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "Lapso 2",
                        childBlocks: [
                            {
                                component: 'profiles',
                                settings: {
                                    items: [
                                        {
                                            childBlocks: [
                                                {
                                                    component: 'accordion',
                                                    name: "lapse2Enviromental",
                                                    settings: {
                                                        items: [
                                                            {
                                                                title: "(estatico)Geografia de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Ecositemas de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Parque nacionales y monumentos naturales",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "Lapso 3",
                        childBlocks: [
                            {
                                component: 'profiles',
                                settings: {
                                    items: [
                                        {
                                            childBlocks: [
                                                { ...tituloObjetivoGeneral }
                                            ]
                                        },
                                        {
                                            childBlocks: [
                                                {
                                                    component: 'accordion',
                                                    name: "lapse3Enviromental",
                                                    settings: {
                                                        items: [
                                                            {
                                                                title: "(estatico)Geografia de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Ecositemas de Venezuela",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                            {
                                                                title: "(estatico)Parque nacionales y monumentos naturales",
                                                                childBlocks: [
                                                                    { ...infoGeneral }
                                                                ]
                                                            },
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
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

