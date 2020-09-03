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
  let currentSlider = slider;
  let currentStatus = currentSlider.length > 0 ? 2 : 1;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    const lastActivitiesPicturesRequest = approvalHistory[approvalHistory.length - 1];
    currentSlider = lastActivitiesPicturesRequest.detail.slider;
    currentStatus = +lastActivitiesPicturesRequest.status;
  }

  store.dispatch(new ClearSchoolActivitiesRequestData({}));
  currentSlider.map((image) => {
    store.dispatch(new AddImageToSchoolActivitiesRequestData({ image }));
  });

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
        console.log("school-pictures", image);
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
      modalCode: "dataTablaImagenesActividad",
      isFromCustomTableActions: true,
      isDeleting: true,
      makesNoRequest: true,
    },
  };

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
          hidden: isInApproval ? !activities_slider_delete : !activities_slider_edit,
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
