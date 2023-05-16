import { RejectionCommentsCustomBlockModel } from "./custom-blocks-models/rejection-comments.blockmodel";
import {
  formTestimonioDocentesModal,
  formTestimonioDocentesModalEdit,
} from "../blocks/form-block/all-forms";
import { requiredAndNormalText } from "src/app/web/shared/forms/custom-validators";
import { MESSAGES } from "src/app/web/shared/forms/validation-messages";

const controlProps = {
  normalTextAndRequired: {
    type: "text",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE },
  },
  textareaNormalTextAndRequired: {
    type: "textarea",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE },
  },
  selectAndRequired: {
    type: "select",
    options: [],
    validations: { required: true },
  },
};

//* MODAL ----------------------------------
const formTestimonioDocenteTabla = {
  component: "form",
  name: "testimonyModalForm",
  viewMode: "edit",
  settings: {
    formsContent: formTestimonioDocentesModalEdit,
    buttons: ["guardar"],
    formType: "docenteTestimonioUpdate",
    tableCode: "dataTestimonioDocenteTabla",
    modalCode: "dataTestimonioDocenteTabla",
    isFromCustomTableActions: true,
    makesNoRequest: true,
    alwaysValidations: true,
  },
};
const formTestimonioDocenteTablaViewOnly = {
  component: "form",
  viewMode: "view",
  settings: {
    formsContent: formTestimonioDocentesModal,
    tableCode: "dataTestimonioDocenteTabla",
    modalCode: "dataTestimonioDocenteTabla",
    isFromCustomTableActions: true,
  },
};
const textsAndButtonsTestimonioDocenteTabla = {
  component: "textsbuttons",
  name: "testimonyDeleteModal",
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
    classes: "justify-content-center",
    modalCode: "dataTestimonioDocenteTabla",
    makesNoRequest: true,
    isFromCustomTableActions: true,
    isDeleting: true,
  },
};
const modalTestimonioDocenteTabla = {
  component: "modal",
  settings: {
    modalCode: "dataTestimonioDocenteTabla",
    isFromImgPlusContainer: true,
    items: [
      {
        childBlocks: [
          { ...formTestimonioDocenteTabla },
          { ...formTestimonioDocenteTablaViewOnly },
          { ...textsAndButtonsTestimonioDocenteTabla },
        ],
      },
    ],
  },
};

