import { Store } from "@ngxs/store";
import {
  AddImageToSchoolActivitiesRequestData,
  RemoveImageFromSchoolActivitiesRequestData,
  CancelSchoolActivitiesRequest,
  UpdateSchoolActivitiesRequest,
  ClearSchoolActivitiesRequestData,
} from "src/app/store/actions/peca/peca.actions";

export function schoolActivitiesPicturesConfigMapper(
  activitiesPictures,
  permissions,
  store: Store
) {
  const { isInApproval, approvalHistory, slider, status } = activitiesPictures;
  const { activities_slider_edit, activities_slider_delete } = permissions;
  let comments = "";
  let currentSlider = slider;
  let currentStatus = currentSlider.length > 0 ? 2 : 1;
  // console.log("APPROVAL HISTORY: ", approvalHistory);
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    const lastActivitiesPicturesRequest =
      approvalHistory[approvalHistory.length - 1];
    currentSlider = lastActivitiesPicturesRequest.detail.slider;
    currentStatus = +lastActivitiesPicturesRequest.status;
    comments = lastActivitiesPicturesRequest.comments;
  }

  store.dispatch(new ClearSchoolActivitiesRequestData({}));
  currentSlider.map((image) => {
    store.dispatch(new AddImageToSchoolActivitiesRequestData({ image }));
  });

  // Utilizado en activityPicturesStatus, para determinar si mostrar o no el botón ver mas y el comentario de rechazo
  const mostrarFeedback = (statusCode) => {
    return statusCode === 3;
  };

  // Texto de status de la aprobación de cambios, botón de ver mas y comentarios de rechazos
  const activityPicturesStatus = {
    component: "textsbuttons",
    settings: {
      dateOrtext: {},
      status: {
        text: "Estatus",
        subText: currentStatus,
        comments: comments,
      },
      action: mostrarFeedback(currentStatus)
        ? [
            {
              type: 9,
              name: "Ver más",
            },
          ]
        : [],
      btnGeneral: {
        addToTable: true,
        name: "Adjuntar foto",
      },
      modalCode: "dataTablaImagenesActividad",
    },
  };

  // ChildBlock of activityPictureModal, aparece al momento de agregar una imagen
  const activityPictureForm = {
    component: "form",
    settings: {
      formsContent: {
        imageGroup: {
          type: "image",
          fields: {
            /*
            imageDescription: {
              label: "Descripción",
              placeholder: "Descripción",
              fullwidth: false,
              ...controlProps.normalTextAndRequired,
            },
            */
          },
        },
      },
      onAddImage: (image) => {
        const data = {
          image: image.source,
        };
        store.dispatch(new AddImageToSchoolActivitiesRequestData(data));
      },
      tableCode: "dataTablaImagenesActividad",
      modalCode: "dataTablaImagenesActividad",
      //isFromCustomTableActions: true,
      //makesNoRequest: true,
    },
  };

  // ChildBlock of activityPictureModal, aparecer al momento de eliminar un imagen
  const activityPictureDeleteModal = {
    component: "textsbuttons",
    settings: {
      subtitles: [
        {
          text: "¿Desea eliminar esta imágen?",
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
      classes: "justify-content-center",
      modalCode: "dataTablaImagenesActividad",
      isFromCustomTableActions: true,
      isDeleting: true,
      makesNoRequest: true,
    },
  };

  // Modal para eliminar o agregar una imagen
  const activityPictureModal = {
    component: "modal",
    settings: {
      modalCode: "dataTablaImagenesActividad",
      isFromImgContainer: true,
      items: [
        {
          childBlocks: [activityPictureForm, activityPictureDeleteModal],
        },
      ],
    },
  };

  // Tabla con listado de imágenes
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
        const imageSource = row.data.newData.image
          ? row.data.newData.image
          : row.data.newData.source;
        store.dispatch(
          new RemoveImageFromSchoolActivitiesRequestData({ imageSource })
        );
      },
      makesNoRequest: true,
      classes: {
        hideView: true,
        hideEdit: true,
        hideDelete: false,
      },
    },
  };

  // Botones para cancelar o enviar solicitud de cambios en el listado de imágenes
  const sendActivitiesPicturesRequest = {
    component: "textsbuttons",
    settings: {
      action: [
        {
          extraData: { isDuplicated: true },
          hidden: false,
          // isInApproval
          //   ? !activities_slider_delete
          //   : !activities_slider_edit,
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
                activityPicturesStatus,
                activitiesPicturesTable,
                sendActivitiesPicturesRequest,
                activityPictureModal,
              ],
            },
          ],
        },
      },
    ],
  };
}
