const genActStatus = {
  component: "textsbuttons",
  name: "genericActivityStatus",
  settings: {
    dateOrtext: {},
    status: {
      text: "Estatus",
      subText: 0,
    },
  },
};

const genericActivityFields = {
  component: "textsbuttons",
  name: "genericActivityFields",
  settings: {
    dateOrtext: {},
    download: {},
    subtitles: [],
    video: {},
    addMT: {},
    upload: null,
    activityUneditable: null,
    fetcherMethod: "put",
  },
};

const genericActivityChecklist = {
  component: "checkList",
  name: "genericActivityChecklist",
  settings: {
    infoContainer: [
      {
        datosNivel: [
          {
            isFromGenericActivity: true,
          },
        ],
      },
    ],
  },
};

const genericActivityActionButton = {
  component: "textsbuttons",
  name: "genericActivityActionButton",
  settings: {
    action: null,
    fetcherMethod: "put",
  },
};

export const GENERIC_ACTIVITY_CONFIG = {
  header: {
    title: "Actividad del lapso",
  },
  blocks: [
    {
      component: "genericactivity",
      name: "genericActivityConfig",
      settings: {
        items: [
          {
            childBlocks: [
              { ...genActStatus },
              { ...genericActivityFields },
              { ...genericActivityChecklist },
              { ...genericActivityActionButton },
            ],
          },
        ],
      },
    },
  ],
};
