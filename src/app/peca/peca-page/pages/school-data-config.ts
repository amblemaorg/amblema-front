import {
  formDatosEscuela,
  formTabsDocente,
  formGradosSecciones,
  formTabsEstudiantes,
  formDatosEscuelaModal,
  formTabsEstudiantesGradesSections,
} from "../blocks/form-block/all-forms";

const mostrarFeedback = (statusCode) => {
  return statusCode === 3;
};

const statusGeneral = {
  component: "textsbuttons",
  name: "schoolFormStatus",
  settings: {
    dateOrtext: {},
    status: {
      text: "Estatus",
    },
    buttonCode: "schoolDataConfigRegistroEscuela",
  },
};

const textsAndButtons = {
  component: "textsbuttons",
  name: "schoolFormButton",
  settings: {
    action: [
      {
        type: 2,
        name: "Adjuntar fotos",
      },
      {
        type: 4,
        name: "Enviar Solicitud",
        margin: "2",
        direction: "t",
        removeMargin: "l",
      },
    ],
    receivesFromTableOrForm: "both",
    buttonCode: "schoolDataConfigRegistroEscuela",
    fetcherMethod: "put",
  },
};
const formEscuela = {
  component: "form",
  name: "schoolForm",
  settings: {
    formsContent: formDatosEscuela,
    buttonCode: "schoolDataConfigRegistroEscuela",
    tableCode: "schoolDataConfigRegistroEscuela",
    hideImgContainer: true,
    data: {},
  },
};

