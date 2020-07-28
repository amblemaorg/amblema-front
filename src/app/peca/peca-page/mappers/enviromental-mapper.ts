export function EnviromentalMapper(EnviromentalData) {
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
          settings: {
            items: [
              ...EnviromentalData.lapse1.topics.map((topic) => {
                return {
                  title: topic.name,
                  childBlocks: [
                    {
                      component: "checkList",
                      settings: {
                        infoContainer: [
                          {
                            principal: [
                              {
                                tema: topic.name,
                                objetivo: [
                                    ...topic.objectives.map((obj) => {
                                        return {
                                            conObjetivo:obj
                                        };
                                    }),
                                ],
                                estrategia: [
                                    ...topic.strategies.map((est) => {
                                        return {
                                            contEstrategia:est
                                        };
                                    }),
                                ],
                                contenido: [
                                    ...topic.contents.map((cont) => {
                                        return {
                                            contContenido:cont
                                        };
                                    }),
                                ],
                              },
                            ],
                            datosNivel: [
                              ...topic.levels.map((level) => {
                                return {
                                    nivel: level.target[0].label,
                                    week: [
                                            ...level.week.map((w) => {
                                                return {
                                                    contWeek:w
                                                };
                                            }),       
                                      ],
                                      time: level.duration,
                                      tecnica: [
                                        ...level.techniques.map((tec) => {
                                            return {
                                                contTecnica: tec
                                            };
                                        }),     
                                      ],
                                      recurso: [
                                        ...level.resources.map((res) => {
                                            return {
                                                contRecurso: res
                                            };
                                        }),  
                                      ],
                                      evaluacion: [
                                        ...level.evaluations.map((eva) => {
                                            return {
                                                contEvaluacion: eva
                                            };
                                        }),  
                                      ],
                                      title: "Actividades",
                                checkList: [
                                    ...level.activities.map((act) => {
                                        return {
                                            name: act
                                        };
                                    }),  
                                ],
                                material: [
                                    ...level.resources.map((res) => {
                                        return {
                                            link: res
                                        };
                                    }),  
                                ],

                                };                  
                            }),
                            ],
                            button: {
                              name: "Guardar",
                            },
                            line: true,
                          },
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
    }
  );

  return ENVIRONMENTAL_PROJECT_CONFIG_TEST;
}

