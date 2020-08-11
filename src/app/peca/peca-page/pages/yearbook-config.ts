import {
  formAnalisisYResultados,
  formImagenEscuela,
  formResenaHistorica,
  formPadrinoAnuario,
  formCoordinadorAnuario,
  formEscuelaAnuario,
  formActividades,
  formImgActividades,
} from "../blocks/form-block/all-forms";
import { settings } from "cluster";

//Contenido dropdown Resena Historica
const dataResenaHistorica = {
  component: "form",
  settings: {
    formsContent: formResenaHistorica,
  },
};
const btnAddImgResanaHistorica = {
  component: "textsbuttons",
  settings: {
    inputAndBtns: [
      {
        btn: "Adjuntar Imagen",
      },
    ],
  },
};

//contenido dropdown Padrino
const dataPadrino = {
  component: "form",
  settings: {
    formsContent: formPadrinoAnuario,
  },
};
const btnAddImgPadrino = {
  component: "textsbuttons",
  settings: {
    inputAndBtns: [
      {
        input: "Nombre del Padrino",
        btn: "Adjuntar Imagen",
      },
    ],
  },
};

//contenido dropdown Coordinador
const btnAddImgCoordinador = {
  component: "textsbuttons",
  settings: {
    inputAndBtns: [
      {
        input: "Nombre del coordinador",
        btn: "Adjuntar Imagen",
      },
    ],
  },
};
const dataCoordinador = {
  component: "form",
  settings: {
    formsContent: formCoordinadorAnuario,
  },
};

//contenido dropdown Escuela
const btnAddImgEscuela = {
  component: "textsbuttons",
  settings: {
    inputAndBtns: [
      {
        input: "Nombre del escuela",
        btn: "Adjuntar Imagen",
      },
    ],
  },
};
const dataEscuela = {
  component: "form",
  settings: {
    formsContent: formEscuelaAnuario,
  },
};
const imgSeccionEscuela = {
  component: "form",
  settings: {
    formsContent: formImagenEscuela,
  },
};

//Lapsos
//DIAGNOSTICO LECTURA
const subDiagnosticoLectura = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Diagnóstico de Lectura",
      aligning: "left",
    },
  },
};
const tablaDiagnosticoLectura = {
  component: "table",
  settings: {
    actions: false,
    columns: {
      grade: {
        title: "Grado",
      },
      section: {
        title: "Sección",
      },
      multi: {
        title: "Multiplicación",
      },
      logic: {
        title: "Lógica Matemática",
      },
    },
    tableCode: "dataLectura",
    dataLectura: [
      {
        grade: "1er grado",
        section: "B",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
      {
        grade: "2do grado",
        section: "A",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
const subGraficoLectura = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Gráfico estadístico de Lectura",
      aligning: "left",
    },
  },
};
const graficosLectura = {
  component: "graphics",
  settings: {
    chartId: "graficosLectura",
    items: [],
  },
};

//DIAGNOSTICO MULTIPLICACION
const subDiagnosticoMultiplicacion = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Diagnóstico de Multiplicación",
      aligning: "left",
    },
  },
};
const tablaDiagnosticoMultiplicacion = {
  component: "table",
  settings: {
    actions: false,
    columns: {
      grade: {
        title: "Grado",
      },
      section: {
        title: "Sección",
      },
      multi: {
        title: "Multiplicación",
      },
      logic: {
        title: "Lógica Matematica",
      },
    },
    tableCode: "dataLectura",
    dataLectura: [
      {
        grade: "1er grado",
        section: "B",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
      {
        grade: "2do grado",
        section: "A",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
const subGraficoMultiplicacion = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Gráfico estadístico de Multiplicación",
      aligning: "left",
    },
  },
};
const graficosMultiplicacion = {
  component: "graphics",
  settings: {
    chartId: "graficosMultiplicacion",
    items: [],
  },
};

//DIAGNOSTICO LOGICO-MATEMATICO
const subDiagnosticoLogicoMate = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Diagnóstico de razonamiento lógico - matemático",
      aligning: "left",
    },
  },
};
const tablaDiagnosticoLogicoMate = {
  component: "table",
  settings: {
    actions: false,
    columns: {
      grade: {
        title: "Grado",
      },
      section: {
        title: "Sección",
      },
      multi: {
        title: "Multiplicación",
      },
      logic: {
        title: "Lógica Matematica",
      },
    },
    tableCode: "dataLectura",
    dataLectura: [
      {
        grade: "1er grado",
        section: "B",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
      {
        grade: "2do grado",
        section: "A",
        multi: "30 operacion por min",
        logic: "30 operacion por min",
      },
    ],
    classes: {
      hideView: false,
      hideEdit: false,
      hideDelete: false,
    },
  },
};
const subGraficoLogicoMate = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Gráfico diagnóstico de razonamiento lógico - matemático",
      aligning: "left",
    },
  },
};
const graficosLogicoMate = {
  component: "graphics",
  settings: {
    chartId: "graficosLogicoMate",
    items: [],
  },
};
const subAnalisisResultados = {
  component: "textsbuttons",
  settings: {
    title: {
      text: "Análisis y resultados por diagnóstico",
      aligning: "left",
    },
  },
};
const analisisYResultados = {
  component: "form",
  settings: {
    formsContent: formAnalisisYResultados,
  },
};

