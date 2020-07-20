const genericActivityText = {
    component: 'textsbuttons',
    name: 'genericActivityText',
    settings: {
        subtitles: [],
    }
}

export const GENERIC_ACTIVITY_CONFIG = {
    header: {
        title: "Actividad genérica"
    },
    blocks: [
        {
            component: 'genericactivity',
            name: 'genericActivityConfig',
            settings: {                
                items: [
                    {     
                        childBlocks: [
                            { ...genericActivityText },                            
                        ]
                    },
                ],
            },
        },
    ],
};