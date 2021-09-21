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
        table: [
          {
            name: "Astrid",
            lastName: "Herrera",
            idCard: "1234567890",
            gender: "Femenino",
            birthDate: "22-08-2011",
          },
          {
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
