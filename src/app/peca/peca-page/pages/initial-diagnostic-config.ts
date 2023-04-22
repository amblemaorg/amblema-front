import {
  formLecturaModal,
  formMatematicaModal,
} from "../blocks/form-block/all-forms";
import { parseDate } from "../functions/parse-date";

/*Boton estadistica Lectura y modal con grafica*/
const botonEstadisticaLectura = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 5,
        name: "Ver estadísticas",
      },
    ],
    modalCode: "dataModalEstadisticasLectura",
  },
};

const estadisticaLectura = {
  component: "graphics",
  settings: {
    chartId: "estadisticaLectura",
    items: [],
  },
};

const modalEstadisticasLectura = {
  component: "modal",
  settings: {
    modalCode: "dataModalEstadisticasLectura",
    isNotTableEditing: true,
    items: [
      {
        childBlocks: [{ ...estadisticaLectura }],
      },
    ],
  },
};

/*Boton estadistica matematica y modales*/
const botonEstadisticaMatematica = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 5,
        name: "Ver estadísticas",
      },
    ],
    modalCode: "dataModalEstadisticasMatematica",
  },
};
/***************************** */

const prueba2 = {
  component: "graphics-logic",
  settings: {
    chartId: "estadisticaLogica",
    items: [],
  },
};

/******************************** */

const estadisticaMatematica = {
  component: "graphics-mathe",
  settings: {
    chartId: "estadisticaMatematica",
    items: [],
  },
};

