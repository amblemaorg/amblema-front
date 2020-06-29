import {
  formDatosEscuela,
  formTabsDocente,
  formGradosSecciones,
  formTabsEstudiantes,
  formDatosEscuelaModal,
} from '../blocks/form-block/all-forms';
import { settings } from 'cluster';

const statusGeneral = {
  component: 'textsbuttons',
  settings: {
    dateOrtext:{
      
    },
    status: {
      text: 'Estatus',
      subText: 'Pendiente'
    },
  }
};

const textsAndButtons = {
  component: 'textsbuttons',
  name: 'schoolFormButton',
  settings: {
    // title: {
    //   text: "(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar",
    //   aligning: "center",
    // },
    action: [
      {
        type: 2,
        name: 'Adjuntar fotos',
      },
      {
        type: 4,
        name: 'Enviar Solicitud',
      },
    ],
    receivesFromTableOrForm: 'both',
    buttonCode: 'schoolDataConfigRegistroEscuela',
    fetcherMethod: 'put',
  },
};
const formEscuela = {
  component: 'form',
  name: 'schoolForm',
  settings: {
    formsContent: formDatosEscuela,
    buttonCode: 'schoolDataConfigRegistroEscuela',
    tableCode: 'schoolDataConfigRegistroEscuela',
    hideImgContainer: true,
    data: {},
    // fetcherMethod: 'put',
  },
};

