export function previousScholarYearStudentsConfigMapper(
  previousYearStudents,
  permissions
) {
  // const { activities_slider_edit, activities_slider_delete } = permissions;

  const prevStudentsFormTable = {
    component: "form-table",
    name: "prev-students-form-table",
    settings: {
      onSubmit: (values: any) => {
        console.log("Hello values");
      },
      fields: {
        fields1: {
          grade: {
            id: "grades",
            label: "Seleccione el grado",
            items: [
              { id: "0", name: "Preescolar" },
              { id: "1", name: "1ero" },
              { id: "2", name: "2do" },
              { id: "3", name: "3ero" },
              { id: "4", name: "4to" },
              { id: "5", name: "5to" },
              { id: "6", name: "6to" },
            ],
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          section: {
            id: "sections",
            label: "Seleccione la sección",
            items: [
              { id: "0", name: "A" },
              { id: "1", name: "B" },
              { id: "2", name: "C" },
              { id: "3", name: "D" },
              { id: "4", name: "U" },
            ],
            placeholder: "Sección",
            loadingLabel: "Cargando secciones...",
            loading: false,
          },
        },
        fields2: {
          grade2P: {
            id: "grades2P",
            label: "Seleccione el grado a promover",
            items: [],
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          section2P: {
            id: "sections2P",
            label: "Seleccione la sección a promover",
            items: [
              { id: "0", name: "A" },
              { id: "1", name: "B" },
              { id: "2", name: "C" },
              { id: "3", name: "D" },
              { id: "4", name: "U" },
            ],
            placeholder: "Sección",
            loadingLabel: "Cargando secciones...",
            loading: false,
          },
        },
        table: [
          {
            id: "1",
            name: "Astrid",
            lastName: "Herrera",
            idCard: "1234567890",
            gender: "Femenino",
            birthDate: "22-08-2011",
          },
          {
            id: "2",
            name: "Asdrubal",
            lastName: "Querales",
            idCard: "1234567891",
            gender: "Masculino",
            birthDate: "12-05-2011",
          },
        ],
        button: {
          text: "Guardar cambios",
          ingAction: "Guardando...",
          hidden: /* yearBookData.isInApproval */ false,
        },
      },
    },
  };

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
