const getSections = (sections: any[], grades: any[], pos: number) => {
  return sections.map((section) => {
    const { id, name, grade } = section;

    grades[pos][grade] =
      grade === "0"
        ? { id: grade, name: "Preescolar" }
        : grade === "1" || grade === "3"
        ? { id: grade, name: `${grade}er Grado` }
        : grade === "2"
        ? { id: grade, name: `${grade}do Grado` }
        : { id: grade, name: `${grade}to Grado` };

    return {
      id,
      name,
      grade,
    };
  });
};

export function previousScholarYearStudentsConfigMapper(
  data,
  permissions,
  getFetcher,
  ...extras
) {
  // const { activities_slider_edit, activities_slider_delete } = permissions;

  const school_code = extras && extras.length ? extras[0] : "";
  const peca_id = extras && extras.length ? extras[1] : "";

  const grades = [{}, {}];

  const sections_previous =
    data &&
    data.status === 200 &&
    data.section_previus &&
    data.section_previus.length
      ? getSections(data.section_previus, grades, 0)
      : [];

  const sections_current =
    data &&
    data.status === 200 &&
    data.section_current &&
    data.section_current.length
      ? getSections(data.section_current, grades, 1)
      : [];

  const allGrdsCurr = Object.keys(grades[1]).map((grade) => {
    return grades[1][grade];
  });

  const prevStudentsFormTable = {
    component: "form-table",
    name: "prevStudentsFormTable",
    settings: {
      resStatus: data.status || 400,
      resMsg: data.msg || "",
      onSubmit: (values: any) => {
        // console.log("Hello values");
      },
      getFetcher: (fetcher: string, ...genProps) =>
        getFetcher({
          fetcher,
          genProps,
          school_code,
          peca_id,
        }),
      fields: {
        fields1: {
          grade: {
            id: "grades",
            label: "Seleccione el grado",
            items: Object.keys(grades[0]).map((grade) => {
              return grades[0][grade];
            }),
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          section: {
            id: "sections",
            label: "Seleccione la sección",
            items: [],
            placeholder: "Sección",
            loadingLabel: "Cargando secciones...",
            loading: false,
          },
        },
        fields2: {
          grade2P: {
            id: "grades2P",
            label: "Seleccione el grado a promover",
            items: [...allGrdsCurr],
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          section2P: {
            id: "sections2P",
            label: "Seleccione la sección a promover",
            items: [],
            placeholder: "Sección",
            loadingLabel: "Cargando secciones...",
            loading: false,
          },
        },
        table: [],
        allSectionsPrevious: sections_previous,
        allSectionsCurrent: sections_current,
        allGradesCurrent: [...allGrdsCurr],
        sectionKey: "section",
        pecaId: peca_id,
        button: {
          text: "Guardar cambios",
          ingAction: "Guardando...",
          hidden: /* yearBookData.isInApproval */ false,
        },
      },
    },
  };

  // console.log("prevStudentsFormTable", prevStudentsFormTable);

  return {
    header: {
      title: "Matrícula de año escolar anterior",
    },
    blocks: [
      {
        component: "profiles",
        settings: {
          items: [
            {
              childBlocks: [prevStudentsFormTable],
            },
          ],
        },
      },
    ],
  };
}