const registroEscuela = {
  component: 'table',
  name: 'schoolPicturesTable',
  settings: {
    columns: {
      image: {
        type: 'html',
        title: 'Imágen',
        valuePrepareFunction: 
          (img) => {
            return `<img src="${img}" alt="image" />` 
          }
      },
      description: {
        title: 'Descripción',
      },
      // state: {
      //   title: 'Estado',
      //   valuePrepareFunction: (row: any) => {
      //     if (row) return row == '1' ? 'Visible' : 'No visible';
      //     else return '';
      //   },
      //   filterFunction: (cell?: any, search?: string) => {
      //     let value: string = cell == '1' ? 'Visible' : 'No visible';
      //     value = value.toUpperCase();

      //     if (value.includes(search.toUpperCase()) || search === '') return true;
      //     else return false;
      //   },
      // },
      // status: {
      //   title: 'Estatus',
      // },
    },
    hideImgContainer: true,
    isFromImgContainer: true,
    isImageFirstCol: true,
    makesNoRequest: true,
    modalCode: 'schoolDataConfigRegistroEscuela',
    buttonCode: 'schoolDataConfigRegistroEscuela',
    tableCode: 'schoolDataConfigRegistroEscuela',
    schoolDataConfigRegistroEscuela: [
      /* {
        // id: '1abcdefghijk',
        // image: 'imagen1.png',
        // description: 'descripcion 1',
        // state: '1',
        // status: 'Aprobado',
        // source: null,
        // imageSelected: null,
        id: '1abcdefghijk',
        image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        description: 'descripcion 1',
        source: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        imageSelected: null,
      },
      {
        id: '2abcdefghijk',
        image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
        description: 'descripcion 2',
        source: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
        imageSelected: null,
      }, */
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL ESCUELA ----------------------------------
const formRegistroEscuela = {
  component: 'form',
  settings: {
    formsContent: formDatosEscuelaModal,
    buttons: ['guardar'],
    formType: 'imageContainerFormType',
    tableCode: 'schoolDataConfigRegistroEscuela',
    modalCode: 'schoolDataConfigRegistroEscuela',
    isFromCustomTableActions: true,
    makesNoRequest: true,
  },
};
const textsAndButtonsRegistroEscuela = {
  component: 'textsbuttons',
  settings: {
    subtitles: [
      {
        text: '¿Desea eliminar este ítem?',
      },
    ],
    action: [
      {
        type: 1,
        name: 'Si',
      },
      {
        type: 2,
        name: 'No',
      },
    ],
    modalCode: 'schoolDataConfigRegistroEscuela',
    isFromCustomTableActions: true,
    makesNoRequest: true,
  },
};
const modalRegistroEscuela = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigRegistroEscuela',
    isFromImgContainer: true,
    items: [
      {
        childBlocks: [{ ...formRegistroEscuela }, { ...textsAndButtonsRegistroEscuela }],
      },
    ],
  },
};
//* ------------------------------------------

const formDocente = {
  component: 'form',
  name: 'teacherForm',
  settings: {
    formsContent: formTabsDocente,
    buttons: ['guardar'],
    tableCode: 'schoolDataConfigTablaDocente',
    formType: 'agregarDocente',
    fetcherMethod: 'post',
  },
};
const tablaDocente = {
  component: 'table',
  name: 'teachersTable',
  settings: {
    columns: {
      name: {
        title: 'Nombre',
      },
      lastName: {
        title: 'Apellido',
      },
      documentGroup: {
        title: 'Cedula',
        valuePrepareFunction: (row: any) => {
          if (row) return row.prependInput;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.prependInput;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
      email: {
        title: 'Correo',
      },
      status: {
        title: 'Estatus',
        valuePrepareFunction: (row: any) => {
          if (row) return row == '1' ? 'Activo' : 'Inactivo';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == '1' ? 'Activo' : 'Inactivo';
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
    },
    modalCode: 'schoolDataConfigTablaDocente',
    tableCode: 'schoolDataConfigTablaDocente',
    schoolDataConfigTablaDocente: [
      /*
      {
        id: '1abcdefghijk',
        name: 'ALfredo',
        lastName: 'Valbuena',
        email: 'almavalo11@gmail.com',
        status: '1',
        documentGroup: {
          prependSelect: '1',
          prependInput: '20017764',
        },
        phone: '546546',
        addressState: '165146541654hjvjh',
        addressMunicipality: 'dgisgsd64646464',
        street: 'wefewf',
        city: 'ewfwef',
      },
      {
        id: '2abcdefghijk',
        name: 'Manuel',
        lastName: 'Perez',
        email: 'almavalo@gmail.com',
        status: '1',
        documentGroup: {
          prependSelect: '1',
          prependInput: '123456789',
        },
        phone: '546546',
        addressState: '165146541654hjvjh',
        addressMunicipality: 'dgisgsd64646464',
        street: 'wefewf',
        city: 'ewfwef',
      },
      {
        id: '3abcdefghijk',
        name: 'Luis',
        lastName: 'Valbuena',
        email: 'almavalo@hotmail.com',
        status: '2',
        documentGroup: {
          prependSelect: '1',
          prependInput: '20017764',
        },
        phone: '546546',
        addressState: '165146541654hjvjh',
        addressMunicipality: 'dgisgsd64646464',
        street: 'wefewf',
        city: 'ewfwef',
      },
      */
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL DOCENTE ----------------------------------
const formTablaDocente = {
  component: 'form',
  name: 'teacherModalForm',
  settings: {
    formsContent: formTabsDocente,
    buttons: ['guardar'],
    formType: 'agregarDocente',
    tableCode: 'schoolDataConfigTablaDocente',
    modalCode: 'schoolDataConfigTablaDocente',
    isFromCustomTableActions: true,
    fetcherMethod: 'put',
  },
};
const textsAndButtonsTablaDocente = {
  component: 'textsbuttons',
  name: 'teacherDeleteModal',
  settings: {
    subtitles: [
      {
        text: '¿Desea eliminar este ítem?',
      },
    ],
    action: [
      {
        type: 1,
        name: 'Si',
      },
      {
        type: 2,
        name: 'No',
      },
    ],
    modalCode: 'schoolDataConfigTablaDocente',
    isFromCustomTableActions: true,
    fetcherMethod: 'delete',
  },
};
const modalTablaDocente = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigTablaDocente',
    items: [
      {
        childBlocks: [{ ...formTablaDocente }, { ...textsAndButtonsTablaDocente }],
      },
    ],
  },
};
//* ------------------------------------------

const formGradosYSecciones = {
  component: 'form',
  settings: {
    formsContent: formGradosSecciones,
    buttons: ['guardar'],
    tableCode: 'schoolDataConfigTablaGradosSecciones',
    formType: 'agregarGradoSeccion',
  },
};
const tablaGradosSecciones = {
  component: 'table',
  settings: {
    columns: {
      grades: {
        title: 'Grados',
      },
      section: {
        title: 'Secciones',
      },
      docente: {
        title: 'Docente',
        valuePrepareFunction: (row: any) => {
          if (row)
            return formGradosSecciones.docente.options.find((d) => {
              return d.id === row;
            }).name;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = formGradosSecciones.docente.options.find((d) => {
            return d.id === cell;
          }).name;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
    },
    modalCode: 'schoolDataConfigTablaGradosSecciones',
    tableCode: 'schoolDataConfigTablaGradosSecciones',
    schoolDataConfigTablaGradosSecciones: [
      {
        id: '1abcdefghijk',
        grades: '5',
        section: 'B',
        docente: '1',
      },
      {
        id: '2abcdefghijk',
        grades: '6',
        section: 'A',
        docente: '2',
      },
      {
        id: '3abcdefghijk',
        grades: '3',
        section: 'C',
        docente: '3',
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL GRADOS Y SECCIONES ----------------------------------
const formTablaGradosSecciones = {
  component: 'form',
  settings: {
    formsContent: formGradosSecciones,
    buttons: ['guardar'],
    formType: 'agregarGradoSeccion',
    tableCode: 'schoolDataConfigTablaGradosSecciones',
    modalCode: 'schoolDataConfigTablaGradosSecciones',
    isFromCustomTableActions: true,
  },
};
const textsAndButtonsTablaGradosSecciones = {
  component: 'textsbuttons',
  settings: {
    subtitles: [
      {
        text: '¿Desea eliminar este ítem?',
      },
    ],
    action: [
      {
        type: 1,
        name: 'Si',
      },
      {
        type: 2,
        name: 'No',
      },
    ],
    modalCode: 'schoolDataConfigTablaGradosSecciones',
    isFromCustomTableActions: true,
  },
};
const modalTablaGradosSecciones = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigTablaGradosSecciones',
    items: [
      {
        childBlocks: [{ ...formTablaGradosSecciones }, { ...textsAndButtonsTablaGradosSecciones }],
      },
    ],
  },
};
//* ------------------------------------------

const formEstudiantes = {
  component: 'form',
  settings: {
    formsContent: formTabsEstudiantes,
    buttons: ['agregar'],
    tableCode: 'schoolDataConfigTablaEstudiante',
    formType: 'buscarEstudiante',
    // isOneRow: true,
  },
};
const tablaEstudiante = {
  component: 'table',
  settings: {
    columns: {
      name: {
        title: 'Nombre',
      },
      lastName: {
        title: 'Apellido',
      },
      documentGroup: {
        title: 'Cedula',
        valuePrepareFunction: (row: any) => {
          if (row) return row.prependInput;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell.prependInput;
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
      gender: {
        title: 'Género',
        valuePrepareFunction: (row: any) => {
          if (row) return row == '1' ? 'Femenino' : 'Masculino';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let value: string = cell == '1' ? 'Femenino' : 'Masculino';
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
      age: {
        title: 'Edad',
        valuePrepareFunction: (row: any) => {
          let getAge = (birthDate) =>
            Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10);
          if (row) return getAge(row).toString();
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
          let getAge = (birthDate) =>
            Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10);
          let value: string = getAge(cell).toString();
          value = value.toUpperCase();

          if (value.includes(search.toUpperCase()) || search === '') return true;
          else return false;
        },
      },
    },
    modalCode: 'schoolDataConfigTablaEstudiante',
    tableCode: 'schoolDataConfigTablaEstudiante',
    schoolDataConfigTablaEstudiante: [
      {
        id: '1abcdefghijk',
        name: 'Ysa',
        lastName: 'Godoy',
        documentGroup: {
          prependInput: '23577413',
          prependSelect: '1',
        },
        gender: '1',
        age: '1993-06-02T00:00:00.000Z',
        grades: '1',
        section: '1',
      },
      {
        id: '2abcdefghijk',
        name: 'ALfredo',
        lastName: 'Valbuena',
        documentGroup: {
          prependInput: '123456',
          prependSelect: '1',
        },
        gender: '2',
        age: '1992-06-02T20:09:07.465000',
        grades: '1',
        section: '1',
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
//* MODAL ESTUDIANTES ----------------------------------
const formTablaEstudiante = {
  component: 'form',
  settings: {
    formsContent: formTabsEstudiantes,
    buttons: ['guardar'],
    formType: 'buscarEstudiante',
    tableCode: 'schoolDataConfigTablaEstudiante',
    modalCode: 'schoolDataConfigTablaEstudiante',
    isFromCustomTableActions: true,
  },
};
const textsAndButtonsTablaEstudiante = {
  component: 'textsbuttons',
  settings: {
    subtitles: [
      {
        text: '¿Desea eliminar este ítem?',
      },
    ],
    action: [
      {
        type: 1,
        name: 'Si',
      },
      {
        type: 2,
        name: 'No',
      },
    ],
    modalCode: 'schoolDataConfigTablaEstudiante',
    isFromCustomTableActions: true,
  },
};
const modalTablaEstudiante = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigTablaEstudiante',
    items: [
      {
        childBlocks: [{ ...formTablaEstudiante }, { ...textsAndButtonsTablaEstudiante }],
      },
    ],
  },
};
//* ------------------------------------------

export const SCHOOL_DATA_CONFIG = {
  header: {
    title: 'Datos de la escuela',
  },
  blocks: [
    {
      component: 'profiles',
      name: 'schoolProfile',
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
                component: 'tabs',
                settings: {
                  items: [
                    {
                      title: 'Docentes',
                      childBlocks: [
                        { ...formDocente },
                        { ...tablaDocente },
                        { ...modalTablaDocente },
                      ],
                    },
                    {
                      title: 'Grado y secciones',
                      childBlocks: [
                        { ...formGradosYSecciones },
                        { ...tablaGradosSecciones },
                        { ...modalTablaGradosSecciones },
                      ],
                    },
                    {
                      title: 'Estudiantes',
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
