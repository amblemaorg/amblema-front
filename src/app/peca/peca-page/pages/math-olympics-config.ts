import { formResultadoEstudianteModal } from '../blocks/form-block/all-forms';

const datosOlimpiadas = {
    component: 'textsbuttons',
    name: 'olimpiadasDateText',
    settings: {
        dateOrtext: {
            text: 'Fecha de la prueba:',
            date: '',
        },
        uploaddown: {
            url: '#',
            name: 'Descargar archivo',
        },
        subtitles: 
            [
                {
                    text: '',
                },
            ]
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
        buttonCode: 'dataResultadoEstudiante',
    }
}

const selectEstudiantes = {
    component: 'textsbuttons',
    name: 'selectStudents',
    settings: {
        selectStatus:
        {
            placeholder: 'Selecciona el estudiante',
            lista: [
                { 
                    id: 1, name: 'Alfredo',
                    lastName: 'Valvuena',
                    status: '2',
                    result: 'Plata',
                    grade: '5',
                    section: 'B',
                },
                { 
                    id: 2, name: 'Yanior',
                    lastName: 'Zambrano',
                    status: '1',
                    result: 'Bronce',
                    grade: '6',
                    section: 'A',
                },
                { 
                    id: 3, name: 'Jose',
                    lastName: 'Guerrero',
                    status: '1',
                    result: 'Oro',
                    grade: '4',
                    section: 'C',
                },
            ]
        },
        btnGeneral:
        {
            name: 'Agregar'
        },
        buttonType: 'agregarResultadoEstudiante',
        tableCode: 'dataResultadoEstudiante',
    }
}

const resultadoEstudiante = {
    component: 'table',
    name: 'resultadoTabla',
    settings: {
        columns: {
            name: {
                title: "Nombre"
            },
            lastName: {
                title: "Apellido"
            },
            gradeAndSection: {
                title: "Grado y sección",
                valuePrepareFunction: ( row: any ) => {          
                    if (row) return formResultadoEstudianteModal.grade.options.find(d=>{return d.id===row.grade}).name + ' ' + row.name;
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {
                    let value: string = formResultadoEstudianteModal.grade.options.find(d=>{return d.id===cell.grade}).name + ' ' + cell.name;
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },
            /*addressState: {
                title: "Estado",
                valuePrepareFunction: ( row: any ) => {          
                    if (row) return formResultadoEstudianteModal.addressState.options.find(d=>{return d.id===row}).name;
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {
                    let value: string = formResultadoEstudianteModal.addressState.options.find(d=>{return d.id===cell}).name;
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },*/
            status: {
                title: 'Estatus',
                valuePrepareFunction: ( row: any ) => {
                    if (row) return row == "1" ? 'Registrado':'Calificado';
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {
                    let value: string = cell == "1" ? 'Registrado':'Calificado';
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },
            result: {
                title: 'Resultado'
            },
        },
        modalCode: 'dataResultadoEstudiante',
        buttonCode: 'dataResultadoEstudiante',
        tableCode: 'dataResultadoEstudiante',
        dataResultadoEstudiante: [
            {
                id: '1dvbdjvjd',
                name: 'Jhon',
                lastName: 'Week',
                grade: '5',
                section: 'B',
                gradeAndSection: {
                    grade: '5',
                    section: 'B',
                },
                status: '2',
                result: 'Oro',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: true,
            hideDelete: false,
        },
    }
}
//* MODAL RESULTADOS OLIMPIADAS ----------------------------------
const formResultadoEstudiante = {
    component: 'form',
    viewMode: 'both',
    settings: {
      formsContent: formResultadoEstudianteModal,
      buttons: ['guardar'],
      formType: 'agregarResultadoEstudiante',
      tableCode: 'dataResultadoEstudiante',
      modalCode: 'dataResultadoEstudiante',
      isFromCustomTableActions: true,
    }
  }
  const textsAndButtonsResultadoEstudiante = {
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
      modalCode: 'dataResultadoEstudiante',
      isFromCustomTableActions: true,
      isDeleting: true,
    }
  }
  const modalResultadoEstudiante = {
    component: 'modal',
    settings: {
      modalCode: 'dataResultadoEstudiante',
      items: [
        {        
          childBlocks: [
            { ...formResultadoEstudiante },
            { ...textsAndButtonsResultadoEstudiante },
          ]
        }
      ]
    }
  }
  //* ------------------------------------------



export const MATH_OLYMPICS_CONFIG = {
    header: {
        title: "Olimpiadas de matemáticas"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Proceso de inscripción",
                        childBlocks: [
                            { ...datosOlimpiadas }
                        ]
                    },
                    {
                        title: "Resultados",
                        childBlocks: [
                            { ...selectEstudiantes },
                            { ...resultadoEstudiante },
                            { ...btnGuardar },
                            { ...modalResultadoEstudiante },
                        ]
                    }
                ]
            }
        }
    ]
}
