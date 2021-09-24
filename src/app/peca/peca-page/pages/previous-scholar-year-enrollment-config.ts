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
              { id: "1", name: "1er Grado" },
              { id: "2", name: "2do Grado" },
              { id: "3", name: "3er Grado" },
              { id: "4", name: "4to Grado" },
              { id: "5", name: "5to Grado" },
              { id: "6", name: "6to Grado" },
            ],
            placeholder: "Grados",
            loadingLabel: "Cargando grados...",
            loading: false,
          },
          section: {
            id: "sections",
            label: "Seleccione la sección",
            items: [
              { grade: "1", id: "614b439d600b22f73bf1f271", name: "A" },
              { grade: "2", id: "614b439d600b22f73bf1f272", name: "B" },
              { grade: "3", id: "614b439d600b22f73bf1f273", name: "C" },
              { grade: "4", id: "614b439d600b22f73bf1f274", name: "D" },
              { grade: "5", id: "614b439d600b22f73bf1f275", name: "U" },
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
              { grade: "1", id: "614b439d600b22f73bf1f271", name: "A" },
              { grade: "2", id: "614b439d600b22f73bf1f272", name: "B" },
              { grade: "3", id: "614b439d600b22f73bf1f273", name: "C" },
              { grade: "4", id: "614b439d600b22f73bf1f274", name: "D" },
              { grade: "5", id: "614b439d600b22f73bf1f275", name: "U" },
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
