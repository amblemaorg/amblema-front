import { formPreinscripcionDocenteModal } from "../blocks/form-block/all-forms";
import {
  RemoveTeacherInAnnualConvention,
  AddTeacherInAnnualConvention,
} from "src/app/store/actions/peca/peca.actions";

const preinscripcionDocente = {
  component: "textsbuttons",
  name: "teachersAnnualConventionSelect",
  settings: {
    selectStatus: {
      placeholder: "Selecciona el docente",
      lista: [
        {
          id: 1,
          FirstName: "Alfredo",
          lastName: "Valvuena",
          phone: "156456465",
          email: "vfhgdygt@ddd.com",
        },
        {
          id: 2,
          name: "Yanior",
          lastName: "Zambrano",
          phone: "5646465465",
          email: "cdhgdgd@dw.com",
        },
        {
          id: 3,
          name: "Jesus",
          lastName: "Amaro",
          phone: "564654",
          email: "hfdhydh@de.com",
        },
      ],
    },
    btnGeneral: {
      name: "Agregar docente",
    },
    buttonType: "agregarDocentePreinscripcion",
    tableCode: "dataPreinscripcionDocente",
    data: {},
  },
};

const btnGuardar = {
  component: "textsbuttons",
  name: "saveButtonAnnualPreparation",
  settings: {
    action: [
      {
        type: 1,
        name: "Guardar",
      },
    ],
    receivesFromTableOrForm: "table",
    buttonCode: "dataPreinscripcionDocente",
    fetcherMethod: "post",
  },
};

const stepperAnnual = {
  component: "stepper",
  name: "stepperAnnual",
  settings: {
    text1: {
      id: 1,
      text: "Paso 1 ",
      content: "",
      aligning: "center",
    },
    text2: {
      id: 2,
      text: "Paso 2 ",
      content: "",
      aligning: "center",
    },
    text3: {
      id: 3,
      text: "Paso 3 ",
      content: "",
      aligning: "center",
    },
    text4: {
      id: 4,
      text: "Paso 4 ",
      content: "",
      aligning: "center",
    },
  },
};

const tablaPreinscripcionDocente = {
  component: "table",
  name: "teachersAnnualConventionTable",
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido",
      },
      phone: {
        title: "Teléfono",
      },
      email: {
        title: "Correo",
      },
    },
    modalCode: "dataPreinscripcionDocente",
    buttonCode: "dataPreinscripcionDocente",
    tableCode: "dataPreinscripcionDocente",
    dataPreinscripcionDocente: [
      {
        id: "1abcdefghijk",
        name: "Jhon",
        lastName: "Week",
        phone: "235235235",
        email: "jhonw@hotmail.com",
      },
    ],
    classes: {
      hideView: false,
      hideEdit: true,
      hideDelete: false,
    },
  },
};
//* MODAL PREINSCRIPCION DOCENTE ----------------------------------
const formTablaPreinscripcionDocente = {
  component: "form",
  viewMode: "both",
  settings: {
    formsContent: formPreinscripcionDocenteModal,
    buttons: ["guardar"],
    formType: "agregarDocentePreinscripcion",
    tableCode: "dataPreinscripcionDocente",
    modalCode: "dataPreinscripcionDocente",
    isFromCustomTableActions: true,
  },
};
const textsAndButtonsTablaPreinscripcionDocente = {
  component: "textsbuttons",
  name: "annualConventionDeleteModal",
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
    modalCode: "dataPreinscripcionDocente",
    isFromCustomTableActions: true,
    isDeleting: true,
    fetcherMethod: "delete",
  },
};

const modalTablaPreinscripcionDocente = {
  component: "modal",
  settings: {
    modalCode: "dataPreinscripcionDocente",
    items: [
      {
        childBlocks: [
          { ...formTablaPreinscripcionDocente },
          { ...textsAndButtonsTablaPreinscripcionDocente },
        ],
      },
    ],
  },
};
//* ------------------------------------------

export const ANNUAL_CONVENTION_PREPARATION_CONFIG = {
  header: {
    title: "Preparación de la convención anual",
  },
  blocks: [
    {
      component: "tabs",
      settings: {
        items: [
          {
            title: "Proceso de inscripción",
            childBlocks: [{ ...stepperAnnual }],
          },
          {
            title: "Preinscripción de docentes",
            childBlocks: [
              { ...preinscripcionDocente },
              { ...tablaPreinscripcionDocente },
              { ...btnGuardar },
              { ...modalTablaPreinscripcionDocente },
            ],
          },
        ],
      },
    },
  ],
};

