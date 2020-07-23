                                                                 /* CONSUMIENDO DATOS */

export function EnviromentalMapper(data) {

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
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
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
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
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
    
    const ENVIRONMENTAL_PROJECT_CONFIG_TEST = {
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
                                                        settings: {
                                                            items: [
                                                                {
                                                                    title: "Geografia de Venezuela Libre",
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
                                                { ...tituloObjetivoGeneral }
                                            ]
                                        },
                                            {
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
    return ENVIRONMENTAL_PROJECT_CONFIG_TEST
    } 
                                                                 /* ESTO ESTA COMO EL CONFIG DE YANIOR */

/* export function EnviromentalMapper(data) {

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
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
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
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: 'Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
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
    
    const ENVIRONMENTAL_PROJECT_CONFIG_TEST = {
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
                                                        settings: {
                                                            items: [
                                                                {
                                                                    title: "Geografia de Venezuela Libre",
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
                                                { ...tituloObjetivoGeneral }
                                            ]
                                        },
                                            {
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
    return ENVIRONMENTAL_PROJECT_CONFIG_TEST
    }  */
    









                                                                 /* ESTO ESTA COMO EL CONFIG ORIGINAL */
/* export function EnviromentalMapper(data) {

    const infoGeneral1 = {
        component: 'checkList',
        name: 'ArrayInfo1',
        settings: {
            infoContainer: [
                {
                    principal:
                        [
                            {
                                tema: '(estatico)Geografia de Bolivar',
                                objetivo: [
                                    { conObjetivo: '(estatico)Conocer Veneuzela' },
                                    { conObjetivo: '(estatico)Conocer Lara' },
                                    { conObjetivo: '(estatico)Conocer Barquisimeto' }
                                ],
                                estrategia: [
                                    { contEstrategia: '(estatico)estrategia 1' },
                                    { contEstrategia: '(estatico)estrategia 2' },
                                    { contEstrategia: '(estatico)estrategia 3' }
                                ],
                                contenido: [
                                    { contContenido: '(estatico)Pruseba' },
                                    { contContenido: '(estatico)Probando' },
                                    { contContenido: '(estatico)Pruebita' }
                                ],
                            },
                        ],
                    datosNivel:
                        [
                            {
                                nivel: '(estatico)Primer grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: 'Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
                                nivel: '(estatico)Segundo grado',
                                week: [
                                    { contWeek: '(estatico)020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)46 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: 'Actividades',
                                checkList: [
                                    { name: '(estatico) Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
                                nivel: '(estatico)Sexto grado',
                                week: [
                                    { contWeek: '(estatico)020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)46 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: 'Actividades',
                                checkList: [
                                    { name: '(estatico) Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
    
    const infoGeneral2 = {
        component: 'checkList',
        name: 'ArrayInfo2',
        settings: {
            infoContainer: [
                {
                    principal:
                        [
                            {
                                tema: '(estatico)Geografia de Venezuela',
                                objetivo: [
                                    { conObjetivo: '(estatico)Cnada' },
                                    { conObjetivo: '(estatico)Coffffff' },
                                    { conObjetivo: '(estatico)Coffasdsdsds' }
                                ],
                                estrategia: [
                                    { contEstrategia: '(estatico)estrategia 1' },
                                    { contEstrategia: '(estatico)estrategia 2' },
                                    { contEstrategia: '(estatico)estrategia 3' }
                                ],
                                contenido: [
                                    { contContenido: '(estatico)Prueba' },
                                    { contContenido: '(estatico)Probando' },
                                    { contContenido: '(estatico)Pruebita' }
                                ],
                            },
                        ],
                    datosNivel:
                        [
                            {
                                nivel: '(estatico)Primer grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' },
                                    { contTecnica: '(estatico)Exposiciones' },
                                    { contTecnica: '(estatico)Bailes' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: 'Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
                                nivel: '(estatico)Tercer grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' },
                                    { contTecnica: '(estatico)Exposiciones' },
                                    { contTecnica: '(estatico)Bailes' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: '(estatico)Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
                                nivel: '(estatico)Cuarto grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' },
                                    { contTecnica: '(estatico)Exposiciones' },
                                    { contTecnica: '(estatico)Bailes' }
    
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: '(estatico)Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' },
                                    { link: '(estatico)https://binauraldev.com' }
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
    
    const infoGeneral3 = {
        component: 'checkList',
        name: 'ArrayInfo3',
        settings: {
            infoContainer: [
                {
                    principal:
                        [
                            {
                                tema: '(estatico)Geografia de Venezuela',
                                objetivo: [
                                    { conObjetivo: '(estatico)Conocer Veneuzela' },
                                    { conObjetivo: '(estatico)Conocer Lara' },
                                    { conObjetivo: '(estatico)Conocer Barquisimeto' }
                                ],
                                estrategia: [
                                    { contEstrategia: '(estatico)estrategia 1' },
                                    { contEstrategia: '(estatico)estrategia 2' },
                                    { contEstrategia: '(estatico)estrategia 3' }
                                ],
                                contenido: [
                                    { contContenido: '(estatico)Prueba' },
                                    { contContenido: '(estatico)Probando' },
                                    { contContenido: '(estatico)Pruebita' }
                                ],
                            },
                        ],
                    datosNivel:
                        [
                            {
                                nivel: '(estatico)Primer grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: 'Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' }
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
                                nivel: '(estatico)Cuarto grado',
                                week: [
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' },
                                    { contWeek: '(estatico)2020-07-18T15:27:23' }
                                ],
                                time: '(estatico)45 min',
                                tecnica: [
                                    { contTecnica: '(estatico)Juego didactico' },
                                    { contTecnica: '(estatico)Sopa de letra' }
                                ],
                                recurso: [
                                    { contRecurso: '(estatico)plastilina' },
                                    { contRecurso: '(estatico)tijera' },
                                    { contRecurso: '(estatico)lapiz' },
                                    { contRecurso: '(estatico)borrador' }
                                ],
                                evaluacion: [
                                    { contEvaluacion: '(estatico)participar en el juego "Conoce las capitales' },
                                    { contEvaluacion: '(estatico)examen' },
                                    { contEvaluacion: '(estatico)examen-oral' }
                                ],
                                title: '(estatico)Actividades',
                                checkList: [
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' },
                                    { name: '(estatico)Una semana antes, los docentes construiran un mapa base de Venezuela con sus divisiones y el nombre de los estados.' }
                                ],
                                material: [
                                    { link: '(estatico)https://binauraldev.com/ecommerce/' },
                                    { link: '(estatico)https://binauraldev.com' }
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
    
  
const tituloObjetivoGeneralLapse1 = {
    component: 'textsbuttons',
    name: "objetivoProyectoAmbiental1",
    settings: {
        title: {
            aligning: 'left', // 'center' for center aligning, 'left' otherwise
            text: 'Geografia',
          }
    }
}

const tituloObjetivoGeneralLapse2 = {
    component: 'textsbuttons',
    name: "objetivoProyectoAmbiental2",
    settings: {
        title: {
            aligning: 'left', // 'center' for center aligning, 'left' otherwise
            text: 'Areas Naturales',
          }
    }
}

const tituloObjetivoGeneralLapse3 = {
    component: 'textsbuttons',
    name: "objetivoProyectoAmbiental3",
    settings: {
        title: {
            aligning: 'left', // 'center' for center aligning, 'left' otherwise
            text: 'Subttitulo',
          }
    }
}
    const ENVIRONMENTAL_PROJECT_CONFIG_TEST = {
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
                                               
                                                    { ...tituloObjetivoGeneralLapse1 }
                                                ]
                                            },
                                            {
                                                childBlocks: [
                                                    {
                                                        component: 'accordion',
                                                        settings: {
                                                            items: [
                                                                {
                                                                    title: "Geografia de Venezuela Libre",
                                                                    childBlocks: [
                                                                    
                                                                        { ...infoGeneral1 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Ecositemas de Venezuela",
                                                                    childBlocks: [
                                                                        
                                                                        { ...infoGeneral2 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Parque nacionales y monumentos naturales",
                                                                    childBlocks: [
                                                                        
                                                                        { ...infoGeneral3 }
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
                                                { ...tituloObjetivoGeneralLapse2 }
                                            ]
                                        },
                                            {
                                                childBlocks: [
                                                    {
                                                        component: 'accordion',
                                                        settings: {
                                                            items: [
                                                                {
                                                                    title: "Geografia de Venezuela",
                                                                    childBlocks: [
                                                                     
                                                                        { ...infoGeneral1 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Ecositemas de Venezuela",
                                                                    childBlocks: [
                                                                       
                                                                        { ...infoGeneral2 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Parque nacionales y monumentos naturales",
                                                                    childBlocks: [
                                                                        
                                                                        { ...infoGeneral3 }
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
                                                    { ...tituloObjetivoGeneralLapse3 }
                                                ]
                                            },
                                            {
                                                childBlocks: [
                                                    {
                                                        component: 'accordion',
                                                        settings: {
                                                            items: [
                                                                {
                                                                    title: "Geografia de Venezuela",
                                                                    childBlocks: [
                                                                        
                                                                        { ...infoGeneral1 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Ecositemas de Venezuela",
                                                                    childBlocks: [
                                                                       
                                                                        { ...infoGeneral2 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "Parque nacionales y monumentos naturales",
                                                                    childBlocks: [
                                                                  
                                                                        { ...infoGeneral3 }
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
    return ENVIRONMENTAL_PROJECT_CONFIG_TEST
    } */


