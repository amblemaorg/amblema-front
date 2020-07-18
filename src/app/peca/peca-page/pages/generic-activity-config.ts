const genericActivityText = {
    component: 'textsbuttons',
    name: 'genericActivityText',
    settings: {
        dateOrtext: {},
        download: {},
        subtitles: [],
        video: {},
        addMT: {},
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