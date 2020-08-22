import { ApprovalHistory } from "./../../../models/peca/generic-activity.model";
import { tablaImagenesActividadModal } from "../blocks/form-block/all-forms";
import { Store } from "@ngxs/store";
import {
  AddImageToSchoolActivitiesRequestData,
  RemoveImageFromSchoolActivitiesRequestData,
  CancelSchoolActivitiesRequest,
  UpdateSchoolActivitiesRequest,
} from "src/app/store/actions/peca/peca.actions";
import {
  requiredAndNormalText,
  normalText,
  requiredAndOnlyLettersAndNumbers,
} from "src/app/web/shared/forms/custom-validators";
import { MESSAGES } from "src/app/web/shared/forms/validation-messages";

const controlProps = {
  normalTextAndRequired: {
    type: "text",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE },
  },
  normalText: {
    type: "text",
    validations: normalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE },
  },
  onlyLettersNumbersAndRequired: {
    type: "text",
    validations: requiredAndOnlyLettersAndNumbers,
    messages: { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE },
  },
  dateAndRequired: {
    type: "date",
    validations: { required: true },
  },
};

const selectEstatusActivity = {
  component: "textsbuttons",
  settings: {
    dateOrtext: {},
    status: {
      text: "Estatus",
      subText: 1,
    },
    btnGeneral: {
      addToTable: true,
      name: "Adjuntar foto",
    },
    modalCode: "dataTablaImagenesActividad",
  },
};
const botonAprobacionActivity = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 3,
        name: "Enviar solicitud",
      },
    ],
    receivesFromTableOrForm: "table",
    buttonCode: "dataTablaImagenesActividad",
  },
};

const tablaImagenesActivity = {
  component: "table",
  settings: {
    columns: {
      image: {
        title: "Imagen",
      },
    },
    isFromImgContainer: true,
    modalCode: "dataTablaImagenesActividad",
    buttonCode: "dataTablaImagenesActividad",
    tableCode: "dataTablaImagenesActividad",
    dataTablaImagenesActividad: [
      {
        id: "1efwef",
        image: "imagen",
        source: null,
        imageSelected: null,
      },
      {
        id: "2efwef",
        image: "imagen",
        source: null,
        imageSelected: null,
      },
    ],
    makesNoRequest: true,
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};

//* MODAL FOTOS DE LA Activiadad ----------------------------------
const formTablaImagenesActivity = {
  component: "form",
  viewMode: "both",
  settings: {
    formsContent: {
      imageGroup: {
        type: "image",
        fields: {
          /*imageDescription: {
            label: 'Descripción',
            placeholder: 'Descripción',
            fullwidth: false,
            ...controlProps.normalTextAndRequired,
          }
          */
        },
      },
    },
    buttons: ["guardar"],
    formType: "agregarImagenActividad",
    tableCode: "dataTablaImagenesActividad",
    modalCode: "dataTablaImagenesActividad",
    isFromCustomTableActions: true,
    makesNoRequest: true,
  },
};

const textsAndButtonsTablaImagenesActivity = {
  component: "textsbuttons",
  settings: {
    subtitles: [
      {
        text: "¿Desea eliminar este ítem?",
      },
    ],
    action: [
      {
        type: 1,
        name: "Si",
      },
      {
        type: 2,
        name: "No",
      },
    ],
    modalCode: "dataTablaImagenesActividad",
    isFromCustomTableActions: true,
    isDeleting: true,
    makesNoRequest: true,
  },
};
const modalTablaImagenesActivity = {
  component: "modal",
  settings: {
    modalCode: "dataTablaImagenesActividad",
    isFromImgContainer: true,
    items: [
      {
        childBlocks: [
          { ...formTablaImagenesActivity },
          { ...textsAndButtonsTablaImagenesActivity },
        ],
      },
    ],
  },
};
//* ------------------------------------------

export const SCHOOL_PICTURES_CONFIG = {
  header: {
    title: "Fotos de las actividades",
  },
  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            childBlocks: [
              { ...selectEstatusActivity },
              { ...tablaImagenesActivity },
              { ...botonAprobacionActivity },
              { ...modalTablaImagenesActivity },
            ],
          },
        ],
      },
    },
  ],
};

