import { lapsePlanningPermissionsI } from './../blocks/peca-permissology';
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

export function schedulingPlanningConfigMapper(
  schedulingPlanning,
  lapseNumber,
  permissions,
  store: Store
) {
  const {
    proposalFundationDescription,
    proposalFundationFile,
    meetingDate,
    meetingDescription,
    status,
    attachedFile,
    isInApproval,
    approvalHistory,
  } = schedulingPlanning;
  const { lapse_planning_peca_edit, lapse_planning_peca_delete } = permissions;
  const meetingDateFormatted = meetingDate ? meetingDate.split("T")[0] : null;
  const meetingStatus = status ? +status : 1;
  let currentAttachedFile = attachedFile;
  let currentFileStatus = attachedFile ? 2 : 1;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
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
          hidden: isInApproval ? !lapse_planning_peca_delete : !lapse_planning_peca_edit,
          name: isInApproval ? "Cancelar solicitud" : "Enviar",
        },
      ],
      download: {
        url: proposalFundationFile ? proposalFundationFile.url : "",
        name: proposalFundationFile ? proposalFundationFile.name : "",
      },
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
            specialDateForm: "dateForReunionAprobacionSet",
            dateForReunionAprobacionSetDay: null,
            dateForReunionAprobacionSetMonth: null,
            dateForReunionAprobacionSetYear: null,
            dateForReunionAprobacionSetInactiveInput: null,
            theWholeDate: meetingDate ? meetingDate : null,
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
          hidden: !lapse_planning_peca_edit,
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
      title: "Planificación de Lapso",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Propuesta a fundación AmbLeMa",
              childBlocks: [proposal],
            },
            {
              title: "Reunión y aprobación de la escuela",
              childBlocks: [reunionAprobacionSet, btnGuardarReunion],
            },
          ],
        },
      },
    ],
  };
}