const subtitleActividad = {
  component: "checkList",
  settings: {
    infoContainer: [
      {
        line: true,
        subtitle: "Actividades",
      },
    ],
  },
};

const separador = {
  component: "checkList",
  settings: {
    infoContainer: [
      {
        line: true,
      },
    ],
  },
};

//----------------------------------------------------------------------
const sections = [
  { title: "Venezuela Megadiversa", id: "dataTablaLapso1_1" },
  { title: "Otro título", id: "dataTablaLapso1_2" },
  { title: "Título 3", id: "dataTablaLapso1_3" },
  { title: "Ultimo título", id: "dataTablaLapso1_4" },
].map((val) => {
  let ActividadesLapso1 = {
    component: "textsbuttons",
    settings: {
      inputAndBtns: [
        {
          titleInput: val.title,
        },
      ],
    },
  };
  let dataActividadLapso1 = {
    component: "form",
    settings: {
      formsContent: formActividades,
      tableCode: val.id,
    },
  };
  let tablaLapso1 = {
    component: "table",
    settings: {
      columns: {
        image: {
          title: "imagen",
        },
      },
      isFromImgContainer: true,
      modalCode: val.id,
      tableCode: val.id,
      [val.id]: [
        {
          id: "1abcdefghijk",
          image: "imagen1.png",
          source: null,
          imageSelected: null,
        },
        {
          id: "2abcdefghijk",
          image: "imagen2.png",
          source: null,
          imageSelected: null,
        },
        {
          id: "3abcdefghijk",
          image: "imagen3.png",
          source: null,
          imageSelected: null,
        },
      ],
      classes: {
        hideView: false,
        hideEdit: false,
        hideDelete: false,
      },
    },
  };
  //* MODAL ----------------------------------
  let formTablaLapso1 = {
    component: "form",
    viewMode: "both",
    settings: {
      formsContent: formImgActividades,
      buttons: ["guardar"],
      formType: "imageSoloType",
      tableCode: val.id,
      modalCode: val.id,
      isFromCustomTableActions: true,
    },
  };
  let textsAndButtonsTablaLapso1 = {
    component: "textsbuttons",
    settings: {
      subtitles: [
        {
          text: "¿Desea eliminar este ítem?",
        },
      ],
      action: [
        {
          type: 1,
          name: "Si",
        },
        {
          type: 2,
          name: "No",
        },
      ],
      modalCode: val.id,
      isFromCustomTableActions: true,
      isDeleting: true,
    },
  };
  let modalTablaLapso1 = {
    component: "modal",
    settings: {
      modalCode: val.id,
      isFromImgContainer: true,
      items: [
        {
          childBlocks: [
            { ...formTablaLapso1 },
            { ...textsAndButtonsTablaLapso1 },
          ],
        },
      ],
    },
  };
  //* ------------------------------------------

  return [
    { ...ActividadesLapso1 },
    { ...dataActividadLapso1 },
    { ...tablaLapso1 },
    { ...modalTablaLapso1 },
  ];
});
var sectionsObjects = (sections) => {
  let objs = [];
  sections.map((s) => {
    objs.push(...s);
  });
  return objs;
};
//---------------------------------------------------------------------

const tablaImgSeccionEscuela = {
  component: "table",
  settings: {
    columns: {
      img: {
        title: "Imagen",
      },
      grade: {
        title: "Grado",
      },
      seccion: {
        title: "Seccion",
      },
    },
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
  },
};

//----------------------------------------------------------------------

const btnEnviarSolicitud = {
  component: "textsbuttons",
  settings: {
    action: [
      {
        type: 3,
        name: "Enviar Solicitud",
      },
    ],
  },
};

