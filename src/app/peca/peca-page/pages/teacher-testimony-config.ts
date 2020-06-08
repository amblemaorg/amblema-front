import { formTestimonioDocentes } from '../blocks/form-block/all-forms'

const formTestDoc = {
    component: 'form',
    settings: {
        formsContent: formTestimonioDocentes,
    }
}

const testimonioDocenteTabla = {
    component: 'table',
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
            desc: {
                title: 'Descripcion'
            },
            state: {
                title: 'Estado '
            },
            status: {
                title: 'Estatus'
            },
        },
        tableCode: 'dataTestimonio',
        dataTestimonio: [
            {
                name: 'Alfredo',
                lastName: 'Valbuena',
                cargo: 'profesor',
                desc: 'lorem ipsum dolor',
                state: 'lara',
                status: 'activo',
            },
            {
                name: 'Alfredo',
                lastName: 'Valbuena',
                cargo: 'profesor',
                desc: 'lorem ipsum dolor',
                state: 'lara',
                status: 'activo',
            },
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
            type: 1,
            name: 'Enviar Solicitud',
        }],
    }
}

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
                            { ...formTestDoc },
                            { ...testimonioDocenteTabla },
                            { ...textsAndButtons }
                        ]
                    },

                ]
            }
        }
    ]
}
