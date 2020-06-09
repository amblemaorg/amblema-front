import { formDatosEscuela, formTabsDocente, formGradosSecciones, formTabsEstudiantes, formDatosEscuelaModal } from '../blocks/form-block/all-forms';

const textsAndButtons = {
  component: 'textsbuttons',
  settings: {
    action: [
      {
        type: 2,
        name: 'Adjuntar fotos',
      },
      {
        type: 3,
        name: 'Enviar Solicitud',
      },
    ],
    receivesFromTableOrForm: 'both',
    buttonCode: 'schoolDataConfigRegistroEscuela',
  }
}

const formEscuela = {
  component: 'form',
  settings: {
    formsContent: formDatosEscuela,  
    buttonCode: 'schoolDataConfigRegistroEscuela',
    tableCode: 'schoolDataConfigRegistroEscuela',
    hideImgContainer: true,
  }
}

const registroEscuela = {
  component: 'table',
  settings: {
    columns: {
      image: {
        title: "Imágenes",
      },
      description: {
        title: "Descripción"
      },
      state: {
        title: 'Estado',
        valuePrepareFunction: ( row: any ) => {
          if (row) return row == "1" ? 'Visible':'No visible';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
            let value: string = cell == "1" ? 'Visible':'No visible';
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      status: {
        title: 'Estatus'
      }
    },
    hideImgContainer: true,
    isFromImgContainer: true,
    modalCode: 'schoolDataConfigRegistroEscuela',
    buttonCode: 'schoolDataConfigRegistroEscuela',
    tableCode: 'schoolDataConfigRegistroEscuela',
    schoolDataConfigRegistroEscuela: [
      {
        id: '1abcdefghijk',
        image: 'imagen1.png',
        description: 'descripcion 1',
        state: '1',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
      {
        id: '2abcdefghijk',
        image: 'imagen2.png',
        description: 'descripcion 2',
        state: '2',
        status: 'Aprobado',
        source: null,
        imageSelected: null,
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
//* MODAL ----------------------------------
const formRegistroEscuela = {
  component: 'form',
  settings: {
    formsContent: formDatosEscuelaModal,
    buttons: ['guardar'],
    formType: 'imageContainerFormType',
    tableCode: 'schoolDataConfigRegistroEscuela',
    modalCode: 'schoolDataConfigRegistroEscuela',
    isFromCustomTableActions: true,
  }
}
const textsAndButtonsRegistroEscuela = {
  component: 'textsbuttons',
  settings: {
    subtitles: [{
      text: '¿Desea eliminar este ítem?',
    }],
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
  }
}
const modalRegistroEscuela = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigRegistroEscuela',
    isFromImgContainer: true,
    items: [
      {        
        childBlocks: [
          { ...formRegistroEscuela },
          { ...textsAndButtonsRegistroEscuela },
        ]
      }
    ]
  }
}
//* ------------------------------------------


const formDocente = {
  component: 'form',
  settings: {
    formsContent: formTabsDocente,
    buttons: ['guardar'],
    tableCode: 'schoolDataConfigTablaDocente',
    formType: 'agregarDocente',
  },  
}
const tablaDocente = {
  component: 'table',
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido"
      },
      documentGroup: {
        title: 'Cedula',
        valuePrepareFunction: ( row: any ) => {
          if (row) return row.prependInput;
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
            let value: string = cell.prependInput;
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      },
      email: {
        title: 'Correo'
      },
      status: {
        title: 'Estatus',
        valuePrepareFunction: ( row: any ) => {
          if (row) return row == "1" ? 'Activo':'Inactivo';
          else return '';
        },
        filterFunction: (cell?: any, search?: string) => {
            let value: string = cell == "1" ? 'Activo':'Inactivo';
            value = value.toUpperCase();
            
            if (value.includes(search.toUpperCase()) || search === '') return true;
            else return false;
        }
      }
    },
    modalCode: 'schoolDataConfigTablaDocente',
    tableCode: 'schoolDataConfigTablaDocente',
    schoolDataConfigTablaDocente: [
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
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
//* MODAL ----------------------------------
const formTablaDocente = {
  component: 'form',
  settings: {
    formsContent: formTabsDocente,
    buttons: ['guardar'],
    formType: 'agregarDocente',
    tableCode: 'schoolDataConfigTablaDocente',
    modalCode: 'schoolDataConfigTablaDocente',
    isFromCustomTableActions: true,
  }
}
const textsAndButtonsTablaDocente = {
  component: 'textsbuttons',
  settings: {
    subtitles: [{
      text: '¿Desea eliminar este ítem?',
    }],
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
  }
}
const modalTablaDocente = {
  component: 'modal',
  settings: {
    modalCode: 'schoolDataConfigTablaDocente',
    items: [
      {        
        childBlocks: [
          { ...formTablaDocente },
          { ...textsAndButtonsTablaDocente },
        ]
      }
    ]
  }
}
//* ------------------------------------------



const formGradosYSecciones = {
  component: 'form',
  settings: {
    formsContent: formGradosSecciones,
    buttons: ['guardar'],
    tableCode: 'schoolDataConfigTablaGradosSecciones',
    formType: 'agregarGradoSeccion',
  }
}
const tablaGradosSecciones = {
  component: 'table',
  settings: {
    columns: {
      grades: {
        title: "Grados",
      },
      secctions: {
        title: "Secciones"
      },
      name: {
        title: 'Docente'
      },
    },
    tableCode: 'schoolDataConfigTablaGradosSecciones',
    schoolDataConfigTablaGradosSecciones: [
      {
        id: '1abcdefghijk',
        grades: '5',
        secctions: 'B',
        name: 'Isa',
      },
      {
        id: '2abcdefghijk',
        grades: '6',
        secctions: 'A',
        name: 'Alfredo',
      },
      {
        id: '3abcdefghijk',
        grades: '3',
        secctions: 'C',
        name: 'Manuel',
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
const formEstudiantes = {
  component: 'form',
  settings: {
    formsContent: formTabsEstudiantes,
    buttons: ['agregar'],
    tableCode: 'schoolDataConfigTablaEstudiante',
    formType: 'buscarEstudiante',
    // isOneRow: true,
  }
}
const tablaEstudiante = {
  component: 'table',
  settings: {
    columns: {
      name: {
        title: "Nombre",
      },
      lastName: {
        title: "Apellido"
      },
      doc: {
        title: 'Cédula'
      },
      sex: {
        title: 'Género'
      },
      age: {
        title: 'Edad'
      },
    },
    tableCode: 'schoolDataConfigTablaEstudiante',
    schoolDataConfigTablaEstudiante: [
      {
        id: '1abcdefghijk',
        name: 'Isa',
        lastName: 'Godoy',
        doc: '23577413',
        sex: 'Femenino',
        age: '15',
      },
      {
        id: '2abcdefghijk',
        name: 'ALfredo',
        lastName: 'Valbuena',
        doc: '123456',
        sex: 'Masculino',
        age: '12',
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}

export const SCHOOL_DATA_CONFIG = {
  header: {
    title: "Datos de la escuela"
  },
  blocks: [
    {
      component: 'accordion',
      settings: {
        items: [
          {
            title: "Datos de la Escuela",
            icon: "taller-inicial",
            childBlocks: [
              { ...formEscuela },
              { ...registroEscuela },
              { ...textsAndButtons },
              { ...modalRegistroEscuela },
            ]
          },
          {
            title: "Docentes",
            icon: "folder-open",
            childBlocks: [
              { ...formDocente },
              { ...tablaDocente },
              { ...modalTablaDocente },
            ]
          },
          {
            title: "Grados y secciones",
            icon: "diagnostico",
            childBlocks: [
              { ...formGradosYSecciones },
              { ...tablaGradosSecciones }
            ]
          },
          {
            title: "Estudiantes",
            icon: "planificacion",
            childBlocks: [
              { ...formEstudiantes },
              { ...tablaEstudiante }
            ]
          },
        ]
      }
    },
  ],
}