export function annualConventionPreparationConfigMapper(
  pecaContent,
  lapseNumber,
  updatedTeachers,
  store
) {
  const lapseName = `lapse${lapseNumber}`;
  const { annualPreparation } = pecaContent[lapseName];
  const { teachers: schoolTeachers } = pecaContent.school;
  const {
    step1Description,
    step2Description,
    step3Description,
    step4Description,
    teachers: conventionTeachers,
  } = annualPreparation;
  const conventionTeachersId = conventionTeachers.map(({ id }) => id);
  const teachersNotInConvention = schoolTeachers.filter(
    ({ id }) => !conventionTeachersId.includes(id)
  );
  const annualConventionSignInStepper = {
    component: "stepper",
    name: "stepperAnnual",
    settings: {
      text1: {
        id: 1,
        text: "Paso 1 ",
        content: step1Description ? step1Description : "",
        aligning: "center",
      },
      text2: {
        id: 2,
        text: "Paso 2 ",
        content: step2Description ? step2Description : "",
        aligning: "center",
      },
      text3: {
        id: 3,
        text: "Paso 3 ",
        content: step3Description ? step3Description : "",
        aligning: "center",
      },
      text4: {
        id: 4,
        text: "Paso 4 ",
        content: step4Description ? step4Description : "",
        aligning: "center",
      },
    },
  };

  const teachersSelect = {
    component: "textsbuttons",
    name: "teachersAnnualConventionSelect",
    settings: {
      selectStatus: {
        placeholder: "Selecciona el docente",
        lista: teachersNotInConvention.map((teacher) => {
          const { id, firstName, lastName, phone, email } = teacher;
          return {
            id,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            phone,
            email,
          };
        }),
      },
      onAddTable: (values) => {
        const data = { teacherId: values.id };
        store.dispatch(new AddTeacherInAnnualConvention(data));
      },
      btnGeneral: {
        name: "Agregar docente",
      },
      buttonType: "agregarDocentePreinscripcion",
      tableCode: "dataPreinscripcionDocente",
      data: {},
    },
  };

  const teachersTable = {
    component: "table",
    name: "teachersAnnualConventionTable",
    settings: {
      columns: {
        name: {
          title: "Nombre",
        },
        lastName: {
          title: "Apellido",
        },
        phone: {
          title: "Teléfono",
        },
        email: {
          title: "Correo",
        },
      },
      modalCode: "dataPreinscripcionDocente",
      buttonCode: "dataPreinscripcionDocente",
      tableCode: "dataPreinscripcionDocente",
      dataPreinscripcionDocente: conventionTeachers.map((teacher) => {
        const { id, firstName, lastName, phone, email } = teacher;
        return {
          id,
          name: firstName,
          lastName,
          phone,
          email,
        };
      }),
      classes: {
        hideView: true,
        hideEdit: true,
        hideDelete: false,
      },
    },
  };

  const teachersDeleteForm = {
    component: "textsbuttons",
    name: "annualConventionDeleteModal",
    settings: {
      subtitles: [
        {
          text: "¿Desea eliminar este docente?",
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
      onSubmit: (values) => {
        const data = { teacherId: values.data.newData.id };
        store.dispatch(new RemoveTeacherInAnnualConvention(data));
      },
      makesNoRequest: true,
      modalCode: "dataPreinscripcionDocente",
      isFromCustomTableActions: true,
      isDeleting: true,
    },
  };

  const teachersModal = {
    component: "modal",
    settings: {
      modalCode: "dataPreinscripcionDocente",
      items: [
        {
          childBlocks: [{ ...teachersDeleteForm }],
        },
      ],
    },
  };

  return {
    header: {
      title: "Preparación de la convención anual",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Proceso de inscripción",
              childBlocks: [{ ...annualConventionSignInStepper }],
            },
            {
              title: "Preinscripción de docentes",
              active: updatedTeachers ? true : false,
              childBlocks: [{ ...teachersSelect }, { ...teachersTable }, { ...teachersModal }],
            },
          ],
        },
      },
    ],
  };
}