const registroEscuela = {
  component: "table",
  name: "schoolPicturesTable",
  settings: {
    columns: {
      source: {
        type: "html",
        title: "Imagen",
        valuePrepareFunction: (img) => {
          return `<img src="${img}" alt="image" />`;
        },
      },
      description: {
        title: "Descripción",
      },
    },
    hideImgContainer: true,
    isFromImgContainer: true,
    isImageFirstCol: true,
    makesNoRequest: true,
    modalCode: "schoolDataConfigRegistroEscuela",
    buttonCode: "schoolDataConfigRegistroEscuela",
    tableCode: "schoolDataConfigRegistroEscuela",
    schoolDataConfigRegistroEscuela: [],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL ESCUELA ----------------------------------
const formRegistroEscuela = {
  component: "form",
  settings: {
    formsContent: formDatosEscuelaModal,
    buttons: ["guardar"],
    formType: "imageContainerFormType",
    tableCode: "schoolDataConfigRegistroEscuela",
    modalCode: "schoolDataConfigRegistroEscuela",
    isFromCustomTableActions: true,
    makesNoRequest: true,
  },
};
const textsAndButtonsRegistroEscuela = {
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
    classes: "justify-content-center",
    modalCode: "schoolDataConfigRegistroEscuela",
    isFromCustomTableActions: true,
    makesNoRequest: true,
    isDeleting: true,
  },
};
const modalRegistroEscuela = {
  component: "modal",
  settings: {
    modalCode: "schoolDataConfigRegistroEscuela",
    isFromImgContainer: true,
    items: [
      {
        childBlocks: [
          { ...formRegistroEscuela },
          { ...textsAndButtonsRegistroEscuela },
        ],
      },
    ],
  },
};
//* ------------------------------------------

const formDocente = {
  component: "form",
  name: "teacherForm",
  settings: {
    formId: "add-docente",
    formsContent: formTabsDocente,
    buttons: ["guardar"],
    tableCode: "schoolDataConfigTablaDocente",
    formType: "agregarDocente",
    fetcherMethod: "post",
  },
};
const tablaDocente = {
  component: "table",
  name: "teachersTable",
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido",
      },
      documentGroup: {
        title: "Cédula",
        valuePrepareFunction: (row: any) => {
          if (row) return row.prependInput;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.prependInput;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      email: {
        title: "Correo",
      },
      status: {
        title: "Estatus",
        valuePrepareFunction: (row: any) => {
          if (row) return row == "1" ? "Activo" : "Inactivo";
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == "1" ? "Activo" : "Inactivo";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      // specialty: { // Para mostrar columna de especialidad
      //   title: "Especialidad",
      // },
    },
    modalCode: "schoolDataConfigTablaDocente",
    tableCode: "schoolDataConfigTablaDocente",
    schoolDataConfigTablaDocente: [],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL DOCENTE ----------------------------------
const formTablaDocente = {
  component: "form",
  name: "teacherModalForm",
  viewMode: "both",
  settings: {
    formsContent: formTabsDocente,
    buttons: ["guardar"],
    formType: "agregarDocente",
    tableCode: "schoolDataConfigTablaDocente",
    modalCode: "schoolDataConfigTablaDocente",
    isFromCustomTableActions: true,
    fetcherMethod: "put",
  },
};
const textsAndButtonsTablaDocente = {
  component: "textsbuttons",
  name: "teacherDeleteModal",
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
    modalCode: "schoolDataConfigTablaDocente",
    isFromCustomTableActions: true,
    fetcherMethod: "delete",
    isDeleting: true,
  },
};
const modalTablaDocente = {
  component: "modal",
  settings: {
    modalCode: "schoolDataConfigTablaDocente",
    items: [
      {
        childBlocks: [
          { ...formTablaDocente },
          { ...textsAndButtonsTablaDocente },
        ],
      },
    ],
  },
};
//* ------------------------------------------

const formGradosYSecciones = {
  component: "form",
  name: "gradosYSeccionesPostForm",
  settings: {
    formsContent: formGradosSecciones,
    buttons: ["guardar"],
    tableCode: "schoolDataConfigTablaGradosSecciones",
    formType: "agregarGradoSeccion",
    data: {},
    fetcherMethod: "post",
  },
};
const tablaGradosSecciones = {
  component: "table",
  name: "gradosYSeccionesTable",
  settings: {
    columns: {
      grades: {
        title: "Grados",
        valuePrepareFunction: (row: any) => {
          if (row)
            return formGradosSecciones.grades.options.find((d) => {
              return d.id === row;
            }).name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = formGradosSecciones.grades.options.find((d) => {
            return d.id === cell;
          }).name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
      section: {
        title: "Secciones",
      },
      docente: {
        title: "Docente",
        valuePrepareFunction: (row: any) => {
          if (row && formGradosSecciones.docente.options.length > 0)
            return formGradosSecciones.docente.options.find((d) => {
              return d.id === row;
            }).name;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string =
            formGradosSecciones.docente.options.length > 0
              ? formGradosSecciones.docente.options.find((d) => {
                  return d.id === cell;
                }).name
              : "";
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
    },
    modalCode: "schoolDataConfigTablaGradosSecciones",
    tableCode: "schoolDataConfigTablaGradosSecciones",
    schoolDataConfigTablaGradosSecciones: [],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL GRADOS Y SECCIONES ----------------------------------
const formTablaGradosSecciones = {
  component: "form",
  name: "gradesAndSectionsModalForm",
  viewMode: "both",
  settings: {
    formsContent: formGradosSecciones,
    buttons: ["guardar"],
    formType: "agregarGradoSeccion",
    tableCode: "schoolDataConfigTablaGradosSecciones",
    modalCode: "schoolDataConfigTablaGradosSecciones",
    isFromCustomTableActions: true,
    fetcherMethod: "put",
  },
};
const textsAndButtonsTablaGradosSecciones = {
  component: "textsbuttons",
  name: "gradesAndSectionsDeleteModal",
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
    modalCode: "schoolDataConfigTablaGradosSecciones",
    isFromCustomTableActions: true,
    fetcherMethod: "delete",
    isDeleting: true,
  },
};
const modalTablaGradosSecciones = {
  component: "modal",
  settings: {
    modalCode: "schoolDataConfigTablaGradosSecciones",
    items: [
      {
        childBlocks: [
          { ...formTablaGradosSecciones },
          { ...textsAndButtonsTablaGradosSecciones },
        ],
      },
    ],
  },
};
//* ------------------------------------------

const formEstudiantes = {
  component: "form",
  name: "estudiantesPostForm",
  settings: {
    formsContent: {
      ...formTabsEstudiantesGradesSections,
      ...formTabsEstudiantes,
    },
    buttons: ["agregar"],
    tableCode: "schoolDataConfigTablaEstudiante",
    formType: "buscarEstudiante",
    // isOneRow: true,
    data: {},
    fetcherMethod: "post",
    methodUrlPlus: "section",
    tableRefreshName: "estudiantesTable",
  },
};
const tablaEstudiante = {
  component: "table",
  name: "estudiantesTable",
  settings: {
    isMulti: true,
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido",
      },
      documentGroup: {
        title: "Cédula",
        valuePrepareFunction: (row: any) => {
          if (row) return row.prependInput;
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.prependInput;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
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
      age: {
        title: "Edad",
        valuePrepareFunction: (row: any) => {
          let getAge = (birthDate) =>
            Math.floor(
              (new Date().getTime() - new Date(birthDate).getTime()) /
                3.15576e10
            );
          if (row) return getAge(row).toString();
          else return "";
        },
        filterFunction: (cell?: any, search?: string) => {
          let getAge = (birthDate) =>
            Math.floor(
              (new Date().getTime() - new Date(birthDate).getTime()) /
                3.15576e10
            );
          let value: string = getAge(cell).toString();
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === "")
            return true;
          else return false;
        },
      },
    },
    modalCode: "schoolDataConfigTablaEstudiante",
    tableCode: "schoolDataConfigTablaEstudiante",
    schoolDataConfigTablaEstudiante: [],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL ESTUDIANTES ----------------------------------
const formTablaEstudiante = {
  component: "form",
  name: "estudiantesModalForm",
  viewMode: "both",
  settings: {
    formsContent: formTabsEstudiantes,
    buttons: ["guardar"],
    formType: "buscarEstudiante",
    tableCode: "schoolDataConfigTablaEstudiante",
    modalCode: "schoolDataConfigTablaEstudiante",
    isFromCustomTableActions: true,
    fetcherMethod: "put",
  },
};
const textsAndButtonsTablaEstudiante = {
  component: "textsbuttons",
  name: "estudiantesDeleteModal",
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
    modalCode: "schoolDataConfigTablaEstudiante",
    isFromCustomTableActions: true,
    isDeleting: true,
    fetcherMethod: "delete",
  },
};
const modalTablaEstudiante = {
  component: "modal",
  settings: {
    modalCode: "schoolDataConfigTablaEstudiante",
    items: [
      {
        childBlocks: [
          { ...formTablaEstudiante },
          { ...textsAndButtonsTablaEstudiante },
        ],
      },
    ],
  },
};
//* ------------------------------------------

export const SCHOOL_DATA_CONFIG = {
  header: {
    title: "Datos de la Escuela",
  },
  blocks: [
    {
      component: "profiles",
      name: "schoolProfile",
      settings: {
        items: [
          {
            childBlocks: [
              { ...statusGeneral },
              { ...formEscuela },
              { ...registroEscuela },
              { ...textsAndButtons },
              { ...modalRegistroEscuela },
            ],
          },
          {
            childBlocks: [
              {
                component: "tabs",
                settings: {
                  items: [
                    {
                      title: "Docentes",
                      childBlocks: [
                        { ...formDocente },
                        { ...tablaDocente },
                        { ...modalTablaDocente },
                      ],
                    },
                    {
                      title: "Grados y secciones",
                      childBlocks: [
                        { ...formGradosYSecciones },
                        { ...tablaGradosSecciones },
                        { ...modalTablaGradosSecciones },
                      ],
                    },
                    {
                      title: "Estudiantes",
                      childBlocks: [
                        { ...formEstudiantes },
                        { ...tablaEstudiante },
                        { ...modalTablaEstudiante },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

// export function _mapper_SCHOOL_DATA_CONFIG () {

// }
