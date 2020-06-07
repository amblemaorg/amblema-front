import { formDatosEscuela, formTabsDocente, formGradosSecciones, formTabsEstudiantes } from '../blocks/form-block/all-forms';

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
        title: 'Estado'
      },
      status: {
        title: 'Estatus'
      }
    },
    hideImgContainer: true,
    buttonCode: 'schoolDataConfigRegistroEscuela',
    tableCode: 'schoolDataConfigRegistroEscuela',
    schoolDataConfigRegistroEscuela: [
      {
        image: 'imagen1.png',
        description: 'descripcion 1',
        state: 'Visible',
        status: 'Aprobado'
      },
      {
        image: 'imagen2.png',
        description: 'descripcion 2',
        state: 'No visible',
        status: 'Aprobado'
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
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
      identity: {
        title: 'Cedula'
      },
      mail: {
        title: 'Correo'
      },
      status: {
        title: 'Estatus'
      }
    },
    tableCode: 'schoolDataConfigTablaDocente',
    schoolDataConfigTablaDocente: [
      {
        name: 'ALfredo',
        lastName: 'Valbuena',
        identity: '20017764',
        mail: 'almavalo11@gmail.com',
        status: 'Activo'
      },
      {
        name: 'Manuel',
        lastName: 'Perez',
        identity: '123456789',
        mail: 'almavalo@gmail.com',
        status: 'Activo'
      },
      {
        name: 'Luis',
        lastName: 'Valbuena',
        identity: '20017764',
        mail: 'almavalo@hotmail.com',
        status: 'Inactivo'
      },
    ],
    classes: {
      hideView: true,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
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
        grades: '5',
        secctions: 'B',
        name: 'Isa',
      },
      {
        grades: '6',
        secctions: 'A',
        name: 'Alfredo',
      },
      {
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
        name: 'Isa',
        lastName: 'Godoy',
        doc: '23577413',
        sex: 'Femenino',
        age: '15',
      },
      {
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
              { ...textsAndButtons }
            ]
          },
          {
            title: "Docentes",
            icon: "folder-open",
            childBlocks: [
              { ...formDocente },
              { ...tablaDocente }
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



