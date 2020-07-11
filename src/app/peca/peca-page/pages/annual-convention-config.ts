const checkList = {
    component: 'checkList',
    name: "AnnualConventionCheckLists",
    settings: {
        infoContainer: [
            {
                title: 'Convención anual',
                checkList: [
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' },
                    { description: 'Lorem, ipsum dolor.' }, 
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
