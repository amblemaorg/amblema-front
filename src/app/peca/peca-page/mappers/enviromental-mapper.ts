import * as moment from "moment";
export default moment;

export function EnviromentalMapper(EnviromentalData, pecaId) {
  const viewName = "environmental-project-tab";

  const ENVIRONMENTAL_PROJECT_CONFIG_TEST = {
    header: {
      title: EnviromentalData.name,
    },
    blocks: [
      {
        component: "tabs",
        settings: {
          items: [
            {
              title: "Lapso 1",
              viewName: viewName,
              childBlocks: [
                {
                  component: "profiles",
                  settings: {
                    items: [],
                  },
                },
              ],
            },
            {
              title: "Lapso 2",
              viewName: viewName,
              childBlocks: [
                {
                  component: "profiles",
                  settings: {
                    items: [],
                  },
                },
              ],
            },
            {
              title: "Lapso 3",
              viewName: viewName,
              childBlocks: [
                {
                  component: "profiles",
                  settings: {
                    items: [],
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  };

  //----------------------------------------------------------LAPSO 1 ----------------------------------------------------------------------------------------
  ENVIRONMENTAL_PROJECT_CONFIG_TEST.blocks[0].settings.items[0].childBlocks[0].settings.items.push(
    {
      childBlocks: [
        {
          component: "textsbuttons",
          settings: {
            title: {
              aligning: "left", // 'center' for center aligning, 'left' otherwise
              text: EnviromentalData.lapse1.generalObjective,
            },
          },
        },
      ],
    },
    {
      childBlocks: [
        {
          component: "accordion",
          name: "lapse1Enviromental",
          settings: {
            items: [
              ...EnviromentalData.lapse1.topics.map((topic, i) => {
                return {
                  title: topic.name,
                  childBlocks: [
                    {
                      component: "checkList",
                      name: "ArrayInfo1",
                      settings: {
                        extraData: {
                          environmentalData: EnviromentalData,
                          lapse: "lapse1",
                          topicIndex: i,
                        },
                        fetcherMethod: "post",
                        fetcherUrls: {
                          post: `pecaprojects/environmentalproject/${pecaId}`,
                        },
                        infoContainer: [
                          {
                            principal: [
                              {
                                tema: topic.name,
                                objetivo: [
                                  ...topic.objectives.map((obj) => {
                                    return {
                                      conObjetivo: obj,
                                    };
                                  }),
                                ],
                                estrategia: [
                                  ...topic.strategies.map((est) => {
                                    return {
                                      contEstrategia: est,
                                    };
                                  }),
                                ],
                                contenido: [
                                  ...topic.contents.map((cont) => {
                                    return {
                                      contContenido: cont,
                                    };
                                  }),
                                ],
                              },
                            ],
                          },
                          ...topic.levels.map((level, i) => {
                            /* Inicio de configuracion de la duracion */
                            const hours = level.duration.substr(0, 2);
                            const minutes = level.duration.substr(2, 4);
                            let context1;
                            if (hours == "01" && minutes == "01") {
                              context1 = `${hours} hora ${minutes} minuto`;
                            } else if (hours == "01" && minutes != "01") {
                              context1 = `${hours} hora ${minutes} minutos`;
                            } else if (hours != "01" && minutes == "01") {
                              context1 = `${hours} horas ${minutes} minuto`;
                            } else {
                              context1 = `${hours} horas ${minutes} minutos`;
                            }
                            /* Fin de configuracion de la duracion */

                            /* Inicio de configuracion del grado */
                            let completeGrade;
                            if (level.target[0].label == "0") {
                              completeGrade = "Preescolar";
                            } else if (level.target[0].label == "1") {
                              completeGrade = "Primer grado";
                            } else if (level.target[0].label == "2") {
                              completeGrade = "Segundo grado";
                            } else if (level.target[0].label == "3") {
                              completeGrade = "Tercer grado";
                            } else if (level.target[0].label == "4") {
                              completeGrade = "Cuarto grado";
                            } else if (level.target[0].label == "5") {
                              completeGrade = "Quinto grado";
                            } else {
                              completeGrade = "Sexto grado";
                            }
                            /* Fin de configuracion del grado */

                            return {
                              datosNivel: [
                                {
                                  index: i,
                                  nivel: completeGrade,
                                  week: [
                                    ...level.week.map((w) => {
                                      return {
                                        contWeek: moment(new Date(w)).format("DD/MM/YYYY"),
                                      };
                                    }),
                                  ],
                                  time: context1,
                                  tecnica: [
                                    ...level.techniques.map((tec) => {
                                      return {
                                        contTecnica: tec,
                                      };
                                    }),
                                  ],
                                  recurso: [
                                    ...level.resources.map((res) => {
                                      return {
                                        contRecurso: res,
                                      };
                                    }),
                                  ],
                                  evaluacion: [
                                    ...level.evaluations.map((eva) => {
                                      return {
                                        contEvaluacion: eva,
                                      };
                                    }),
                                  ],
                                  title: "Actividades",
                                  checkList: [
                                    ...level.activities.map((act) => {
                                      return {
                                        name: act.name,
                                        id: act.id,
                                        checked: act.checked,
                                      };
                                    }),
                                  ],
                                  material: [
                                    ...level.supportMaterial.map((sup) => {
                                      return {
                                        link: sup,
                                      };
                                    }),
                                  ],
                                },
                              ],
                              button: {
                                name: "Guardar",
                              },
                              line: true,
                            };
                          }),
                        ],
                      },
                    },
                  ],
                };
              }),
            ],
          },
        },
      ],
    }
  );

  //----------------------------------------------------------LAPSO 2 ----------------------------------------------------------------------------------------
  ENVIRONMENTAL_PROJECT_CONFIG_TEST.blocks[0].settings.items[1].childBlocks[0].settings.items.push(
    {
      childBlocks: [
        {
          component: "textsbuttons",
          settings: {
            title: {
              aligning: "left", // 'center' for center aligning, 'left' otherwise
              text: EnviromentalData.lapse2.generalObjective,
            },
          },
        },
      ],
    },
    {
      childBlocks: [
        {
          component: "accordion",
          name: "lapse2Enviromental",
          settings: {
            items: [
              ...EnviromentalData.lapse2.topics.map((topic, i) => {
                return {
                  title: topic.name,
                  childBlocks: [
                    {
                      component: "checkList",
                      name: "ArrayInfo2",
                      settings: {
                        extraData: {
                          environmentalData: EnviromentalData,
                          lapse: "lapse2",
                          topicIndex: i,
                        },
                        fetcherMethod: "post",
                        fetcherUrls: {
                          post: `/pecaprojects/environmentalproject/${pecaId}`,
                        },
                        infoContainer: [
                          {
                            principal: [
                              {
                                tema: topic.name,
                                objetivo: [
                                  ...topic.objectives.map((obj) => {
                                    return {
                                      conObjetivo: obj,
                                    };
                                  }),
                                ],
                                estrategia: [
                                  ...topic.strategies.map((est) => {
                                    return {
                                      contEstrategia: est,
                                    };
                                  }),
                                ],
                                contenido: [
                                  ...topic.contents.map((cont) => {
                                    return {
                                      contContenido: cont,
                                    };
                                  }),
                                ],
                              },
                            ],
                          },
                          ...topic.levels.map((level, i) => {
                            /* Inicio de configuracion de la duracion */

                            const hours = level.duration.substr(0, 2);
                            const minutes = level.duration.substr(2, 4);
                            let context2;
                            if (hours == "01" && minutes == "01") {
                              context2 = `${hours} hora ${minutes} minuto`;
                            } else if (hours == "01" && minutes != "01") {
                              context2 = `${hours} hora ${minutes} minutos`;
                            } else if (hours != "01" && minutes == "01") {
                              context2 = `${hours} horas ${minutes} minuto`;
                            } else {
                              context2 = `${hours} horas ${minutes} minutos`;
                            }

                            /* Fin de configuracion de la duracion */

                            /* Inicio de configuracion del grado */
                            let completeGrade2;
                            if (level.target[0].label == "0") {
                              completeGrade2 = "Preescolar";
                            } else if (level.target[0].label == "1") {
                              completeGrade2 = "Primer grado";
                            } else if (level.target[0].label == "2") {
                              completeGrade2 = "Segundo grado";
                            } else if (level.target[0].label == "3") {
                              completeGrade2 = "Tercer grado";
                            } else if (level.target[0].label == "4") {
                              completeGrade2 = "Cuarto grado";
                            } else if (level.target[0].label == "5") {
                              completeGrade2 = "Quinto grado";
                            } else {
                              completeGrade2 = "Sexto grado";
                            }
                            /* Fin de configuracion del grado */
                            return {
                              datosNivel: [
                                {
                                  index: i,
                                  nivel: completeGrade2,
                                  week: [
                                    ...level.week.map((w) => {
                                      return {
                                        contWeek: moment(new Date(w)).format("DD/MM/YYYY"),
                                      };
                                    }),
                                  ],
                                  time: context2,
                                  tecnica: [
                                    ...level.techniques.map((tec) => {
                                      return {
                                        contTecnica: tec,
                                      };
                                    }),
                                  ],
                                  recurso: [
                                    ...level.resources.map((res) => {
                                      return {
                                        contRecurso: res,
                                      };
                                    }),
                                  ],
                                  evaluacion: [
                                    ...level.evaluations.map((eva) => {
                                      return {
                                        contEvaluacion: eva,
                                      };
                                    }),
                                  ],
                                  title: "Actividades",
                                  checkList: [
                                    ...level.activities.map((act) => {
                                      return {
                                        name: act.name,
                                      };
                                    }),
                                  ],
                                  material: [
                                    ...level.supportMaterial.map((sup) => {
                                      return {
                                        link: sup,
                                      };
                                    }),
                                  ],
                                },
                              ],
                              button: {
                                name: "Guardar",
                              },
                              line: true,
                            };
                          }),
                        ],
                      },
                    },
                  ],
                };
              }),
            ],
          },
        },
      ],
    }
  );

  //----------------------------------------------------------LAPSO 3 ----------------------------------------------------------------------------------------
  ENVIRONMENTAL_PROJECT_CONFIG_TEST.blocks[0].settings.items[2].childBlocks[0].settings.items.push(
    {
      childBlocks: [
        {
          component: "textsbuttons",
          settings: {
            title: {
              aligning: "left", // 'center' for center aligning, 'left' otherwise
              text: EnviromentalData.lapse3.generalObjective,
            },
          },
        },
      ],
    },
    {
      childBlocks: [
        {
          component: "accordion",
          name: "lapse3Enviromental",
          settings: {
            items: [
              ...EnviromentalData.lapse3.topics.map((topic, i) => {
                return {
                  title: topic.name,
                  childBlocks: [
                    {
                      component: "checkList",
                      name: "ArrayInfo3",
                      settings: {
                        extraData: {
                          environmentalData: EnviromentalData,
                          lapse: "lapse3",
                          topicIndex: i,
                        },
                        fetcherMethod: "post",
                        fetcherUrls: {
                          post: `/pecaprojects/environmentalproject/${pecaId}`,
                        },
                        infoContainer: [
                          {
                            principal: [
                              {
                                tema: topic.name,
                                objetivo: [
                                  ...topic.objectives.map((obj) => {
                                    return {
                                      conObjetivo: obj,
                                    };
                                  }),
                                ],
                                estrategia: [
                                  ...topic.strategies.map((est) => {
                                    return {
                                      contEstrategia: est,
                                    };
                                  }),
                                ],
                                contenido: [
                                  ...topic.contents.map((cont) => {
                                    return {
                                      contContenido: cont,
                                    };
                                  }),
                                ],
                              },
                            ],
                          },
                          ...topic.levels.map((level, i) => {
                            /* Inicio de configuracion de la duracion */

                            const hours = level.duration.substr(0, 2);
                            const minutes = level.duration.substr(2, 4);
                            let context3;
                            if (hours == "01" && minutes == "01") {
                              context3 = `${hours} hora ${minutes} minuto`;
                            } else if (hours == "01" && minutes != "01") {
                              context3 = `${hours} hora ${minutes} minutos`;
                            } else if (hours != "01" && minutes == "01") {
                              context3 = `${hours} horas ${minutes} minuto`;
                            } else {
                              context3 = `${hours} horas ${minutes} minutos`;
                            }

                            /* Fin de configuracion de la duracion */

                            /* Inicio de configuracion del grado */
                            let completeGrade3;
                            if (level.target[0].label == "0") {
                              completeGrade3 = "Preescolar";
                            } else if (level.target[0].label == "1") {
                              completeGrade3 = "Primer grado";
                            } else if (level.target[0].label == "2") {
                              completeGrade3 = "Segundo grado";
                            } else if (level.target[0].label == "3") {
                              completeGrade3 = "Tercer grado";
                            } else if (level.target[0].label == "4") {
                              completeGrade3 = "Cuarto grado";
                            } else if (level.target[0].label == "5") {
                              completeGrade3 = "Quinto grado";
                            } else {
                              completeGrade3 = "Sexto grado";
                            }
                            /* Fin de configuracion del grado */
                            return {
                              datosNivel: [
                                {
                                  index: i,
                                  nivel: completeGrade3,
                                  week: [
                                    ...level.week.map((w) => {
                                      return {
                                        contWeek: moment(new Date(w)).format("DD/MM/YYYY"),
                                      };
                                    }),
                                  ],
                                  time: context3,
                                  tecnica: [
                                    ...level.techniques.map((tec) => {
                                      return {
                                        contTecnica: tec,
                                      };
                                    }),
                                  ],
                                  recurso: [
                                    ...level.resources.map((res) => {
                                      return {
                                        contRecurso: res,
                                      };
                                    }),
                                  ],
                                  evaluacion: [
                                    ...level.evaluations.map((eva) => {
                                      return {
                                        contEvaluacion: eva,
                                      };
                                    }),
                                  ],
                                  title: "Actividades",
                                  checkList: [
                                    ...level.activities.map((act) => {
                                      return {
                                        name: act.name,
                                      };
                                    }),
                                  ],
                                  material: [
                                    ...level.supportMaterial.map((sup) => {
                                      return {
                                        link: sup,
                                      };
                                    }),
                                  ],
                                },
                              ],
                              button: {
                                name: "Guardar",
                              },
                              line: true,
                            };
                          }),
                        ],
                      },
                    },
                  ],
                };
              }),
            ],
          },
        },
      ],
    }
  );

  return ENVIRONMENTAL_PROJECT_CONFIG_TEST;
}
