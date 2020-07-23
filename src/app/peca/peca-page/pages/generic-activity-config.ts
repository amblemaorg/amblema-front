const genericActivityFields = {
    component: 'textsbuttons',
    name: 'genericActivityFields',
    settings: {
        dateOrtext: {},
        download: {},
        subtitles: [],
        video: {},
        addMT: {},
        upload: null,
        activityUneditable: null,
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

const genericActivityActionButton = {
    component: 'textsbuttons',
    name: 'genericActivityActionButton',
    settings: {
        action: null,
    }
}

export const GENERIC_ACTIVITY_CONFIG = {
    header: {
        title: "Actividad del lapso"
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
                            { ...genericActivityActionButton },
                        ]
                    },
                ],
            },
        },
    ],
};