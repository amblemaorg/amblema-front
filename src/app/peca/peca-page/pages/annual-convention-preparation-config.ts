import { formPreinscripcionDocenteModal } from '../blocks/form-block/all-forms'

const preinscripcionDocente = {
    component: 'textsbuttons',
    name: "teachersAnnualConventionSelect",
    settings: {
        selectStatus:
        {
            placeholder: 'Selecciona el docente',
            lista: [
                { 
                    id: 1, FirstName: 'Alfredo',
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
                    id: 3, name: 'Jesus',
                    lastName: 'Amaro',
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
        data: {},

    }
}

const btnGuardar = {
    component: 'textsbuttons',
    name: 'saveButtonAnnualPreparation',
    settings: {
        action: [{
            type: 1,
            name: 'Guardar',
        }],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataPreinscripcionDocente',
        fetcherMethod: 'post'
    }
}

const stepperAnnual = {
    component: 'stepper',
    name: 'stepperAnnual',
    settings: {
        text1: 
            {
                id: 1,
                text: 'Paso 1 ',
                content: "",
                aligning: 'center',
            },
            text2: 
            {
                id: 2,
                text: 'Paso 2 ',
                content: "",
                aligning: 'center',
            },
            text3: 
            {
                id: 3,
                text: 'Paso 3 ',
                content: "",
                aligning: 'center',
            },
            text4: 
            {
                id: 4,
                text: 'Paso 4 ',
                content: "",
                aligning: 'center',
            },
           /*  {
                id: 2,
                text: 'Paso 2 ',
                content: "Prueba2",
                aligning: 'center',
            },
            { 
                id: 3,
                text: 'Paso 3 ',
                content: "Prueba3",
                aligning: 'center',
            },{
                id: 4,
                text: 'Paso 4 ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                aligning: 'center',
            } */
        
    }

}

const tablaPreinscripcionDocente = {
    component: 'table',
    name: "teachersAnnualConventionTable",
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
            hideEdit: true,
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
    name: 'annualConventionDeleteModal',
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
      fetcherMethod: 'delete',
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
                            { ...stepperAnnual }
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
