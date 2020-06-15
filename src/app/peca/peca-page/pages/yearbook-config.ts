import { formResenaHistorica, formPadrinoAnuario, formCoordinadorAnuario, formEscuelaAnuario, formActividades, formImgActividades } from '../blocks/form-block/all-forms';
import { settings } from 'cluster';

//Contenido dropdown Resena Historica
const dataResenaHistorica = {
    component: 'form',
    settings: {
        formsContent: formResenaHistorica,
    }
}
const btnAddImgResanaHistorica = {
    component: 'textsbuttons',
    settings: {
        inputAndBtns: [
            {
                btn: "Adjuntar Imagen",
            },
        ]

    },
}

//contenido dropdown Padrino
const dataPadrino = {
    component: 'form',
    settings: {
        formsContent: formPadrinoAnuario,
    }
}
const btnAddImgPadrino = {
    component: 'textsbuttons',
    settings: {
        inputAndBtns: [
            {
                input: 'Nombre del Padrino',
                btn: "Adjuntar Imagen",
            },
        ]
    },
}

//contenido dropdown Coordinador
const btnAddImgCoordinador = {
    component: 'textsbuttons',
    settings: {
        inputAndBtns: [
            {
                input: "Nombre del coordinador",
                btn: "Adjuntar Imagen",
            },
        ]
    },
}
const dataCoordinador = {
    component: 'form',
    settings: {
        formsContent: formCoordinadorAnuario,
    }
}

//contenido dropdown Escuela
const btnAddImgEscuela = {
    component: 'textsbuttons',
    settings: {
        inputAndBtns: [
            {
                input: "Nombre del escuela",
                btn: "Adjuntar Imagen",
            },
        ]
    },
}
const dataEscuela = {
    component: 'form',
    settings: {
        formsContent: formEscuelaAnuario,
    }
}


//Lapsos
const subDiagnostico = {
    component: 'textsbuttons',
    settings: {
        title: {
            text: "Diagnóstico del lapso",
            aligning: "left"
        }
    },
}
const tablaDiagnostico = {
    component: 'table',
    settings: {
        actions: false,
        columns: {
            grade: {
                title: "grado",
            },
            section: {
                title: "seccion"
            },
            multi: {
                title: "Multiplicacion",
            },
            logic: {
                title: "Logica Matematica"
            },
        },
        tableCode: 'dataLectura',
        dataLectura: [
            {
                grade: '1er grado',
                section: 'B',
                multi: '30 operacion por min',
                logic: '30 operacion por min'

            },
            {
                grade: '2do grado',
                section: 'A',
                multi: '30 operacion por min',
                logic: '30 operacion por min'
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}
const subGrafico= {
    component: 'textsbuttons',
    settings: {
        title: {
            text: "Gráfico estadisticos del diagnóstico",
            aligning: "left"
        }
    },
}
const graficos = {
    component: 'graphics',
    settings: {
        items: [
            
        ]
    }
}

const subtitleActividad = {
    component: 'checkList',
    settings: {
        infoContainer: [
            {
                line: true,
                subtitle: "Actividades"
            }
        ]
    }
}

const ActividadesLapso1 = {
    component: 'textsbuttons',
    settings: {
        inputAndBtns: [
            {
                titleInput: "Venezuela Megadiversa"
            },

        ]
    },
}
const dataActividad = {
    component: 'form',
    settings: {
        formsContent: formActividades,
    }
}
const dataImgActividad = {
    component: 'form',
    settings: {
        formsContent: formImgActividades,
    }
}

const tablaLapso1 = {
    component: 'table',
    settings: {
        columns: {
            img: {
                title: "imagen",
            },
        },
        tableCode: 'dataTablaLapso',
        dataTablaLapso: [
            {
                img: 'lorem inpsu',
            },
            {
                img: 'lorem inpsu',
            },
            {
                img: 'lorem inpsu',
            },
        ],
        classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
        },
    }
}

export const YEARBOOK_CONFIG = {
    header: {
        title: "Anuario",
        download: {
            url: '#',
            name: 'Descargar',
        }
    },
    blocks: [
        {
            component: 'accordion',
            settings: {
                items: [
                    {
                        title: "Reseña histórica",
                        childBlocks: [
                            { ...btnAddImgResanaHistorica },
                            { ...dataResenaHistorica }
                        ]
                    },
                    {
                        title: "Padrino",
                        childBlocks: [
                            { ...btnAddImgPadrino },
                            { ...dataPadrino },
                        ]
                    },
                    {
                        title: "Coordinador ",
                        childBlocks: [
                            { ...btnAddImgCoordinador },
                            { ...dataCoordinador }
                        ]
                    },
                    {
                        title: "Escuela",
                        childBlocks: [
                            { ...btnAddImgEscuela },
                            { ...dataEscuela }
                        ]
                    },
                    {
                        title: "Lapso 1",
                        childBlocks: [
                            { ...subDiagnostico },
                            { ...tablaDiagnostico },
                            { ...subGrafico },
                            { ...graficos },
                            { ...subtitleActividad },
                            { ...ActividadesLapso1 },
                            { ...dataActividad },
                            { ...dataImgActividad },
                            { ...tablaLapso1 },
                            //*********************
                            { ...ActividadesLapso1 },
                            { ...dataActividad },
                            { ...dataImgActividad },
                            { ...tablaLapso1 },
                            //***********************
                            { ...ActividadesLapso1 },
                            { ...dataActividad },
                            { ...dataImgActividad },
                            { ...tablaLapso1 }
                        ]
                    },
                    {
                        title: "Lapso 2",
                        childBlocks: [

                        ]
                    },
                    {
                        title: "Lapso 3",
                        childBlocks: [

                        ]
                    },
                ]
            },
        },
    ],
}
