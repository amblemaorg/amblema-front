import {
  RemoveTeacherInAnnualConvention,
  AddTeacherInAnnualConvention,
} from "src/app/store/actions/peca/peca.actions";

export function annualConventionPreparationConfigMapper(
  pecaContent,
  lapseNumber,
  updatedTeachers,
  permissions,
  store
) {
  const { annual_preparation_peca_edit } = permissions;
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
        const data = { teacherId: values.id, lapseNumber };
        store.dispatch(new AddTeacherInAnnualConvention(data));
      },
      btnGeneral: {
        hidden: !annual_preparation_peca_edit,
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
        hidden: true,
        hideDelete: !annual_preparation_peca_edit,
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
          hidden: !annual_preparation_peca_edit,
          name: "Si",
        },
        {
          type: 2,
          name: "No",
        },
      ],
      classes: "justify-content-center",
      onSubmit: (values) => {
        const data = { teacherId: values.data.newData.id, lapseNumber };
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
          childBlocks: [teachersDeleteForm],
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
              childBlocks: [annualConventionSignInStepper],
            },
            {
              title: "Preinscripción de docentes",
              active: updatedTeachers ? true : false,
              childBlocks: [teachersSelect, teachersTable, teachersModal],
            },
          ],
        },
      },
    ],
  };
}