const modalEstadisticasMatematica = {
  component: "modal",
  settings: {
    modalCode: "dataModalEstadisticasMatematica",
    isNotTableEditing: true,
    items: [
      {
        childBlocks: [{ ...estadisticaMatematica }, { ...prueba2 }],
      },
    ],
  },
};
/*Fin de botones y modales */
const readingDiagnosticTable = {
  component: "table",
  name: "readingTable",
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido",
      },
      gender: {
        title: "Género",
        valuePrepareFunction: (row: any) => {
          if (row) return row == "1" ? "Femenino" : "Masculino";
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == "1" ? "Femenino" : "Masculino";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      grade: {
        title: "Grado",
        valuePrepareFunction: (row: any) => {
          if (row)
            return formLecturaModal.grade.options.find((d) => {
              return d.id === row;
            }).name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = formLecturaModal.grade.options.find((d) => {
            return d.id === cell;
          }).name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      section: {
        title: "Sección",
        /* valuePrepareFunction: (row: any) => {
          if (row)
            return row.name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        } */
      },
      date: {
        title: "Fecha resultado de lectura",
        valuePrepareFunction: (row: any) => {
          if (row) return parseDate(new Date(row)).replace(/-/g, "/");
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = parseDate(new Date(cell)).replace(/-/g, "/");
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
        compareFunction: (direction, a, b) => {
          let first = new Date(a);
          let second = new Date(b);

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        },
      },
      result: {
        title: "Resultado de lectura ",
      },
      index: {
        title: "Índice",
      },
    },
    modalCode: "initialDiagnosticConfigLectura",
    tableCode: "initialDiagnosticConfigLectura",
    initialDiagnosticConfigLectura: [
      /* {
        id: "1abcdefghijk",
        name: "Alfredo manuel",
        lastName: "Valbuena",
        gender: "2",
        grade: "4",
        section: "B",
        date: "20/10/2020",
        result: "20 palabras correctas/min",
        index: 1
      },
      {
        id: "2abcdefghijk",
        name: "Stephanie danniela",
        lastName: "Perez",
        gender: "2",
        grade: "5",
        section: "A",
        date: "20/05/2020",
        result: "20 palabras correctas/min",
        index: 2
      } */
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL LECTURA ----------------------------------
const formReadingDiagnosticTable = {
  component: "form",
  name: "readingModalForm",
  viewMode: "both",
  settings: {
    formsContent: formLecturaModal,
    buttons: ["guardar"],
    formType: "tablaLectura",
    tableCode: "initialDiagnosticConfigLectura",
    modalCode: "initialDiagnosticConfigLectura",
    isFromCustomTableActions: true,
    fetcherMethod: "post",
  },
};

const textsAndButtonsReadingDiagnosticTable = {
  component: "textsbuttons",
  name: "readingDeleteModal",
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
    modalCode: "initialDiagnosticConfigLectura",
    isFromCustomTableActions: true,
    isDeleting: true,
    fetcherMethod: "delete",
  },
};
const modalReadingDiagnosticTable = {
  component: "modal",
  settings: {
    modalCode: "initialDiagnosticConfigLectura",
    items: [
      {
        childBlocks: [
          { ...formReadingDiagnosticTable },
          { ...textsAndButtonsReadingDiagnosticTable },
        ],
      },
    ],
  },
};
//* ------------------------------------------

const mathDiagnosticTable = {
  component: "table",
  name: "mathTable",
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido",
      },
      gender: {
        title: "Género",
        valuePrepareFunction: (row: any) => {
          if (row) return row == "1" ? "Femenino" : "Masculino";
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == "1" ? "Femenino" : "Masculino";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      grade: {
        title: "Grado",
        valuePrepareFunction: (row: any) => {
          if (row)
            return formMatematicaModal.grade.options.find((d) => {
              return d.id === row;
            }).name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = formMatematicaModal.grade.options.find((d) => {
            return d.id === cell;
          }).name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      section: {
        title: "Sección",
      },

      date: {
        title: "Fecha resultado de multiplicación",
        valuePrepareFunction: (row: any) => {
          if (row) return parseDate(new Date(row));
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = parseDate(new Date(cell));
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
        compareFunction: (direction, a, b) => {
          let first = new Date(a);
          let second = new Date(b);

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        },
      },

      resultMul: {
        title: "Resultado de multiplicación",
      },
      dateLog: {
        title: "Fecha resultado de lógica matemática",
        valuePrepareFunction: (row: any) => {
          if (row) return parseDate(new Date(row));
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = parseDate(new Date(cell));
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
        compareFunction: (direction, a, b) => {
          let first = new Date(a);
          let second = new Date(b);

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        },
      },
      resultLog: {
        title: "Resultado de lógica matemática",
      },
      indexMul: {
        title: "Índice de multiplicación",
      },
      indexLog: {
        title: "Índice de lógica matemática",
      },
    },
    modalCode: "initialDiagnosticConfigMatematica",
    tableCode: "initialDiagnosticConfigMatematica",
    initialDiagnosticConfigMatematica: [
      // {
      //   id: "1abcdefghijk",
      //   name: "Alfredo manuel",
      //   lastName: "Valbuena",
      //   gender: "2",
      //   grade: "5",
      //   section: "B",
      //   date: "27/06/2020",
      //   resultMul: 40,
      //   dateLog: "23/06/2020",
      //   resultLog: 50,
      //   indexMul: 100,
      //   indexLog: 29,
      // },
      // {
      //   id: "2abcdefghijk",
      //   name: "Stephanie Danniela",
      //   lastName: "Torres",
      //   gender: "1",
      //   grade: "4",
      //   section: "A",
      //   date: "27/06/2020",
      //   resultMul: 60,
      //   dateLog: "23/06/2020",
      //   resultLog: 80,
      //   indexMul: 100,
      //   indexLog: 29,
      // },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL MATEMATICA ----------------------------------
const formMathDiagnosticTable = {
  component: "form",
  name: "mathModalForm",
  viewMode: "both",
  settings: {
    specialValidateSaveButton: true,
    formsContent: formMatematicaModal,
    buttons: ["guardar"],
    formType: "tablaMatematica",
    tableCode: "initialDiagnosticConfigMatematica",
    modalCode: "initialDiagnosticConfigMatematica",
    isFromCustomTableActions: true,
    fetcherMethod: "post",
  },
};
const textsAndButtonsMathDiagnosticTable = {
  component: "textsbuttons",
  name: "mathDeleteModal",
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
    modalCode: "initialDiagnosticConfigMatematica",
    isFromCustomTableActions: true,
    isDeleting: true,
    fetcherMethod: "delete",
  },
};
const modalMathDiagnosticTable = {
  component: "modal",
  settings: {
    modalCode: "initialDiagnosticConfigMatematica",
    items: [
      {
        childBlocks: [
          { ...formMathDiagnosticTable },
          { ...textsAndButtonsMathDiagnosticTable },
        ],
      },
    ],
  },
};
//* ------------------------------------------

export const INITIAL_DIAGNOSTIC_CONFIG = {
  header: {
    title: "Diagnóstico",
  },
  blocks: [
    {
      component: "tabs",
      settings: {
        items: [
          {
            title: "Lectura",
            childBlocks: [
              { ...botonEstadisticaLectura },
              { ...readingDiagnosticTable },
              { ...modalReadingDiagnosticTable },
              { ...modalEstadisticasLectura },
            ],
          },
          {
            title: "Matemática",
            childBlocks: [
              { ...botonEstadisticaMatematica },
              { ...mathDiagnosticTable },
              { ...modalMathDiagnosticTable },
              { ...modalEstadisticasMatematica },
            ],
          },
        ],
      },
    },
  ],
};