export function schoolActivitiesPicturesConfigMapper(activitiesPictures, store: Store) {
  const { isInApproval, approvalHistory, slider, status } = activitiesPictures;
  let currentSlider = slider;
  let currentStatus = currentSlider.length > 0 ? 2 : 1;
  if (isInApproval && approvalHistory.length > 0) {
    const lastActivitiesPicturesRequest = approvalHistory[approvalHistory.length - 1];
    currentSlider = lastActivitiesPicturesRequest.detail.slider;
    currentStatus = +lastActivitiesPicturesRequest.status;
  }

  const activityPicturesStatus = {
    component: "textsbuttons",
    settings: {
      dateOrtext: {},
      status: {
        text: "Estatus",
        subText: currentStatus,
      },
      btnGeneral: {
        addToTable: true,
        name: "Adjuntar foto",
      },
      modalCode: "dataTablaImagenesActividad",
    },
  };

  const activityPictureForm = {
    component: "form",
    //viewMode: "both",
    settings: {
      formsContent: {
        imageGroup: {
          type: "image",
          fields: {
            /* imageDescription: {
              label: "Descripción",
              placeholder: "Descripción",
              fullwidth: false,
              ...controlProps.normalTextAndRequired,
            }, */
          },
        },
      },
      onAddImage: (image) => {
        console.log("school-pictures", image);
        const data = {
          image: image.source,
        };
        store.dispatch(new AddImageToSchoolActivitiesRequestData(data));
      },
      //buttons: ["guardar"],
      //formType: "agregarImagenActividad",
      tableCode: "dataTablaImagenesActividad",
      modalCode: "dataTablaImagenesActividad",
      //isFromCustomTableActions: true,
      //makesNoRequest: true,
    },
  };

  const activityPictureModal = {
    component: "modal",
    settings: {
      modalCode: "dataTablaImagenesActividad",
      isFromImgContainer: true,
      items: [
        {
          childBlocks: [{ ...activityPictureForm }, { ...textsAndButtonsTablaImagenesActivity }],
        },
      ],
    },
  };

  const activitiesPicturesTable = {
    component: "table",
    settings: {
      columns: {
        image: {
          title: "Imagen",
          filter: false,
          type: "html",
          valuePrepareFunction: (img) => {
            return `<img src="${img}" width="50" height="50" />`;
          },
        },
      },
      isFromImgContainer: true,
      buttonCode: "dataTablaImagenesActividad",
      tableCode: "dataTablaImagenesActividad",
      modalCode: "dataTablaImagenesActividad",
      dataTablaImagenesActividad: currentSlider.map((image) => {
        return { image };
      }),
      onDelete: (row) => {
        const imageSource = row.data.newData.source;
        store.dispatch(new RemoveImageFromSchoolActivitiesRequestData({ imageSource }));
      },
      makesNoRequest: true,
      classes: {
        hideView: true,
        hideEdit: true,
        hideDelete: false,
      },
    },
  };

  const sendActivitiesPicturesRequest = {
    component: "textsbuttons",
    settings: {
      action: [
        {
          name: isInApproval ? "Cancelar solicitud" : "Enviar solicitud",
        },
      ],
      onSubmit: () => {
        if (isInApproval) {
          store.dispatch(new CancelSchoolActivitiesRequest());
        } else {
          store.dispatch(new UpdateSchoolActivitiesRequest());
        }
      },
      buttonCode: "dataTablaImagenesActividad",
    },
  };

  return {
    header: {
      title: "Fotos de las actividades",
    },
    blocks: [
      {
        component: "profiles",
        settings: {
          items: [
            {
              childBlocks: [
                { ...activityPicturesStatus },
                { ...activitiesPicturesTable },
                { ...sendActivitiesPicturesRequest },
                { ...activityPictureModal },
              ],
            },
          ],
        },
      },
    ],
  };
}
