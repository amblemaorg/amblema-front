const pageUnderConstructionText = {
    component: 'textsbuttons',
    settings: {
        title: {
            aligning: 'left',
            text: 'Página de actividad genérica en construcción',
        },
    }
}

export const GENERIC_ACTIVITY_CONFIG = {
    header: {
        title: "Actividad genérica"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {                
                items: [
                    {     
                        childBlocks: [
                            { ...pageUnderConstructionText },                            
                        ]
                    },
                ],
            },
        },
    ]
}
