import { SetLapseActivity, SetSectionImage } from "./../../../store/yearbook/yearbook.action";
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
import { Store } from "@ngxs/store";
import {
  SetHistoricalReview,
  SetSchool,
  SetCoordinator,
  SetSponsor,
  SetLapseReadingAnalysis,
  SetLapseMathAnalysis,
  SetLapseLogicAnalysis,
  UpdateYearBookRequest,
  CancelYearBookRequest,
  SetYearBook,
} from "src/app/store/yearbook/yearbook.action";
import { ToastrService } from "ngx-toastr";
import { FetchPecaContent } from "src/app/store/actions/peca/peca.actions";

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
    sendGraphicToPdf: "diagnosticReading",
    lapseN: 1,
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
    sendGraphicToPdf: "diagnosticMath",
    lapseN: 1,
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
    sendGraphicToPdf: "diagnosticLogic",
    lapseN: 1,
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
          childBlocks: [{ ...formTablaLapso1 }, { ...textsAndButtonsTablaLapso1 }],
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

/**
 *
 * @function MapperYearBookWeb
 *
 * This function receives all the data as a parameter,
 * and the components are recreated according
 * to the data.
 */
export const MapperYearBookWeb = (yearBookData: any, store: Store, toastr: ToastrService): any => {
  const schoolSectionsConfig = createSectionsBlocksConfig(yearBookData.sections);
  const lapse1Config = createLapseBlocksConfig("1", yearBookData);
  const lapse2Config = createLapseBlocksConfig("2", yearBookData);
  const lapse3Config = createLapseBlocksConfig("3", yearBookData);

  function createSectionsBlocksConfig(schoolSections) {
    return schoolSections.reduce((sectionsArray, section) => {
      const { id, grade, name } = section;
      const gradeName = `${determineGradeString(grade)}, sección ${name}`;
      return [
        ...sectionsArray,
        createTitleComponent(gradeName),
        {
          component: "form-review",
          name: `grade${grade}-section${name}-form`,
          settings: {
            onSubmit: (values: any) => {
              const data = {
                sectionId: id,
                sectionGrade: grade,
                sectionName: name,
                image: values.inputImg,
              };
              store.dispatch(new SetSectionImage(data));
            },
            fields: {
              inputImg: {
                name: `grade${grade}-section${name}-image`,
                label: "Carga de imagen",
                value: section.image,
                disabled: yearBookData.isInApproval,
              },
              button: {
                text: "Guardar cambios",
                hidden: yearBookData.isInApproval,
              },
            },
          },
        },
        {
          component: "table",
          settings: {
            actions: false,
            columns: {
              name: { title: "Estudiante", filter: false },
            },
            tableCode: `grade${grade}-section${name}-table`,
            [`grade${grade}-section${name}-table`]: section.students.map((student) => {
              return {
                name: `${student.firstName} ${student.lastName}`,
              };
            }),
            classes: {
              hideView: false,
              hideEdit: false,
              hideDelete: false,
            },
          },
        },
      ];
    }, []); // Initial sectionsArray
  }

  function createLapseBlocksConfig(lapseNumber, yearBookData) {
    const lapseName = `lapse${lapseNumber}`;
    const lapseData = yearBookData[lapseName];
    return [
      createTitleComponent("Diagnóstico de lectura"),
      {
        component: "table",
        settings: {
          actions: false,
          columns: {
            grade: { title: "Grado" },
            section: { title: "Sección" },
            words: { title: "Resultado de lectura" },
            wordsIndex: { title: "Índice de lectura" },
          },
          tableCode: "readingTable",
          readingTable: lapseData.diagnosticSummary.map((diagnostic) => {
            return {
              grade: determineGradeString(diagnostic.grade),
              section: diagnostic.name,
              words: diagnostic.wordsPerMin,
              wordsIndex: diagnostic.wordsPerMinIndex,
            };
          }),
          classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
          },
        },
      },
      createTitleComponent("Gráfico estadístico del diagnóstico de lectura"),
      {
        component: "graphics",
        settings: {
          chartId: `${lapseName}-reading-graphic`,
          sendGraphicToPdf: "diagnosticReading",
          lapseN: +lapseNumber,
          legendName: yearBookData.school.name,
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.wordsPerMinIndex).toFixed(2);
          }),
        },
      },
      createTitleComponent("Análisis y resultado del diagnóstico de lectura"),
      {
        component: "form-review",
        name: "reading-analysis-form",
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
            };
            store.dispatch(new SetLapseReadingAnalysis(data));
          },
          fields: {
            description: {
              label: "Análisis del diagnóstico de lectura",
              placeholder: "Análisis del diagnóstico de lectura",
              value: lapseData.readingDiagnosticAnalysis,
              disabled: yearBookData.isInApproval,
            },
            button: {
              text: "Guardar cambios",
              hidden: yearBookData.isInApproval,
            },
          },
        },
      },
      createTitleComponent("Diagnóstico de multiplicación"),
      {
        component: "table",
        settings: {
          actions: false,
          columns: {
            grade: { title: "Grado" },
            section: { title: "Sección" },
            multiplications: { title: "Resultado de multiplicación" },
            multiplicationsIndex: {
              title: "Índice de multiplicación",
            },
          },
          tableCode: "mathTable",
          mathTable: lapseData.diagnosticSummary.map((diagnostic) => {
            return {
              grade: determineGradeString(diagnostic.grade),
              section: diagnostic.name,
              multiplications: diagnostic.multiplicationsPerMin,
              multiplicationsIndex: diagnostic.multiplicationsPerMinIndex,
            };
          }),
          classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
          },
        },
      },
      createTitleComponent("Gráfico estadístico del diagnóstico de multiplicación"),
      {
        component: "graphics",
        settings: {
          chartId: `${lapseName}-math-graphic`,
          sendGraphicToPdf: "diagnosticMath",
          lapseN: +lapseNumber,
          legendName: yearBookData.school.name,
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.multiplicationsPerMinIndex).toFixed(2);
          }),
        },
      },
      createTitleComponent("Análisis y resultado del diagnóstico de multiplicación"),
      {
        component: "form-review",
        name: "math-analysis-form",
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
            };
            store.dispatch(new SetLapseMathAnalysis(data));
          },
          fields: {
            description: {
              label: "Análisis del diagnóstico de multiplicación",
              placeholder: "Análisis del diagnóstico de multiplicación",
              value: lapseData.mathDiagnosticAnalysis,
              disabled: yearBookData.isInApproval,
            },
            button: {
              text: "Guardar cambios",
              hidden: yearBookData.isInApproval,
            },
          },
        },
      },
      createTitleComponent("Diagnóstico de lógica matemática"),
      {
        component: "table",
        settings: {
          actions: false,
          columns: {
            grade: { title: "Grado" },
            section: { title: "Sección" },
            operations: { title: "Resultado de lógica matemática" },
            operationsIndex: {
              title: "Índice de lógica matemática",
            },
          },
          tableCode: "logicTable",
          logicTable: lapseData.diagnosticSummary.map((diagnostic) => {
            return {
              grade: determineGradeString(diagnostic.grade),
              section: diagnostic.name,
              operations: diagnostic.operationsPerMin,
              operationsIndex: diagnostic.operationsPerMinIndex,
            };
          }),
          classes: {
            hideView: false,
            hideEdit: false,
            hideDelete: false,
          },
        },
      },
      createTitleComponent("Gráfico estadístico del diagnóstico de lógica matemática"),
      {
        component: "graphics",
        settings: {
          chartId: `${lapseName}-logic-graphic`,
          sendGraphicToPdf: "diagnosticLogic",
          lapseN: +lapseNumber,
          legendName: yearBookData.school.name,
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.operationsPerMinIndex).toFixed(2);
          }),
        },
      },
      createTitleComponent("Análisis y resultado del diagnóstico de lógica matemática"),
      {
        component: "form-review",
        name: "logic-analysis-form",
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
            };
            store.dispatch(new SetLapseLogicAnalysis(data));
          },
          fields: {
            description: {
              label: "Análisis del diagnóstico de lógica matemática",
              placeholder: "Análisis del diagnóstico de lógica matemática",
              value: lapseData.logicDiagnosticAnalysis,
              disabled: yearBookData.isInApproval,
            },
            button: {
              text: "Guardar cambios",
              hidden: yearBookData.isInApproval,
            },
          },
        },
      },
      ...createActivitiesComponents(lapseData.activities, lapseNumber),
    ];
  }

  function createTitleComponent(title) {
    return {
      component: "textsbuttons",
      settings: {
        title: {
          text: title,
          aligning: "left",
        },
      },
    };
  }

  function createActivitiesComponents(activities: any[], lapseNumber) {
    const lapseName = `lapse${lapseNumber}`;

    return activities.reduce((activitiesArray, activity) => {
      const { id, name, images, description } = activity;
      return [
        ...activitiesArray,
        createTitleComponent(name),
        {
          component: "form-review",
          name: `${id}-form`,
          settings: {
            onSubmit: (values: any) => {
              const data = {
                lapse: lapseNumber,
                activityId: id,
                description: values.description,
                images: values.inputImg,
              };
              store.dispatch(new SetLapseActivity(data));
            },
            fields: {
              inputImg: {
                name: `${lapseName}-${id}-images`,
                label: `Cargar de imágenes de ${name}`,
                disabled: yearBookData.isInApproval,
                value: images,
                multiple: true,
              },
              description: {
                label: `Descripción de ${name}`,
                placeholder: `Descripción de ${name}`,
                disabled: yearBookData.isInApproval,
                value: description,
              },
              button: {
                text: "Guardar cambios",
                hidden: yearBookData.isInApproval,
              },
            },
          },
        },
      ];
    }, []);
  }

  function determineGradeString(grade) {
    switch (grade) {
      case "1":
        return "1er Grado";
      case "2":
        return "2do Grado";
      case "3":
        return "3er Grado";
      case "4":
        return "4to Grado";
      case "5":
        return "5to Grado";
      case "6":
        return "6to Grado";
      default:
        return `${grade} Grado`;
    }
  }

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
                      {
                        // -- Historical
                        title: "Reseña histórica",
                        childBlocks: [
                          {
                            component: "form-review",
                            name: "historical-review-form",
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg,
                                  content: values.description,
                                };
                                store.dispatch(new SetHistoricalReview(data));
                              },
                              fields: {
                                inputImg: {
                                  name: "historical-review-image",
                                  label: "Carga de imagen",
                                  value: yearBookData.historicalReview.image,
                                  disabled: yearBookData.isInApproval,
                                },
                                description: {
                                  label: "Descripción reseña histórica",
                                  placeholder: "Descripción reseña histórica",
                                  value: yearBookData.historicalReview.content,
                                  disabled: yearBookData.isInApproval,
                                },
                                button: {
                                  text: "Guardar cambios",
                                  hidden: yearBookData.isInApproval,
                                },
                              },
                            },
                          },
                        ],
                      },
                      {
                        // -- Sponsor
                        title: yearBookData.sponsor.name,
                        childBlocks: [
                          {
                            component: "form-review",
                            name: "sponsor-form",
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg,
                                  content: values.description,
                                };
                                store.dispatch(new SetSponsor(data));
                              },
                              fields: {
                                inputImg: {
                                  name: "sponsor-image",
                                  label: "Carga de imagen",
                                  value: yearBookData.sponsor.image,
                                  disabled: yearBookData.isInApproval,
                                },
                                description: {
                                  label: "Descripción de padrino",
                                  placeholder: "Descripción de padrino",
                                  value: yearBookData.sponsor.content,
                                  disabled: yearBookData.isInApproval,
                                },
                                button: {
                                  text: "Guardar cambios",
                                  hidden: yearBookData.isInApproval,
                                },
                              },
                            },
                          },
                        ],
                      },
                      {
                        // -- Coordinator
                        title: yearBookData.coordinator.name,
                        childBlocks: [
                          {
                            component: "form-review",
                            name: "coordinator-form",
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg,
                                  content: values.description,
                                };
                                store.dispatch(new SetCoordinator(data));
                              },
                              fields: {
                                inputImg: {
                                  name: "coordinator-image",
                                  label: "Carga de imagen",
                                  value: yearBookData.coordinator.image,
                                  disabled: yearBookData.isInApproval,
                                },
                                description: {
                                  label: "Descripción de coordinador",
                                  placeholder: "Descripción de coordinador",
                                  value: yearBookData.coordinator.content,
                                  disabled: yearBookData.isInApproval,
                                },
                                button: {
                                  text: "Guardar cambios",
                                  hidden: yearBookData.isInApproval,
                                },
                              },
                            },
                          },
                        ],
                      },
                      {
                        // -- School
                        title: yearBookData.school.name,
                        childBlocks: [
                          {
                            component: "form-review",
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg,
                                  content: values.description,
                                };
                                store.dispatch(new SetSchool(data));
                              },
                              fields: {
                                inputImg: {
                                  name: "school-image",
                                  label: "Carga de imagen",
                                  value: yearBookData.school.image,
                                  disabled: yearBookData.isInApproval,
                                },
                                description: {
                                  label: "Descripción de escuela",
                                  placeholder: "Descripción de escuela",
                                  value: yearBookData.school.content,
                                  disabled: yearBookData.isInApproval,
                                },
                                button: {
                                  text: "Guardar cambios",
                                  hidden: yearBookData.isInApproval,
                                },
                              },
                            },
                          },
                          ...schoolSectionsConfig,
                        ],
                      },
                      {
                        // -- Lapse 1
                        title: "Lapso 1",
                        childBlocks: lapse1Config,
                      },
                      {
                        // -- Lapse 2
                        title: "Lapso 2",
                        childBlocks: lapse2Config,
                      },
                      {
                        // -- Lapse 3
                        title: "Lapso 3",
                        childBlocks: lapse3Config,
                      },
                    ],
                  },
                },
                {
                  component: "form-review",
                  settings: {
                    onSubmit: (values: any) => {
                      const data = {
                        pecaId: yearBookData.pecaId,
                        userId: yearBookData.userId,
                      };
                      store.dispatch(new UpdateYearBookRequest(data));
                    },
                    onCancel: () => {
                      store.dispatch(new CancelYearBookRequest({ pecaId: yearBookData.pecaId }));
                    },
                    fields: {
                      button: {
                        text: "Enviar Solicitud",
                        hidden: yearBookData.isInApproval,
                      },
                      cancelButton: {
                        text: "Cancelar Solicitud Previa",
                        hidden: !yearBookData.isInApproval,
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  };

  return YEARBOOK_CONFIG;
};
