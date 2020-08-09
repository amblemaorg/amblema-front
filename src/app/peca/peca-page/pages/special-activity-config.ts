import { formSpecialActivityTableModal } from '../blocks/form-block/all-forms'

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

const textsAndButtons = {
    component: 'textsbuttons',
    settings: {
        action: [{
            type: 3,
            name: 'Enviar Solicitud',
        }],
        receivesFromTableOrForm: 'table',
        buttonCode: 'dataSpecialActivityTable',
    }
}


const dateAndStatus = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {
            text: 'Fecha de la actividad especial:',
            fields: [{ label: "Input date", placeholder: "Fecha de la actividad", fullwidth: false, ...controlProps.dateAndRequired }],
        },
        status: {
            text: 'Estatus',
            subText: 1
        },
        action: [
            {
                type: 6,
                name: 'Agregar Nuevo',
            }
        ],
        modalCode: 'dataSpecialActivityTable',
    }
}
const specialActivityTable = {
    component: 'table',
    settings: {
        columns: {
            item: {
                title: "Item",
            },
            description: {
                title: "Descripción"
            },
            cantidad: {
                title: 'Cantidad'
            },
            price: {
                title: 'Precio unitario'
            },
            impuesto: {
                title: 'Impuesto',
                valuePrepareFunction: ( row: any ) => {
                    if (row) return row.toString()+'%';
                    else return '';
                  },
                  filterFunction: (cell?: any, search?: string) => {
                      let value: string = cell.toString()+'%';
                      value = value.toUpperCase();
                      
                      if (value.includes(search.toUpperCase()) || search === '') return true;
                      else return false;
                  }
            },
            subtotal: {
                title: 'Subtotal'
            },
        },
        makesNoRequest: true,
        modalCode: 'dataSpecialActivityTable',
        buttonCode: 'dataSpecialActivityTable',
        tableCode: 'dataSpecialActivityTable',
        dataSpecialActivityTable: [
            {
                id: '1sdfsdfsdfsd',
                item: 1,
                description: 'cosa',
                cantidad: 34,
                price: 444,
                impuesto: 20,
                subtotal: 500,
            },
            {
                id: '2sdfsdfsdfsd',
                item: 1,
                description: 'cosa',
                cantidad: 34,
                price: 444,
                impuesto: 20,
                subtotal: 500,
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
        total:1000
    }
}

//* MODAL ACTIVIDAD ESPECIAL ----------------------------------
const formSpecialActivityTable = {
    component: 'form',
    viewMode: 'both',
    settings: {
      formsContent: formSpecialActivityTableModal,
      buttons: ['guardar'],
      formType: 'agregarActividadEspecial',
      tableCode: 'dataSpecialActivityTable',
      modalCode: 'dataSpecialActivityTable',
      isFromCustomTableActions: true,
      makesNoRequest: true,
    }
  }
  const textsAndButtonsSpecialActivityTable = {
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
      modalCode: 'dataSpecialActivityTable',
      isFromCustomTableActions: true,
      isDeleting: true,
    }
  }
  const modalSpecialActivityTable = {
    component: 'modal',
    settings: {
      modalCode: 'dataSpecialActivityTable',
      items: [
        {        
          childBlocks: [
            { ...formSpecialActivityTable },
            { ...textsAndButtonsSpecialActivityTable },
          ]
        }
      ]
    }
  }
  //* ------------------------------------------

export const SPECIAL_ACTIVITY_CONFIG = {
    header: {
        title: "Actividad especial"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {                
                items: [
                    {     
                        childBlocks: [
                            { ...dateAndStatus },                            
                            { ...specialActivityTable },
                            { ...textsAndButtons },
                            { ...modalSpecialActivityTable },
                        ]
                    },
                ],
            },
        },
    ]
}
