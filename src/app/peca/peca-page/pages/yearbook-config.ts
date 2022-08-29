import { Store } from '@ngxs/store';
import {
  // SetLapseActivity,
  // SetSectionImage,
  // SetHistoricalReview,
  // SetSchool,
  // SetCoordinator,
  // SetSponsor,
  // SetLapseReadingAnalysis,
  // SetLapseMathAnalysis,
  // SetLapseLogicAnalysis,
  UpdateYearBookRequest,
  CancelYearBookRequest,
} from '../../../store/yearbook/yearbook.action';

/**
 *
 * @function MapperYearBookWeb
 *
 * This function receives all the data as a parameter,
 * and the components are recreated according
 * to the data.
 */
export function MapperYearBookWeb(yearBookData: any, permissions, store: Store) {
  const { yearbook_edit, yearbook_delete } = permissions;
  const schoolSectionsConfig = createSectionsBlocksConfig(yearBookData.sections);
  const lapse1Config = createLapseBlocksConfig('1', yearBookData);
  const lapse2Config = createLapseBlocksConfig('2', yearBookData);
  const lapse3Config = createLapseBlocksConfig('3', yearBookData);

  function getRequestId() {
    const theRequest =
      yearBookData['approvalHistory'] &&
      yearBookData['approvalHistory'] instanceof Array &&
      yearBookData['approvalHistory'].length
        ? yearBookData['approvalHistory']
        : null;
    return theRequest && theRequest[theRequest.length - 1].status === '1' ? theRequest[theRequest.length - 1].id : null;
  }

  function dispatchAction(section: string, data) {
    const requestId = getRequestId();
    const data_ = {
      pecaId: yearBookData.pecaId,
      userId: yearBookData.userId,
      section: section,
      partial: data,
      data: yearBookData,
      requestId: requestId,
    };
    store.dispatch(new UpdateYearBookRequest(data_));
  }

  function createSectionsBlocksConfig(schoolSections) {
    const sectionsOrdered = schoolSections.reduce((sectionsArray, section) => {
      const { id, grade, name } = section;
      const gradeName = `${determineGradeString(grade)}, sección ${name}`;
      sectionsArray[`${grade}-${name}-${id}`] = [
        createTitleComponent(gradeName),
        {
          component: 'form-review',
          name: `grade${grade}-section${name}-form`,
          settings: {
            onSubmit: (values: any) => {
              const data = {
                sectionId: id,
                sectionGrade: grade,
                sectionName: name,
                image: values.inputImg && values.inputImg.length ? values.inputImg : null,
              };
              // store.dispatch(new SetSectionImage(data));
              dispatchAction('sections', data);
            },

            fields: {
              inputImg: {
                name: `grade${grade}-section${name}-image`,
                label: 'Carga de imagen',
                value: section.image,
                disabled: /* yearBookData.isInApproval */ false,
              },
              button: {
                text: 'Guardar cambios',
                ingAction: 'Guardando...',
                hidden: /* yearBookData.isInApproval */ false,
              },
            },
          },
        },
        {
          component: 'table',
          settings: {
            actions: false,
            columns: {
              name: { title: 'Estudiante', filter: false },
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
      return sectionsArray;
    }, {}); // Initial sectionsArray

    const sectionsReduced = Object.keys(sectionsOrdered)
      .sort()
      .reduce((theSections, section) => {
        theSections = [...theSections, ...sectionsOrdered[section]];
        return theSections;
      }, []);

    return sectionsReduced;
  }

  function createLapseBlocksConfig(lapseNumber, yearBookData) {
    const lapseName = `lapse${lapseNumber}`;
    const lapseData = yearBookData[lapseName];
    return [
      createTitleComponent('Diagnóstico de lectura'),
      {
        component: 'table',
        settings: {
          actions: false,
          columns: {
            grade: { title: 'Grado' },
            section: { title: 'Sección' },
            words: { title: 'Resultado de lectura' },
            wordsIndex: { title: 'Índice de lectura' },
          },
          tableCode: 'readingTable',
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
      createTitleComponent('Gráfico estadístico del diagnóstico de lectura'),
      {
        component: 'graphics',
        settings: {
          chartId: `${lapseName}-reading-graphic-not-pdf`,
          sendGraphicToPdf: null,
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de lectura',
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.wordsPerMinIndex).toFixed(2);
          }),
        },
      },
      // Graphic not shown on page, for pdf rendering purpose only
      {
        component: 'graphics',
        settings: {
          hideChart: true,
          chartId: `${lapseName}-reading-graphic`,
          sendGraphicToPdf: 'diagnosticReading',
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de lectura',
          labels: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const { grade, name, wordsPerMinIndex } = diagnostic;
            const realN = parseFloat(wordsPerMinIndex);
            if (realN) diagnosticFinal.push(`${determineGradeString(grade)} ${name}`);
            return diagnosticFinal;
          }, []),
          items: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const realN = parseFloat(diagnostic.wordsPerMinIndex);
            if (realN) diagnosticFinal.push(realN.toFixed(2));
            return diagnosticFinal;
          }, []),
        },
      },
      createTitleComponent('Análisis y resultado del diagnóstico de lectura'),
      {
        component: 'form-review',
        name: 'reading-analysis-form',
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
            };
            // store.dispatch(new SetLapseReadingAnalysis(data));
            dispatchAction('readingDiagnosticAnalysis', data);
          },
          onClickButton: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
              form: true,
            };
            dispatchAction('readingDiagnosticAnalysis', data);
          },
          fields: {
            description: {
              label: 'Análisis del diagnóstico de lectura',
              placeholder: 'Análisis del diagnóstico de lectura',
              value: lapseData.readingDiagnosticAnalysis,
              disabled: /* yearBookData.isInApproval */ false,
            },
            button: {
              type: 'button',
              text: 'Guardar cambios',
              ingAction: 'Guardando...',
              hidden: /* yearBookData.isInApproval */ false,
            },
          },
        },
      },
      createTitleComponent('Diagnóstico de Multiplicación'),
      {
        component: 'table',
        settings: {
          actions: false,
          columns: {
            grade: { title: 'Grado' },
            section: { title: 'Sección' },
            multiplications: { title: 'Resultado de multiplicación' },
            multiplicationsIndex: {
              title: 'Índice de multiplicación',
            },
          },
          tableCode: 'mathTable',
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
      createTitleComponent('Gráfico estadístico del diagnóstico de multiplicación'),
      {
        component: 'graphics',
        settings: {
          chartId: `${lapseName}-math-graphic-not-pdf`,
          sendGraphicToPdf: null,
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de multiplicación',
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.multiplicationsPerMinIndex).toFixed(2);
          }),
        },
      },
      // Graphic not shown on page, for pdf rendering purpose only
      {
        component: 'graphics',
        settings: {
          hideChart: true,
          chartId: `${lapseName}-math-graphic`,
          sendGraphicToPdf: 'diagnosticMath',
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de multiplicación',
          labels: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const { grade, name, multiplicationsPerMinIndex } = diagnostic;
            const realN = parseFloat(multiplicationsPerMinIndex);
            if (realN) diagnosticFinal.push(`${determineGradeString(grade)} ${name}`);
            return diagnosticFinal;
          }, []),
          items: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const realN = parseFloat(diagnostic.multiplicationsPerMinIndex);
            if (realN) diagnosticFinal.push(realN.toFixed(2));
            return diagnosticFinal;
          }, []),
        },
      },
      createTitleComponent('Análisis y resultado del diagnóstico de multiplicación'),
      {
        component: 'form-review',
        name: 'math-analysis-form',
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
            };
            // store.dispatch(new SetLapseMathAnalysis(data));
            dispatchAction('mathDiagnosticAnalysis', data);
          },
          onClickButton: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
              form: true,
            };
            dispatchAction('mathDiagnosticAnalysis', data);
          },
          fields: {
            description: {
              label: 'Análisis del diagnóstico de multiplicación',
              placeholder: 'Análisis del diagnóstico de multiplicación',
              value: lapseData.mathDiagnosticAnalysis,
              disabled: /* yearBookData.isInApproval */ false,
            },
            button: {
              type: 'button',
              text: 'Guardar cambios',
              ingAction: 'Guardando...',
              hidden: /* yearBookData.isInApproval */ false,
            },
          },
        },
      },
      createTitleComponent('Diagnóstico de lógica matemática'),
      {
        component: 'table',
        settings: {
          actions: false,
          columns: {
            grade: { title: 'Grado' },
            section: { title: 'Sección' },
            operations: { title: 'Resultado de lógica matemática' },
            operationsIndex: {
              title: 'Índice de lógica matemática',
            },
          },
          tableCode: 'logicTable',
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
      createTitleComponent('Gráfico estadístico del diagnóstico de lógica matemática'),
      {
        component: 'graphics',
        settings: {
          chartId: `${lapseName}-logic-graphic-not-pdf`,
          sendGraphicToPdf: null,
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de lógica matemática',
          labels: lapseData.diagnosticSummary.map((diagnostic) => {
            const { grade, name } = diagnostic;
            return `${determineGradeString(grade)} ${name}`;
          }),
          items: lapseData.diagnosticSummary.map((diagnostic) => {
            return parseFloat(diagnostic.operationsPerMinIndex).toFixed(2);
          }),
        },
      },
      // Graphic not shown on page, for pdf rendering purpose only
      {
        component: 'graphics',
        settings: {
          hideChart: true,
          chartId: `${lapseName}-logic-graphic`,
          sendGraphicToPdf: 'diagnosticLogic',
          lapseN: +lapseNumber,
          //legendName: yearBookData.school.name,
          legendName: 'Diagnóstico de lógica matemática',
          labels: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const { grade, name, operationsPerMinIndex } = diagnostic;
            const realN = parseFloat(operationsPerMinIndex);
            if (realN) diagnosticFinal.push(`${determineGradeString(grade)} ${name}`);
            return diagnosticFinal;
          }, []),
          items: lapseData.diagnosticSummary.reduce((diagnosticFinal, diagnostic) => {
            const realN = parseFloat(diagnostic.operationsPerMinIndex);
            if (realN) diagnosticFinal.push(realN.toFixed(2));
            return diagnosticFinal;
          }, []),
        },
      },
      createTitleComponent('Análisis y resultado del diagnóstico de lógica matemática'),
      {
        component: 'form-review',
        name: 'logic-analysis-form',
        settings: {
          onSubmit: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
              form: true,
            };
            // store.dispatch(new SetLapseLogicAnalysis(data));
            dispatchAction('logicDiagnosticAnalysis', data);
          },
          onClickButton: (values: any) => {
            const data = {
              lapse: lapseNumber,
              analysis: values.description,
              form: true,
            };
            dispatchAction('logicDiagnosticAnalysis', data);
          },
          fields: {
            description: {
              label: 'Análisis del diagnóstico de lógica matemática',
              placeholder: 'Análisis del diagnóstico de lógica matemática',
              value: lapseData.logicDiagnosticAnalysis,
              disabled: /* yearBookData.isInApproval */ false,
            },
            button: {
              type: 'button',
              text: 'Guardar cambios',
              ingAction: 'Guardando...',
              hidden: /* yearBookData.isInApproval */ false,
            },
          },
        },
      },
      ...createActivitiesComponents(lapseData.activities, lapseNumber),
    ];
  }

  function createTitleComponent(title) {
    return {
      component: 'textsbuttons',
      settings: {
        title: {
          text: title,
          aligning: 'left',
          classes: 'font-weight-bold',
        },
        classes: 'yearbook align-items-start',
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
          component: 'form-review',
          name: `${id}-form`,
          settings: {
            onSubmit: (values: any) => {
              const data = {
                lapse: lapseNumber,
                activityId: id,
                description: values.description,
                images: values.inputImg && values.inputImg.length ? values.inputImg : [],
              };
              // store.dispatch(new SetLapseActivity(data));
              dispatchAction('activities', data);
            },
            fields: {
              inputImg: {
                name: `${lapseName}-${id}-images`,
                label: `Cargar de imágenes de ${name}`,
                disabled: /* yearBookData.isInApproval */ false,
                value: images,
                multiple: true,
              },
              description: {
                label: `Descripción de ${name}`,
                placeholder: `Descripción de ${name}`,
                disabled: /* yearBookData.isInApproval */ false,
                value: description,
              },
              button: {
                text: 'Guardar cambios',
                ingAction: 'Guardando...',
                hidden: /* yearBookData.isInApproval */ false,
              },
            },
          },
        },
      ];
    }, []);
  }

  function determineGradeString(grade) {
    switch (grade) {
      case '0':
        return 'Preescolar';
      case '1':
        return '1er Grado';
      case '2':
        return '2do Grado';
      case '3':
        return '3er Grado';
      case '4':
        return '4to Grado';
      case '5':
        return '5to Grado';
      case '6':
        return '6to Grado';
      default:
        return `${grade} Grado`;
    }
  }

  const mostrarFeedback = (statusCode) => {
    return statusCode === 3;
  };
  const yearbookStatus = {
    component: 'textsbuttons',
    settings: {
      dateOrtext: {},
      status: {
        text: 'Estatus',
        subText: yearBookData.status,
        comments: yearBookData.comments,
      },
      action: mostrarFeedback(yearBookData.status)
        ? [
            {
              type: 9,
              name: 'Ver más',
            },
          ]
        : [],
    },
  };

  const YEARBOOK_CONFIG = {
    header: {
      title: 'AmbLeMario',
      download: {
        url: '#',
        name: 'Descargar',
      },
    },
    blocks: [
      {
        component: 'profiles',
        settings: {
          items: [
            {
              childBlocks: [
                yearbookStatus,
                {
                  component: 'accordion',
                  settings: {
                    items: [
                      {
                        // -- Historical
                        title: 'Reseña histórica',
                        childBlocks: [
                          {
                            component: 'form-review',
                            name: 'historical-review-form',
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg && values.inputImg.length ? values.inputImg : null,
                                  content: values.description,
                                };

                                // store.dispatch(new SetHistoricalReview(data));
                                //
                                dispatchAction('historicalReview', data);
                              },
                              fields: {
                                inputImg: {
                                  name: 'historical-review-image',
                                  label: 'Carga de imagen',
                                  value: yearBookData.historicalReview.image,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                description: {
                                  label: 'Descripción reseña histórica',
                                  placeholder: 'Descripción reseña histórica',
                                  value: yearBookData.historicalReview.content,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                button: {
                                  text: 'Guardar cambios',
                                  ingAction: 'Guardando...',
                                  hidden: /* yearBookData.isInApproval */ false,
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
                            component: 'form-review',
                            name: 'sponsor-form',
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg && values.inputImg.length ? values.inputImg : null,
                                  content: values.description,
                                };
                                // store.dispatch(new SetSponsor(data));
                                dispatchAction('sponsor', data);
                              },
                              fields: {
                                inputImg: {
                                  name: 'sponsor-image',
                                  label: 'Carga de imagen',
                                  value: yearBookData.sponsor.image,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                description: {
                                  label: 'Descripción de padrino',
                                  placeholder: 'Descripción de padrino',
                                  value: yearBookData.sponsor.content,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                button: {
                                  text: 'Guardar cambios',
                                  ingAction: 'Guardando...',
                                  hidden: /* yearBookData.isInApproval */ false,
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
                            component: 'form-review',
                            name: 'coordinator-form',
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg && values.inputImg.length ? values.inputImg : null,
                                  content: values.description,
                                };
                                // store.dispatch(new SetCoordinator(data));
                                dispatchAction('coordinator', data);
                              },
                              fields: {
                                inputImg: {
                                  name: 'coordinator-image',
                                  label: 'Carga de imagen',
                                  value: yearBookData.coordinator.image,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                description: {
                                  label: 'Descripción de coordinador',
                                  placeholder: 'Descripción de coordinador',
                                  value: yearBookData.coordinator.content,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                button: {
                                  text: 'Guardar cambios',
                                  ingAction: 'Guardando...',
                                  hidden: /* yearBookData.isInApproval */ false,
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
                            component: 'form-review',
                            settings: {
                              onSubmit: (values: any) => {
                                const data = {
                                  image: values.inputImg && values.inputImg.length ? values.inputImg : null,
                                  content: values.description,
                                };
                                // store.dispatch(new SetSchool(data));
                                dispatchAction('school', data);
                              },
                              fields: {
                                inputImg: {
                                  name: 'school-image',
                                  label: 'Carga de imagen',
                                  value: yearBookData.school.image,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                description: {
                                  label: 'Descripción de escuela',
                                  placeholder: 'Descripción de escuela',
                                  value: yearBookData.school.content,
                                  disabled: /* yearBookData.isInApproval */ false,
                                },
                                button: {
                                  text: 'Guardar cambios',
                                  ingAction: 'Guardando...',
                                  hidden: /* yearBookData.isInApproval */ false,
                                },
                              },
                            },
                          },
                          ...schoolSectionsConfig,
                        ],
                      },
                      {
                        title: 'Lapso 1',
                        childBlocks: lapse1Config,
                      },
                      {
                        title: 'Lapso 2',
                        childBlocks: lapse2Config,
                      },
                      {
                        title: 'Lapso 3',
                        childBlocks: lapse3Config,
                      },
                    ],
                  },
                },
                {
                  component: 'form-review',
                  settings: {
                    onSubmit: (values: any) => {
                      const data = {
                        pecaId: yearBookData.pecaId,
                        userId: yearBookData.userId,
                      };
                      // store.dispatch(new UpdateYearBookRequest(data));
                    },
                    onCancel: () => {
                      store.dispatch(
                        new CancelYearBookRequest({
                          pecaId: yearBookData.pecaId,
                          approvalHistory: yearBookData.approvalHistory,
                        }),
                      );
                    },
                    fields: {
                      button: {
                        text: 'Enviar Solicitud',
                        ingAction: 'Enviando...',
                        isMainBtn: true,
                        hidden: true, // yearBookData.isInApproval || !yearbook_edit
                      },
                      cancelButton: {
                        text: 'Cancelar Solicitud Previa',
                        ingAction: 'Cancelando...',
                        isMainBtn: true,
                        hidden: !yearBookData.isInApproval || !yearbook_delete,
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
}
