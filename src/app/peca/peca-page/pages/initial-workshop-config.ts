import { RejectionCommentsCustomBlockModel } from "./custom-blocks-models/rejection-comments.blockmodel";
import {
  SetInitialWorkshopRequestData,
  RemoveImageFromInitialWorkshopRequestData,
  AddImageToInitialWorkshopRequestData,
  UpdateInitialWorkshopImages,
  CancelInitialWorkshopImages,
  ClearInitialWorkshopRequestData,
} from "./../../../store/actions/peca/peca.actions";
import { Store } from "@ngxs/store";
import { UpdateInitialWorkshop } from "src/app/store/actions/peca/peca.actions";
import { ToastrService } from "ngx-toastr";
import {
  formRegistroInicial,
  formPreparacionTallerInicial,
  formRegistroInicialModal,
} from "../blocks/form-block/all-forms";
import {
  requiredAndOnlyLettersAndNumbers,
  requiredAndNormalText,
  normalText,
} from "../../../web/shared/forms/custom-validators";
import { MESSAGES } from "../../../web/shared/forms/validation-messages";

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

const textsAndButtons = {
  component: "textsbuttons",
  name: "btnRegistroEnviarSolicitud",
  settings: {
    action: [
      {
        type: 1,
        name: "Enviar Solicitud",
      },
    ],
    receivesFromTableOrForm: "both",
    buttonCode: "initialWorkshopConfigRegistroTallerInicial",
    fetcherMethod: "post",
  },
};

const formTaller1 = {
  component: "form",
  name: "btnSolicitudPreparacionTallerInicial",
  settings: {
    formsContent: formPreparacionTallerInicial,
    buttons: ["guardar"],
    formType: "initialWorkshopConfigPreparacionTaller",
    fetcherMethod: "post",
    onSubmit: (data) => {
      // console.log("formPreparacionTallerInicial onSubmit", data);
    },
  },
};

const formTaller2 = {
  component: "form",
  settings: {
    formsContent: {
      title1: { label: "Resumen del taller inicial", type: "title" },
      normal: {
        label: "Descripción del taller inicial",
        placeholder: "Descripción del taller inicial",
        fullwidth: true,
        ...controlProps.normalTextAndRequired,
      },
      title4: { label: "Imágenes del taller inicial", type: "title" },
      imageGroup: {
        type: "image",
        fields: {
          imageDescription: {
            label: "Descripción de la imagen",
            placeholder: "Descripción de la imagen",
            fullwidth: false,
            ...controlProps.normalText,
          },
        },
      },
    },
    tableCode: "initialWorkshopConfigRegistroTallerInicial",
    buttonCode: "initialWorkshopConfigRegistroTallerInicial",
  },
};

