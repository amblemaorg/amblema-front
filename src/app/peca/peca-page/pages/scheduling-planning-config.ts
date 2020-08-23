import { Store } from "@ngxs/store";
import {
  SetLapsePlanningRequestData,
  UpdateLapsePlanningDateAndStatus,
  UpdateLapsePlanningFile,
  CancelLapsePlanningFile,
} from "src/app/store/actions/peca/peca.actions";

const controlProps = {
  dateAndRequired: {
    type: "date",
    validations: { required: true },
  },
  date: {
    type: "date",
    validations: { required: false },
  },
  selectAndRequired: {
    type: "select",
    options: [],
    validations: { required: true },
  },
  select: {
    type: "select",
    options: [],
    validations: { required: false },
  },
};

const btnGuardarReunion = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 1,
        name: "Guardar",
      },
    ],
  },
};

const propuestaAmblema = {
  component: "textsbuttons",
  name: "propuestaAmblema",
  settings: {
    dateOrtext: {},
    status: {
      text: "Estatus",
      //subText: 1
    },
    subtitles: [
      {
        text: "",
      },
    ],
    action: [
      {
        type: 3,
        name: "Enviar",
      },
    ],
    upload: {
      /* url: "#",
            name: 'Adjuntar archivo',
            file: null, */
    },
  },
};

export const SCHEDULING_PLANNING_CONFIG = {
  header: {
    title: "Planificación del lapso",
  },
  blocks: [
    {
      component: "tabs",
      settings: {
        items: [
          {
            title: "Propuesta a fundación AmbLeMa",
            childBlocks: [{ ...propuestaAmblema }],
          },
          {
            title: "Reunión y aprobación de la escuela",
            childBlocks: [
              /* { ...reunionAprobacionSet }, { ...btnGuardarReunion } */
            ],
          },
        ],
      },
    },
  ],
};

export function schedulingPlanningConfigMapper(schedulingPlanning, lapseNumber, store: Store) {
  const {
    proposalFundationDescription,
    meetingDate,
    meetingDescription,
    status,
    attachedFile,
    isInApproval,
    approvalHistory,
  } = schedulingPlanning;

  const meetingDateFormatted = meetingDate ? meetingDate.split("T")[0] : null;
  const meetingStatus = status ? +status : 1;
  let currentAttachedFile = attachedFile;
  let currentFileStatus = 1;
  approvalHistory.map((request) => {
    if (
      request.detail.attachedFile &&
      attachedFile &&
      request.detail.attachedFile.name === attachedFile.name
    ) {
      currentFileStatus = +request.status;
    }
  });
  if (isInApproval && approvalHistory.length > 0) {
    const lastFileRequest = approvalHistory[approvalHistory.length - 1];
    currentAttachedFile = lastFileRequest.detail.attachedFile;
    currentFileStatus = lastFileRequest.status ? +lastFileRequest.status : currentFileStatus;
  }

  const proposal = {
    component: "textsbuttons",
    name: "proposal",
    settings: {
      dateOrtext: {},
      status: {
        text: "Estatus",
        subText: currentFileStatus,
      },
      subtitles: [
        {
          text: proposalFundationDescription,
        },
      ],
      action: [
        {
          name: isInApproval ? "Cancelar solicitud" : "Enviar",
        },
      ],
      upload: currentAttachedFile
        ? {
            name: currentAttachedFile.name,
            url: currentAttachedFile.url,
            uploadEmpty: false,
          }
        : {
            name: "Adjuntar archivo",
            file: null,
            url: "#",
            uploadEmpty: true,
          },
      onFileUpload: (file) => {},
      onSubmit: (values) => {
        if (isInApproval) {
          store.dispatch(new CancelLapsePlanningFile({ lapseNumber }));
        } else {
          store.dispatch(new UpdateLapsePlanningFile({ file: values.file, lapseNumber }));
        }
      },
    },
  };

  const reunionAprobacionSet = {
    component: "textsbuttons",
    name: "reunionAmblema",
    settings: {
      onDateChange: (date: string) => {
        store.dispatch(new SetLapsePlanningRequestData({ date }));
      },
      dateOrtext: {
        text: "Fecha de la reunión:",
        fields: [
          {
            label: "Input date",
            placeholder: "Fecha de la reunión",
            fullwidth: false,
            ...controlProps.dateAndRequired,
            value: meetingDateFormatted,
          },
        ],
      },
      onStatusChange: (event) => {
        store.dispatch(new SetLapsePlanningRequestData({ status: `${event.id}` }));
      },
      selectGeneralStatus: {
        text: "Modificar estatus:",
        lista: [
          { id: 1, name: "Por completar" },
          { id: 2, name: "Completado" },
        ],
        value: meetingStatus,
        placeholder: "Por completar",
      },
      subtitles: [
        {
          text: meetingDescription,
        },
      ],
    },
  };

  const btnGuardarReunion = {
    component: "textsbuttons",
    settings: {
      action: [
        {
          name: "Guardar",
        },
      ],
      onSubmit: (values) => {
        store.dispatch(new UpdateLapsePlanningDateAndStatus({ lapseNumber }));
      },
    },
  };

  return {
    header: {
      title: "Planificación del lapso",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Propuesta a fundación AmbLeMa",
              childBlocks: [{ ...proposal }],
            },
            {
              title: "Reunión y aprobación de la escuela",
              childBlocks: [{ ...reunionAprobacionSet }, { ...btnGuardarReunion }],
            },
          ],
        },
      },
    ],
  };
}
