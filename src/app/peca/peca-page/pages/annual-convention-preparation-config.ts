import { formPreinscripcionDocenteModal } from '../blocks/form-block/all-forms'

const preinscripcionDocente = {
    component: 'textsbuttons',
    settings: {
        selectStatus:
        {
            placeholder: 'Selecciona el estudiante',
            lista: [
                { 
                    id: 1, name: 'Alfredo',
                    lastName: 'Valvuena',
                    phone: '156456465',
                    email: 'vfhgdygt@ddd.com', 
                },
                { 
                    id: 2, name: 'Yanior',
                    lastName: 'Zambrano',
                    phone: '5646465465',
                    email: 'cdhgdgd@dw.com', 
                },
                { 
                    id: 3, name: 'Jose',
                    lastName: 'Guerrero',
                    phone: '564654',
                    email: 'hfdhydh@de.com', 
                },
            ]
        },
        btnGeneral:
        {
            name: 'Agregar docente'
        },
        buttonType: 'agregarDocentePreinscripcion',
        tableCode: 'dataPreinscripcionDocente',
    }
}

const btnGuardar = {
    component: 'textsbuttons',
    settings: {
        action: [{
            type: 1,
            name: 'Guardar',
        }],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataPreinscripcionDocente',
    }
}

const stepperPrueba = {
    component: 'stepper',
    settings: {
        titles: [
            {
                id: 1,
                text: 'Paso 1 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },
            {
                id: 2,
                text: 'Paso 2 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },
            { 
                id: 3,
                text: 'Paso 3 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            },{
                id: 4,
                text: 'Paso 4 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            }
        ]
    }

}

const tablaPreinscripcionDocente = {
    component: 'table',
    settings: {
        columns: {
            name: {
                title: "Nombre",
            },
            lastName: {
                title: "Apellido"
            },
            phone: {
                title: 'Teléfono'
            },
            email: {
                title: 'Correo'
            }
        },
        modalCode: 'dataPreinscripcionDocente',
        buttonCode: 'dataPreinscripcionDocente',
        tableCode: 'dataPreinscripcionDocente',
        dataPreinscripcionDocente: [
            {
                id: '1abcdefghijk',
                name: 'Jhon',
                lastName: 'Week',
                phone: '235235235',
                email: 'jhonw@hotmail.com'
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}
//* MODAL PREINSCRIPCION DOCENTE ----------------------------------
const formTablaPreinscripcionDocente = {
    component: 'form',
    viewMode: 'both',
    settings: {
      formsContent: formPreinscripcionDocenteModal,
      buttons: ['guardar'],
      formType: 'agregarDocentePreinscripcion',
      tableCode: 'dataPreinscripcionDocente',
      modalCode: 'dataPreinscripcionDocente',
      isFromCustomTableActions: true,
    }
  }
  const textsAndButtonsTablaPreinscripcionDocente = {
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
      modalCode: 'dataPreinscripcionDocente',
      isFromCustomTableActions: true,
      isDeleting: true,
    }
  }
  const modalTablaPreinscripcionDocente = {
    component: 'modal',
    settings: {
      modalCode: 'dataPreinscripcionDocente',
      items: [
        {        
          childBlocks: [
            { ...formTablaPreinscripcionDocente },
            { ...textsAndButtonsTablaPreinscripcionDocente },
          ]
        }
      ]
    }
  }
  //* ------------------------------------------

export const ANNUAL_CONVENTION_PREPARATION_CONFIG = {
    header: {
        title: "Preparación de la convención anual"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Proceso de inscripción",
                        childBlocks: [
                            { ...stepperPrueba }
                        ]
                    },
                    {
                        title: "Preinscripción de docentes",
                        childBlocks: [
                            { ...preinscripcionDocente },
                            { ...tablaPreinscripcionDocente },
                            { ...btnGuardar },
                            { ...modalTablaPreinscripcionDocente },
                        ]
                    },
                ]
            }
        }
    ]
}
