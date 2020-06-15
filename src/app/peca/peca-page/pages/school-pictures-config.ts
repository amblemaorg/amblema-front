const selectEstatus = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {

        },
        selectGeneralStatus:
        {
            placeholder: 'Pendiente',
            lista: [
                { id: 1, name: 'Activo' },
                { id: 2, name: 'Proces0' },
            ]
        },
        btnGeneral:
        {
            name: 'Adjuntar foto',
            url: '#'
        },
    }
}
const botonAprobacion = {
    component: 'textsbuttons',
    settings: {
        action: [
            {
                type: 1,
                name: 'Enviar solicitud',
            }
        ],
    }
}

const tablaImagenesEscuela = {
    component: 'table',
    settings: {
        columns: {
            img: {
                title: "Imagen",
            },
            description: {
                title: "Descripcion"
            },
        },
        tableCode: 'dataLectura',
        dataLectura: [
            {
                img: 'imagen',
                description: 'loremp',
            },
            {
                img: 'imagen',
                description: 'loremp',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

export const SCHOOL_PICTURES_CONFIG = {
    header: {
        title: "Fotos de la escuela"
    },
    blocks: [
        {
            component: 'tabs',
            settings: {
                items: [
                    {
                        title: "Escuela",
                        childBlocks: [
                            { ...selectEstatus },
                            { ...tablaImagenesEscuela },
                            { ...botonAprobacion }
                        ]
                    },
                    {
                        title: "Actividades",
                        childBlocks: [
                            { ...selectEstatus },
                            { ...tablaImagenesEscuela },
                            { ...botonAprobacion }
                        ]
                    }
                ],
            },
        },
    ]
}
