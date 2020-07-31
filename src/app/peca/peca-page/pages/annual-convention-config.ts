const checkList = {
    component: 'checkList',
    name: "AnnualConventionCheckLists",
    settings: {
        infoContainer: [
            {
                datosNivel: [
                    {
                        title: 'Convención anual',
                        checkList: [
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