export function teacherTestimoniesConfigMapper(
  pecaContent,
  userId,
  permissions,
  store
) {
  const schoolId = pecaContent.project.school.id;
  const schoolTeachers = pecaContent.school.teachers;
  const teachersTestimonies = pecaContent.school.teachersTestimonials;
  const { approvalHistory, isInApproval, testimonials } = teachersTestimonies;
  const { teacher_testimonial_edit, teacher_testimonial_delete } = permissions;

  let currentTestimonies = testimonials;
  let currentStatus = testimonials.length > 0 ? 2 : 1;
  let lastTestimoniesRequest = null;
  if (isInApproval || (!isInApproval && approvalHistory.length > 0)) {
    lastTestimoniesRequest = approvalHistory[approvalHistory.length - 1];
    currentTestimonies = lastTestimoniesRequest.detail.testimonials;
    currentStatus =
      +lastTestimoniesRequest.status < 4 ? +lastTestimoniesRequest.status : 1;
  }

  const mostrarFeedback = (statusCode) => {
    return statusCode === 3;
  };

  const getComments = (
    approvalHistory,
    statusCode,
    checkIsThereComments = false
  ) => {
    const comments = approvalHistory[approvalHistory.length - 1].comments;

    if (checkIsThereComments) {
      return comments && statusCode == 3;
    }

    return comments;
  };

  const teacherTestimoniesStatus = new RejectionCommentsCustomBlockModel(
    approvalHistory,
    isInApproval
  ).getSettings();

  const teacherTestimonyForm = {
    component: "form",
    name: "pruebaDocentes",
    settings: {
      formsContent: {
        imageGroup: {
          type: "image",
          fields: {
            imageDocente: {
              label: "Seleccione el docente",
              placeholder: "Seleccione el docente",
              fullwidth: false,
              shouldContentRefresh: true,
              ...controlProps.selectAndRequired,
              options: schoolTeachers.map((teacher) => {
                const { id, firstName, lastName } = teacher;
                return {
                  id,
                  name: `${firstName} ${lastName}`,
                  lastName: `${lastName}`,
                };
              }),
            },
            imageCargo: {
              label: "Cargo",
              placeholder: "Cargo",
              fullwidth: false,
              ...controlProps.normalTextAndRequired,
            },
            imageDescription: {
              label: "Testimonio",
              placeholder: "Escribe el testimonio del docente",
              fullwidth: false,
              ...controlProps.textareaNormalTextAndRequired,
            },
          },
        },
      },
      tableCode: "dataTestimonioDocenteTabla",
      buttonCode: "dataTestimonioDocenteTabla",
      alwaysValidations: true,
    },
  };

  const teacherTestimoniesTable = {
    component: "table",
    name: "testimonyTable",
    settings: {
      columns: {
        name: {
          title: "Nombre",
        },
        lastName: {
          title: "Apellido",
        },
        cargo: {
          title: "Cargo",
        },
        description: {
          title: "Descripción",
          valuePrepareFunction: (row: any) => {
            if (row) return row.substring(0, 50) + "...";
          },
        },
      },
      isFromImgContainer: true,
      modalCode: "dataTestimonioDocenteTabla",
      buttonCode: "dataTestimonioDocenteTabla",
      tableCode: "dataTestimonioDocenteTabla",
      dataTestimonioDocenteTabla: currentTestimonies.map((testimony) => {
        const {
          id,
          teacherId,
          firstName,
          lastName,
          position,
          description,
          image,
        } = testimony;
        return {
          id: teacherId,
          name: firstName,
          lastName,
          cargo: position,
          description,
          source: image,
          imageSelected: null,
        };
      }),
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
    },
  };

  const teachersTestimonyTableModal = {
    component: "modal",
    settings: {
      modalCode: "dataTestimonioDocenteTabla",
      isFromImgPlusContainer: true,
      items: [
        {
          childBlocks: [
            formTestimonioDocenteTabla,
            formTestimonioDocenteTablaViewOnly,
            textsAndButtonsTestimonioDocenteTabla,
          ],
        },
      ],
    },
  };

  const sendTeacherTestimoniesRequest = {
    component: "textsbuttons",
    name: "sendTestimoniesRequest",
    settings: {
      action: [
        {
          extraData: { isDuplicated: isInApproval ? true : false },
          hidden: isInApproval
            ? !teacher_testimonial_delete
            : !teacher_testimonial_edit,
          type: isInApproval ? 9 : 1, // If it's 9 show two (ver mas y cancelar) else just enviar
          name: isInApproval ? "Cancelar Solicitud" : "Enviar Solicitud",
        },
      ],
      receivesFromTableOrForm: "table",
      buttonCode: "dataTestimonioDocenteTabla",
      fetcherMethod: "post",
      fetcherUrls: {
        post: `schools/teacherstestimonials/${schoolId}?userId=${userId}`,
        cancel: `requestscontentapproval/${
          lastTestimoniesRequest ? lastTestimoniesRequest.id : ""
        }`,
      },
    },
  };

  return {
    header: {
      title: "Testimonio de docentes",
    },
    blocks: [
      {
        component: "profiles",
        settings: {
          items: [
            {
              childBlocks: [
                teacherTestimoniesStatus,
                teacherTestimonyForm,
                teacherTestimoniesTable,
                sendTeacherTestimoniesRequest,
                modalTestimonioDocenteTabla,
              ],
            },
          ],
        },
      },
    ],
  };
}
