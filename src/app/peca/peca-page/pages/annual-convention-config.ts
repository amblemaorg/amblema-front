const checkList = {
    component: 'checkList',
    settings: {
        infoContainer: [
            {
                datosNivel: [
                    {
                        title: 'Convención anual',
                        checkList: [
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                            { name: 'Lorem, ipsum dolor.' },
                        ],
                    }
                ],
                button: {
                    name: 'Guardar'
                },
            }
        ]
    }
}
export const ANNUAL_CONVENTION_CONFIG = {
    header: {
        title: "Convención anual"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {
                items: [
                    {

                        childBlocks: [
                            { ...checkList }
                        ]
                    },

                ]
            }
        }
    ]
}
