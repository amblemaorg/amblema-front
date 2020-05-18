import { formDatosEscuela, formImgEscuela, formTabsDocente, formGradosSecciones, formTabsEstudiantes } from '../blocks/form-block/all-forms';

const textsAndButtons = {
  component: 'textsbuttons',
  settings: {
    title: {
      text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
      aligning: 'center',
    },
    action: {
      type: 1,
      name: 'Enviar Solicitud',
    },
  }
}

const formEscuela = {
  component: 'form',
  settings: {
    formsContent: formDatosEscuela,
    buttons: ['guardar'],
  }
}
const formImageEscuela = {
  component: 'form',
  settings: {
    formsContent: formImgEscuela,
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
    data: [
      {
        image: '5to Grado',
        description: 'lorem',
        state: 'Proceso',
        status: 'Activo'
      },
      {
        image: '6to Grado',
        description: 'lorem',
        state: 'Proceso',
        status: 'Inactivo'
      },
      {
        image: '4to Grado',
        description: 'loremlorem',
        state: 'Proceso',
        status: 'Activo'
      },
    ],
    classes: {
      hideView: false,
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
  }
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
    data: [
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
      hideView: false,
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
    data: [
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
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  }
}
const formEstudiantes = {
  component: 'form',
  settings: {
    formsContent: formTabsEstudiantes,
    buttons: ['guardar'],
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
    data: [
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
      hideView: false,
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
              { ...formImageEscuela },
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



