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
        dateOrtext: {

        },
        selectStatus:
        {
            placeholder: 'Selecciona el estudiante',
            lista: [
                { id: 1, name: 'ALfredo' },
                { id: 2, name: 'Yanior' },
                { id: 3, name: 'Jose' },
            ]
        },
        btnGeneral:
        {
            name: 'Agregar'
        },
    }
}

const textsAndButtons = {
    component: 'textsbuttons',
    settings: {
        title: {
            text: '(Centrado) Solicitud de asesoria a AmbLeMa: Licencia para operar',
            aligning: 'center',
        },
        action: [{
            type: 1,
            name: 'Enviar Solicitud',
        }],
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
            },
            state: {
                title: "Estado"
            },
            result: {
                title: 'Resultado'
            },
        },
        tableCode: 'dataEstudiante',
        dataEstudiante: [
            {
                name: 'Alfredo',
                lastName: 'Valbuena',
                gradeAndSection: '5to grado B',
                state: 'Lara',
                result: 'Aprobado',
            },
            {
                name: 'saul',
                lastName: 'ramos',
                gradeAndSection: '6to grado A',
                state: 'Lara',
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
                            { ...textsAndButtons }
                        ]
                    }
                ]
            }
        }
    ]
}
