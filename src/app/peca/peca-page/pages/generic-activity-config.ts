const genericActivityFields = {
    component: 'textsbuttons',
    name: 'genericActivityFields',
    settings: {
        dateOrtext: {},
        download: {},
        subtitles: [],
        video: {},
        addMT: {},
    }
}

const genericActivityChecklist = {
    component: 'checkList',
    name: 'genericActivityChecklist',
    settings: {
        infoContainer: [
            {   
                isFromGenericActivity: true,                
            }
        ]
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
                            { ...genericActivityFields },
                            { ...genericActivityChecklist },                         
                        ]
                    },
                ],
            },
        },
    ],
};