// ! FOR TABLE COMPONENT TESTING----------
const registroTallerInicial = {
  component: "table",
  settings: {
    columns: {
      image: {
        title: "Imagen",
      },
      description: {
        title: "Descripción",
      },
      // state: {
      //   title: 'Estado',
      //   valuePrepareFunction: ( row: any ) => {
      //     if (row) return row == "1" ? 'Visible':'No visible';
      //     else return '';
      //   },
      //   filterFunction: (cell?: any, search?: string) => {
      //       let value: string = cell == "1" ? 'Visible':'No visible';
      //       value = value.toUpperCase();

      //       if (value.includes(search.toUpperCase()) || search === '') return true;
      //       else return false;
      //   }
      // },
      // status: {
      //   title: 'Estatus'
      // }
    },
    isFromImgContainer: true,
    modalCode: "initialWorkshopConfigRegistroTallerInicial",
    buttonCode: "initialWorkshopConfigRegistroTallerInicial",
    tableCode: "initialWorkshopConfigRegistroTallerInicial",
    initialWorkshopConfigRegistroTallerInicial: [
      {
        id: "1abcdefghijk",
        image: "imagen1.png",
        description: "descripcion 1",
        // state: '1',
        // status: 'Aprobado',
        source:
          "https://us.123rf.com/450wm/kchung/kchung1610/kchung161001155/64507708-futura-prueba-escrita-a-mano-escritura-de-la-mano-a-bordo-transparente-foto.jpg?ver=6",
        imageSelected: { name: "imagen prueba" },
      },
      {
        id: "2abcdefghijk",
        image: "imagen2.png",
        description: "descripcion 2",
        // state: '2',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: "3abcdefghijk",
        image: "imagen3.png",
        description: "descripcion 3",
        // state: '1',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: "4abcdefghijk",
        image: "imagen4.png",
        description: "descripcion 4",
        // state: '2',
        // status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
    ],
    makesNoRequest: true,
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
// !---------------------------------------------

//* MODAL ----------------------------------
const formRegistroTallerInicial = {
  component: "form",
  name: "tallerInicialForm",
  settings: {
    formsContent: formRegistroInicialModal,
    buttons: ["guardar"],
    formType: "imageContainerFormType",
    tableCode: "initialWorkshopConfigRegistroTallerInicial",
    modalCode: "initialWorkshopConfigRegistroTallerInicial",
    isFromCustomTableActions: true,
    makesNoRequest: true,
    fetcherMethod: "post",
  },
};
const textsAndButtonsRegistroTallerInicial = {
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
    modalCode: "initialWorkshopConfigRegistroTallerInicial",
    isFromCustomTableActions: true,
    isDeleting: true,
    makesNoRequest: true,
  },
};
const modalRegistroTallerInicial = {
  component: "modal",
  settings: {
    modalCode: "initialWorkshopConfigRegistroTallerInicial",
    isFromImgContainer: true,
    items: [
      {
        childBlocks: [
          { ...formRegistroTallerInicial },
          { ...textsAndButtonsRegistroTallerInicial },
        ],
      },
    ],
  },
};
//* ------------------------------------------

export const INITIAL_WORKSHOP_CONFIG = {
  header: {
    title: "Taller Inicial",
  },
  blocks: [
    {
      component: "tabs",
      settings: {
        items: [
          {
            title: "Preparación del taller",
            childBlocks: [{ ...formTaller1 }],
          },
          {
            title: "Registro inicial",
            childBlocks: [
              { ...formTaller2 },
              { ...registroTallerInicial },
              { ...textsAndButtons },
              { ...modalRegistroTallerInicial },
            ],
          },
        ],
      },
    },
  ],
};

export function initialWorkshopConfigMapper(
  initialWorkshop,
  lapseNumber,
  permissions,
  store: Store
) {
  const {
    isInApproval,
    approvalHistory,
    description,
    images,
    workshopPlace,
    workshopDate,
  } = initialWorkshop;
  const { initial_workshop_edit, initial_workshop_delete } = permissions;
  let currentImages = images;
  let currentDescription = description;
  let currentStatus = description && currentImages.length > 0 ? 2 : 1;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    const lastInApprovalRequest = approvalHistory[approvalHistory.length - 1];
    currentImages = lastInApprovalRequest.detail.images;
    currentDescription = lastInApprovalRequest.detail.description;
    currentStatus = +lastInApprovalRequest.status;
  }

  store.dispatch(new ClearInitialWorkshopRequestData({}));
  store.dispatch(
    new SetInitialWorkshopRequestData({
      description: currentDescription,
      images: currentImages,
    })
  );

  const preparingWorkshopForm = {
    component: "form",
    name: "preparingWorkshopForm",
    settings: {
      formsContent: {
        letterNumber: {
          label: "Registro del lugar de taller",
          placeholder: "Registro del lugar de taller",
          fullwidth: false,
          value: workshopPlace,
          ...controlProps.onlyLettersNumbersAndRequired,
        },
        date: {
          label: "Fecha del taller",
          placeholder: "Fecha del taller",
          fullwidth: false,
          value: workshopDate,
          specialDateForm: "dateForPreparingWorkshopForm",
          ...controlProps.dateAndRequired,
        },
      },
      data: {
        letterNumber: workshopPlace,
        date: workshopDate,
      },
      buttons: ["guardar"],
      hiddenButton: !initial_workshop_edit,
      formType: "preparingWorkshopForm",
      fetcherMethod: "post",
      onSubmit: (values) => {
        const data = {
          lapseNumber,
          ...values,
        };
        store.dispatch(new UpdateInitialWorkshop(data));
      },
    },
  };

  // const workshopContentStatus = {
  //   component: "textsbuttons",
  //   settings: {
  //     dateOrtext: {},
  //     status: {
  //       text: "Estatus2",
  //       subText: currentStatus,
  //     },
  //   },
  // };

  const workshopContentStatus = new RejectionCommentsCustomBlockModel(
    approvalHistory,
    isInApproval
  ).getSettings();

  const workshopContentForm = {
    component: "form",
    settings: {
      formsContent: {
        title1: { label: "Resumen del taller inicial", type: "title" },
        normal: {
          label: "Descripción del taller inicial",
          placeholder: "Descripción del taller inicial",
          fullwidth: true,
          ...controlProps.normalTextAndRequired,
          value: currentDescription,
        },

        title4: { label: "Imágenes del taller inicial", type: "title" },
        imageGroup: {
          type: "image",
          fields: {
            imageDescription: {
              label: "Descripción de la imagen",
              placeholder: "Descripción de la imagen",
              fullwidth: false,
              ...controlProps.normalText,
            },
          },
        },
      },
      onBlur: (event) => {
        const data = {
          description: event.target.value,
        };
        store.dispatch(new SetInitialWorkshopRequestData(data));
      },
      onAddImage: (image) => {
        const data = {
          description: image.description,
          image: image.source,
          id: image.id,
        };
        store.dispatch(new AddImageToInitialWorkshopRequestData(data));
      },
      tableCode: "initialWorkshopConfigRegistroTallerInicial",
      buttonCode: "initialWorkshopConfigRegistroTallerInicial",
    },
  };

  const workshopImagesTable = {
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
        description: {
          title: "Descripción",
        },
      },
      onDelete: (row) => {
        const imageSource = row.data.newData.source
          ? row.data.newData.source
          : row.data.newData.image;
        store.dispatch(
          new RemoveImageFromInitialWorkshopRequestData({ imageSource })
        );
      },
      isFromImgContainer: true,
      modalCode: "initialWorkshopConfigRegistroTallerInicial",
      buttonCode: "initialWorkshopConfigRegistroTallerInicial",
      tableCode: "initialWorkshopConfigRegistroTallerInicial",
      initialWorkshopConfigRegistroTallerInicial: currentImages.map((image) => {
        return {
          description: image.description,
          image: image.image,
        };
      }),
      makesNoRequest: true,
      classes: {
        hideView: true,
        hideEdit: true,
        hideDelete: false,
      },
    },
  };

  const submitInitialWorkshopRequest = {
    component: "textsbuttons",
    name: "btnRegistroEnviarSolicitud",
    settings: {
      action: [
        {
          extraData: { isToSendRequest: true },
          hidden: isInApproval
            ? !initial_workshop_delete
            : !initial_workshop_edit,
          name: isInApproval ? "Cancelar solicitud" : "Enviar solicitud",
        },
      ],
      onSubmit: (values) => {
        if (isInApproval) {
          store.dispatch(new CancelInitialWorkshopImages({ lapseNumber }));
        } else {
          store.dispatch(new UpdateInitialWorkshopImages({ lapseNumber }));
        }
      },
      receivesFromTableOrForm: "both",
      buttonCode: "initialWorkshopConfigRegistroTallerInicial",
    },
  };

  return {
    header: {
      title: "Taller Inicial",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Preparación del taller",
              childBlocks: [preparingWorkshopForm],
            },
            {
              title: "Registro inicial",
              childBlocks: [
                workshopContentStatus,
                workshopContentForm,
                workshopImagesTable,
                submitInitialWorkshopRequest,
                modalRegistroTallerInicial,
              ],
            },
          ],
        },
      },
    ],
  };
}
