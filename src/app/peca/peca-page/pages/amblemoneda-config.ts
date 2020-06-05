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
                image: "../../../../../assets/images/profile-leena.jpg",
                description: "foto numero 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                image: "../../../../../assets/images/profile-oscar.jpg",
                description: "foto numero 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
                image: "../../../../../assets/images/background-pillar-lectura.jpg",
                description: "foto numero 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorum quo animi velit accusantium alias, quis esse inventore, vero veritatis aperiam corporis quos, iusto aliquid quam. Maxime doloremque repellat perferendis?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident hic placeat nisi in quaerat debitis minima impedit tempore asperiores dicta, at, doloribus ducimus perferendis aliquam, incidunt quia praesentium beatae."
            },
            {
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
    settings: {
        columns: {
            grade: {
                title: "Grado",
            },
            section: {
                title: "Sección"
            },
            confirmation: {
                title: 'Confirmación'
            },
        },
        tableCode: 'amblemonedaConfigConfirmacionDocente',
        amblemonedaConfigConfirmacionDocente: [
            {
                grade: '5to grado',
                section: 'B',
                confirmation: 'Confirmado',
            },
            {
                grade: '4to grado',
                section: 'A',
                confirmation: 'Por Confirmar',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

const charlaConDocentes = {
    component: 'textsbuttons',
    settings: {
        dateOrtext: {
            text: 'Fecha de la reunión:',
            fields: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired },
        },
        download: {
            url: '#',
            name: 'hola.png',
        },
        subtitles: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
        ],
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
                        title: "Charla con los docentes acerca de las amblemonedas",
                        childBlocks: [
                            { ...charlaConDocentes }
                        ]
                    },
                    {
                        title: "Elaboración de la alcancía por estudiante",
                        childBlocks: [
                            { ...sliderAmblemoneda }
                        ]
                    },
                    {
                        title: "Confirmar que cada docente tiene sus amblemonedas",
                        childBlocks: [
                            { ...ConfirmacionDocente }
                        ]
                    }
                ]
            }
        }
    ]
}