// export const YEARBOOK_CONFIG = {
//     header: {
//         title: "AmbLeMario",
//         download: {
//             url: '#',
//             name: 'Descargar',
//         }
//     },
//     blocks: [
//         {
//             component: 'profiles',
//             settings: {
//                 items: [
//                     {
//                         childBlocks: [
//                             {
//                                 component: 'accordion',
//                                 settings: {
//                                     items: [
//                                         {
//                                             title: "Reseña histórica",
//                                             childBlocks: [
//                                                 { ...btnAddImgResanaHistorica },
//                                                 { ...dataResenaHistorica }
//                                             ]
//                                         },
//                                         {
//                                             title: "Padrino",
//                                             childBlocks: [
//                                                 { ...btnAddImgPadrino },
//                                                 { ...dataPadrino },
//                                             ]
//                                         },
//                                         {
//                                             title: "Coordinador ",
//                                             childBlocks: [
//                                                 { ...btnAddImgCoordinador },
//                                                 { ...dataCoordinador }
//                                             ]
//                                         },
//                                         {
//                                             title: "Escuela",
//                                             childBlocks: [
//                                                 { ...btnAddImgEscuela },
//                                                 { ...dataEscuela },
//                                                 { ...separador },
//                                                 { ...imgSeccionEscuela },
//                                                 { ...tablaImgSeccionEscuela },
//                                             ]
//                                         },
//                                         {
//                                             title: "Lapso 1",
//                                             childBlocks: [
//                                                 //Diagnostico Lectura
//                                                 { ...subDiagnosticoLectura },
//                                                 { ...tablaDiagnosticoLectura },
//                                                 { ...subGraficoLectura },
//                                                 { ...graficosLectura },
//                                                 { ...subAnalisisResultados },
//                                                 { ...analisisYResultados},
//                                                 //Diagnostico Multiplicacion
//                                                 { ...subDiagnosticoMultiplicacion },
//                                                 { ...tablaDiagnosticoMultiplicacion },
//                                                 { ...subGraficoMultiplicacion },
//                                                 { ...graficosMultiplicacion },
//                                                 { ...subAnalisisResultados },
//                                                 { ...analisisYResultados},
//                                                 //Diagnostico Logico Matematica
//                                                 { ...subDiagnosticoLogicoMate },
//                                                 { ...tablaDiagnosticoLogicoMate },
//                                                 { ...subGraficoLogicoMate },
//                                                 { ...graficosLogicoMate },
//                                                 { ...subAnalisisResultados },
//                                                 { ...analisisYResultados},
//                                                 { ...subtitleActividad },
//                                                 ...sectionsObjects(sections),
//                                             ]
//                                         },
//                                         {
//                                             title: "Lapso 2",
//                                             childBlocks: [

//                                             ]
//                                         },
//                                         {
//                                             title: "Lapso 3",
//                                             childBlocks: [
//                                             ]
//                                         },
//                                     ]
//                                 }
//                             }
//                         ]
//                     },
//                     {
//                         childBlocks: [
//                             { ...btnEnviarSolicitud }
//                         ]
//                     }

//                 ]
//             },
//         },
//     ],
// }

/**
 * @author Franklin Perdomo
 */

// -- Page's structure component --

const YEARBOOK_CONFIG = {
  header: {
    title: "AmbLeMario",
    download: {
      url: "#",
      name: "Descargar",
    },
  },

  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            childBlocks: [
              {
                component: "accordion",
                settings: {
                  items: [
                    // -- Historical

                    {
                      title: "Reseña histórica",
                      childBlocks: [
                       
                      ],
                    },

                    // -- Sponsor

                    {
                      title: "Padrino",
                      childBlocks: [
                        {
                          component: "summary",
                          settings: {
                            urlImage: "",
                            text: "",
                          },
                        },
                      ],
                    },

                    // -- Coordinator

                    {
                      title: "Coordinador",
                      childBlocks: [
                        {
                          component: "summary",
                          settings: {
                            urlImage: "",
                            text: "",
                          },
                        },
                      ],
                    },

                    // -- School

                    {
                      title: "Escuela",
                      childBlocks: [
                        {
                          component: "summary",
                          settings: {
                            urlImage: "",
                            text: "",
                          },
                        },
                      ],
                    },

                    // -- Lapse 1

                    {
                      title: "Lapso 1",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

// -- End page's structure component --

/**
 *
 * @function MapperYearBookWeb
 *
 * This function receives all the data as a parameter,
 * and the components are recreated according
 * to the data.
 */

export const MapperYearBookWeb = (yearBookData: any): any => {
  console.log(yearBookData);

  // -- Sponsor yearbook set data

  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[1].title =
    yearBookData.sponsor.name;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[1].childBlocks[0].settings.urlImage =
    yearBookData.sponsor.image;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[1].childBlocks[0].settings.text =
    yearBookData.sponsor.content;

  // -- Coordinator yearbook set data

  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[2].title =
    yearBookData.coordinator.name;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[2].childBlocks[0].settings.urlImage =
    yearBookData.coordinator.image;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[2].childBlocks[0].settings.text =
    yearBookData.coordinator.content;

  // -- School yearbook set data

  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[3].title =
    yearBookData.school.name;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[3].childBlocks[0].settings.urlImage =
    yearBookData.school.image;
  YEARBOOK_CONFIG.blocks[0].settings.items[0].childBlocks[0].settings.items[3].childBlocks[0].settings.text =
    yearBookData.school.content;

  return YEARBOOK_CONFIG;
};

// -- End Franklin's code
// =============================================