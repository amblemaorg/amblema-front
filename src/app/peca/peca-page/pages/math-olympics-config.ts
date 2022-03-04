import { ArrayHelper } from "./../../../helpers/array.helper";
import {
  UpdateStudentMathOlympics,
  RemoveStudentMathOlympics,
} from "./../../../store/actions/peca/peca.actions";
import { formResultadoEstudianteModal } from "../blocks/form-block/all-forms";
import { RegisterStudentMathOlympics } from "src/app/store/actions/peca/peca.actions";
import {
  requiredAndOnlyLetters,
  requiredAndNormalText,
} from "src/app/web/shared/forms/custom-validators";
import { MESSAGES } from "src/app/web/shared/forms/validation-messages";
import { DatePipe } from "@angular/common";
import { Store } from "@ngxs/store";
import { gradesAndSectionsDataToSectionsFormMapper } from "../mappers/teachers-in-sections-form-mappers";

const controlProps = {
  onlyLettersAndRequired: {
    type: "text",
    validations: requiredAndOnlyLetters,
    messages: { pattern: MESSAGES.ONLY_LETTERS_MESSAGE },
  },
  normalTextAndRequired: {
    type: "text",
    validations: requiredAndNormalText,
    messages: { pattern: MESSAGES.TEXT_MESSAGE },
  },
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

export function mathOlympicsConfigMapper(
  pecaData,
  lapseNumber,
  updatedStudents,
  permissions,
  store: Store,
  extraData?
) {
  // Processing data
  const { olympics_peca_create, olympics_peca_edit, olympics_peca_delete } =
    permissions;
  const datePipe = new DatePipe("en-US");
  const lapseName = `lapse${lapseNumber}`;
  const mathOlympics = pecaData[lapseName].olympics;
  const { students: olympicStudents, date, file, description } = mathOlympics;
  const dateFormatted = datePipe.transform(Date.parse(date), "dd/MM/yyyy");
  let downloadFile = {};
  if (file && file.url) {
    downloadFile = {
      url: file.url,
      name: file ? file.name : "",
    };
  }
  const olympicStudentsId = olympicStudents.map((student) => student.id);
  const schoolStudents = pecaData.school.sections.reduce(
    (studentsArray, section) => {
      const students = section.students.map((student) => {
        return {
          ...student,
          sectionId: section.id,
          section: section.name,
          grade: section.grade,
        };
      });
      return [...studentsArray, ...students];
    },
    []
  );
  const studentsNotInOlympics = schoolStudents.filter(
    ({ id }) => !olympicStudentsId.includes(id)
  );

  // Block components
  const olympicsSignIn = {
    component: "textsbuttons",
    name: "olimpiadasDateText",
    settings: {
      dateOrtext: {
        text: "Fecha de la prueba:",
        date: dateFormatted,
      },
      download: downloadFile,
      subtitles: [
        {
          text: description ? description : "",
        },
      ],
    },
  };
  const studentsSelect = {
    component: "textsbuttons",
    name: "selectStudents",
    settings: {
      selectStatus: {
        placeholder: "Selecciona el estudiante",
        lista: studentsNotInOlympics.map((student) => {
          const { id, firstName, lastName, sectionId, section, grade } =
            student;
          return {
            id,
            name: `${firstName} ${lastName}`,
            status: null,
            result: null,
            sectionId,
            grade,
            section,
          };
        }),
      },
      btnGeneral: {
        name: "Agregar estudiante",
        hidden: !olympics_peca_create,
      },
      onAddTable: (row) => {
        const data = {
          lapseNumber,
          studentId: row.id,
          sectionId: row.sectionId,
        };
        store.dispatch(new RegisterStudentMathOlympics(data));
      },
      buttonType: "agregarResultadoEstudiante",
      tableCode: "dataResultadoEstudiante",
    },
  };

  // ----
  console.log("pecaData", pecaData);
  console.log("lapseNumber", lapseNumber);
  console.log("updatedStudents", updatedStudents);
  console.log("permissions", permissions);

  // const getOptionsStudentsSelectModal = () => {
  //   const { sections } = gradesAndSectionsDataToSectionsFormMapper(
  //     pecaData.school
  //   );

  //   const gradesNames = {
  //     "0": "Preescolar",
  //     "1": "1er grado",
  //     "2": "2do grado",
  //     "3": "3er grado",
  //     "4": "4to grado",
  //     "5": "5to grado",
  //     "6": "6to grado",
  //   };

  //   const gradesOrdered = ArrayHelper.unique(sections, "grades").map(
  //     (option) => {
  //       return {
  //         name: gradesNames[option],
  //         id: option,
  //       };
  //     }
  //   );

  //   return [
  //     // {
  //     //   name: "Todos los grados",
  //     //   id: "-1",
  //     // },
  //     ...gradesOrdered,
  //   ];
  // };

  // console.log("getOptionsStudentsSelectModal", getOptionsStudentsSelectModal());

  const studentsSelectModal = {
    component: "form",
    name: "estudiantesPostForm",
    settings: {
      formId: "add-students-math-olympic-lots",
      extraData: { purpose: "agregarEstudiantesLotes" },
      formsContent: {
        gradesStudents: {
          label: "Seleccione el grado",
          placeholder: "Grados",
          fullwidth: false,
          isGrades: true,
          ...controlProps.selectAndRequired,
          options: [],
        },
      },
      buttons: ["agregarLotes"],
      // tableCode: "schoolDataConfigTablaEstudiante",
      formType: "buscarEstudiante",
      // isOneRow: true,
      data: {},
      fetcherMethod: "post",
      methodUrlPlus: "section",
      // tableRefreshName: "estudiantesTable",
    },
  };

  // ----

  const studentForm = {
    component: "form",
    name: "resultadoEstudianteModal",
    viewMode: "both",
    settings: {
      formsContent: {
        name: {
          label: "Nombre y Apellido",
          placeholder: "Nombre y Apellido",
          fullwidth: true,
          readonly: true,
          ...controlProps.onlyLettersAndRequired,
        },
        grade: {
          label: "Grados",
          placeholder: "Grados",
          fullwidth: false,
          readonly: true,
          ...controlProps.selectAndRequired,
          options: [
            { id: "1", name: "1er grado" },
            { id: "2", name: "2do grado" },
            { id: "3", name: "3er grado" },
            { id: "4", name: "4to grado" },
            { id: "5", name: "5to grado" },
            { id: "6", name: "6to grado" },
          ],
        },
        section: {
          label: "Sección",
          placeholder: "Sección",
          fullwidth: false,
          readonly: true,
          ...controlProps.normalTextAndRequired,
        },
        status: {
          label: "Estatus",
          placeholder: "Estatus",
          fullwidth: false,
          ...controlProps.selectAndRequired,
          options: [
            { id: "1", name: "Registrado" },
            { id: "2", name: "Clasificado" },
          ],
        },
        result: {
          label: "Resultado",
          placeholder: "Resultado",
          fullwidth: false,
          ...controlProps.select,
          options: [
            { id: "", name: "Sin Resultado" },
            { id: "1", name: "Oro" },
            { id: "2", name: "Plata" },
            { id: "3", name: "Bronce" },
          ],
        },
      },
      buttons: ["guardar"],
      formType: "agregarResultadoEstudiante",
      tableCode: "dataResultadoEstudiante",
      modalCode: "dataResultadoEstudiante",
      isFromCustomTableActions: true,
      fetcherMethod: "put",
      onSubmit: (values) => {
        const data = {
          lapseNumber,
          studentId: values.id,
          result: values.result,
          status: values.status,
        };
        store.dispatch(new UpdateStudentMathOlympics(data));
      },
    },
  };

  const studentsTable = {
    component: "table",
    name: "resultadoTabla",
    settings: {
      columns: {
        name: {
          title: "Nombre y Apellido",
        },
        grade: {
          title: "Grado",
          valuePrepareFunction: (row: any) => {
            const grade = formResultadoEstudianteModal.grade.options.find(
              (d) => {
                return d.id === row;
              }
            );
            if (row) {
              return `${grade ? grade.name : ""}`;
            } else {
              return "";
            }
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string = formResultadoEstudianteModal.grade.options.find(
              (d) => {
                return d.id === cell;
              }
            ).name;
            value = value.toUpperCase();

            if (value.includes(search.toUpperCase()) || search === "")
              return true;
            else return false;
          },
        },
        section: {
          title: "Sección",
        },
        status: {
          title: "Estatus",
          valuePrepareFunction: (row: any) => {
            if (row) return row == "1" ? "Registrado" : "Clasificado";
            else return "";
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string = cell == "1" ? "Registrado" : "Clasificado";
            value = value.toUpperCase();

            if (value.includes(search.toUpperCase()) || search === "")
              return true;
            else return false;
          },
        },
        result: {
          title: "Resultado",
          valuePrepareFunction: (row: any) => {
            switch (row) {
              case "1":
                return "Oro";
              case "2":
                return "Plata";
              case "3":
                return "Bronce";
              default:
                return "Sin Resultado";
            }
          },
          filterFunction: (cell?: any, search?: string) => {
            let value: string;
            switch (cell) {
              case "1":
                value = "Oro";
                break;
              case "2":
                value = "Plata";
                break;
              case "3":
                value = "Bronce";
                break;
              default:
                value = "";
            }
            value = value.toUpperCase();
            if (value.includes(search.toUpperCase()) || search === "")
              return true;
            else return false;
          },
        },
      },
      modalCode: "dataResultadoEstudiante",
      buttonCode: "dataResultadoEstudiante",
      tableCode: "dataResultadoEstudiante",
      dataResultadoEstudiante: olympicStudents.map((student) => {
        const { id, name, section, result, status } = student;
        return {
          id,
          name,
          section: section.name,
          grade: section.grade,
          result: result,
          status: status,
        };
      }),
      classes: {
        hideView: false,
        hideEdit: !olympics_peca_edit,
        hideDelete: !olympics_peca_delete,
      },
    },
  };

  const studentsDelete = {
    component: "textsbuttons",
    settings: {
      subtitles: [
        {
          text: "¿Desea eliminar este estudiante?",
        },
      ],
      action: [
        {
          hidden: !olympics_peca_delete,
          type: 1,
          name: "Si",
        },
        {
          type: 2,
          name: "No",
        },
      ],
      onSubmit: (values) => {
        const data = { lapseNumber, studentId: values.data.newData.id };
        store.dispatch(new RemoveStudentMathOlympics(data));
      },
      makesNoRequest: true,
      modalCode: "dataResultadoEstudiante",
      isFromCustomTableActions: true,
      isDeleting: true,
    },
  };

  const studentModal = {
    component: "modal",
    settings: {
      modalCode: "dataResultadoEstudiante",
      items: [
        {
          childBlocks: [studentForm, studentsDelete],
        },
      ],
    },
  };

  return {
    header: {
      title: "Olimpíada de Matemática",
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Proceso de inscripción",
              childBlocks: [olympicsSignIn],
            },
            {
              title: "Resultados",
              active: updatedStudents ? true : false,
              // childBlocks: [studentsSelect, studentsTable, studentModal],
              childBlocks: [studentsSelectModal, studentsTable, studentModal],
            },
          ],
        },
      },
    ],
  };
}
