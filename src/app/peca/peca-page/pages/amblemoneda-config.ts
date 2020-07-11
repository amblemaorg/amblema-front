import { formConfirmacionDocenteModal } from '../blocks/form-block/all-forms'

const controlProps = {
    dateAndRequired: {
        type: "date",
        validations: { required: true }
    },
    date: {
        type: "date",
        validations: { required: false }
    },
}

const sliderAmblemoneda = {
    component: 'slider',
    settings: {
        sliderImage: [
            {
                text: "Fecha de la actividad:",
                fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.date },
                image: "../../../../../assets/images/profile-leena.jpg",
                description: "foto numero 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                text: "Fecha de la actividad:",
                fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.date },
                image: "../../../../../assets/images/profile-oscar.jpg",
                description: "foto numero 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                text: "Fecha de la actividad:",
                fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.date },
                image: "../../../../../assets/images/background-pillar-lectura.jpg",
                description: "foto numero 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                text: "Fecha de la actividad:",
                fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.date },
                image: "../../../../../assets/images/background-pillar-matematica.jpg",
                description: "foto numero 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            /*{
                image: "../../../../../assets/images/background-pillar-lectura.jpg",
                description: "foto numero 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?"
            },*/
            
        ],
    }
}

const ConfirmacionDocente = {
    component: 'table',
    name: 'amblemonedaTable',
    settings: {
        columns: {
            grade: {
                title: "Grado",
                valuePrepareFunction: ( row: any ) => {          
                    if (row) return formConfirmacionDocenteModal.grade.options.find(d=>{return d.id===row}).name;
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {
                    let value: string = formConfirmacionDocenteModal.grade.options.find(d=>{return d.id===cell}).name;
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },
            section: {
                title: "Sección"
            },
            confirmation: {
                title: 'Confirmación',
                valuePrepareFunction: ( row: any ) => {  
                    if (row) return row == "1"? 'Confirmado' : 'Por confirmar';
                    else return '';
                },
                filterFunction: (cell?: any, search?: string) => {          
                    let value: string = cell == "1"? 'Confirmado' : 'Por confirmar';
                    value = value.toUpperCase();
                    
                    if (value.includes(search.toUpperCase()) || search === '') return true;
                    else return false;
                }
            },
        },
        modalCode: 'amblemonedaConfigConfirmacionDocente',
        tableCode: 'amblemonedaConfigConfirmacionDocente',
        amblemonedaConfigConfirmacionDocente: [
            {
                id: '1abcdefghijk',
                grade: '5',
                section: 'B',
                confirmation: '1',
            },
            {
                id: '2abcdefghijk',
                grade: '4',
                section: 'A',
                confirmation: '2',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}
//* MODAL CONFIRMACION DOCENTE ----------------------------------
const formConfirmacionDocente = {
    component: 'form',
    viewMode: 'both',
    settings: {
      formsContent: formConfirmacionDocenteModal,
      buttons: ['guardar'],
      formType: 'tablaConfirmacionDocente',
      tableCode: 'amblemonedaConfigConfirmacionDocente',
      modalCode: 'amblemonedaConfigConfirmacionDocente',
      isFromCustomTableActions: true,
    }
  }
  const textsAndButtonsConfirmacionDocente = {
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
      modalCode: 'amblemonedaConfigConfirmacionDocente',
      isFromCustomTableActions: true,
      isDeleting: true,
    }
  }
  const modalConfirmacionDocente = {
    component: 'modal',
    settings: {
      modalCode: 'amblemonedaConfigConfirmacionDocente',
      items: [
        {        
          childBlocks: [
            { ...formConfirmacionDocente },
            { ...textsAndButtonsConfirmacionDocente },
          ]
        }
      ]
    }
  }
  //* ------------------------------------------



const charlaConDocentes = {
    component: 'textsbuttons',
    name: 'amblemonedaCharla',
    settings: {
        dateOrtext: {
            text: 'Fecha de la reunión:',
            fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired },
        },
        download: {
            url: '#',
            name: 'hola.png',
        },
        subtitles: 
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
    }
}

export const AMBLEMONEDA_CONFIG = {
    header: {
        title: "AmbLeMonedas"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Charla con los docentes",
                        childBlocks: [
                            { ...charlaConDocentes }
                        ]
                    },
                    {
                        title: "Elaboración de alcancía",
                        childBlocks: [
                            { ...sliderAmblemoneda }
                        ]
                    },
                    {
                        title: "Entrega de AmbLeMonedas",
                        childBlocks: [
                            { ...ConfirmacionDocente },
                            { ...modalConfirmacionDocente },
                        ]
                    }
                ]
            }
        }
    ]
}
