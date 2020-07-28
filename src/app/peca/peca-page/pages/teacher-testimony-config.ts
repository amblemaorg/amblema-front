import { formTestimonioDocentes, formTestimonioDocentesModal, formTestimonioDocentesModalEdit } from '../blocks/form-block/all-forms'

    /* formTestimonioDocentes.imageGroup.fields.imageDocente.options = [
    { id: "2", name: "Sthepanie", lastName: 'Soteldo', addressState: '165146541654hjvjh' },
    { id: "3", name: "Manuel", lastName: 'Guerrero', addressState: '165146541654hjvjh' },
    { id: "4", name: "Gustavo", lastName: 'Castillo', addressState: '165146541654hjvjh' },
]; */

const statusGeneral = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {},
        status: {
            text: 'Estatus',
            subText: 1
        },
    }
};
const formTestDoc = {
    component: 'form',
    name:"pruebaDocentes",
    settings: {
        formsContent: formTestimonioDocentes,
        tableCode: 'dataTestimonioDocenteTabla',
        buttonCode: 'dataTestimonioDocenteTabla',
        alwaysValidations: true,
        data: {},
    }
}

const testimonioDocenteTabla = {
    component: 'table',
    name: 'testimonyTable',
    settings: {
        columns: {
            name: {
                title: "Nombre",
            },
            lastName: {
                title: "Apellido"
            },
            cargo: {
                title: 'Cargo'
            },
            description: {
                title: 'Descripcion',
                valuePrepareFunction: (row: any) => {
                    if (row) return row.substring(0,50) + '...';
                },
            },
            // status: {
            //     title: 'Estatus',
            //     valuePrepareFunction: ( row: any ) => {
            //         if (row) return row == "1" ? 'Activo':'Inactivo';
            //         else return '';
            //     },
            //     filterFunction: (cell?: any, search?: string) => {
            //         let value: string = cell == "1" ? 'Activo':'Inactivo';
            //         value = value.toUpperCase();

            //         if (value.includes(search.toUpperCase()) || search === '') return true;
            //         else return false;
            //     }
            // },
        },
        isFromImgContainer: true,
        modalCode: 'dataTestimonioDocenteTabla',
        buttonCode: 'dataTestimonioDocenteTabla',
        tableCode: 'dataTestimonioDocenteTabla',
        dataTestimonioDocenteTabla: [
            // {
            //     id: '1',
            //     name: 'Alfredo',
            //     lastName: 'Valbuena',
            //     cargo: 'profesor',
            //     description: 'lorem ipsum dolor',
            //     // status: '1',
            //     source: null,
            //     imageSelected: null,
            // },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
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
        buttonCode: 'dataTestimonioDocenteTabla',
    }
}

//* MODAL ----------------------------------
const formTestimonioDocenteTabla = {
    component: 'form',
    name: 'testimonyModalForm',
    viewMode: 'edit',
    settings: {
        formsContent: formTestimonioDocentesModalEdit,
        buttons: ['guardar'],
        formType: 'docenteTestimonioUpdate',
        tableCode: 'dataTestimonioDocenteTabla',
        modalCode: 'dataTestimonioDocenteTabla',
        isFromCustomTableActions: true,
        alwaysValidations: true,
        fetcherMethod: 'post',
    }
}
const formTestimonioDocenteTablaViewOnly = {
    component: 'form',
    viewMode: 'view',
    settings: {
        formsContent: formTestimonioDocentesModal,
        tableCode: 'dataTestimonioDocenteTabla',
        modalCode: 'dataTestimonioDocenteTabla',
        isFromCustomTableActions: true,
    }
}
const textsAndButtonsTestimonioDocenteTabla = {
    component: 'textsbuttons',
    name: 'testimonyDeleteModal',
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
      modalCode: 'dataTestimonioDocenteTabla',
      isFromCustomTableActions: true,
      isDeleting: true,
    }
}
const modalTestimonioDocenteTabla = {
    component: 'modal',
    settings: {
        modalCode: 'dataTestimonioDocenteTabla',
        isFromImgPlusContainer: true,
        items: [
            {
                childBlocks: [
                    { ...formTestimonioDocenteTabla },
                    { ...formTestimonioDocenteTablaViewOnly },
                    { ...textsAndButtonsTestimonioDocenteTabla },
                ]
            }
        ]
    }
}
//* ------------------------------------------

export const TEACHER_TESTIMONY_CONFIG = {
    header: {
        title: "Testimonio de docentes"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {
                items: [
                    {
                        childBlocks: [
                            { ...statusGeneral },
                            { ...formTestDoc },
                            { ...testimonioDocenteTabla },
                            { ...textsAndButtons },
                            { ...modalTestimonioDocenteTabla },
                        ]
                    },

                ]
            }
        }
    ]
}
