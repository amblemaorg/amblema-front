import { formResultadoEstudianteModal } from '../blocks/form-block/all-forms';

const datosOlimpiadas = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {
            text: 'Fecha de la prueba',
            date: '12-05-2020',
        },
        upload: {
            url: '#',
            name: 'Descargar archivo',
        },
        subtitles: [
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi temporibus fugit tempore recusandae excepturi ex natus voluptatum alias architecto ratione magni accusantium vitae id tenetur doloribus cupiditate voluptatem nostrum quidem! Reprehenderit ratione perferendis iure pariatur omnis ipsam culpa autem! Quam sequi voluptatem consequatur modi dolores repellendus voluptates sint soluta!'
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi temporibus fugit tempore recusandae excepturi ex natus voluptatum alias architecto ratione magni accusantium vitae id tenetur doloribus cupiditate voluptatem nostrum quidem! Reprehenderit ratione perferendis iure pariatur omnis ipsam culpa autem! Quam sequi voluptatem consequatur modi dolores repellendus voluptates sint soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                text: 'Magnam, commodi temporibus fugit tempore recusandae excepturi ex natus voluptatum alias architecto ratione magni accusantium vitae id tenetur doloribus cupiditate voluptatem nostrum quidem! Reprehenderit ratione perferendis iure pariatur omnis ipsam culpa autem! Quam sequi voluptatem consequatur modi dolores repellendus voluptates sint soluta! Reprehenderit ratione perferendis iure pariatur omnis ipsam culpa autem! Quam sequi voluptatem consequatur modi dolores repellendus voluptates sint soluta!'
            }]

    }
}

const selectEstudiantes = {
    component: 'textsbuttons',
    settings: {
        selectStatus:
        {
            placeholder: 'Selecciona el estudiante',
            lista: [
                { 
                    id: 1, name: 'Alfredo',
                    lastName: 'Valvuena',
                    addressState: '165146541654hjvjh',
                    result: 'Aprobado',
                    grade: '5',
                    section: 'B',
                },
                { 
                    id: 2, name: 'Yanior',
                    lastName: 'Zambrano',
                    addressState: '165146541654hjvjh',
                    result: 'Aprobado',
                    grade: '6',
                    section: 'A',
                },
                { 
                    id: 3, name: 'Jose',
                    lastName: 'Guerrero',
                    addressState: '165146541654hjvjh',
                    result: 'Aprobado',
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

const textsAndButtons = {
    component: 'textsbuttons',
    settings: {
        action: [{
            type: 3,
            name: 'Enviar Solicitud',
        }],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataResultadoEstudiante',
    }
}

const resultadoEstudiante = {
    component: 'table',
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
                    if (row) return formResultadoEstudianteModal.grade.options.find(d=>{return d.id===row.grade}).name + ' ' + row.section;
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {
                    let value: string = formResultadoEstudianteModal.grade.options.find(d=>{return d.id===cell.grade}).name + ' ' + cell.section;
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },
            addressState: {
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
                addressState: '165146541654hjvjh',
                result: 'Aprobado',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
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
                            { ...textsAndButtons },
                            { ...modalResultadoEstudiante },
                        ]
                    }
                ]
            }
        }
    ]
}